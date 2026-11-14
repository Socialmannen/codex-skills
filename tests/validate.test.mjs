import assert from 'node:assert/strict';
import { mkdirSync, readFileSync, symlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { ROOT } from '../scripts/lib.mjs';
import { parseFrontmatter, validateRepository } from '../scripts/validate-skills.mjs';
import { fixture } from './helpers.mjs';

function append(path, value) { writeFileSync(path, readFileSync(path, 'utf8') + value); }

test('the shipped collection and a minimal valid package pass validation', t => {
  const f = fixture(t);
  assert.deepEqual(validateRepository(f.root).errors, []);
  const result = validateRepository(ROOT);
  assert.equal(result.count, 31);
  assert.deepEqual(result.errors, []);
});

test('frontmatter supports escaped text and CRLF without accepting duplicate keys', () => {
  const text = ['---', 'name: alpha', 'description: ' + JSON.stringify('Use when needed: say "test". Används vid tester.'), '---', ''].join('\r\n');
  assert.equal(parseFrontmatter(text).name, 'alpha');
  assert.throws(() => parseFrontmatter(text.replace('name: alpha', 'name: alpha\r\nname: beta')), /exactly/);
  assert.throws(() => parseFrontmatter('---\nname: alpha\ndescription: unquoted: invalid\n---\n'));
});

test('invalid catalog paths and duplicate names fail before filesystem traversal', t => {
  const f = fixture(t);
  writeFileSync(join(f.root, 'catalog.json'), JSON.stringify({ version: 1, skills: [{ ...f.items[0], name: '../escape' }] }));
  assert.match(validateRepository(f.root).errors.join('\n'), /Invalid or duplicate/);
  writeFileSync(join(f.root, 'catalog.json'), JSON.stringify({ version: 1, skills: [f.items[0], f.items[0]] }));
  assert.match(validateRepository(f.root).errors.join('\n'), /Invalid or duplicate/);
});

test('broken links and unlinked reference files are detected', t => {
  const f = fixture(t);
  append(join(f.source('alpha'), 'SKILL.md'), '\n[Missing](references/missing.md)\n');
  writeFileSync(join(f.source('alpha'), 'references', 'orphan.md'), 'Unlinked details');
  const errors = validateRepository(f.root).errors.join('\n');
  assert.match(errors, /Broken local link/);
  assert.match(errors, /direct contextual link/);
});

test('skill links cannot depend on files outside their installable directory', t => {
  const f = fixture(t);
  append(join(f.source('alpha'), 'SKILL.md'), '\n[Outside](../../../README.md)\n');
  assert.match(validateRepository(f.root).errors.join('\n'), /escapes its installable directory/);
});

test('legacy platform assumptions fail while supported Git workflows remain valid', t => {
  const f = fixture(t);
  const path = join(f.source('alpha'), 'SKILL.md');
  append(path, '\nUse git worktree and git commit when authorized.\n');
  assert.deepEqual(validateRepository(f.root).errors, []);
  append(path, '\nRead mem://index.md and /tmp/observability/build-errors.log.\n');
  const errors = validateRepository(f.root).errors.join('\n');
  assert.match(errors, /memory URI/);
  assert.match(errors, /log path/);
});

test('an explicit limitation on regression guarantees remains valid', t => {
  const f = fixture(t);
  append(join(f.source('alpha'), 'SKILL.md'), '\nPassing tests cannot guarantee a bug never recurs.\n');
  assert.deepEqual(validateRepository(f.root).errors, []);
});

test('unregistered skills and index drift are detected', t => {
  const f = fixture(t);
  const extra = join(f.root, 'skills', 'engineering', 'unregistered');
  mkdirSync(extra);
  writeFileSync(join(extra, 'SKILL.md'), 'Not registered');
  writeFileSync(join(f.root, 'README.md'), '# Empty index\n');
  const errors = validateRepository(f.root).errors.join('\n');
  assert.match(errors, /missing from catalog/);
  assert.match(errors, /Missing skill index link/);
});

test('symlinked package contents are rejected', t => {
  const f = fixture(t);
  symlinkSync(join(f.source('beta'), 'references', 'details.md'), join(f.source('alpha'), 'references', 'linked.md'));
  assert.match(validateRepository(f.root).errors.join('\n'), /Symbolic links/);
});

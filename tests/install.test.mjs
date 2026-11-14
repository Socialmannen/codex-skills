import assert from 'node:assert/strict';
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, symlinkSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import test from 'node:test';
import { installSkills, parseArgs } from '../scripts/install-skills.mjs';
import { MARKER, treeDigest } from '../scripts/lib.mjs';
import { fixture } from './helpers.mjs';

test('starter installation copies the selected workflow, references and source marker', t => {
  const f = fixture(t);
  const result = installSkills({ target: f.target }, f);
  assert.equal(result.plan.length, 1);
  assert.equal(existsSync(f.installed('beta')), false);
  assert.equal(readFileSync(join(f.installed('alpha'), 'references', 'details.md'), 'utf8'),
    readFileSync(join(f.source('alpha'), 'references', 'details.md'), 'utf8'));
  const marker = JSON.parse(readFileSync(join(f.installed('alpha'), MARKER), 'utf8'));
  assert.equal(marker.source, 'Socialmannen/codex-skills');
  assert.equal(marker.digest, treeDigest(f.installed('alpha')));
});

test('explicit selection and user scope install only the requested skill', t => {
  const f = fixture(t);
  installSkills({ user: true, names: ['beta', 'beta'] }, f);
  assert.equal(existsSync(join(f.userHome, '.agents', 'skills', 'beta', 'SKILL.md')), true);
  assert.equal(existsSync(join(f.userHome, '.agents', 'skills', 'alpha')), false);
  assert.equal(existsSync(join(f.target, '.agents')), false);
});

test('dry run and list create no destination files', t => {
  const f = fixture(t);
  assert.equal(installSkills({ list: true }, f).list.length, 2);
  assert.equal(installSkills({ target: f.target, preset: 'all', dryRun: true }, f).plan.length, 2);
  assert.deepEqual(readdirSync(f.target), []);
});

test('unknown names and traversal attempts fail before writing', t => {
  const f = fixture(t);
  for (const name of ['missing', '../alpha', '/absolute']) {
    assert.throws(() => installSkills({ target: f.target, names: [name] }, f), /Unknown skill/);
  }
  assert.deepEqual(readdirSync(f.target), []);
});

test('preflight collision leaves the complete selection and existing content untouched', t => {
  const f = fixture(t);
  mkdirSync(f.installed('beta'), { recursive: true });
  writeFileSync(join(f.installed('beta'), 'mine.txt'), 'my existing skill');
  assert.throws(() => installSkills({ target: f.target, preset: 'all' }, f), /already exists/);
  assert.equal(existsSync(f.installed('alpha')), false);
  assert.equal(readFileSync(join(f.installed('beta'), 'mine.txt'), 'utf8'), 'my existing skill');
});

test('replace updates an unmodified managed installation', t => {
  const f = fixture(t);
  installSkills({ target: f.target }, f);
  writeFileSync(join(f.source('alpha'), 'references', 'details.md'), '# Updated details\n');
  installSkills({ target: f.target, replace: true }, f);
  assert.equal(readFileSync(join(f.installed('alpha'), 'references', 'details.md'), 'utf8'), '# Updated details\n');
});

test('replace refuses edited and unmanaged skills without altering their files', t => {
  const f = fixture(t);
  installSkills({ target: f.target }, f);
  writeFileSync(join(f.installed('alpha'), 'references', 'details.md'), 'local edit');
  assert.throws(() => installSkills({ target: f.target, replace: true }, f), /local edits/);
  assert.equal(readFileSync(join(f.installed('alpha'), 'references', 'details.md'), 'utf8'), 'local edit');
  mkdirSync(f.installed('beta'));
  writeFileSync(join(f.installed('beta'), 'SKILL.md'), 'third-party skill');
  assert.throws(() => installSkills({ target: f.target, names: ['beta'], replace: true }, f), /unmanaged/);
  assert.equal(readFileSync(join(f.installed('beta'), 'SKILL.md'), 'utf8'), 'third-party skill');
});

test('target symlinks cannot redirect installation outside the selected project', t => {
  const f = fixture(t);
  symlinkSync(f.userHome, join(f.target, '.agents'), 'dir');
  assert.throws(() => installSkills({ target: f.target }, f), /real directory/);
  assert.deepEqual(readdirSync(f.userHome), []);
});

test('source symlinks are rejected before data can be copied', t => {
  const f = fixture(t);
  const outside = join(f.temp, 'private.txt');
  writeFileSync(outside, 'do not copy');
  symlinkSync(outside, join(f.source('alpha'), 'references', 'secret.md'));
  assert.throws(() => installSkills({ target: f.target }, f), /Symbolic links/);
  assert.deepEqual(readdirSync(f.target), []);
});

test('a filesystem failure restores earlier managed versions in the selection', t => {
  const f = fixture(t);
  installSkills({ target: f.target, preset: 'all' }, f);
  for (const name of ['alpha', 'beta']) writeFileSync(join(f.source(name), 'references', 'details.md'), 'new version');
  let failed = false;
  const move = (from, to) => {
    if (!failed && basename(from) === 'beta' && to === f.installed('beta')) {
      failed = true;
      throw new Error('simulated filesystem failure');
    }
    renameSync(from, to);
  };
  assert.throws(() => installSkills({ target: f.target, preset: 'all', replace: true }, { ...f, move }), /simulated/);
  for (const name of ['alpha', 'beta']) {
    assert.equal(readFileSync(join(f.installed(name), 'references', 'details.md'), 'utf8'), '# Details\n\nReal behavior matters.\n');
  }
  assert.deepEqual(readdirSync(join(f.target, '.agents', 'skills')).sort(), ['alpha', 'beta']);
});

test('CLI arguments reject ambiguous destinations and malformed selections', () => {
  assert.throws(() => parseArgs(['--target', '/project', '--user']), /either/);
  assert.throws(() => parseArgs(['--preset', 'unknown']), /Unknown preset/);
  assert.throws(() => parseArgs(['--target']), /Missing value/);
  assert.throws(() => parseArgs(['--preset', 'all', 'alpha']), /preset or explicit/);
  assert.throws(() => parseArgs(['--force']), /Unknown option/);
});

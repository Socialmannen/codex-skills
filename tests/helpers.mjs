import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export function fixture(t) {
  const temp = mkdtempSync(join(tmpdir(), 'codex-skills-test-'));
  t.after(() => rmSync(temp, { recursive: true, force: true }));
  const root = join(temp, 'source');
  const target = join(temp, 'project');
  const userHome = join(temp, 'user');
  for (const path of [target, userHome, join(root, 'docs')]) mkdirSync(path, { recursive: true });
  const items = ['alpha', 'beta'].map((name, index) => ({
    name, bucket: 'engineering', summary: 'A focused workflow for a meaningful test.', starter: index === 0,
  }));
  for (const item of items) {
    const dir = join(root, 'skills', item.bucket, item.name);
    mkdirSync(join(dir, 'references'), { recursive: true });
    writeFileSync(join(dir, 'SKILL.md'), [
      '---', 'name: ' + item.name,
      'description: ' + JSON.stringify('Use when verifying a workflow. Används vid tester.'),
      '---', '', '# Workflow', '',
      'Read [details](references/details.md) when checking the example.', '',
    ].join('\n'));
    writeFileSync(join(dir, 'references', 'details.md'), '# Details\n\nReal behavior matters.\n');
  }
  writeFileSync(join(root, 'catalog.json'), JSON.stringify({ version: 1, skills: items }));
  writeFileSync(join(root, 'README.md'), items.map(item =>
    '[' + item.name + '](skills/engineering/' + item.name + '/SKILL.md)').join('\n'));
  writeFileSync(join(root, 'skills', 'engineering', 'README.md'), items.map(item =>
    '[' + item.name + '](' + item.name + '/SKILL.md)').join('\n'));
  return { root, target, userHome, temp, items, source: name => join(root, 'skills', 'engineering', name),
    installed: name => join(target, '.agents', 'skills', name) };
}

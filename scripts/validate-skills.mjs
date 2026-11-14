#!/usr/bin/env node
import { existsSync, lstatSync, readFileSync, readdirSync } from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { inside, readCatalog, ROOT, walkFiles } from './lib.mjs';

export function parseFrontmatter(text) {
  const match = text.replaceAll('\r\n', '\n').match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!match) throw new Error('Missing or unclosed frontmatter');
  const fields = {};
  for (const line of match[1].split('\n')) {
    const field = line.match(/^([a-z][a-z-]*): (.+)$/);
    if (!field || !['name', 'description'].includes(field[1]) || Object.hasOwn(fields, field[1])) {
      throw new Error('Use exactly name and description once in frontmatter');
    }
    fields[field[1]] = field[1] === 'description' ? JSON.parse(field[2]) : field[2];
  }
  if (typeof fields.description !== 'string' || !fields.description.trim() ||
      fields.description.length > 1024 || typeof fields.name !== 'string') {
    throw new Error('Invalid name or description (description maximum 1024 characters)');
  }
  if (!/Används (?:vid|när|för)/.test(fields.description)) throw new Error('Missing concise Swedish usage phrase');
  return fields;
}

const LEGACY = [
  [/Lovable/i, 'platform-specific source instruction'],
  [/mem:\/\//, 'unsupported memory URI'],
  [/\.lovable\//, 'source platform plan path'],
  [/seo--(?:list_findings|trigger_scan)/, 'source platform SEO tool'],
  [/\/tmp\/observability\//, 'source platform log path'],
  [/localhost:8080/, 'hardcoded source platform port'],
  [/(?:so the bug can never recur|guarantees? the bug cannot recur)/i, 'absolute regression guarantee'],
];

export function validateRepository(root = ROOT) {
  const errors = [];
  const fail = (path, message) => errors.push(relative(root, path) + ': ' + message);
  let catalog;
  try { catalog = readCatalog(root); }
  catch (error) { return { errors: [error.message], count: 0 }; }
  const registered = new Set(catalog.map(item => resolve(root, 'skills', item.bucket, item.name, 'SKILL.md')));
  let skillFiles;
  try { skillFiles = walkFiles(join(root, 'skills')); }
  catch (error) { return { errors: [error.message], count: catalog.length }; }
  for (const path of skillFiles.filter(path => basename(path) === 'SKILL.md')) {
    if (!registered.has(resolve(path))) fail(path, 'Skill is missing from catalog.json');
  }
  for (const item of catalog) {
    const dir = join(root, 'skills', item.bucket, item.name);
    const skill = join(dir, 'SKILL.md');
    const text = readFileSync(skill, 'utf8');
    try {
      const frontmatter = parseFrontmatter(text);
      if (frontmatter.name !== item.name) fail(skill, 'Frontmatter name differs from directory/catalog');
    } catch (error) { fail(skill, error.message); }
    if (text.split('\n').length > 300) fail(skill, 'Move detail into references; maximum 300 lines');
    for (const entry of readdirSync(dir)) {
      const path = join(dir, entry);
      if (entry === 'SKILL.md') continue;
      if (!['references', 'scripts', 'assets', 'agents'].includes(entry) || !lstatSync(path).isDirectory()) {
        fail(path, 'Extra files belong in references, scripts, assets, or agents');
      }
    }
    const refs = join(dir, 'references');
    if (existsSync(refs)) for (const reference of walkFiles(refs)) {
      const local = relative(dir, reference).replaceAll('\\', '/');
      if (!text.includes('](' + local + ')')) fail(skill, 'Reference needs a direct contextual link: ' + local);
    }
    const ui = join(dir, 'agents', 'openai.yaml');
    if (existsSync(ui)) {
      const data = readFileSync(ui, 'utf8');
      for (const key of ['display_name', 'short_description', 'default_prompt']) {
        const line = data.split('\n').find(line => line.startsWith('  ' + key + ': '));
        try {
          const value = JSON.parse(line?.slice(('  ' + key + ': ').length) ?? '');
          if (typeof value !== 'string' || !value.trim()) throw new Error('not a string');
          if (key === 'short_description' && (value.length < 25 || value.length > 64)) throw new Error('must be 25 to 64 characters');
        } catch (error) { fail(ui, key + ': ' + error.message); }
      }
    }
    for (const file of walkFiles(dir).filter(file => file.endsWith('.md'))) {
      const contents = readFileSync(file, 'utf8');
      for (const [pattern, why] of LEGACY) if (pattern.test(contents)) fail(file, why);
      for (const link of contents.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
        const target = link[1];
        if (/^(https?:|mailto:|#)/.test(target)) continue;
        const path = resolve(dirname(file), target.split('#')[0]);
        if (!inside(dir, path)) fail(file, 'Skill-relative link escapes its installable directory: ' + target);
        else if (!existsSync(path)) fail(file, 'Broken local link: ' + target);
      }
    }
    const rootReadme = join(root, 'README.md');
    const bucketReadme = join(root, 'skills', item.bucket, 'README.md');
    for (const [path, expected] of [[rootReadme, 'skills/' + item.bucket + '/' + item.name + '/SKILL.md'], [bucketReadme, item.name + '/SKILL.md']]) {
      if (!existsSync(path) || !readFileSync(path, 'utf8').includes('](' + expected + ')')) {
        fail(path, 'Missing skill index link: ' + expected);
      }
    }
  }
  const docs = join(root, 'docs');
  if (!existsSync(docs)) fail(docs, 'Missing documentation directory');
  const documents = existsSync(docs) ? walkFiles(docs).filter(path => path.endsWith('.md')) : [];
  for (const path of [join(root, 'README.md'), ...documents]) {
    if (!existsSync(path)) continue;
    const text = readFileSync(path, 'utf8');
    for (const link of text.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
      if (/^(https?:|mailto:|#)/.test(link[1])) continue;
      const target = resolve(dirname(path), link[1].split('#')[0]);
      if (!inside(root, target) || !existsSync(target)) fail(path, 'Broken repository link: ' + link[1]);
    }
  }
  return { errors, count: catalog.length };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  try {
    const result = validateRepository();
    for (const error of result.errors) console.error('Error: ' + error);
    console.log(result.count + ' skills checked; ' + result.errors.length + ' error(s).');
    process.exitCode = result.errors.length ? 1 : 0;
  } catch (error) {
    console.error('Validation failed: ' + error.message);
    process.exitCode = 1;
  }
}

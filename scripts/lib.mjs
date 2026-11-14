import { createHash } from 'node:crypto';
import { existsSync, lstatSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const SOURCE = 'Socialmannen/codex-skills';
export const MARKER = 'assets/.codex-skills-source.json';
export const BUCKETS = ['engineering', 'growth', 'productivity', 'security', 'seo', 'delivery'];
export const NAME_RE = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;

export function inside(parent, child) {
  const path = relative(resolve(parent), resolve(child));
  return path === '' || (!isAbsolute(path) && path !== '..' && !path.startsWith('..' + sep));
}

export function readCatalog(root = ROOT) {
  const data = JSON.parse(readFileSync(join(root, 'catalog.json'), 'utf8'));
  if (data.version !== 1 || !Array.isArray(data.skills) || !data.skills.length) {
    throw new Error('catalog.json must contain version 1 and a nonempty skills array');
  }
  const seen = new Set();
  for (const item of data.skills) {
    if (!NAME_RE.test(item.name ?? '') || item.name.length > 64 || seen.has(item.name)) {
      throw new Error('Invalid or duplicate skill name: ' + String(item.name));
    }
    if (!BUCKETS.includes(item.bucket) || typeof item.starter !== 'boolean' ||
        typeof item.summary !== 'string' || !item.summary.trim()) {
      throw new Error('Invalid catalog fields for ' + item.name);
    }
    seen.add(item.name);
    for (const path of [join(root, 'skills'), join(root, 'skills', item.bucket), join(root, 'skills', item.bucket, item.name)]) {
      if (lstatSync(path).isSymbolicLink() || !lstatSync(path).isDirectory()) {
        throw new Error('Expected a real source directory: ' + path);
      }
    }
    const dir = join(root, 'skills', item.bucket, item.name);
    if (!existsSync(join(dir, 'SKILL.md'))) throw new Error('Missing SKILL.md for ' + item.name);
  }
  return data.skills;
}

export function walkFiles(dir) {
  if (lstatSync(dir).isSymbolicLink() || !lstatSync(dir).isDirectory()) {
    throw new Error('Expected a real directory: ' + dir);
  }
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const path = join(dir, entry.name);
    if (entry.isSymbolicLink()) throw new Error('Symbolic links are not supported: ' + path);
    if (entry.isDirectory()) files.push(...walkFiles(path));
    else if (entry.isFile()) files.push(path);
    else throw new Error('Unsupported file type: ' + path);
  }
  return files;
}

export function treeDigest(dir) {
  if (lstatSync(dir).isSymbolicLink()) throw new Error('Refusing a symbolic-link skill: ' + dir);
  const hash = createHash('sha256');
  for (const path of walkFiles(dir)) {
    const name = relative(dir, path).split(sep).join('/');
    if (name === MARKER) continue;
    const bytes = readFileSync(path);
    hash.update(name + '\0' + bytes.length + '\0');
    hash.update(bytes);
  }
  return hash.digest('hex');
}

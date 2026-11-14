#!/usr/bin/env node
import { cpSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { inside, MARKER, readCatalog, ROOT, SOURCE, treeDigest } from './lib.mjs';

const HELP = [
  'Usage: node scripts/install-skills.mjs [options] [skill names]',
  '  --list                 List available skills without writing files',
  '  --preset starter|all   Select a preset (default: starter)',
  '  --target PROJECT       Install into PROJECT/.agents/skills',
  '  --user                 Install into ~/.agents/skills',
  '  --dry-run              Show the validated plan without writing',
  '  --replace              Update only unmodified skills installed by this tool',
  '  --help                 Show this help',
].join('\n');

export function parseArgs(args) {
  const options = { names: [], preset: undefined, dryRun: false, replace: false, list: false };
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help') options.help = true;
    else if (arg === '--list') options.list = true;
    else if (arg === '--user') options.user = true;
    else if (arg === '--dry-run') options.dryRun = true;
    else if (arg === '--replace') options.replace = true;
    else if (arg === '--preset' || arg === '--target') {
      const value = args[++i];
      if (!value || value.startsWith('--')) throw new Error('Missing value for ' + arg);
      const key = arg.slice(2);
      if (options[key] !== undefined) throw new Error('Duplicate option: ' + arg);
      options[key] = value;
    } else if (arg.startsWith('-')) throw new Error('Unknown option: ' + arg);
    else options.names.push(arg);
  }
  if (options.user && options.target) throw new Error('Choose either --user or --target');
  if (options.preset && !['starter', 'all'].includes(options.preset)) throw new Error('Unknown preset: ' + options.preset);
  if (options.preset && options.names.length) throw new Error('Choose a preset or explicit skill names');
  return options;
}

function entryExists(path) {
  try { lstatSync(path); return true; } catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}

function assertDirectoryOrMissing(path) {
  if (!entryExists(path)) return;
  const stat = lstatSync(path);
  if (stat.isSymbolicLink() || !stat.isDirectory()) throw new Error('Expected a real directory: ' + path);
}

export function installSkills(options, { root = ROOT, userHome = homedir(), move = renameSync } = {}) {
  const catalog = readCatalog(root);
  if (options.list) return { list: catalog };
  if (!options.user && !options.target) throw new Error('Choose --target PROJECT or --user explicitly');
  const byName = new Map(catalog.map(item => [item.name, item]));
  const requested = options.names ?? [];
  const selected = requested.length
    ? [...new Set(requested)].map(name => {
      if (!byName.has(name)) throw new Error('Unknown skill: ' + name);
      return byName.get(name);
    })
    : catalog.filter(item => options.preset === 'all' || item.starter);
  if (!selected.length) throw new Error('No skills selected');

  const target = resolve(options.user ? userHome : options.target);
  if (!existsSync(target) || !lstatSync(realpathSync(target)).isDirectory()) {
    throw new Error('Target project or user home must already exist: ' + target);
  }
  const targetRoot = realpathSync(target);
  const agentsDir = join(targetRoot, '.agents');
  const destination = join(agentsDir, 'skills');
  if (inside(join(root, 'skills'), destination)) throw new Error('Cannot install inside the source skills directory');
  assertDirectoryOrMissing(agentsDir);
  assertDirectoryOrMissing(destination);

  const plan = selected.map(item => {
    const source = join(root, 'skills', item.bucket, item.name);
    const output = join(destination, item.name);
    const digest = treeDigest(source);
    const replacing = entryExists(output);
    if (replacing) {
      assertDirectoryOrMissing(output);
      if (!options.replace) throw new Error('Skill already exists; nothing changed: ' + output);
      const markerPath = join(output, MARKER);
      assertDirectoryOrMissing(join(output, 'assets'));
      if (!entryExists(markerPath) || lstatSync(markerPath).isSymbolicLink()) {
        throw new Error('Refusing to replace an unmanaged skill: ' + output);
      }
      let marker;
      try { marker = JSON.parse(readFileSync(markerPath, 'utf8')); }
      catch { throw new Error('Invalid installation marker: ' + markerPath); }
      if (marker.source !== SOURCE || marker.name !== item.name) {
        throw new Error('Refusing to replace an unmanaged skill: ' + output);
      }
      if (marker.digest !== treeDigest(output)) {
        throw new Error('Installed skill has local edits; preserve or move it before updating: ' + output);
      }
    }
    return { ...item, source, output, digest, replacing };
  });
  if (options.dryRun) return { destination, plan, dryRun: true };

  mkdirSync(destination, { recursive: true });
  const staging = mkdtempSync(join(destination, '.codex-skills-stage-'));
  const moved = [];
  let cleanup = true;
  try {
    for (const item of plan) {
      const staged = join(staging, item.name);
      cpSync(item.source, staged, { recursive: true, errorOnExist: true, force: false });
      mkdirSync(join(staged, 'assets'), { recursive: true });
      writeFileSync(join(staged, MARKER), JSON.stringify({
        source: SOURCE, name: item.name, digest: item.digest,
      }, null, 2) + '\n');
    }
    for (const item of plan) {
      const state = { item, backedUp: false, installed: false, backup: join(staging, item.name + '.backup') };
      moved.push(state);
      if (item.replacing) {
        const marker = JSON.parse(readFileSync(join(item.output, MARKER), 'utf8'));
        if (marker.digest !== treeDigest(item.output)) {
          throw new Error('Installed skill changed during preparation: ' + item.output);
        }
        move(item.output, state.backup);
        state.backedUp = true;
      }
      move(join(staging, item.name), item.output);
      state.installed = true;
    }
  } catch (error) {
    try {
      for (const state of moved.reverse()) {
        if (state.installed) rmSync(state.item.output, { recursive: true });
        if (state.backedUp) move(state.backup, state.item.output);
      }
    } catch (rollbackError) {
      cleanup = false;
      throw new Error('Install and rollback failed; preserved recovery files at ' + staging, {
        cause: new AggregateError([error, rollbackError]),
      });
    }
    throw error;
  } finally {
    if (cleanup) rmSync(staging, { recursive: true, force: true });
  }
  return { destination, plan, dryRun: false };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  try {
    const options = parseArgs(process.argv.slice(2));
    if (options.help) console.log(HELP);
    else {
      const result = installSkills(options);
      if (result.list) for (const item of result.list) {
        console.log((item.starter ? '* ' : '  ') + item.name + ' [' + item.bucket + '] ' + item.summary);
      }
      else {
        console.log(result.dryRun ? 'Dry run; no files written:' : 'Installed:');
        for (const item of result.plan) console.log('  ' + item.output + (item.replacing ? ' (update)' : ''));
        console.log(result.plan.length + ' skill(s). Run Codex in the target project and check skill discovery.');
      }
    }
  } catch (error) {
    console.error('Install failed: ' + error.message);
    process.exitCode = 1;
  }
}

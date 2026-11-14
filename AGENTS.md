# Working on Codex Skills for Web

This repository contains reusable Codex workflows for building websites and web applications. Instructions here govern maintaining the collection; each installed skill governs only the task that selected it.

## Structure and format

- Keep skills in `skills/<bucket>/<name>/SKILL.md`. Buckets are `engineering`, `growth`, `productivity`, `security`, `seo`, and `delivery`.
- Each skill has `name` and `description` frontmatter. Use a plain lowercase hyphenated name and a JSON-quoted description, which is valid YAML and can be validated without dependencies.
- Say when to use the skill and when a nearby skill is a better fit. Include concise Swedish trigger phrases; matching is contextual, not guaranteed by keywords.
- Keep bodies under 150 lines when practical, with a 300-line ceiling. Use references for detail and say when each reference is useful.
- Skill folders may include `references/`, `scripts/`, `assets/`, and optional Codex UI metadata in `agents/openai.yaml`.
- Keep `catalog.json`, root and bucket READMEs, and `CHANGELOG.md` consistent when skills change.

## Content

- Discover the actual framework, runtime, package manager, scripts, ports, hosting, and available tools. Do not assume one backend or a fixed development URL.
- User instructions and established project conventions determine scope. Continue routine reversible work already authorized; do not add redundant approval checkpoints.
- Keep review, remediation, deployment, and other external writes distinct according to what the user requested. State blocked checks truthfully.
- Git, branches, and worktrees are available when the environment supports them. Preserve existing edits, avoid unrelated commits, and do not reset, force push, merge, or deploy beyond the authorized scope.
- Browser emulation does not establish physical-device behavior. Report what was actually checked.
- Prefer measured design and accessibility decisions over universal taste rules. Keep useful navigation, visible focus, zoom, and accessible interaction feedback.
- Add meaningful regression tests for important behavior changes when feasible. Use visual checks for presentation-only changes. Passing tests reduce risk; they do not guarantee a bug cannot recur.
- Legal and search guidance must distinguish current authoritative requirements from optional heuristics. Do not claim cookieless tracking is automatically exempt, internal IDs are anonymous, or AI-training crawlers control search inclusion.
- Never print or commit credentials, session state, or private test data.

## Validation and provenance

- Use Node.js 22 or newer. Run `npm run check` before publishing changes; the collection has no third-party runtime dependencies.
- Test installer and validator behavior when changing them, including collision protection and invalid input. Do not add tests that merely repeat prose.
- Check the working diff and documentation after edits. Keep the upstream MIT notice, credits, and pinned source revision in `docs/PROVENANCE.md`.
- Do not automatically install maintained skills into the user's global environment as part of editing this repository.

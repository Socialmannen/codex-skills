---
name: skill-design
description: "Use when creating, editing, or reviewing a reusable skill. Används vid skapa en skill, granska skills och förbättra skill-beskrivningar."
---

# Skill Design

Package a repeatable workflow that adds useful expertise beyond normal agent behavior.

## Before writing

Inspect existing skills and project conventions. Use the available built-in skill creator when it fits; this workflow adds the collection's scope and Swedish-language conventions.

Check current [Codex skill documentation](https://developers.openai.com/codex/skills/) when changing format, discovery, or UI metadata.

## Design

- One skill should answer a recognizable task, with a clear boundary from neighboring skills.
- Use a concise name and description that explain when to use it. Include a few natural Swedish phrases; keyword matches do not guarantee activation.
- Put the workflow in SKILL.md and detail in references with an explicit reason to read each file.
- Include scripts for deterministic repetitive checks when they justify maintenance.
- Treat design heuristics as choices, not platform requirements.
- Respect the user's scope and existing authorization; avoid redundant confirmation steps.
- Discover tools, commands, ports, and framework before depending on them.
- State meaningful verification and blocked capabilities honestly.

Local Codex discovery uses .agents/skills at project scope and ~/.agents/skills at user scope in the documented setup. Optional agents/openai.yaml supplies display metadata; consult the current schema before adding dependency settings.

## Validate

In this repository, use the documented two-field frontmatter convention and run npm run check after changes. Update catalog.json, README indexes, and the changelog when needed.

Try representative positive and negative requests in an actual Codex session if activation behavior is in scope. File validation establishes packaging integrity, not that semantic activation will always happen.

Editing a skill collection does not itself authorize installing it globally, publishing it, or changing another project's instructions.

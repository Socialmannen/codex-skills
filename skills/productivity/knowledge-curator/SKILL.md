---
name: knowledge-curator
description: "Use when migrating standing instructions or fixing repeated instruction drift. Används vid flytt av knowledge, AGENTS.md, regler som glöms och städning av instruktioner."
---

# Knowledge Curator

Keep durable instructions short, specific, and in a location Codex actually reads.

## Collect

Read the available global and project instructions, relevant nested AGENTS.md files, README, product specs, and decision records. Inspect sources directly before asking the user to copy information.

Current discovery behavior is documented in [Codex AGENTS.md guidance](https://developers.openai.com/codex/guides/agents-md/). Do not assume every host loads instructions at identical message boundaries.

## Choose a home

| Information | Home |
| --- | --- |
| User-wide working preferences | User configuration or ~/.codex/AGENTS.md when that setup applies |
| Repository working rules and commands | Root AGENTS.md |
| Subsystem-specific rules | The relevant nested AGENTS.md |
| Product facts, prices, and requirements | Existing product documentation or feature spec |
| Domain language | GLOSSARY.md when needed |
| Architectural tradeoffs | A decision record |
| Task-specific repeatable method | A skill |
| One-time request | The current task |

Honor existing project formats. Link to detailed documents rather than copying them into every instruction file.

## Reconcile

Identify missing, conflicting, vague, duplicated, or stale rules. Replace related guidance rather than appending another contradiction.

Make rules verifiable and explain surprising tradeoffs. Enforce important invariants with tests or CI where possible.

When editing guidance is requested, update the authorized project files and report changes. Changes to global settings or unrelated projects need their own scope; provide ready-to-use text if those locations are unavailable.

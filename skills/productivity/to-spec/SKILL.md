---
name: to-spec
description: "Use when a feature needs a written specification or a multi-step implementation breakdown. Används vid kravspecifikation, PRD, delmål och planering av större funktioner."
---

# To Spec

Turn the current request and evidence into a maintainable specification.

## Understand

Read applicable instructions, the relevant code and data model, existing product documentation, and the conversation. Reuse the project's established planning format.

Resolve required missing decisions when necessary. Record nonblocking assumptions explicitly instead of adding an interview to every specification.

## Write the right amount

For a small feature, a short plan with acceptance criteria is enough. For larger work, save a spec in docs/specs or the established location containing:

- Problem, intended users, and desired outcome.
- User-visible behavior and concrete acceptance criteria.
- Relevant data relationships, ownership, lifecycle, and trusted server operations.
- UI states, accessibility, responsive behavior, and integration boundaries.
- Verification plan using existing tests and browser tools.
- Scope exclusions, assumptions, and unresolved blockers.

Avoid exhaustive user-story lists and implementation detail that does not help execution. Include precise code or schema excerpts when they communicate a decision better than prose.

## Break down delivery

Choose small complete slices through the layers each outcome needs. Include the necessary migration, authorization, UI, and verification in that slice. Put uncertain integrations early.

For broad refactors, use expand, migrate, contract when compatibility requires it. Identify dependencies clearly.

Use the existing roadmap or issue tracker if requested; otherwise keep the plan with the spec. Create external issues only when that write is part of the user's request.

## Handoff

Show the plan and open decisions clearly. Continue to implementation when already authorized. A planning-only request ends with the plan; do not impose extra signoffs for routine implementation choices.

---
name: codebase-design
description: "Use when restructuring modules, reducing duplicated data access, or reviewing architecture. Används vid refaktorering, rörig kod och frågor om kodstruktur."
---

# Codebase Design

Put related behavior behind a small interface so a change stays local and callers do not need to know the implementation.

## Start from this project

Read applicable AGENTS.md files, the framework and runtime, existing feature modules, data access patterns, tests, and GLOSSARY.md if present. Extend the existing design before inventing a new architecture.

A module can be a function, hook, component, feature folder, or server operation. Its interface includes types, error modes, authorization, and performance. A seam is a place where behavior can be substituted for verification.

## Workflow

1. Identify one concrete pain: repeated rules, scattered queries, a page mixing unrelated responsibilities, or an integration leaking into many callers.
2. Trace its callers and dependencies. Read [references/deepening.md](references/deepening.md) before crossing data or server interfaces.
3. Prefer a pure domain function for complex rules, a feature data module for shared queries, and a server adapter for secrets or third-party calls.
4. Compare alternatives only when the interface is uncertain; use [references/design-it-twice.md](references/design-it-twice.md).
5. Make the smallest coherent refactor. Add an abstraction only when it hides real complexity or variation.
6. Run relevant existing tests and the affected user flow. Check the build using the project's scripts.

For a broader architecture review, read [references/architecture-review.md](references/architecture-review.md). For a new UI dependency, read [references/recommended-libraries.md](references/recommended-libraries.md) and verify its current maintenance and compatibility.

## Guardrails

- Preserve authorization, transactions, caching, and observable behavior during a refactor.
- Avoid a generic service layer or universal component when a local function suffices.
- Use the project's domain language rather than enforcing a new vocabulary.
- Put durable working rules in AGENTS.md; record longer tradeoffs in an architecture decision document.
- Report the complexity removed, checks performed, and any remaining migration work.

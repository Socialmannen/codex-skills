---
name: tdd
description: "Use when test-first development is requested or important behavior needs regression coverage. Används vid testdriven utveckling, tester för affärslogik och regressionstester."
---

# Test-Driven Development

Use a red, green, refactor loop to protect observable behavior.

## Scope and setup

Read applicable instructions, existing tests, package scripts, and GLOSSARY.md if available. Reuse the existing runner and package manager; do not install Vitest into a project already using another stack.

Choose the smallest meaningful interface for the requirement. Do not ask the user to approve routine test placement when the work is already authorized. Discuss a new test framework only when its cost or scope needs a decision.

For a CSS-only or trivial reversible edit, direct visual verification may be more useful than a new test file.

## Loop

1. Write one behavior assertion from the requirement or an independently worked example.
2. Run it and confirm it fails for the intended reason.
3. Make the smallest implementation change that satisfies the behavior.
4. Rerun the test.
5. Refactor while keeping the test green; repeat for the next behavior.

Run targeted tests during iteration and relevant broader checks at completion.

## Test boundaries

Prefer pure domain functions for complex rules, component interactions for visible states, integration tests for real persistence and authorization, and a small number of critical end-to-end flows.

Read [references/good-tests.md](references/good-tests.md) for behavior-focused examples and [references/mocking.md](references/mocking.md) before introducing mocks.

Database RLS, grants, provider webhooks, and runtime-specific behavior need integration evidence. An in-memory fake does not establish that production permissions are correct.

## Avoid

Tests that reproduce the implementation's formula, mock internal query-builder chains, assert incidental call order, or accept giant snapshots without examining the behavior. Report what the chosen test can and cannot establish.

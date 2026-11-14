---
name: code-review
description: "Use when reviewing a feature, pull request, commit range, or uncommitted changes. Används vid kodgranskning, granska koden och kontroll före publicering."
---

# Code Review

Check both what the change does and whether it follows the project's contracts.

## Establish the review surface

Read applicable AGENTS.md files and the user's requested scope.

- Working tree: inspect git status --short, git diff, git diff --cached, and relevant untracked files. Untracked files are not included in git diff.
- Branch or PR: resolve the named base and head and inspect the merge-base diff. Include working changes only when they are in scope.
- Commit range: resolve the exact endpoints.
- Without Git: inspect the requested files and state that a change boundary is unavailable.

Read surrounding code and changed callers. Do not infer the entire change from a diff stat or assume Codex commits after each turn.

## Find requirements and standards

Use the user's request, linked issue, accepted plan, or docs/specs document. State when a requirement is unclear rather than inventing it.

Read the project's design system, API contracts, and relevant tests. Read [references/web-baseline.md](references/web-baseline.md) for additional web-specific checks; apply only the parts matching the stack.

## Two review passes

1. Behavior: missing requirements, incorrect state transitions, authorization gaps, concurrency, error handling, loading/empty states, and regressions in existing flows.
2. Standards: documented conventions, maintainability, accessibility, runtime boundaries, and compatibility.

Use separate passes yourself. Delegate only when requested or permitted by applicable instructions. Keep taste suggestions distinct from defects.

## Evidence and reporting

For each actionable finding give severity, a precise file/line, the trigger, practical impact, and a concrete remedy. Prefer reproducible failures and clear code paths over speculation. Report security candidates with their actual evidence and confidence.

Order findings by impact; label the relevant pass where useful. If no actionable findings exist, say so and mention meaningful verification gaps.

A review request is read-only. Fix findings when the user asked for review-and-fix; do not add a new approval checkpoint for fixes already authorized. Run appropriate checks after changing code.

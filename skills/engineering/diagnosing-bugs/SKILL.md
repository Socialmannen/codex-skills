---
name: diagnosing-bugs
description: "Use when a web app crashes, returns incorrect data, fails a request, or regresses in performance. Används vid buggar, vit skärm, felmeddelanden och när något inte funkar."
---

# Diagnosing Bugs

Build a useful pass/fail signal, isolate the cause, then verify the smallest fix.

## Establish the environment

Read applicable AGENTS.md files and package scripts. Identify the real development URL, runtime, test runner, recent changes, and available browser/server logs. Start with build errors when the app does not render.

Read [references/web-signals.md](references/web-signals.md) when the symptom involves rendering, authentication, data access, or a difference between preview and production.

## Diagnosis loop

1. Capture expected behavior, observed behavior, inputs, user role, and the exact failing flow.
2. Reproduce using the cheapest useful boundary: an existing test, browser action, direct server call, or database probe with the application's role.
3. If reproduction is unavailable, continue with supported static analysis. Label hypotheses and unverified conclusions; request only the missing evidence that materially blocks progress.
4. Reduce the scenario. Control time, randomness, fixture data, and concurrency where relevant.
5. Rank a few falsifiable hypotheses when the cause is uncertain. Inspect evidence before adding instrumentation, then change one variable per probe.
6. Fix the confirmed cause at the appropriate layer. Inspect sibling paths when the same assumption is repeated.
7. Rerun the original reproduction, relevant tests, and the affected browser flow.

For flaky bugs, measure reproduction frequency instead of claiming determinism. For performance, compare the same workload before and after.

## Regression protection

For important behavioral bugs, preserve a regression test that fails on the old behavior and passes after the fix when feasible. Match the existing test stack. Use a focused browser or visual check for presentation-only changes.

Do not introduce an entire testing framework for a trivial reversible edit. Document any material gap when a useful automated regression test cannot be added.

## Git and credentials

Use history and diffs to compare behavior. A separate worktree can isolate an old revision without disturbing current edits when available. Do not reset or stash the user's work.

Use test accounts and fixture data. Keep tokens, session state, and customer data out of logs, screenshots, commits, and reports. Remove temporary instrumentation.

## Report

Explain the cause, the fix, evidence that the original flow works, regression protection added, and checks that remain blocked. Passing checks reduce risk; they cannot guarantee a bug never recurs.

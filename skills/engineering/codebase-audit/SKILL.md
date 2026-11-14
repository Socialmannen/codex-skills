---
name: codebase-audit
description: "Use when auditing an existing codebase or cleaning verified unused code. For recent changes use code-review. Används vid död kod, oanvända paket, teknisk skuld och städning av projektet."
---

# Codebase Audit

Find maintainability problems with evidence, then clean only the scope the user requested.

## Establish scope

Read project instructions, routes, package scripts, source modules, server code, generated files, tests, and build configuration. Record pre-existing failures.

An audit-only request changes no files. A request to audit and clean up authorizes routine reversible cleanup; do not require a second approval for every batch. Ask about uncertain removals or destructive external changes.

## Investigate

Look for unused files and exports, duplicated rules, obsolete routes, redundant effects, unused packages, conflicting types, dead assets, and error handling that hides failures.

Before declaring something unused, check dynamic imports, file-based routing, generated registrations, config references, build plugins, external consumers, webhooks, scheduled jobs, and side-effect imports. Use existing static-analysis tools when available; corroborate their output.

Classify ambiguous usage as needs verification. Do not delete migrations, production data, deployed endpoints, or infrastructure solely because local imports are absent.

## Cleanup

Group high-confidence changes into small coherent batches. Recheck usage immediately before removing code. Avoid unrelated formatting and large abstractions created just to eliminate superficial similarity.

Run the project checks relevant to each batch and exercise affected routes. Keep the final diff reviewable.

## Report

Provide finding IDs, evidence, confidence, proposed action, and removal risk. For completed cleanup, list removed modules/packages, relevant checks, and any items left for a business or deployment decision.

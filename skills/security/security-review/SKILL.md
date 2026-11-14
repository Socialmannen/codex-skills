---
name: security-review
description: "Use when assessing web-app vulnerabilities, authorization, secrets, or sensitive integrations. Används vid säkerhetsgranskning och frågor om åtkomst till andra användares data."
---

# Security Review

Trace realistic attack paths, calibrate impact, and separate findings from hardening suggestions.

## Scope and tools

Read applicable AGENTS.md and SECURITY.md, the request, architecture, and deployment boundaries. If a dedicated security workflow is available and applicable, use its policy and evidence requirements.

A review request authorizes assessment. Remediation or external operational changes follow the user's requested scope. Use local or authorized test environments, test accounts, and fixture data; do not probe unrelated services or real customer records.

## Map

Identify entry points, attacker roles, sensitive assets, trust boundaries, and authorization checks across browser, server, datastore, storage, provider webhooks, and AI tools.

Discover the actual backend. PostgreSQL RLS and grants matter when browser access reaches that backend; other stacks need their own equivalent access checks.

Read [references/attack-surface.md](references/attack-surface.md) to guide discovery.

## Validate candidates

For each candidate trace attacker-controlled input, checks in between, the reachable sensitive operation, and the result an attacker could obtain.

Read [references/false-positive-rules.md](references/false-positive-rules.md). Prefer a safe reproduction when available, including a negative unauthorized case and a positive legitimate case.

Strong static evidence can support a finding when runtime access is unavailable. Label what is statically established, reproduced, or still uncertain. Do not discard a reachable flaw merely because a live exploit cannot be run.

Do not report public API keys, source maps, or missing headers as vulnerabilities without a concrete impact path. Calibrate severity from actual privilege, prerequisites, affected data, and scope.

## Remediate when requested

Fix at the trusted layer, examine repeated instances, and rerun the relevant evidence and legitimate flow. Add meaningful regression coverage where feasible.

Removing a leaked secret from code is insufficient; rotation requires the provider action and must be verified or clearly handed off. Keep tokens and session data out of outputs.

## Report

Give the finding, confidence, severity rationale, file/line, attacker prerequisites, attack path, practical impact, validation, and fix or proposed remedy. State blocked checks and avoid a general claim that the app is secure.

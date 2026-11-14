---
name: launch-checklist
description: "Use before a launch or major release to assess configuration, flows, accessibility, performance, and recoverability. Används vid lansering, publicering och är vi redo att gå live."
---

# Launch Checklist

Establish what is ready, what must change, and what cannot yet be verified.

## Scope

Read the actual framework, build output, hosting configuration, backend, auth, storage, payments, email, analytics, and target audience. Identify preview and production separately.

An audit-only request changes no files. Fix issues when audit-and-fix is requested. Public deployment, data changes, or provider settings follow the authorized delivery scope.

Mark checks PASS, FAIL, N/A, or UNKNOWN with evidence. A guessed dashboard setting is UNKNOWN.

## Technical readiness

- Required build, lint, type, and relevant test checks pass, or pre-existing failures are identified.
- Environment variables are configured for each environment; browser bundles contain only intentionally public values.
- Data access, object ownership, storage, and trusted server operations are verified for the appropriate roles.
- Auth confirmation, sign-in, recovery, OAuth redirects, and logout work on the intended domain.
- Critical user flows work with realistic data, errors, and persisted results.
- Unknown routes have the framework-appropriate 404 behavior; failures have a useful recovery path.
- Public content has appropriate titles, metadata, canonicals, robots, sitemap, and social previews where relevant.
- Keyboard navigation, visible focus, labels, contrast, zoom, and touch targets have been checked.
- Measure loading, responsiveness, and layout shift; read [references/frontend-performance.md](references/frontend-performance.md).
- Payment purchase, webhook, cancellation/refund, and entitlement transitions are tested in sandbox when applicable.
- Outbound email uses the intended sender and domain configuration, with appropriate suppression and unsubscribe behavior.
- Logging avoids secrets and private payloads; essential errors can be observed.
- A rollback path exists. For data changes, document compatibility, backup, and recovery constraints.

For a dedicated security assessment use the optional security-review workflow. For legal/privacy requirements use the optional legal-compliance workflow; their outcomes must not be inferred from a technical build.

## Report

List launch blockers first, then recommended improvements, unknowns, and passed checks with concise evidence. Record remaining work in the existing plan when useful. Publish only when publishing is requested and the target is clear; otherwise deliver the readiness result.

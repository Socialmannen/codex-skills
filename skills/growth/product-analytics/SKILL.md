---
name: product-analytics
description: "Use when planning or implementing analytics, funnels, conversion events, or A/B tests. Används vid statistik, mätning av konvertering, spårning och A/B-test."
---

# Product Analytics

Collect only the data needed for a concrete decision and verify the measurement.

## Plan before code

Write the product questions, primary metrics, event definitions, firing boundaries, allowed properties, retention, and decision owner. Inspect existing instrumentation before adding a second provider.

## Privacy and implementation

- Determine applicable consent and data-protection requirements from the actual technology, data, purposes, and jurisdictions.
- Cookieless tracking is not automatically exempt. Internal IDs can still be personal data; minimize and protect pseudonymous identifiers.
- Keep names, email addresses, free text, and sensitive data out of ordinary event properties.
- Apply consent and withdrawal consistently to browser and server-side tracking where required.
- Record successful purchases and other authoritative conversions from trusted server/provider events.
- Use provider event IDs or equivalent deduplication when retries or browser/server delivery could double count.
- Wrap provider calls in one small module, using existing architecture.
- Keep scripts out of the critical rendering path and protect secret keys on the server.

For detailed privacy checks consult the optional legal-compliance workflow and current regulator guidance.

## Experiments

Define one hypothesis, primary outcome, eligible population, randomization unit, exposure event, duration, and decision rule before launch.

Assign variants consistently. Compare cohorts from assignment or exposure rather than filtering on post-treatment conversion. Avoid flicker and layout shift. For low traffic, consider a larger design change or qualitative research instead of an underpowered micro-test.

## Verify

Exercise accepted, rejected, and withdrawn consent; confirm intended events and properties, deduplication, route changes, and test-mode server conversions. Check page performance and state any limits of the data.

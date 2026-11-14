---
name: pricing-and-paywalls
description: "Use when designing paid tiers, pricing pages, upgrade prompts, or feature entitlements. Används vid prissidor, betalväggar, abonnemang och uppgradering till pro."
---

# Pricing and Paywalls

Separate commercial decisions, presentation, and trusted entitlement enforcement.

## Establish the product rules

Use the user's stated prices, currencies, limits, trial terms, billing periods, and target customers. Do not invent commercial commitments. Store settled facts in the existing product documentation or plan configuration.

Inspect the payment provider, backend, webhook handling, and account model before changing the flow.

## Implement

- Keep plan definitions in a maintainable source of truth appropriate to the application.
- Show full price, billing interval, renewal, tax treatment, limits, and cancellation terms clearly.
- Enforce paid capabilities on the trusted server or database layer. A hidden UI control is not authorization.
- Derive entitlement changes from verified provider events or trusted provider state, not a success redirect or editable user profile.
- Make webhook processing idempotent and handle retries, out-of-order events, cancellation, refunds, and payment failure.
- Present upgrade prompts at a relevant value or limit moment, with a clear way to close them.

Use the actual provider's documented sandbox and integration APIs. Do not assume the editor supplies a payment integration.

## Verify

Test a direct paid-action attempt by a free user, a test-mode purchase, verified webhook delivery, repeated events, cancellation/downgrade, and the resulting account access.

Add focused tests for important limits and entitlement transitions using the existing stack. Report provider or dashboard checks that remain unavailable.

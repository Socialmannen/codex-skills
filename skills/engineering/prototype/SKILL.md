---
name: prototype
description: "Use when exploring layout alternatives or testing a workflow before committing to implementation. Används vid prototyper, skisser och önskemål om flera designförslag."
---

# Prototype

Answer one design question with the smallest useful interactive prototype.

## Pick the question

- Layout or visual direction: read [references/ui-variants.md](references/ui-variants.md).
- Business rule or interaction flow: read [references/logic-demo.md](references/logic-demo.md).

Use the project's framework, routing, tokens, and components. Identify its actual development server. Prefer realistic fixtures over a real backend until persistence itself is the question.

## Build

1. State the question and what the prototype will demonstrate.
2. Provide two or three structurally different alternatives when alternatives are requested.
3. Include relevant long text, empty states, errors, and phone-width behavior.
4. Keep prototypes behind the framework's development-only mechanism. A filename or hidden navigation link alone does not exclude a production route.
5. Never send real payments, messages, or production writes from a prototype.
6. Open and exercise the result in the browser when available.

Do not add a test suite or architecture layers to disposable visual code. Include a focused check when a prototype claims a business rule works.

## Handoff

Explain the tradeoffs and how to view each option. Preserve alternatives until the user selects a direction or asks for cleanup.

When production implementation is requested, capture the decision, integrate the chosen design properly, add real data and accessibility, verify important behavior, and remove obsolete prototype routes. Do not assume an uncommitted prototype is recoverable from Git history.

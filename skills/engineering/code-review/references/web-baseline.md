# Web Review Baseline

Read the applicable parts when reviewing a web change. Project-specific contracts take precedence over these heuristics.

## Behavior and runtime

- Correct request/response shape, status codes, input validation, and retry semantics.
- Authorization on the trusted path for the caller and the specific resource.
- Browser-only APIs kept out of incompatible server rendering.
- Secrets excluded from browser bundles and intentionally public environment prefixes.
- Webhook authentication and idempotency.
- Race conditions, lost updates, duplicate submissions, and stale cache invalidation.
- Relevant handling of loading, empty, partial, and error states.

## Interface

- Semantic controls, visible labels and focus, keyboard operation, useful errors.
- Realistic long text, localized values, narrow widths, and zoom.
- Appropriate metadata and navigation for public routes.
- Existing design tokens and component variants respected where practical.

## Maintainability and evidence

- Repeated business rules consolidated when this improves locality.
- Abstractions justified by actual behavior, not visual resemblance alone.
- Tests verify meaningful behavior through suitable interfaces.
- Relevant existing checks run; a passing lint result does not establish correct behavior.

# Decision Records

Record surprising, durable tradeoffs so future work understands the constraint.

- Put short working conventions in the applicable AGENTS.md.
- Put current product facts and prices in product documentation or configuration.
- Put longer architectural decisions in the project's existing decision-record format.
- Link a decision when it helps explain a working rule; do not duplicate a long narrative in every instruction file.

For a longer record include context, alternatives, decision, consequences, and what would justify revisiting it.

Example: store monetary amounts in currency-aware minor units where the domain permits them, with an explicit rounding policy. Explain the financial or integration requirements rather than declaring every currency has two decimal places.

Replace conflicting guidance rather than appending another rule. Do not claim a particular host reloads AGENTS.md on every message.

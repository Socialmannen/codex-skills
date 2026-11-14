---
name: domain-modeling
description: "Use when defining business concepts, database relationships, lifecycle states, or ownership. Används vid datamodeller, tabeller, roller och otydliga begrepp."
---

# Domain Modeling

Make business concepts precise before they become schema and permission rules.

## Workflow

1. Read existing schema, migrations, authorization code, specs, and GLOSSARY.md if present.
2. Identify overloaded terms and propose one canonical meaning for each.
3. Stress-test relationships and lifecycles with concrete scenarios: partial cancellation, ownership transfer, multiple organizations, duplicate requests, deletion, and historical records.
4. Resolve material business ambiguities with the user. Infer implementation details from the project when possible.
5. Record settled terms using [references/glossary-format.md](references/glossary-format.md).
6. Map the concepts to the actual datastore with [references/schema-mapping.md](references/schema-mapping.md).
7. Verify ownership, constraints, transaction boundaries, and access from each relevant role.

Use PostgreSQL RLS when that is part of the real backend. Other backends need equivalent server-enforced authorization; do not add a database provider to satisfy an example.

## Keep knowledge in the right place

- Terms: GLOSSARY.md or the established domain documentation.
- Business rules and current commercial facts: the feature spec or product documentation.
- Working conventions: applicable AGENTS.md.
- Long architectural tradeoffs: a decision record; see [references/decision-records.md](references/decision-records.md).
- Executable constraints: migrations, validation, and tests.

Create documents only when they earn their maintenance cost. A small feature rarely needs a large glossary.

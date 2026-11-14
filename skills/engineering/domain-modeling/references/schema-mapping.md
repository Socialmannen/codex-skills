# Model to Schema

Read before introducing a new persistent domain concept.

Map entities to their actual datastore representation, value objects to suitable fields, relationships to foreign keys or equivalent references, and lifecycles to explicit states.

Check:
- Who owns each record and who can read or mutate it.
- Tenant boundaries and administrative access.
- Uniqueness, required fields, cardinality, and referential integrity.
- Monetary precision, currency, timezones, and rounding.
- Concurrent creation, updates, and state transitions.
- Deletion, retention, restoration, and historical records.
- Migration compatibility with existing data and deployed callers.

Use constraints and transactions where they express an invariant reliably. Server validation and UI checks alone do not replace durable uniqueness guarantees.

For exposed PostgreSQL tables, verify grants and RLS using application roles. For other backends, verify their equivalent enforcement. Do not require a SECURITY DEFINER function or separate roles table unless the actual design justifies it.

Present material business changes in domain language. Applying a migration to a live database is a separate operational action from writing and checking the migration.

# Web Attack Surface

Use the actual architecture and policy to select checks.

| Surface | Trace |
| --- | --- |
| Resource access | Attacker role, supplied identifiers, ownership/tenant check, sensitive operation |
| Browser-to-database | Exposed tables, grants, RLS, storage paths, policy bypass credentials |
| Auth/session | Token verification, cookie flags, CSRF where applicable, recovery, account linking |
| Server routes | Input validation, trusted identity, authorization, output filtering, abuse controls |
| Webhooks | Signature over raw payload where required, replay behavior, idempotency, account binding |
| Uploads | Type/size constraints, processing, execution context, serving headers, private access |
| URL fetches | Attacker-controlled destination, network reachability, redirect and protocol handling |
| HTML/template output | Untrusted source, sanitization/encoding, actual execution context |
| Queries and commands | Attacker input, parameterization, identifier validation, reachable sink |
| Integrations | Secret storage, least privilege, environment separation, provider callbacks |
| AI tools | Untrusted content, allowed actions, authorization independent of model output |

Do not assume a source map or internal route name exposes private data. Establish an actual trust-boundary failure and impact.

Use non-destructive local reproductions and authorized test data. An SQL rollback does not undo emails, provider calls, or other external effects.

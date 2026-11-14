# Web Signals

Use symptoms to choose evidence, not to declare a cause without checking it.

| Symptom | Evidence to inspect |
| --- | --- |
| Blank page | Actual build output, browser runtime error, failed module requests, route outlet |
| Hydration mismatch | Browser APIs during render, unstable time/randomness, server/client locale or data |
| Endless spinner | Pending network requests, missing error handling, auth restoration, disabled query |
| Stale data | Mutation result, query keys, invalidation, HTTP cache, optimistic rollback |
| Empty database result | Actual query parameters, grants, ownership policies, role and claims |
| Auth redirect fails | Provider logs, configured site/callback URLs, cookies, same-site rules |
| Upload fails | Payload limits, signed URL expiry, object path, storage rules, CORS response |
| Preview works, production fails | Runtime differences, variables, rewrites, assets, callbacks, deployment revision |
| Wrong user's data appears | Server authorization, tenant scoping, query caching, storage access |

## Role-sensitive probes

When using PostgreSQL/Supabase RLS, test with the same role and claims as the app, not an administrative client that bypasses policies. Use authorized test users and data.

A rolled-back database transaction can protect test writes, but external effects such as messages are not rolled back with SQL. Do not use production records for a probe.

For other backends, inspect the equivalent trusted authorization path.

## Instrumentation

Prefer a targeted state inspection or failed assertion. If logging is needed, add a unique short tag, redact sensitive payloads, and remove the instrumentation after diagnosis. Record the real log location from the running environment.

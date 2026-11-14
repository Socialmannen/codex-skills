# Deployment Preparation

Use the existing provider and project setup.

- Confirm account, project, requested environment, branch/revision, and access settings.
- Inspect the actual build command, output directory, runtime, rewrites, and asset paths.
- Check variable names and environment scope without printing their values.
- Identify preview backend isolation, migrations, auth callbacks, payment mode, and outbound email.
- Inspect upload exclusions and avoid packaging credentials or unrelated workspace files.
- Run required local checks.
- Use the provider's CLI, connector, or existing CI as available.
- Wait for a final build/deployment result.
- Verify the returned URL, deep links, assets, and changed flow.
- Report revision, URL, evidence, and anything that remains unverified.

Do not delete a previous deployment, change public access, incur new paid resources, or apply live database changes unless that action is in scope. A code rollback may not reverse a schema or external side effect.

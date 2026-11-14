---
name: preview-deploy
description: "Use when the user requests a preview deployment or help with an authorized deployment. Används vid förhandspublicering, preview-länk och deploy av hemsidan."
---

# Preview Deployment

Deliver a verifiable preview using the project's existing hosting and configuration.

## Discover

Read deployment instructions, framework output, package scripts, existing hosting configuration, linked project, CI, and environment variable requirements. Determine whether the requested target is preview, staging, or production.

Prefer existing provider tools or CI. Use an installed provider-specific skill when suitable; do not assume one hosting provider or a platform-managed backend.

Read [references/deployment-checklist.md](references/deployment-checklist.md) before changing provider configuration.

## Prepare

- Run required build and relevant checks.
- Check output mode, base URLs, server/edge runtime compatibility, and rewrite rules.
- Verify required variable names without printing values.
- Separate preview and production databases, payment modes, email, analytics, and callback URLs where the project requires it.
- Identify whether migrations or writes could affect live data; do not treat a preview URL as proof that its backend is isolated.
- Inspect upload packaging so secrets, session files, and unrelated workspace files are excluded.

## Deploy

Deploy when the user requested it and the account/project/target are clear. Default to preview when the request does not explicitly call for production.

Do not change a site's audience, create paid resources, or modify unrelated provider settings merely to obtain a URL. Ask only for a material missing choice or required access.

## Verify

Wait for the provider or CI result. Open the returned preview and check the main route, a deep link, static assets, and the affected flow using available tools.

A successful build alone does not prove the deployed app works. If verification is blocked, distinguish deployment success from unverified runtime behavior.

Return the usable preview URL, deployed revision, checks, and any blockers. For a requested production release, include the available rollback path and data compatibility considerations.

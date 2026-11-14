---
name: browser-qa
description: "Use when testing a website or web app in a browser, checking responsive behavior, or verifying a UI change. Används vid testa hemsidan, webbläsarkontroll och verifiera användarflöden."
---

# Browser QA

Verify the user's actual task through the interface with realistic states.

## Prepare

Read applicable project instructions, existing browser tests, package scripts, and the requested flow. Use the project's configured browser mode and preferred tools.

Discover the real server command and URL. Reuse an authorized running preview when appropriate. Do not assume a fixed port, browser plugin, or globally installed Playwright.

If browser capabilities are unavailable, run useful independent checks and state that browser verification remains blocked. Do not claim a screenshot proves an interaction worked.

## Test

1. Exercise the main path with realistic fixture data and the required signed-in role.
2. Confirm a persistent result by reading it back through the interface when relevant.
3. Check error, loading, empty, and repeated-action states appropriate to the change.
4. Test representative phone and desktop widths, zoom, keyboard focus, and reduced motion when relevant.
5. Inspect relevant console/network failures and the actual resulting UI.
6. For protected flows, use authorized test accounts. A signed-out redirect does not verify signed-in behavior.

Prefer repeatable existing tests for behavioral regressions. Use a browser CLI or interactive tools for focused exploration; add test files only when meaningful protection is needed.

Read [references/checklist.md](references/checklist.md) for a reusable compact test matrix.

## Evidence

Capture only screenshots or traces that explain a result. Keep sessions, tokens, private records, and test credentials out of committed artifacts.

Report tested flow, environment, viewport/role, actual outcome, and any physical-device or external-provider limits. Emulation establishes only the behavior exercised in that environment.

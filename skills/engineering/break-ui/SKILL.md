---
name: break-ui
description: "Use when checking layout resilience, overflow, fallbacks, or launch readiness. Används vid stresstest av gränssnitt, lång text och edge cases i layouten."
---

# Break UI

Expose layout assumptions with realistic boundary data before users encounter them.

## Workflow

1. Map each rendered value to its source, optionality, and actual schema limits.
2. Read [references/catalog.md](references/catalog.md) for realistic names, URLs, numbers, translations, collections, and media failures.
3. Inject fixtures at props, request mocks, or fixture boundaries. Do not change markup to manufacture a failure.
4. Inspect the interface at phone and desktop widths, with 200% zoom, keyboard focus, long localized text, and reduced motion when relevant.
5. Exercise loading, empty, error, partial-data, and large-list states.
6. Report clipping, overlap, missing fallbacks, inaccessible controls, or unusable scrolling with reproduction steps.
7. Fix issues when requested, then rerun the failing cases.

## Common failure points

- Flex children without min-width: 0 push actions outside the viewport.
- Unbroken identifiers require an intentional wrap, truncation, or copy affordance.
- Zero, negative values, and missing numbers must not be silently treated as empty.
- Broken media needs a stable-size fallback.
- RTL text, combining characters, and emoji can expose assumptions in truncation and initials.
- Large collections need an appropriate loading, paging, or rendering strategy.

Keep fixture toggles development-only and verify they are excluded from production. Preserve a regression check for important behavior; screenshots are evidence only for the states actually captured.

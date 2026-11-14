---
name: unslop-ui
description: "Use when a UI looks generic or needs a clearer visual direction. Används vid AI-känsla, generisk design, unslop och önskemål om ett mer genomarbetat UI."
---

# Intentional UI

Replace generic composition with choices that fit the product, audience, and brand.

## Establish direction

Inspect the current page, existing design system, brand assets, and useful references. Identify the product's information needs before choosing a visual style.

References such as Linear, Stripe, Muji, editorial design, or Apple can clarify a direction. Extract principles rather than copying a brand or forcing every product into the same template.

## Audit

Look for repeated icon-card walls, decorative badges, arbitrary gradients, filler copy, low-contrast text, unnecessary blur, weak hierarchy, and placeholder interfaces.

These are diagnostic prompts, not universal bans. A gradient, serif heading, pure white canvas, or decorative element can be right when it serves the brand and composition.

## Improve

1. Choose a clear hierarchy, layout rhythm, type scale, palette, and spacing system.
2. Use existing semantic tokens or introduce a coherent small set.
3. Replace decorative placeholders with accurate product imagery or useful domain content when available.
4. Use tabular numerals where changing metrics or aligned numeric columns benefit.
5. Balance headings when it improves wrapping; check real text and narrow widths.
6. Use elevation and borders where they clarify grouping, not on every surface.
7. Verify text and control contrast. WCAG AA body text generally needs 4.5:1; AAA normal text uses 7:1. Check the applicable exceptions and large-text thresholds.

Preserve useful functionality, brand intent, and accessible focus states.

## Verify

Inspect desktop and phone widths, dark mode if supported, real content, keyboard navigation, and loading/empty states. Report the actual design decisions and checks, rather than claiming the result is objectively free of AI aesthetics.

Contrast reference: [W3C Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

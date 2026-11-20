---
name: mobile-native
description: "Use when improving touch interactions, mobile scrolling, drawers, or iPhone viewport behavior. Används vid mobilanpassning, pekskärm, iPhone-problem och appkänsla på mobilen."
---

# Mobile Web Behavior

Fix actual mobile interaction problems while preserving browser capabilities and accessibility.

## Inspect first

Identify the framework, CSS system, existing responsive behavior, and target devices. Discover the real development URL. Browser device emulation checks layout; physical-device checks are needed for claims about iOS keyboards, rubber-banding, and touch timing.

## Checklist

- Gate hover-only effects with capability media queries, while retaining active and visible keyboard-focus states.
- Consider container queries for reusable components whose layout depends on their available space; retain a usable base layout and check the project's browser support.
- Use dynamic viewport height for app shells when appropriate; use small viewport height when stable section height matters. Inspect keyboard and nested-scroll behavior.
- Keep text inputs at a readable size; 16 CSS pixels commonly avoids iOS input zoom. Do not disable user zoom.
- Pad fixed surfaces using safe-area environment variables where needed; check actual content does not overlap the home indicator.
- Make tap targets comfortably large. Prefer 44 to 48 CSS pixels as design guidance; WCAG 2.2 AA target size has a 24 CSS-pixel minimum with defined exceptions.
- Use touch-action: manipulation only where appropriate, preserving pinch zoom and expected gestures.
- Apply overscroll containment to a specific sheet or dialog that needs it, rather than globally suppressing normal page behavior.
- Keep scrollbars and scroll affordances unless a particular component has an accessible alternative. Touch capability alone does not justify hiding every scrollbar.
- Replace default tap highlights only when equivalent visible interaction feedback remains.
- Keep text selection for body copy, table values, and content users may copy.

## Verify

Check narrow and wide viewports, portrait/landscape where relevant, long content, focused inputs, keyboard navigation, and zoom. Use the available browser tools and report any physical-device checks still needed.

Source for target-size requirements: [WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

# Accessibility

Use for technical accessibility checks and for investigating legal coverage.

A reasonable engineering target is WCAG 2.2 AA when the project has not established another relevant standard. Legal coverage, the applicable version, exemptions, and documentation obligations must be assessed separately.

Check semantic controls, labels, text alternatives, keyboard access, visible/unobscured focus, dialog focus handling, error recovery, contrast, zoom, reflow, and alternatives to drag-only interaction.

Useful numeric distinctions:
- AA normal text contrast is generally 4.5:1; large text generally 3:1.
- AAA normal text contrast is generally 7:1.
- WCAG 2.2 AA target-size minimum is 24 by 24 CSS pixels, with defined spacing and other exceptions.
- Larger 44 to 48 pixel touch targets are useful design guidance; do not mislabel them as the AA minimum.

Keep skip links and useful in-page navigation. Accessible primitives still need correct labels, composition, and verification.

Use automation as one input, followed by keyboard and representative assistive-technology checks. Report the tested scope; a passing scan is not a conformance certificate.

Sources:
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [European Accessibility Act](https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng)
- [PTS](https://pts.se/)

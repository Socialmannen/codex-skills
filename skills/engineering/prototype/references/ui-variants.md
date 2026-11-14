# UI Variants

Use when the question is which layout or visual direction works best.

- Build two or three structurally distinct options using the project's framework and tokens.
- Use realistic content and the important narrow-screen states.
- A query parameter or local switcher can compare options in development.
- Exclude routes and fixture code from production using the actual framework's build mechanism. A development-only switcher does not automatically exclude its route.
- Label the alternatives clearly and explain their tradeoffs.
- Do not replace live user data or add actual external side effects.

Verify each option's main interaction. Preserve the alternatives until a direction is selected, then integrate the winner as proper production code when requested.

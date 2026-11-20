---
name: ui-motion
description: "Use when adding or reviewing UI transitions, gestures, or animation performance. Används vid animationer, mjuka övergångar, hackig rörelse och reduced motion."
---

# UI Motion

Use motion to communicate state and relationships without delaying the user's task.

## Decide before animating

Inspect the interaction's frequency, input method, accessibility needs, and existing motion language. Frequent keyboard-driven interactions should remain immediate; a short nonblocking transition can still be useful.

Choose CSS for simple transitions. Use an existing motion library for gestures, springs, or layout transitions when that capability is needed.

## Implementation

- Prefer transform and opacity for inexpensive motion.
- Animate layout properties only when the effect requires them and measurements on the target surfaces support the cost.
- Declare transition properties explicitly; avoid transition: all.
- Keep focus, hit testing, screen-reader state, and keyboard interaction correct during entry and exit.
- Respect prefers-reduced-motion with reduced or instant spatial changes.
- Keep the final state usable without animation. For automatically moving content, provide pause, stop, or hide controls when required; reduced-motion preferences do not replace those controls.
- When clipping or masking a focusable element, verify its focus indicator remains visible, including on an unclipped parent if needed.
- Do not keep content hidden until a scroll animation runs.
- Keep choreography short; avoid making users wait for staggered controls.
- Apply will-change only where measured or clearly needed, and remove unnecessary compositing layers.

Read [references/curves-and-durations.md](references/curves-and-durations.md) for timing and spring examples. Treat values as starting points, not universal requirements.

## Example

For a simple surface, transition only opacity and transform with a short ease-out duration. In Tailwind, use transition-[opacity,transform] instead of transition-all, plus motion-reduce:transition-none.

## Verify

Exercise entry, exit, rapid repetition, keyboard use, reduced motion, and a representative slower device or throttled environment. Inspect dropped frames or layout work before claiming a performance improvement.

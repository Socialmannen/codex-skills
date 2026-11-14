# Motion Starting Points

Consult for a starting vocabulary, then adapt and measure.

| Purpose | Starting point |
| --- | --- |
| Press feedback | Small transform or opacity change, about 80 to 120 ms |
| Popover entry | Short ease-out, about 120 to 200 ms |
| Dialog or sheet | About 180 to 250 ms, with a shorter exit where appropriate |
| Related items | Small stagger with a bounded total duration |
| Gesture release | A tuned spring using the current library's documented parameters |

These durations are heuristics, not accessibility requirements.

Use explicit transition properties, such as opacity and transform. Avoid transition: all. Prefer composited changes, while allowing measured layout animation when the interaction calls for it.

Honor reduced-motion preferences, preserve focus during exit, and test rapid reversal. Avoid globally reducing every animation to an almost-zero duration if it breaks event-driven behavior; provide a deliberate per-component fallback when needed.

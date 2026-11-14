# Choosing UI Libraries

Consult before adding a nontrivial interaction dependency.

## Selection order

1. Use the existing design system and dependencies when they fit.
2. Prefer native browser capabilities for simple behavior.
3. For complex accessible interactions, evaluate a maintained primitive or established library.
4. Check official documentation, current releases, license, accessibility, SSR/runtime compatibility, CSS integration, and bundle cost.

## Examples to investigate

| Need | Examples, subject to current verification |
| --- | --- |
| Accessible primitives | Existing shadcn setup, Radix UI, Base UI |
| Command palette | cmdk or the existing primitive |
| Motion and gestures | CSS first; Motion when springs or gestures justify it |
| Large lists | TanStack Virtual or React Virtuoso after profiling |
| Drag/drop | Current dnd-kit packages and keyboard support |
| Charts | Existing chart stack; Recharts when appropriate |
| Dates/numbers | Intl first; date-fns for additional operations |
| Notifications | Existing toast system; Sonner as an option |

These are examples, not an instruction to install them or a permanent maintenance endorsement. Avoid duplicating an equivalent package. A complex focus trap or menu usually deserves an accessible primitive; still verify its use in the actual interface.

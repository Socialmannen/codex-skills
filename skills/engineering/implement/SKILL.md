---
name: implement
description: "Use when implementing a spec or a multi-step feature plan. Not needed for a small direct edit. Används vid större implementationer och när en plan ska byggas stegvis."
---

# Implement

Deliver agreed work in small slices that each reach a verifiable user outcome.

## Start

Read the request, applicable AGENTS.md, relevant spec or issue, package scripts, and current working tree. Respect existing changes and identify the actual framework, backend, and runtime.

For large work, keep a short plan in the project's established location. Avoid creating a roadmap document for a tiny edit. Ask only about missing decisions that block the result.

## Build each slice

1. Choose the next unblocked slice, prioritizing uncertain or risky integration assumptions.
2. Change schema and migrations if needed, including access controls and data compatibility.
3. Implement trusted server validation, authorization, and external integrations.
4. Implement domain rules and UI states, following existing tokens and components.
5. Run targeted checks and exercise the affected user flow. Use the project's browser tools when available.
6. Update the plan only when the slice is actually complete.

Skip layers the slice does not touch. For important logic use the existing test stack; the optional tdd workflow can help when test-first development is appropriate.

For browser UI, consider native HTML and platform APIs when they fit the interaction and the project's supported browsers. Check current compatibility for the specific feature and choose progressive enhancement or a justified fallback where needed. Native primitives do not automatically provide complete accessibility: verify semantics, keyboard behavior, focus, and assistive technology expectations for the actual component. Follow established project components when they already meet the need.

For forms and overlays, choose controls by behavior: a blocking dialog, a nonmodal panel, and a tooltip have different focus and dismissal needs. Associate fields with labels and actionable errors; make visual and programmatic error states agree, and handle focus after failed submission. If custom Enter handling submits a form, avoid submitting while an input method editor is composing text; check behavior in supported browsers and keep an ordinary submit control.

## Finish

Run the checks required by the repository and inspect the complete diff, including uncommitted and untracked files. Fix issues within scope and report the resulting behavior, validation, and unresolved blockers.

Commit, push, open a PR, or deploy when the user requested that delivery step. Preserve existing edits and do not assume automatic commits or synchronization.

Use sub-agents only when explicitly requested or allowed by applicable instructions. Keep concurrent edits disjoint if delegation is used.

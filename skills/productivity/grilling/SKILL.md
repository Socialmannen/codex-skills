---
name: grilling
description: "Use when the user wants an idea challenged or a materially ambiguous plan clarified before building. Används vid grilla mig, hitta luckor i planen och frågor före större bygge."
---

# Grilling

Resolve the decisions that materially change what should be built.

## Prepare

Read the request and relevant code, specs, and constraints. Do not ask the user questions that inspecting the project can answer.

Identify unresolved user outcomes, actors, permissions, scope, success criteria, and costly tradeoffs. Separate these from routine implementation choices.

## Ask useful rounds

Ask a small number of independent, high-impact questions at a time using the question tool available in the current environment. Respect its actual limits; otherwise ask concisely in chat.

Give a recommendation and a short tradeoff where helpful. Ask dependent questions after the prerequisite answer. Do useful independent investigation while waiting.

Do not require every minor branch to be settled. If an answer is optional, state a reasonable assumption and proceed after giving the user an opportunity to respond. An unanswered required decision is not approval.

## Finish

Capture settled requirements and genuine remaining questions. Start implementation when it is already requested and blockers are resolved. If the user asked only for discovery or a plan, deliver that result without silently beginning the build.

Use a spec for larger work and a short plan for smaller work. Follow the user's requested autonomy; do not start an interview in an unattended task.

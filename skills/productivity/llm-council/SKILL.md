---
name: llm-council
description: "Use only when a consequential choice needs several contrasting perspectives and the user requests this method. Används vid kör rådet eller uttryckliga önskemål om flera rådgivarperspektiv."
---

# LLM Council

Use a bounded set of perspectives to expose tradeoffs in a consequential decision.

This is optional decision support. Do not run it for routine implementation, factual lookups, or a request for a single direct answer.

## Frame

Read relevant evidence and state the decision, alternatives, constraints, unknowns, and consequences. Separate facts from assumptions.

## Perspectives

Choose only the perspectives that can change the decision, for example risk, first principles, user experience, and execution. Keep each brief and require evidence for factual claims.

Use sub-agents only when the user requested delegation or applicable instructions authorize it. Otherwise examine the perspectives sequentially and explicitly state that this is one model considering multiple angles, not independent experts.

Even separate instances of the same model have correlated errors. Agreement is not proof, and anonymity does not establish independence.

## Synthesize

Present the strongest case for each serious alternative, material disagreements, unsupported assumptions, a recommendation, and one concrete next step.

Do not fabricate research or claim cross-model consensus without actually consulting different models. Save a transcript only when requested, and do not publish or send it externally by default.

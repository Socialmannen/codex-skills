# Architecture Review

Use for a scoped feature or repository architecture assessment.

1. Read project goals, instructions, dependency graph, runtime boundaries, and tests.
2. Find concrete change hot spots from code, issues, and history when available. Commit frequency is only supporting evidence and does not measure quality by itself.
3. Trace a few important user flows across UI, data, server, and integrations.
4. Identify repeated domain rules, scattered access checks, tangled state, or abstractions that expose their internals.
5. Propose a small number of refactors with affected callers, practical benefit, migration risk, and verification.
6. Keep audit-only work read-only. Implement requested refactors in small coherent steps.

Prefer improved locality and preserved behavior over a new folder taxonomy or a universal service layer. Name meaningful uncertainties and avoid reorganizing the whole application to fix one pain point.

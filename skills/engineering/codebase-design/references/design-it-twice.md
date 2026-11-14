# Compare Two Interfaces

Read when the interface itself is uncertain and a decision affects several callers.

Sketch two materially different designs using the same actual use cases:
- What does a caller need to know?
- Which decisions stay inside the module?
- Where do authorization, errors, and transaction boundaries live?
- How is important behavior verified?
- What happens when requirements change?

Try a small caller example for each. Compare total complexity and migration cost, not the number of files.

Choose the simpler supported design, record a surprising durable tradeoff if needed, and delete disposable sketches when their purpose is complete. A routine local helper does not need two architecture proposals.

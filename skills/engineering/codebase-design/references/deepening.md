# Deepening a Module

Read before moving logic across data or server boundaries.

1. Map callers, inputs, outputs, authorization, transactions, retries, and caching.
2. Separate pure business decisions from effects.
3. Keep a feature's data access behind a small interface when repeated knowledge makes maintenance costly.
4. Inject a dependency where production and verification genuinely need different behavior; do not create a factory for every function.
5. Keep provider-specific details inside a suitable adapter.
6. Preserve the trusted authorization path, cancellation, error modes, and data freshness.
7. Move callers in small batches and run behavior checks after each coherent step.

Tests should exercise the same public interface as a real caller. Fakes help isolate logic but cannot establish the correctness of provider configuration, SQL permissions, or external delivery.

Do not add another pass-through wrapper when deleting it would remove complexity without spreading it to callers.

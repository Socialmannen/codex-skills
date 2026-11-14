# Calibrating Findings

Check these before reporting a vulnerability:

- Is the attacker-controlled input actually reachable?
- Which checks occur between input and sensitive operation?
- Is the claimed data private or the operation privileged in this product?
- Does the attacker already need equivalent privilege?
- Is the finding in deployed/reachable code rather than a fixture?
- Do framework or infrastructure protections apply on this path?
- Is the key intentionally publishable rather than a secret?
- Does the proposed exploit need an unsupported configuration assumption?
- Is a claimed missing control independently enforced elsewhere?

A missing header, source map, or stylistic pattern is not sufficient by itself. Conversely, lack of runtime credentials does not refute a clear static attack path.

Record assumptions and distinguish observed reproduction, strong static evidence, uncertain candidates, and optional hardening. Severity depends on practical impact and prerequisites; avoid blanket severity labels by vulnerability keyword alone.

# CI Checks

Read when investigating a PR check or build failure.

1. Resolve the intended repository, PR, head revision, and failed check.
2. Read the actual failing job and step logs with the available provider tools or CLI.
3. Separate product failure, test flake, missing access, dependency/runtime drift, and provider infrastructure failure.
4. Reproduce the relevant part locally when feasible.
5. Fix the supported cause within the requested scope and rerun focused checks.
6. Inspect the new remote check result for the updated revision.

Do not repeatedly rerun an unchanged deterministic failure. Never disclose secrets to diagnose CI or grant broad workflow permissions merely to make a check green.

For an external provider whose logs are unavailable, return the details URL and state the access gap. Successful local checks do not establish that remote CI passed.

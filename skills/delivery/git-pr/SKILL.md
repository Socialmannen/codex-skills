---
name: git-pr
description: "Use when the user requests a commit, push, pull request, or investigation of PR checks. Används vid skapa PR, committa, pusha och felsök CI."
---

# Git and Pull Requests

Deliver the requested change without disturbing unrelated work.

## Inspect

Read applicable instructions, repository state, branch, remote, relevant diffs, untracked files, and the requested base. Confirm that delivery actions such as committing, pushing, or opening a PR are in scope.

Existing user edits must remain intact. Use a dedicated branch or worktree when appropriate and supported. Do not reset, force push, discard, or stash unrelated changes.

## Commit and push

1. Run the project's required checks.
2. Review the complete intended diff, including staged and untracked content.
3. Exclude credentials, session state, build artifacts, and unrelated files.
4. Stage explicit intended paths and inspect the staged diff.
5. Create a concise commit and push the intended branch when requested.

Do not commit automatically after every turn or assume the editor syncs changes. Do not amend or rewrite shared history without explicit scope.

## Pull request

Use the repository template when present. Otherwise explain the concrete problem, resulting behavior, relevant verification, and material limitations. Add before/after evidence for a visual change when useful.

Keep detail proportional to the change. A screenshot is optional when it would not help the reviewer. Create a draft when work is incomplete and the requested workflow supports it.

Attach a created or actively worked-on PR to the chat when the host provides that capability. Return its URL.

## CI and merge

Read actual failing job logs rather than guessing from a red status. Read [references/ci-checks.md](references/ci-checks.md) when diagnosing checks.

Fix failures when requested, rerun the affected checks, and report inaccessible external-provider results accurately. Opening a PR does not authorize merging, enabling auto-merge, or production deployment.

# Browser Test Matrix

Select rows that match the change rather than testing every combination on every edit.

| Dimension | Useful cases |
| --- | --- |
| Identity | Signed out, fresh account, returning user, authorized secondary role |
| Data | Realistic populated state, empty result, missing optional fields, long text |
| Request | Success, validation failure, server/network error, repeated submission |
| View | Representative phone and desktop widths, relevant landscape, 200% zoom |
| Input | Pointer/touch as available, keyboard, focused controls, accessible labels |
| Preferences | Reduced motion and supported color scheme |
| Persistence | Reload, revisit, result readback, another permitted session |
| Authorization | Legitimate user succeeds; unrelated test user is rejected |

Record the server/deployment URL and actual role without credentials. Capture evidence for failures and important outcomes. Device emulation does not prove physical-device keyboard or touch behavior.

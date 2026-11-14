# Logic Demo

Use when the question is how a rule, lifecycle, or workflow behaves.

Model the smallest relevant state and explicit actions. Keep pure decisions separate from UI and provider calls.

Expose useful current state, provide a few guided scenarios, and explain why an action is unavailable. Include the edge case that motivated the prototype.

Use fixture data and no production side effects. Verify a critical rule with a focused assertion if the prototype makes a correctness claim.

After a direction is selected, preserve the settled requirements. Production implementation needs real authorization, persistence, failure handling, and appropriate tests rather than a direct promotion of disposable demo code.

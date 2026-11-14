# AI Search and Crawler Controls

Read before modifying crawler rules or adding AI-specific files.

## Separate search and training

OAI-SearchBot is used for ChatGPT search. GPTBot is used for content that may be used in model training. Their controls are independent: allowing search does not require allowing training.

Google Search AI features use normal Search eligibility and Googlebot controls. Google-Extended concerns specified uses outside ordinary Search; do not conflate it with Google Search inclusion.

Check current official documentation for each provider before editing access rules. Let the owner decide training preferences.

## Content and optional conventions

Prefer useful public content, original facts, clear entities, reliable source links, and accessible structure. These improve usability and retrieval readiness but do not guarantee citation.

llms.txt is an optional emerging convention, not a Google requirement or an established universal ranking factor. Add it only when it helps an intended consumer and can be kept accurate. Do not list private pages.

Preferred-source features and eligibility can change. Verify the actual publisher feature before adding a badge or third-party script.

## Evidence

Measure actual referral traffic and available search data. A manual query is a point-in-time observation, not a reliable visibility guarantee.

Sources:
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots)
- [Google AI features and websites](https://developers.google.com/search/docs/appearance/ai-features)
- [Google common crawlers](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers)
- [llms.txt proposal](https://llmstxt.org/)

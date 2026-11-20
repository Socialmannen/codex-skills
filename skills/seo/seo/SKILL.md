---
name: seo
description: "Use when improving public-page crawlability, metadata, structured data, performance, or search visibility. Används vid SEO, sökmotoroptimering och synas på Google eller AI-sök."
---

# Search Readiness

Prioritize crawlability, useful public content, and verifiable metadata.

## Inspect the actual site

Identify public indexable routes, rendering strategy, canonical domain, existing SEO tools, and available Search Console data. Fetch the deployed or preview responses and rendered pages; do not assume a platform-specific scanner exists.

Start with blockers such as accidental noindex, inaccessible content, wrong canonicals, and broken status codes. A missing sitemap alone does not make all pages unindexable.

## Compare search competitors

When asked to analyze competitors, identify comparable public sites and search intents, then inspect representative search results and landing pages. Compare page types, topics, titles, internal links, and apparent gaps against the user's actual audience and offering. Record the query, market, date, and sources so observations can be checked.

Separate observed rankings and page content from third-party estimates of keywords, search volume, or traffic. Those estimates are incomplete and are not access to a competitor's analytics; distinguish branded from non-branded queries and do not present estimates as exact visits or conversions. If suitable data or tools are unavailable, state the limitation rather than inventing numbers. Prioritize original, useful opportunities instead of copying competitor content.

## Technical checks

- Confirm indexable content is accessible to the intended crawlers. Compare initial HTML and rendered content; choose SSR, static rendering, or prerendering when the target search clients need it.
- Check real 404/redirect responses and canonical handling.
- Use robots.txt for crawler instructions, not privacy or access control. Protect private content with authentication.
- Generate an accurate sitemap for eligible canonical URLs when useful.
- Give public routes appropriate unique titles, descriptions, language, canonicals, and social metadata.
- Read [references/technical-checklist.md](references/technical-checklist.md) for framework-aware verification.
- Read [references/structured-data-patterns.md](references/structured-data-patterns.md) before adding JSON-LD; it must match visible real content.

## Content and AI search

Use clear answers, original facts, accessible structure, real authorship/business information, and source links where relevant.

Read [references/ai-search-and-llms-txt.md](references/ai-search-and-llms-txt.md) before changing AI crawler rules or adding llms.txt.

Search access and model-training access are separate controls. OAI-SearchBot serves ChatGPT search; GPTBot concerns training. Google Search AI features follow normal Search eligibility and do not require a special AI text file.

Treat llms.txt as an optional convention. Do not promise rankings, indexing, or citations from adding it.

## Verify and report

Check actual route responses, rendered metadata, structured-data syntax, navigation, and page performance. Use Search Console evidence for indexing and search outcomes when available; source inspection alone cannot establish them.

Explain technical fixes separately from expected marketing outcomes and note anything requiring a production recheck.

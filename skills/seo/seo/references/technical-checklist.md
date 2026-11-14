# Technical SEO Checks

Use the framework's actual routing and metadata APIs rather than assuming a route filename.

For representative public routes, inspect:
- HTTP status and redirects.
- Initial HTML and rendered content.
- Title, description, canonical, language, and social metadata.
- Internal links and discoverability.
- Accidental noindex or bot restrictions from application, CDN, or hosting.
- Sitemap accuracy where used.
- Image dimensions, useful alternatives, and page performance.

JavaScript rendering support varies by client. Google can render JavaScript, but not every crawler executes the same application successfully. Base rendering decisions on actual requirements and responses.

robots.txt controls crawling, not access to private information. It can also prevent a crawler from reading a page's noindex directive; do not present disallow plus noindex as a universal solution.

Missing sitemaps and particular title lengths are diagnostic signals, not automatic indexing failures. Use Search Console evidence for indexing outcomes when available.

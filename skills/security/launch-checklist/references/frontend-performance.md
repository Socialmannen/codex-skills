# Frontend Performance

Measure the page and user flow before choosing a fix.

## Signals

Core Web Vitals good thresholds are LCP at or below 2.5 seconds, INP at or below 200 milliseconds, and CLS at or below 0.1 at the 75th percentile of field visits.

Lab checks help diagnose, but a throttled Lighthouse run does not establish field Core Web Vitals. Record the URL, tool, device/network settings, and whether evidence is lab or field.

## Investigate

- Initial rendering and main-thread work.
- Largest content, its loading priority, compression, and responsiveness.
- Interaction handlers, long tasks, and unnecessary rerendering.
- Stable dimensions for media and dynamic surfaces.
- Route chunks, dependency duplication, payload size, and excessive JSON.
- Font loading, fallback metrics, render-blocking resources, and caching.

Use a performance budget appropriate to the product. Avoid declaring one total-byte limit mandatory for all applications.

Cache hashed public assets aggressively when supported. Do not apply immutable public caching to HTML that changes in place or to private authenticated data.

Read current [web.dev Web Vitals guidance](https://web.dev/articles/vitals) when interpreting thresholds and metrics.

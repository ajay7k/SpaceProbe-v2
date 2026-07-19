# Performance Budget & Core Web Vitals

To ensure fast rendering, low latency telemetry processing, and excellent search rankings, all components must respect the following performance limits:

---

## 1. Core Web Vitals Targets

- **Lighthouse Performance Score**: `95+` on both desktop and mobile viewports.
- **Largest Contentful Paint (LCP)**: `< 2.0s`
- **First Input Delay (FID)**: `< 100ms` (or Interaction to Next Paint (INP) `< 200ms`)
- **Cumulative Layout Shift (CLS)**: `< 0.05`

---

## 2. Bundles & Asset Strategies

- **Maximum Core JS Bundle Size**: `< 150KB` (gzipped, excluding telemetry data payloads).
- **Lazy Loading**: Route-level modules, heavy charts engines, and modal panels must be loaded lazily using dynamic imports and `<SuspenseWrapper>` loaders.
- **Images Formats**: All local visual assets must be compressed and formatted as WebP or AVIF. Avoid raw PNG or JPG files except for diagrams or transparent telemetry layers.
- **SVGs**: Inline SVGs must be cleaned and compressed using tools like SVGO before integration.

# Design Principles — Visual Constitution

This document defines the layout rules, grid structures, and aesthetic boundaries governing SpaceProbe Website v2.

---

## 1. Grid & Layout Constraints

- **Maximum Content Width**: `1280px` (`--width-container-max`). No text or visual panels should exceed this bound except full-width background textures or canvases.
- **Reading Width**: `680px` (`--width-reading-max`). Articles, descriptions, and text-heavy sections must be clamped to this width to optimize readability.
- **Navbar Height**: `64px` (`--height-navbar`). All sticky layout offsets must align to this value.
- **Section Spacing**: `96px` (`--spacing-section`). Margins between parent layout sections are fixed to preserve consistent breathing room.
- **Grid Philosophy**: Use standard CSS grids with structured gaps (`gap-md` or `gap-lg`). Avoid mixing flexbox alignments for larger multi-column grid arrays.

---

## 2. Aesthetic Constraints & Visual Identity

- **Minimalist Scientific Precision**: Avoid busy, gaming-inspired gradients or starfield assets. Accent colors must be applied selectively to highlight real-time data readings, telemetry charts, and call-to-action anchors.
- **Subtle Glassmorphism**: Glassmorphism is an optional component layer (e.g. navigation elements or modal cards) and is **not** part of the base theme. Keep card containers matte slate (`--color-bg-card`) with fine borders (`--color-border-subtle`).
- **Icons Standard**: Lucide React is the primary icon set. Icons must be wrapped in `IconWrapper` to enforce standard sizes (`xs: 12px`, `sm: 16px`, `md: 20px`) and scientific thin stroke weights (`1.5px`).
- **Animations Limit**: Animation durations must be subtle (`150ms` to `300ms`) using smooth eases. Avoid scrolling triggers that delay user access to information or text layouts.
- **Card Spacing**: Padding inside card panels must be at least `24px` (`--spacing-lg`) on desktop and `16px` (`--spacing-md`) on mobile.

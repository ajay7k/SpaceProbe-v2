# Design System Tokens — SpaceProbe Website v2

This document catalogues the design tokens declared in `src/styles/tokens/` that govern the visual presentation of Website v2.

---

## 1. System Colors (OKLCH Scale)

We employ OKLCH values for dark theme consistency and neon contrast.

| Token | OKLCH Value | Purpose |
| :--- | :--- | :--- |
| `bg-space` | `oklch(0.08 0.01 240)` | Global matte black space background |
| `bg-card` | `oklch(0.12 0.01 240)` | Container and telemetry cards |
| `border-subtle` | `oklch(0.22 0.01 240 / 0.4)` | Subdued high-fidelity borders |
| `accent-cyan` | `oklch(0.78 0.16 200)` | Primary scientific data displays |
| `accent-blue` | `oklch(0.62 0.20 260)` | Selection states & primary buttons |
| `accent-teal` | `oklch(0.74 0.14 170)` | Secondary status conditions |
| `accent-alert` | `oklch(0.60 0.22 25)` | Risk thresholds & active warnings |

---

## 2. Typography Hierarchy

Fonts are loaded locally using `@fontsource` packages.

### Semantic Font Families
- **Display Heading**: `"Outfit", system-ui, sans-serif`
- **Body Text**: `"Inter", system-ui, sans-serif`
- **Monospace Telemetry**: `"Fira Code", monospace` (Reserved strictly for charts, tables, and numeric readings)

### Typography Scale
- `display`: `3.5rem` / Line-Height: `1.1`
- `h1`: `2.25rem` / Line-Height: `1.2`
- `h2`: `1.75rem` / Line-Height: `1.25`
- `h3`: `1.5rem` / Line-Height: `1.3`
- `h4`: `1.25rem` / Line-Height: `1.4`
- `body-large`: `1.125rem` / Line-Height: `1.5`
- `body`: `1.0rem` / Line-Height: `1.6`
- `small`: `0.875rem` / Line-Height: `1.5`
- `caption`: `0.75rem` / Line-Height: `1.4`
- `label`: `0.6875rem` / Line-Height: `1.2`

---

## 3. Spacing Grid (4px-based)

- `xs`: `4px`
- `sm`: `8px`
- `md`: `16px`
- `lg`: `24px`
- `xl`: `32px`
- `xxl`: `48px`
- `xxxl`: `64px`

---

## 4. Radii & Shadows

### Border Radius
- `sm`: `4px`
- `md`: `8px`
- `lg`: `12px`
- `xl`: `16px`

### Elevation & Shadows
- `shadow-raised`: `0 1px 3px rgba(0,0,0,0.4)`
- `shadow-overlay`: `0 4px 12px rgba(0,0,0,0.5)`
- `shadow-glow-cyan`: `0 0 15px oklch(0.78 0.16 200 / 0.15)`

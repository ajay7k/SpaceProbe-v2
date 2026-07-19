# Decisions — Architectural Decision Records (ADR)

This document tracks fundamental architectural decisions made in SpaceProbe Website v2.

---

## ADR 01: Code Quality Tooling Selection

- **Decision**: ESLint flat configuration + Prettier (rather than Biome).
- **Rationale**: ESLint + Prettier remains the industry standard, integrates natively with existing IDE extensions, and ensures compatibility with ShadCN CLI styling and Radix compiler plugins.
- **Status**: Implemented (June 2026).

---

## ADR 02: Deferring Routing and speculatives Providers

- **Decision**: Defer `router.tsx`, `ThemeProvider`, `TooltipProvider`, and `MotionProvider` setup.
- **Rationale**: The visual pages, dark-light theme states, and tooltip features have not yet been approved. Scaffolding them now introduces speculative code. The app boots directly into `providers.tsx` wrapping `main.tsx`.
- **Status**: Implemented (June 2026).

---

## ADR 03: Splitting Design Tokens

- **Decision**: Split Tailwind v4 variables into individual token CSS sheets (`colors.css`, `typography.css`, `spacing.css`, `motion.css`, `shadows.css`).
- **Rationale**: Keeps `globals.css` lightweight and organizes design variables by system context.
- **Status**: Implemented (June 2026).

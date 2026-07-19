# SpaceProbe Website v2 — Roadmap

This roadmap tracks the completed, current, and upcoming phases of **SpaceProbe Website v2**.

---

## Roadmap Overview

```
Phase 1: Project Initialization & Scaffolding [COMPLETED]
    │
    ▼
Phase 2: Foundation & Design System [COMPLETED - CURRENT]
    │
    ▼
Phase 3: Shared UI Component Library [UPCOMING]
    │
    ▼
Phase 4: Domain Modules & Subsystems (Space Weather, Corporate, Research)
    │
    ▼
Phase 5: Performance Optimization & SEO Audit
    │
    ▼
Phase 6: Final Integration, CMS, & Launch
```

---

## Implemented Phases

### Phase 1 — Project Initialization & Scaffolding
- ✅ Scaffold React 19 + TypeScript + Vite project root.
- ✅ Establish folder structure guidelines.
- ✅ Configure ESLint 10 + Prettier.

### Phase 2 — Foundation & Design System
- ✅ Split CSS design tokens (`colors.css`, `typography.css`, `spacing.css`, `motion.css`, `shadows.css`).
- ✅ Build layout primitives (`Container`, `Grid`) and icon utilities.
- ✅ Implement Query client provider and Zod environment validator.
- ✅ Create shared feedback components (`ErrorBoundary`, `SuspenseWrapper`, `GlobalLoading`, `GlobalError`, `EmptyState`).
- ✅ Author visual guidelines, accessibility guidelines, performance budgets, and AI coding instructions.

---

## Upcoming Phases

### Phase 3 — Shared UI Component Library
- **Goal**: Implement reusable, atomic UI primitives consuming design tokens.
- **Milestones**:
  - Integrate ShadCN CLI elements.
  - Implement custom Buttons, Badges, Accordions, Tabs, Tooltips, Tables, inputs, and Skeleton blocks.
  - Test responsiveness and interaction animations on mobile and desktop.

### Phase 4 — Domain Modules & Subsystems
- **Goal**: Build isolated feature domains.
  - **Space Weather Platform**: Ingestion hooks, gauge cards, Recharts wrappers, custom solar wind/proton flux/Kp index charts.
  - **Corporate Website**: Publications search feeds, posters zoom/pan modal, about timeline, UPI payment dialogs.
  - **Education Platform**: User documentation guides.

### Phase 5 — Performance Optimization & SEO Audit
- **Goal**: Polish Lighthouse score and Core Web Vitals.
  - Audit gzipped bundle sizes (< 150KB core JS).
  - Verify semantic metadata, sitemap.xml, robots.txt, and OpenGraph sharing card.

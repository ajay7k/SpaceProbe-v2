# UI Component Registry

This document lists all generic, reusable components slated for development in **Phase 3 — Shared UI Component Library**. All components listed must be built under `src/components/` and consume our design tokens.

---

## 1. Layout & Structure
- **`Container`**: Width constraint node [Done in Phase 2].
- **`Grid`**: Columns flow manager [Done in Phase 2].
- **`Card`**: Standard content board with border styling.
- **`ScrollArea`**: Styled viewport scroll boundaries.

## 2. Buttons & Triggers
- **`Button`**: Primary, secondary, outline, ghost, and danger variations.
- **`IconButton`**: Standard sized button holding icon wrappers.
- **`LinkButton`**: Styled link wrapper acting like a button.

## 3. Data Display & Indicators
- **`Badge`**: Status badge (success, alert, system state).
- **`Tag`**: Category labels for publications or blogs.
- **`Tooltip`**: Floating hover labels.
- **`Table`**: Structured grid for data logs.

## 4. Navigation Controls
- **`Tabs`**: Segment switcher layout.
- **`Accordion`**: Slide-height sections.
- **`Breadcrumbs`**: Hierarchy track paths.

## 5. Forms & Inputs
- **`Input`**: Standard text/number inputs.
- **`Textarea`**: Standard multiline box.
- **`Switch`**: Toggle switch.
- **`Select`**: Dropdown select.

## 6. Feedback & States
- **`GlobalLoading`**: Telemetry loader spinner [Done in Phase 2].
- **`GlobalError`**: Failure alert banner [Done in Phase 2].
- **`EmptyState`**: Filter fallbacks banner [Done in Phase 2].
- **`Toast`**: Slide-in notification banner.
- **`Skeleton`**: Loading skeleton blocks.

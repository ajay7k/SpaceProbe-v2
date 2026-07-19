# Accessibility Standards (a11y)

SpaceProbe Website v2 must be accessible to all users, conforming to **WCAG 2.1 AA** guidelines. Accessibility must be integrated into our components design system from the beginning.

---

## 1. Semantic HTML & Keyboard Navigation

- **Semantic Tags**: Use standard HTML5 elements (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`, `<article>`) instead of nested division boxes (`<div>`).
- **Focus Rings**: Standard visible focus rings are enforced globally on focusable items (`button`, `input`, `a`) via Tailwind `focus-visible:` utilities. Never set `outline: none` without active focus offsets.
- **Keyboard Traps**: Ensure modals and dropdown components capture focus on mount and release focus on escape or outside actions.
- **Interactive Role Controls**: Ensure interactive elements have correct `role` attributes and handle standard key events (e.g. `Space` or `Enter` for button clicks).

---

## 2. Visual Contras & Motion Reduction

- **Contrast Ratios**: Body text color must meet at least `4.5:1` contrast against matte card backgrounds. Text displays on dark cyan must satisfy `3:1`.
- **Motion Reduction**: Respect user system preferences. Respect `prefers-reduced-motion` settings in Framer Motion by checking matching media queries and disabling animations dynamically.
- **Touch Targets**: Mobile interactive buttons, links, and switches must sustain a minimum touch target area of `44px x 44px`.

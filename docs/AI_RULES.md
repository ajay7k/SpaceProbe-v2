# AI Development Rules

This document governs all future AI-assisted code generation sessions in this repository. AI agents must load and follow these constraints strictly before making any code edits.

---

## 1. Quality & Design Directives

- **Zero Duplications**: Never duplicate UI components, math formatters, or chart engines. Check the `docs/component_registry.md` first.
- **Consume Design Tokens**: Never hardcode hex colors, pixel paddings, border radius, or transition eases. Always read parameters from our Tailwind v4 custom theme classes.
- **No Speculative Abstractions**: Implement only what is requested in the active development phase. Avoid creating "future-proof" layers that remain unused today.
- **Maintain Accessibility**: Ensure semantic tags, keyboard focus rings, and proper touch targets are maintained on all new React elements.
- **Component Size Limit**: Keep React components compact. A single file should not exceed `250 lines` of code. Split complex sub-nodes into atomic helper units.

---

## 2. Process Requirements

- **Read Docs First**: Always read `START_HERE.md` and `PROJECT_RULES.md` before starting a task.
- **Update Documentation**: If any code modifications affect architecture, folder hierarchy, or design system tokens, update the corresponding documentation files immediately.
- **Strict Typing**: Never use `any` type definitions. Write complete TypeScript models.
- **Code Style**: Avoid inline styling attributes (`style={{ ... }}`). Use Tailwind v4 classes and utilities.

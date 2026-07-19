# Project Rules — Architectural Boundaries

To preserve long-term maintainability and prevent code bleeding as SpaceProbe Website v2 expands, all development must adhere to these structural boundaries:

## 1. Domain Isolation

- Code under `/src/domains/<domain-name>/` must not import files directly from another domain.
- Cross-domain interactions are strictly prohibited. Sharing must occur via generic layouts, shared constants, or layout primitives under `/src/components/`.

## 2. Dependency Controls

- Defer importing heavy visualization packages (Three.js, R3F) until visual components requiring them are approved.
- Avoid installing client-side packages unless they cannot be reasonably built using our React 19 + Tailwind v4 primitives.
- Incremental components installation (e.g. Radix primitives) must proceed through the ShadCN CLI.

## 3. Composition Principles

- Prefer composition over inheritance. Wrap UI primitives in flexible layout nodes rather than creating monolithic nested objects.
- Keep components focused, atomic, and small. If a file exceeds 250 lines, isolate sub-nodes into helper folders.

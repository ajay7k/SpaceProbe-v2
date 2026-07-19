# Engineering Standards

To ensure long-term codebase health, all developers and AI models must write code that conforms to the following standards:

---

## 1. Naming Conventions

- **Component Folders**: Kebab-case naming (e.g. `src/components/layout/`, `src/components/shared/`).
- **Component Files**: PascalCase naming (e.g. `Container.tsx`, `GlobalLoading.tsx`).
- **Hooks & Utilities**: Kebab-case naming (e.g. `use-media-query.ts`, `icon-utils.tsx`).
- **Styles & Configs**: Kebab-case naming (e.g. `colors.css`, `env.ts`).

---

## 2. Import Ordering (Prettier Integrated)

All imports must follow this structure, separated by a blank line:

1. React core libraries (`react`, `react-dom`).
2. Third-party packages (Framer Motion, TanStack Query, Lucide Icons).
3. Workspace path alias imports (components, hooks, constants: `@/...`).
4. Relative local file imports (`./style.css`).

```typescript
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';
```

---

## 3. Documentation Conventions

- **Component Comments**: Document all component props using standard TSDoc formatting.
- **Explain "Why", Not "What"**: Comments must justify complex logic, performance trade-offs, and mathematics formulas, instead of simply repeating what the code is doing.
- **Maintain JSDocs**: Include JSDoc blocks above exported utility functions, hooks, and services.

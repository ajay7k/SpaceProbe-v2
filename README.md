# SpaceProbe V2

> The next-generation web platform for SpaceProbe — bridging the gap between cutting-edge space research and real-world applications through technology, GIS, and outreach.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/framer--motion-%230055FF.svg?style=for-the-badge&logo=framer&logoColor=white)

This repository contains the source code for the **SpaceProbe V2** corporate website. It is designed to feel like a premium deep-tech aerospace company (SpaceX + NASA JPL + Apple + Linear) rather than a generic SaaS landing page. It uses an elegant, dark-mode-first aesthetic with bespoke framer-motion interactions.

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (Beta)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Data Fetching/State:** TanStack React Query v5
- **Linting & Formatting:** ESLint, Prettier, Husky (lint-staged)

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone git@github.com:arnavpotale/SpaceProbe-v2.git
   cd "SpaceProbe v2"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

## 📜 Available Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Compiles TypeScript and builds the app for production.
- `npm run lint` - Runs ESLint to find issues in the codebase.
- `npm run format` - Formats all source files using Prettier.
- `npm run typecheck` - Runs the TypeScript compiler to check for type errors without emitting files.
- `npm run prepare` - Initializes Husky pre-commit hooks.

## 🎨 Design System & Architecture

- **Typography:** The app uses `Outfit` for display headings, `Inter` for body copy, and `Fira Code` for monospace snippets.
- **Tokens:** Semantic design tokens are configured in `src/styles/tokens/`.
- **Motion:** Global physics-based springs and custom easing curves (`[0.16, 1, 0.3, 1]`) are heavily utilized to achieve a buttery-smooth, premium feel.
- **Structure:**
  - `src/components/home/` - Homepage specific components and bespoke interactive sections.
  - `src/components/layout/` - Global layout wrappers like `Navbar` and `Footer`.
  - `src/content/` - Centralized content configurations for easy updates.

## 🤝 Contributing

Ensure that you have Husky hooks enabled so that files are automatically linted and formatted upon commit. Before submitting a PR, always verify the build:
```bash
npm run typecheck && npm run lint && npm run build
````

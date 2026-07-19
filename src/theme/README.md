# Theme System Architecture

The `/src/theme/` directory is reserved for theme context provider structures and multi-theme mapping tokens (e.g. Light mode / Dark mode).

## Guidelines

- All component styling must consume variables from the CSS tokens under `/src/styles/tokens/`.
- Defer implementing a custom `ThemeProvider` or `ThemeContext` here until multiple themes (light, dark, system-default) are approved and finalized.
- When implemented, `ThemeContext` should expose the current theme state, and toggle handles.

# Domain-Driven Architecture

The `/src/domains/` directory isolates distinct business segments of the SpaceProbe digital ecosystem.

## Guidelines

- All domain modules should remain isolated and independent.
- Do not import components directly between different domains. Sharing should only happen via global primitives under `/src/components/`.
- Create domain folders only when their active feature development begins.

## Intended Domains

1. **`space-weather`**: Renders telemetry charts, gauges, NOAA alerts, and timezone selectors.
2. **`corporate`**: Handles company profile details, publications grids, research posters, and UPI QR support modals.
3. **`education`**: Houses public learning guides and community science programs.

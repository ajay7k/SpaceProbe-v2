# Services Layer

The `/src/services/` directory is reserved for third-party client integrations, data fetch coordinators, and telemetry loggers.

## Guidelines

- Document service dependencies and credentials here.
- Implement clients (e.g. `api-client.ts`, `logger.ts`) only when actual backend data orchestration begins.
- Components should interact with services indirectly (e.g., via React Query hooks) rather than importing raw clients directly, keeping presentation logic isolated.

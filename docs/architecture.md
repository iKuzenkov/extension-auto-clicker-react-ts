# Architecture

The project uses:

- reusable UI components
- custom React hooks
- Redux Toolkit slices
- isolated business logic
- TypeScript typing across the entire project

The codebase is separated into:

- UI
- hooks
- logic
- state management
- storage utilities

State management is split by concern: Redux Toolkit holds client/UI state, while React Query handles server-state (data fetching, loading/error state, caching) — see [Fetch API Integration](./fetch-api-integration.md).
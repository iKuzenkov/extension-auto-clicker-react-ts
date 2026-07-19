# Fetch API Integration

The project includes a small API integration example.

Used for:

- loading "How to Use" information dynamically
- external JSON data rendering

Data is fetched from a GitHub-hosted JSON file.

## React Query

Data fetching is handled by [`@tanstack/react-query`](https://tanstack.com/query) instead of manual `useEffect`/`useState` fetch logic.

Setup:

- `QueryClient` is created once in `src/query/queryClient.ts`
- `QueryClientProvider` wraps the app in `src/content.tsx`, alongside the Redux `Provider`

Usage (`src/modules/how-to-use/MoreInfo/MoreInfo.tsx`):

```txt
useQuery({
  queryKey: ['more-info'],
  queryFn: infoData,
});
```

`infoData` (`src/modules/how-to-use/MoreInfo/data/infoData.ts`) still calls the low-level `getFetchData` helper (`src/api/get-fetch-data-api/getFetchData.ts`) — React Query only replaces the loading/error/caching layer around that fetch, not the fetch itself.

Why React Query:

- automatic loading (`isPending`) and error (`isError`) state
- response caching by `queryKey`, so repeated visits to "How to Use" don't refetch
- automatic retry on failure
- less manual state management than the previous `useEffect` + `useState` approach

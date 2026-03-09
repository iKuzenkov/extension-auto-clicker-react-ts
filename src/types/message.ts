export type AutoClickerMessage =
  | { action: 'toggle-auto-clicker'; autoClickerVisible?: boolean }
  | { action: 'get-auto-clicker-state' };

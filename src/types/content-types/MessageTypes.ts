export type MessageTypes =
  | { action: 'toggle-auto-clicker'; autoClickerVisible?: boolean }
  | { action: 'get-auto-clicker-state' };

export type AutoClickerStateResponse = {
  autoClickerVisible: boolean;
};

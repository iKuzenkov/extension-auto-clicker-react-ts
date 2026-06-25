export type MessageTypes =
  | { action: 'acext-toggle-auto-clicker-ss'; autoClickerVisible?: boolean }
  | { action: 'acext-get-auto-clicker-state-ss' };

export type AutoClickerStateResponse = {
  autoClickerVisible: boolean;
};

export type Theme = 'light' | 'dark' | 'on light' | 'on dark';
export type HideShow = boolean;
export type Message = string;

export type SelectedElement = HTMLElement | null;
export type Time = {
  hour: string;
  minute: string;
  second: string;
};
export type KeysFromTime = keyof Time;
export type Delay = number | null;

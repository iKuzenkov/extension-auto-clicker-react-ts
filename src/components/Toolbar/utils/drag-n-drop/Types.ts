import type { RefObject } from 'react';

export type Props = {
  panelRef: RefObject<HTMLDivElement | null>;
  dragHandleRef: RefObject<HTMLButtonElement | null>;
};

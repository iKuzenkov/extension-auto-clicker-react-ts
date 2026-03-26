import type { RefObject } from 'react';

export type Props = {
  onClick?: () => void;
  title: string;
  ref?: RefObject<HTMLButtonElement | null>;
};

import type { Theme } from '../../../types/global-state-types/GlobalTypes';

export type Props = {
  onClick?: () => void;
  title: string;
  theme: Theme;
};

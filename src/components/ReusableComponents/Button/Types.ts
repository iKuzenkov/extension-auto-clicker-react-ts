import type { Theme } from '../../../types/global-state-types/GlobalTypes';

export type Props = {
  text: string;
  onClick?: () => void;
  'aria-label'?: string;
  title: string;
  theme?: Theme;
  cursor?: string;
};

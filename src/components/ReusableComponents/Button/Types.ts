import type { Theme } from '../../../types/global-state-types/GlobalTypes';

export type Props = {
  onClick?: () => void;
  text: string;
  title: string;
  theme?: Theme;
  cursor?: string;
  'aria-label'?: string;
};

import type { KeysFromTime } from '../../types/global-state-types/GlobalTypes';

export type Props = {
  name: KeysFromTime | 'quantity';
  value: string;
  'aria-label': string;
  title: string;
  placeholder: string;
};

import type { Delay } from '../../../types/global-state-types/GlobalTypes';

function delayInMilliseconds(h: number, m: number, s: number): Delay {
  if (h > 10000 || m > 59 || s > 59) return null;
  if (h === 0 && m === 0 && s === 0) return null;
  return (h * 3600 + m * 60 + s) * 1000;
}

export default delayInMilliseconds;

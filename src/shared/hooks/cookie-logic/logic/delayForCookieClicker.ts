import type { Delay } from '../../../types/global-state-types/GlobalTypes';

function delayForCookieClicker(delay: Delay, numberOfClicks: number) {
  if (delay === null || numberOfClicks === null) return null;
  if (numberOfClicks === 0 || numberOfClicks > 1000) return null;
  const result: number = delay / numberOfClicks;
  return result;
}

export default delayForCookieClicker;

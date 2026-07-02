import type { Delay } from '../../../types/global-state-types/GlobalTypes';

function delayForCookieClicker(delay: Delay, numberOfClicks: number) {
  if (delay === null) return null;
  if (numberOfClicks === 0 || numberOfClicks > 1000) return null;
  const delayBetweenClicksMs: number = delay / numberOfClicks;
  return delayBetweenClicksMs;
}

export default delayForCookieClicker;

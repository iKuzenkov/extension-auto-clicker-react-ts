import delayForCookieClicker from './delayForCookieClicker';
import type { Delay } from '../../../types/global-state-types/GlobalTypes';

describe('delayForCookieClicker', () => {
  it('should be returns ms', () => {
    const mockData = {
      ms: 300000,
      numberOfClicks: 10,
    };
    const { ms, numberOfClicks } = mockData;

    const result: Delay = delayForCookieClicker(ms, numberOfClicks);
    expect(result).toBe(30000);
  });

  it('should be returns null', () => {
    const mockData = {
      ms: 300000,
      numberOfClicks: 0,
    };
    const { ms, numberOfClicks } = mockData;

    const result: Delay = delayForCookieClicker(ms, numberOfClicks);
    expect(result).toBeNull();
  });
});

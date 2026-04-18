import delayInMilliseconds from './delay-in-milliseconds';
import type { Delay } from '../../../types/global-state-types/GlobalTypes';

describe('delayInMilliseconds()', () => {
  it('should return correct milliseconds for valid time', () => {
    const mockTime = {
      h: 1,
      m: 4,
      s: 10,
    };
    const { h, m, s } = mockTime;

    const delay: Delay = delayInMilliseconds(h, m, s);
    expect(delay).toBe(3850000);
  });
  it('should return null for invalid time', () => {
    const mockTime = {
      h: 1,
      m: 60,
      s: 10,
    };
    const { h, m, s } = mockTime;

    const delay: Delay = delayInMilliseconds(h, m, s);
    expect(delay).toBeNull();
  });
});

import delayInMilliseconds from './delay-in-milliseconds';
import type { Delay } from '../../../types/global-state-types/GlobalTypes';

describe('delayInMilliseconds() - correct data', () => {
  it('should return the correct data, all data is entered', () => {
    const mockTime = {
      h: 1,
      m: 4,
      s: 10,
    };
    const { h, m, s } = mockTime;

    const delay: Delay = delayInMilliseconds(h, m, s);
    expect(delay).toBe(3850000);
  });
  it('should return the correct data, all data is entered except hours', () => {
    const mockTime = {
      h: 0,
      m: 1,
      s: 5,
    };
    const { h, m, s } = mockTime;

    const delay: Delay = delayInMilliseconds(h, m, s);
    expect(delay).toBe(65000);
  });
  it('should return the correct data, all data is entered except minutes', () => {
    const mockTime = {
      h: 3,
      m: 0,
      s: 5,
    };
    const { h, m, s } = mockTime;

    const delay: Delay = delayInMilliseconds(h, m, s);
    expect(delay).toBe(10805000);
  });
  it('should return the correct data, all data is entered except seconds', () => {
    const mockTime = {
      h: 112,
      m: 59,
      s: 0,
    };
    const { h, m, s } = mockTime;

    const delay: Delay = delayInMilliseconds(h, m, s);
    expect(delay).toBe(406740000);
  });
});

describe('delayInMilliseconds() - incorrect data', () => {
  it('should return null, minutes is incorrect', () => {
    const mockTime = {
      h: 1,
      m: 60,
      s: 10,
    };
    const { h, m, s } = mockTime;

    const delay: Delay = delayInMilliseconds(h, m, s);
    expect(delay).toBeNull();
  });
  it('should return null, all data is empty', () => {
    const mockTime = {
      h: 0,
      m: 0,
      s: 0,
    };
    const { h, m, s } = mockTime;

    const delay: Delay = delayInMilliseconds(h, m, s);
    expect(delay).toBeNull();
  });
});

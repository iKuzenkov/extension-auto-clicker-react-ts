import delayInSeconds from './delay-in-seconds';

describe('delayInSeconds()', () => {
  it('should return correct seconds for valid time', () => {
    const mockTime = {
      h: 1,
      m: 4,
      s: 10,
    };
    const { h, m, s } = mockTime;

    const delay: number | null = delayInSeconds(h, m, s);
    expect(delay).toBe(3850);
  });
  it('should return null for invalid time', () => {
    const mockTime = {
      h: 1,
      m: 60,
      s: 10,
    };
    const { h, m, s } = mockTime;

    const delay: number | null = delayInSeconds(h, m, s);
    expect(delay).toBeNull();
  });
});

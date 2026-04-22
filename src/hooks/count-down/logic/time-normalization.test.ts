import timeNormalization from './time-normalization';

describe('timeNormalization() - should return a string, expect correct time in hours, minutes, and seconds', () => {
  it('should return a string, the type is the correct time - 01h:01m:05s', () => {
    const ms: number = 3665000;
    const result: string = timeNormalization(ms);
    expect(result).toBe('01h:01m:05s');
  });
  it('should return a string, the type is the correct time - 111h:59m:58s', () => {
    const ms: number = 403198999.92;
    const result: string = timeNormalization(ms);
    expect(result).toBe('111h:59m:58s');
  });
});

describe('timeNormalization() - should return a string, expect correct time in hours', () => {
  it('should return a string, the type is the correct time - 01h:00m:00s', () => {
    const ms: number = 3600000;
    const result: string = timeNormalization(ms);
    expect(result).toBe('01h:00m:00s');
  });
});

describe('timeNormalization() - should return a string, expect correct time in minutes', () => {
  it('should return a string, the type is the correct time - 00h:07m:59s', () => {
    const ms: number = 479999.88;
    const result: string = timeNormalization(ms);
    expect(result).toBe('00h:07m:59s');
  });
  it('should return a string, the type is the correct time - 00h:12m:00s', () => {
    const ms: number = 720000;
    const result: string = timeNormalization(ms);
    expect(result).toBe('00h:12m:00s');
  });
});

describe('timeNormalization() - should return a string, expect correct time in seconds', () => {
  it('should return a string, the type is the correct time - 00h:00m:45s', () => {
    const ms: number = 45000;
    const result: string = timeNormalization(ms);
    expect(result).toBe('00h:00m:45s');
  });
  it('should return a string, the type is the correct time - 00h:00m:57s', () => {
    const ms: number = 57999.96;
    const result: string = timeNormalization(ms);
    expect(result).toBe('00h:00m:57s');
  });
});

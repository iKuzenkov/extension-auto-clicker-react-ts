function delayInSeconds(h: number, m: number, s: number): number | null {
  if (h > 10000 || m > 59 || s > 59) return null;
  return h * 3600 + m * 60 + s;
}

export default delayInSeconds;

function timeNormalization(countDownState: number): string {
  const totalSeconds: number = Math.floor(countDownState / 1000);
  const h: number = Math.floor(totalSeconds / 3600);
  const m: number = Math.floor((totalSeconds % 3600) / 60);
  const s: number = totalSeconds % 60;

  const format = (n: number): string => String(n).padStart(2, '0');

  return `${format(h)}h:${format(m)}m:${format(s)}s`;
}
export default timeNormalization;

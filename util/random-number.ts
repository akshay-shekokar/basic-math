export function randomNumFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

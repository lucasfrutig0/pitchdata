export function calculateAccuracy(total: number, success: number): number {
  return Math.abs(Number(((success / total) * 100).toFixed(0)))
}

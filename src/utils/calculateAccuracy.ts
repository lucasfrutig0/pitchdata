export function calculateAccuracy(
  totalShots: number,
  successfulShots: number
): number {
  console.log(successfulShots)
  return Math.abs(Number(((successfulShots / totalShots) * 100).toFixed(0)))
}

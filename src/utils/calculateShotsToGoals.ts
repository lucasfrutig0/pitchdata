export let averageShotsPerGoal = 0

export const calculateAverageShotsPerGoal = (shots: number, goals: number) => {
  return (averageShotsPerGoal = Math.abs(Number((shots / goals).toFixed(1))))
}

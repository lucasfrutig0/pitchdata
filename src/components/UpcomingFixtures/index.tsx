import { CarouselFixtures } from './CarouselFixtures'

interface UpcomingFixturesProps {
  currentRound: number
  allRounds: number
}

export function UpcomingFixtures({
  currentRound,
  allRounds
}: UpcomingFixturesProps) {
  return (
    <article className='rounded-xl bg-zinc-100 dark:bg-accent-dark px-2 md:px-6 py-4 space-y-4'>
      <h4 className='text-md md:text-xl font-bold'>Fixtures</h4>

      <CarouselFixtures currentRound={currentRound} allRounds={allRounds} />
    </article>
  )
}

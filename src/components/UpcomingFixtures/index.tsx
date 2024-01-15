import { ChangeRoundButton } from './ChangeRoundButton'

export function UpcomingFixtures() {
  return (
    <article className='rounded-xl bg-zinc-100 dark:bg-accent-dark px-6 py-4 space-y-4'>
      <h4 className='text-md md:text-xl font-bold'>Upcoming Fixtures</h4>
      <ChangeRoundButton />
    </article>
  )
}

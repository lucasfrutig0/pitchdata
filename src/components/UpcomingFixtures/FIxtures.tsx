import { AwayTeam } from './AwayTeam'
import { FixtureInfo } from './FixtureInfo'
import { HomeTeam } from './HomeTeam'

export function Fixtures() {
  return (
    <article className='w-full lg:max-w-[350px] flex flex-col items-center justify-center rounded-xl bg-white dark:bg-hard-dark mx-auto p-4 gap-2'>
      <div className='w-full flex justify-center items-center text-xs'>
        <FixtureInfo />
      </div>
      <div className='w-full flex justify-center items-center'>
        <HomeTeam />
        <div className='flex gap-x-2 text-xs'>
          <span className='font-bold'>2</span>
          <span className='text-md font-semibold'>x</span>
          <span className='font-bold'>4</span>
        </div>
        <AwayTeam />
      </div>
      <div className='w-full flex justify-center items-center'>
        <button className='font-medium hover:brightness-200 text-xs'>
          Details
        </button>
      </div>
    </article>
  )
}

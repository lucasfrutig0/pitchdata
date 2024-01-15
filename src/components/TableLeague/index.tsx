import { Table } from './Table'

export function LeagueTable() {
  return (
    <article className='rounded-xl bg-zinc-100 dark:bg-accent-dark px-6 py-4 space-y-4'>
      <h4 className='text-md md:text-xl font-bold'>Table</h4>
      <div>
        <Table />
      </div>
    </article>
  )
}

interface TopCardProps {
  title: string
  src?: string
}

export function TopCard({
  title,
  src = 'https://media.api-sports.io/football/players/1100.png'
}: TopCardProps) {
  return (
    <article className='w-[350px] rounded-xl bg-zinc-100 dark:bg-accent-dark px-6 py-4 space-y-4'>
      <h4 className='text-md md:text-xl font-bold'>{title}</h4>

      <div className='flex gap-x-4 gap-y-2'>
        <img
          src={src}
          // src='https://picsum.photos/200'
          alt='goal'
          className='w-20 h-20 flex-shrink-0'
        />
        <div className='flex-1 flex flex-col'>
          <span className='text-lg font-bold leading-6'>Earling Haaland</span>
          <span className='text-md font-semibold'>ST</span>
          <span>Manchester City</span>
          <span className='self-end text-5xl font-bold'>14</span>
        </div>
      </div>
    </article>
  )
}

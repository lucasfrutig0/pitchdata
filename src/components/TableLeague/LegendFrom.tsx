import { v4 as uuidv4 } from 'uuid'
interface LegendFromProps {
  data: string
}

const classNames = (letter: string) => {
  if (letter === 'W') {
    return 'bg-green-500'
  } else if (letter === 'D') {
    return 'bg-zinc-500'
  } else {
    return 'bg-red-500'
  }
}

export function LegendFrom({ data }: LegendFromProps) {
  return (
    <div className='flex gap-1'>
      {data.split('').map((letter) => (
        <div
          key={uuidv4()}
          className={`w-2 h-2 rounded-full ${classNames(letter)}`}
        ></div>
      ))}
    </div>
  )
}

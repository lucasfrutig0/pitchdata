// const data = await fetch(
//   '/api/standings/' + window.location.pathname.split('/')[2]
// ).then((response) => response.json())

// console.log('DATAAAA', data)
import { standings } from '@/utils/data/standings'
import { LegendFrom } from './LegendFrom'

export function TableBody() {
  if (!standings) {
    return 'Loading ...'
  }
  return (
    <tbody>
      <>
        {standings.map((team) => (
          <tr
            key={team.team}
            className={`text-right ${
              team.zone?.includes('Promotion')
                ? 'bg-green-700/10'
                : team.zone?.includes('Relegation')
                  ? 'bg-red-700/10'
                  : ''
            }`}
          >
            <td className='text-center p-4'>{team.position} </td>
            <td key={team.team} colSpan={4}>
              <div className='flex items-center text-left gap-x-2 flex-shrink-0'>
                <img
                  src={team.logo}
                  alt={team.team}
                  className='h-5 w-5 flex justify-center items-center flex-shrink-0 rounded-full'
                  width={32}
                  height={32}
                />
                <span>{team.team}</span>
              </div>
            </td>
            <td className='p-4'>{team.mp}</td>
            <td className='p-4'>{team.pts}</td>
            <td className='p-4'>{team.w}</td>
            <td className='p-4'>{team.d}</td>
            <td className='p-4'>{team.l}</td>
            <td className='p-4'>{team.gf}</td>
            <td className='p-4'>{team.ga}</td>
            <td className='p-4'>{team.gd}</td>

            <td className='text-center p-4' colSpan={2}>
              <LegendFrom data={team.form} />
            </td>
          </tr>
        ))}
      </>
    </tbody>
  )
}

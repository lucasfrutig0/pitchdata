import { TableBody } from './TableBody'
import { TableHead } from './TableHead'

export function Table() {
  return (
    <table className='w-full table-auto'>
      <TableHead />
      <TableBody />
    </table>
  )
}

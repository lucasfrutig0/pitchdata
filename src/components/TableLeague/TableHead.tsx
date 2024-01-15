export function TableHead() {
  return (
    <thead>
      <tr className='text-right'>
        <th title='Position' className='text-center p-4'>
          Position
        </th>
        <th title='Team name' colSpan={4} className='text-left p-4'>
          Team
        </th>
        <th title='Matches Played' className='p-4'>
          MP
        </th>
        <th title='Points' className='p-4'>
          PTS
        </th>
        <th title='Wins' className='p-4'>
          W
        </th>
        <th title='Draws' className='p-4'>
          D
        </th>
        <th title='Losses' className='p-4'>
          L
        </th>
        <th title='Goals For' className='p-4'>
          F
        </th>
        <th title='Goals Against' className='p-4'>
          A
        </th>
        <th title='Goal Difference' className='p-4'>
          GD
        </th>

        <th
          title='Results of previous games'
          className='text-center p-4'
          colSpan={2}
        >
          From
        </th>
      </tr>
    </thead>
  )
}

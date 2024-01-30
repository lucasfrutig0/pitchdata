import type { StandingsData } from '@/@types/standings'

export const getStandingsByLeagueId = async (season: number, id: number) => {
  try {
    const response = await fetch(
      'https://v3.football.api-sports.io/standings?league=' +
        id +
        '&season=' +
        season,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-apisports-key': import.meta.env.API_KEY
        }
      }
    )
    // network error in the 4xx–5xx range
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    // use response here if we didn't throw above
    const data = await response.json()
    const standings = (await data.response[0].league
      .standings[0]) as unknown as StandingsData
    return standings
  } catch (error) {
    console.error(error)
  }
}

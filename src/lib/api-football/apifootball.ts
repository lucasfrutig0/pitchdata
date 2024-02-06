import type { StandingsData } from '@/@types/standings'
import { apiFootballHeader } from './apiFootballHeader'
import { leagues } from '@/utils/data/leagues'

export const getStandingsByLeagueId = async (season: number, id: number) => {
  try {
    const response = await fetch(
      import.meta.env.PUBLIC_API_FOOTBALL_URL +
        '/standings?league=' +
        id +
        '&season=' +
        season,
      {
        headers: apiFootballHeader
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

export const getAllRounds = (leagueSlug: string) => {
  const allRounds = leagues.find((league) => league.slug === leagueSlug)?.rounds
  return allRounds
}

export const getCurrentLeaguetRound = async (
  season: number,
  leagueId: number
) => {
  try {
    const response = await fetch(
      import.meta.env.PUBLIC_API_FOOTBALL_URL +
        '/fixtures/rounds?league=' +
        leagueId +
        '&season=' +
        season +
        '&current=true',
      {
        headers: apiFootballHeader
      }
    )

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const result = await data.response[0].match(/\d+/g)![0]
    console.log(result)
    return result
  } catch (error) {
    console.error(error)
  }
}

export const loadFixturesPerRound = async (
  season: number,
  leagueId: number,
  round: string
) => {
  try {
    const response = await fetch(
      import.meta.env.PUBLIC_API_FOOTBALL_URL +
        '/fixtures?league=' +
        leagueId +
        '&season=' +
        season +
        '&round=' +
        'Regular Season - ' +
        round,
      {
        headers: apiFootballHeader
      }
    )
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    const data = await response.json()
    console.log('data', data)
    return data
  } catch (error) {
    console.error(error)
  }
}

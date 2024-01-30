import type { APIRoute } from 'astro'
import { leagues } from '@/utils/data/leagues'

const fetchData = async (season: number, id: number) => {
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
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const GET: APIRoute = async ({ request }) => {
  const slug = new URL(request.url).pathname.split('/').slice(1)[2]
  const leagueID = leagues.find((league) => league.slug === slug)

  const data = await fetchData(2023, leagueID?.id as number)

  // const transformedData = data?.response[0].league.standings[0].map(
  //   (team: any) => {
  //     return {
  //       position: team.rank,
  //       team: team.team.name,
  //       logo: team.team.logo,
  //       mp: team.all.played,
  //       w: team.all.win,
  //       d: team.all.draw,
  //       l: team.all.lose,
  //       gf: team.all.goals.for,
  //       ga: team.all.goals.against,
  //       gd: team.goalsDiff,
  //       pts: team.points,
  //       form: team.form,
  //       zone: team.description,
  //       status: team.status
  //     }
  //   }
  // )

  return new Response(
    JSON.stringify({
      league: data?.response[0].league.standings[0]
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

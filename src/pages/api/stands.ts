import { fetchData } from '@/lib/api-football/apifootball'
import { leagues } from '@/utils/data/leagues'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request, url }) => {
  const slug = url.pathname.split('/')[2]

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

import type { StandingsData } from '@/@types/standings'
import { getStandingsByLeagueId } from '@/lib/api-football/apifootball'
import { leagues } from '@/utils/data/leagues'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request, url }) => {
  const slug = url.pathname.split('/')[2]

  const leagueID = leagues.find((league) => league.slug === slug)?.id

  const data = await getStandingsByLeagueId(2023, leagueID as number)

  return new Response(
    JSON.stringify({
      league: data as StandingsData
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

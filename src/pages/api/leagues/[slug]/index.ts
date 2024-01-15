import type { APIRoute } from 'astro'
import { leagues } from '@/utils/data/leagues'

export const GET: APIRoute = ({ request }) => {
  const slug = new URL(request.url).pathname.split('/').slice(1)[2]

  const leagueSelected = leagues.find((league) => league.slug === slug)
  return new Response(
    JSON.stringify({
      league: leagueSelected
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

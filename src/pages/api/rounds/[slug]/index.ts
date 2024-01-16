import type { APIRoute } from 'astro'
import { leagues } from '@/utils/data/leagues'

async function fetchCurrentRound(season: number, leagueID: number) {
  try {
    const response = await fetch(
      'https://v3.football.api-sports.io/fixtures/rounds?season=' +
        season +
        '&league=' +
        leagueID +
        '&current=true',
      {
        headers: {
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
    console.error('asdads', error)
  }
}

export const GET: APIRoute = async ({ request }) => {
  const slug = new URL(request.url).pathname.split('/').slice(1)[2]
  const leagueID = leagues.find((league) => league.slug === slug)
  const { response } = await fetchCurrentRound(2023, leagueID?.id as number)
  return new Response(
    JSON.stringify({
      rounds: response
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

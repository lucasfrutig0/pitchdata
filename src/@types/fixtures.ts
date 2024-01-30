import type { Goals } from './goals'
import type { Teams } from './teams'

export type Fixture = {
  id: number
  referee: string
  timezone: string
  date: string
  timestamp: number
  periods: {
    first: number
    second: number
  }
  venue: {
    id: number
    name: string
    city: string
  }
  status: {
    long: string
    short: string
    elapsed: number
  }
}

export type ResponseLast3Fixtures = {
  response: [
    {
      fixture: Fixture
    },
    teams: Teams,
    goals: Goals
  ]
}

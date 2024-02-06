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

interface Venue {
  id: number
  name: string
  city: string
}

interface Status {
  long: string
  short: string
  elapsed: number
}

interface Periods {
  first: number
  second: number
}

interface Team {
  id: number
  name: string
  logo: string
  winner: boolean | null
}

interface Score {
  halftime: {
    home: number
    away: number
  }
  fulltime: {
    home: number
    away: number
  }
  extratime: {
    home: null
    away: null
  }
  penalty: {
    home: null
    away: null
  }
}

interface Fixtures {
  id: number
  referee: string
  timezone: string
  date: string
  timestamp: number
  periods: Periods
  venue: Venue
  status: Status
}

interface League {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
  round: string
}

interface Teams {
  home: Team
  away: Team
}

interface Goals {
  home: number
  away: number
}

export interface DataFixtures {
  fixture: Fixture
  league: League
  teams: Teams
  goals: Goals
  score: Score
}

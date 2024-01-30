export type Standings = {
  position: number
  team: string
  logo: string
  mp: number
  w: number
  d: number
  l: number
  gf: number
  ga: number
  gd: number
  pts: number
  zone: string | null
  form: string
}

export type StandingsData = Array<Standing>

export type Standing = {
  rank: number
  team: Team
  points: number
  goalsDiff: number
  group: string
  form: string
  status: string
  description: string | null
  all: Stats
  home: Stats
  away: Stats
  update: string
}

export type Team = {
  id: number
  name: string
  logo: string
}

export type Goals = {
  for: number
  against: number
}

export type Stats = {
  played: number
  win: number
  draw: number
  lose: number
  goals: Goals
}

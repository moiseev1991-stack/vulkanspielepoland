export interface Match {
  id: string
  sport: string
  league: string
  team1: string
  team2: string
  score1?: number
  score2?: number
  isLive: boolean
  time: string
  odds: { home: number; draw: number; away: number }
  minuteOrPeriod?: string
}

export const matches: Match[] = [
  {
    id: 'psg-liverpool',
    sport: 'Piłka Nożna',
    league: 'Liga Mistrzów UEFA',
    team1: 'PSG',
    team2: 'Liverpool',
    isLive: false,
    time: '22:00',
    odds: { home: 2.45, draw: 3.20, away: 2.80 },
  },
  {
    id: 'goztepe-galatasaray',
    sport: 'Piłka Nożna',
    league: 'Turcja. Super Lig',
    team1: 'Goztepe SK',
    team2: 'Galatasaray SK',
    score1: 0,
    score2: 2,
    isLive: true,
    time: 'LIVE',
    minuteOrPeriod: "28'",
    odds: { home: 28.28, draw: 12.32, away: 1.04 },
  },
  {
    id: 'rizespor-samsunspor',
    sport: 'Piłka Nożna',
    league: 'Turcja. Super Lig',
    team1: 'Caykur Rizespor',
    team2: 'Samsunspor',
    isLive: false,
    time: '19:00',
    odds: { home: 2.10, draw: 3.15, away: 3.40 },
  },
  {
    id: 'besiktas-antalyaspor',
    sport: 'Piłka Nożna',
    league: 'Turcja. Super Lig',
    team1: 'Besiktas',
    team2: 'Antalyaspor',
    isLive: false,
    time: '17:00',
    odds: { home: 1.65, draw: 3.60, away: 5.50 },
  },
  {
    id: 'braga-betis',
    sport: 'Piłka Nożna',
    league: 'Liga Europy UEFA',
    team1: 'Sporting Braga',
    team2: 'Real Betis',
    score1: 1,
    score2: 0,
    isLive: true,
    time: 'LIVE',
    minuteOrPeriod: "2. poł, 59'",
    odds: { home: 1.32, draw: 4.16, away: 14.18 },
  },
  {
    id: 'gorica-dinamo',
    sport: 'Piłka Nożna',
    league: 'Chorwacja. Puchar',
    team1: 'HNK Gorica',
    team2: 'NK Dinamo Zagrzeb',
    score1: 2,
    score2: 5,
    isLive: true,
    time: 'LIVE',
    minuteOrPeriod: "2. poł, 74'",
    odds: { home: 1.53, draw: 4.50, away: 2.28 },
  },
  {
    id: 'alba-unicaja',
    sport: 'Koszykówka',
    league: 'Liga Mistrzów',
    team1: 'Alba Berlin',
    team2: 'Unicaja Málaga',
    score1: 3,
    score2: 1,
    isLive: true,
    time: 'LIVE',
    minuteOrPeriod: 'K1, 9\'',
    odds: { home: 1.85, draw: 0, away: 1.95 },
  },
  {
    id: 'fc-barcelona-real',
    sport: 'Piłka Nożna',
    league: 'Hiszpania. La Liga',
    team1: 'FC Barcelona',
    team2: 'Real Madrid',
    isLive: false,
    time: '21:00',
    odds: { home: 2.20, draw: 3.30, away: 3.10 },
  },
]

export const sportsList = [
  { name: 'Popularna kombinacja', icon: 'Star', count: null },
  { name: 'Liga Europy UEFA', icon: 'Trophy', count: 1 },
  { name: 'Euroliga', icon: 'Trophy', count: 2 },
  { name: 'Piłka Nożna', icon: 'Circle', count: 62 },
  { name: 'Koszykówka', icon: 'Circle', count: 37 },
  { name: 'Tenis', icon: 'Circle', count: 31 },
  { name: 'Hokej na Lodzie', icon: 'Circle', count: 23 },
  { name: 'Siatkówka', icon: 'Circle', count: 32 },
  { name: 'Tenis stołowy', icon: 'Circle', count: 19 },
  { name: 'Piłka Ręczna', icon: 'Circle', count: 7 },
  { name: 'Baseball', icon: 'Circle', count: 3 },
  { name: 'Krykiet', icon: 'Circle', count: 2 },
]

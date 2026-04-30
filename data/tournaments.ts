export interface Tournament {
  id: string
  title: string
  status: 'active' | 'upcoming' | 'finished'
  type: 'weekly' | 'weekend' | 'big' | 'easter'
  prizePool: number
  currency: string
  endsAt: string
  startsAt: string
  gameIds: string[]
  image?: string
}

export const tournaments: Tournament[] = [
  {
    id: 'weekly-rush',
    title: 'Wtorkowy Sprint',
    status: 'active',
    type: 'weekly',
    prizePool: 2750,
    currency: 'EUR',
    endsAt: '2026-05-04T23:59:00Z',
    startsAt: '2026-04-21T00:00:00Z',
    gameIds: ['big-bass-splash', 'wild-love', 'sugar-rush', 'seven-seven', 'candy-craze', 'vulkanspiele-joker', 'fortune-bags', 'book-of-fallen'],
    image: '/images/tournament/girl-coins-8f00ed.png',
  },
  {
    id: 'easter-tournament',
    title: 'Wielkanocna Bitwa',
    status: 'active',
    type: 'easter',
    prizePool: 13500,
    currency: 'EUR',
    endsAt: '2026-05-02T23:59:00Z',
    startsAt: '2026-04-22T00:00:00Z',
    gameIds: ['book-of-fallen', 'candy-craze', 'wild-love', 'fortune-bags', 'sugar-rush', 'gates-of-olympus-1000', 'crown-coins', 'blazing-crown-deluxe'],
    image: '/images/tournament/easter-rabbit-dee620.png',
  },
  {
    id: 'weekend-tournament',
    title: 'Sobotni Turniej',
    status: 'upcoming',
    type: 'weekend',
    prizePool: 3250,
    currency: 'EUR',
    endsAt: '2026-05-03T23:59:00Z',
    startsAt: '2026-05-01T00:00:00Z',
    gameIds: ['big-bass-splash', 'gates-of-olympus-1000', 'sugar-rush'],
  },
  {
    id: 'weekly-clash-1',
    title: 'Bitwa Tygodnia',
    status: 'finished',
    type: 'weekly',
    prizePool: 2200,
    currency: 'EUR',
    endsAt: '2026-04-10T23:59:00Z',
    startsAt: '2026-04-08T00:00:00Z',
    gameIds: [],
  },
  {
    id: 'weekend-finished-1',
    title: 'Sobotni Turniej',
    status: 'finished',
    type: 'weekend',
    prizePool: 2300,
    currency: 'EUR',
    endsAt: '2026-04-12T23:59:00Z',
    startsAt: '2026-04-10T00:00:00Z',
    gameIds: [],
  },
  {
    id: 'weekly-rush-finished',
    title: 'Wtorkowy Sprint',
    status: 'finished',
    type: 'weekly',
    prizePool: 1850,
    currency: 'EUR',
    endsAt: '2026-04-04T23:59:00Z',
    startsAt: '2026-04-02T00:00:00Z',
    gameIds: [],
    image: '/images/tournament/girl-coins-8f00ed.png',
  },
  {
    id: 'weekly-clash-2',
    title: 'Bitwa Tygodnia',
    status: 'finished',
    type: 'weekly',
    prizePool: 1750,
    currency: 'EUR',
    endsAt: '2026-04-03T23:59:00Z',
    startsAt: '2026-04-01T00:00:00Z',
    gameIds: [],
  },
]

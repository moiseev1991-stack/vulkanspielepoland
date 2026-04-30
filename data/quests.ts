export interface Quest {
  id: string
  title: string
  description: string
  image: string
  badgeLabel: string
  badgeColor: string
  progress: number
  total: number
  reward: string
  category: 'casino' | 'sports'
}

export const quests: Quest[] = [
  {
    id: '1',
    title: 'Wiosenna misja',
    description: 'Zagraj w 5 gier slotowych i zbierz punkty misji wiosennej.',
    image: '/images/quests/quest-spring-6dbcb7.png',
    badgeLabel: 'ŁATWE',
    badgeColor: '#006633',
    progress: 2,
    total: 5,
    reward: '10 Free Spinów',
    category: 'casino',
  },
  {
    id: '2',
    title: 'Wielkanocna misja',
    description: 'Ukończ 3 gry wielkanocne i odbierz nagrodę.',
    image: '/images/quests/quest-easter-5de61a.png',
    badgeLabel: 'WIELKANOC',
    badgeColor: '#CC0000',
    progress: 0,
    total: 3,
    reward: '€5 Bonus',
    category: 'casino',
  },
  {
    id: '3',
    title: 'Tygodniowe zadanie',
    description: 'Postaw zakłady przez 5 dni z rzędu.',
    image: '/images/quests/quest-weekly-57ab2f.png',
    badgeLabel: 'TYGODNIOWE',
    badgeColor: '#CC6600',
    progress: 3,
    total: 5,
    reward: '50 Free Spinów',
    category: 'casino',
  },
  {
    id: '4',
    title: 'Zakład na mecz',
    description: 'Obstaw 3 mecze z kursem min. 1.5 i odbierz free bet.',
    image: '/images/quests/quest-spring-6dbcb7.png',
    badgeLabel: 'ŁATWE',
    badgeColor: '#006633',
    progress: 1,
    total: 3,
    reward: '€10 Free Bet',
    category: 'sports',
  },
  {
    id: '5',
    title: 'Akumulator tygodnia',
    description: 'Postaw kupon 4-krotny i zgarnij bonus 20%.',
    image: '/images/quests/quest-weekly-57ab2f.png',
    badgeLabel: 'TYGODNIOWE',
    badgeColor: '#CC6600',
    progress: 0,
    total: 4,
    reward: 'Bonus 20%',
    category: 'sports',
  },
  {
    id: '6',
    title: 'Ekspres dnia',
    description: 'Obstaw wyróżniony mecz dnia i otrzymaj free bet.',
    image: '/images/quests/quest-easter-5de61a.png',
    badgeLabel: 'DZIENNE',
    badgeColor: '#CC0000',
    progress: 0,
    total: 1,
    reward: '€5 Free Bet',
    category: 'sports',
  },
]

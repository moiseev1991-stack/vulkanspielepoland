import type { Metadata } from 'next'
import QuestsClient from './QuestsClient'

export const metadata: Metadata = {
  title: { absolute: 'Codzienne Questy i Misje Kasynowe — Nagrody 24/7' },
  description: 'Wykonuj codzienne i tygodniowe misje kasynowe oraz sportowe. Zdobywaj darmowe spiny, bonusy pieniężne i free bety. Questy resetują się o północy UTC.',
  openGraph: {
    title: 'Codzienne Questy i Misje Kasynowe — Nagrody 24/7',
    description: 'Misje kasynowe i sportowe z nagrodami: darmowe spiny, bonusy pieniężne i free bety. Resetują się co 24h.',
    url: 'https://vulkanspielepoland.pl/quests/',
  },
}

export default function QuestsPage() {
  return <QuestsClient />
}

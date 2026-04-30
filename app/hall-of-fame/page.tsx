import type { Metadata } from 'next'
import HallOfFameClient from './HallOfFameClient'

export const metadata: Metadata = {
  title: { absolute: 'Vulkan Spiele Największe Wygrane Rekordy Graczy 2026' },
  description: 'Szczegółowa analiza rekordowych wygranych w Vulkan Spiele – prawdziwe historie graczy z Polski, weryfikacja wypłat, strategie zwycięzców i porównanie z konkurencją. Eksperci ujawniają mechanizmy największych triumfów.',
  openGraph: {
    title: 'Vulkan Spiele Największe Wygrane Rekordy Graczy 2026',
    description: 'Szczegółowa analiza rekordowych wygranych w Vulkan Spiele – prawdziwe historie graczy z Polski, weryfikacja wypłat, strategie zwycięzców i porównanie z konkurencją.',
    url: 'https://vulkanspielepoland.pl/hall-of-fame/',
  },
}

export default function HallOfFamePage() {
  return <HallOfFameClient />
}

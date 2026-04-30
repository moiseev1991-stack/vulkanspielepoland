import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: { absolute: 'VulkanSpiele Kasyno Recenzja 2026 | Bonusy i Opinie PL' },
  description: 'VulkanSpiele kasyno online – szczegółowa recenzja 2026. Bonus powitalny, darmowe spiny, legalność w Polsce, metody wypłat i opinie graczy. Sprawdź zanim zagrasz!',
  openGraph: {
    title: 'VulkanSpiele Kasyno Recenzja 2026 | Bonusy i Opinie PL',
    description: 'VulkanSpiele kasyno online – szczegółowa recenzja 2026. Bonus powitalny, darmowe spiny, legalność w Polsce, metody wypłat i opinie graczy. Sprawdź zanim zagrasz!',
    url: 'https://vulkanspielepoland.pl/',
  },
}

export default function HomePage() {
  return <HomeClient />
}

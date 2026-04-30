import type { Metadata } from 'next'
import VipClient from './VipClient'

export const metadata: Metadata = {
  title: { absolute: 'Program VIP Vulkan Spiele – Bonusy i Cashback 2026' },
  description: 'Odkryj ekskluzywny program VIP w Vulkan Spiele: poziomy lojalnościowe, cashback do 20%, dedykowany manager, szybsze wypłaty i bonusy bez depozytu. Sprawdź warunki awansu 2026.',
  openGraph: {
    title: 'Program VIP Vulkan Spiele – Bonusy i Cashback 2026',
    description: 'Odkryj ekskluzywny program VIP w Vulkan Spiele: poziomy lojalnościowe, cashback do 20%, dedykowany manager, szybsze wypłaty i bonusy bez depozytu.',
    url: 'https://vulkanspielepoland.pl/vip/',
  },
}

export default function VipPage() {
  return <VipClient />
}

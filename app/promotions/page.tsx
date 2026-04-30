import type { Metadata } from 'next'
import PromotionsClient from './PromotionsClient'

export const metadata: Metadata = {
  title: { absolute: 'Vulkanspiele Polska Promocje Kasynowe Oferty i Akcje Online' },
  description: 'Vulkanspiele Polska wszystkie promocje casino online. Vulkan Spiele PL oferty sieciowe i akcje co tydzień. Misje lootboxy i inne promocje kasynowe vulkanspiele dla graczy.',
  openGraph: {
    title: 'Vulkanspiele Polska Promocje Kasynowe Oferty i Akcje Online',
    description: 'Vulkanspiele Polska wszystkie promocje casino online. Vulkan Spiele PL oferty sieciowe i akcje co tydzień.',
    url: 'https://vulkanspielepoland.pl/promotions/',
  },
}

export default function PromotionsPage() {
  return (
    <div>
      <PromotionsClient />

    </div>
  )
}

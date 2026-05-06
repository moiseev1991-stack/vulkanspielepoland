'use client'

import { usePathname } from 'next/navigation'

const breadcrumbList = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Vulkan Spiele',
      item: 'https://vulkanspielepoland.pl/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Bonus',
      item: 'https://vulkanspielepoland.pl/#bonus',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: '❤️ 3000 ZŁ + 150 FS',
      item: 'https://vulkanspielepoland.pl/#1000-zl-150-fs',
    },
  ],
}

export default function HomeJsonLd() {
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === ''

  if (!isHome) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  )
}

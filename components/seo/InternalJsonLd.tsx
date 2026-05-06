'use client'

import { usePathname } from 'next/navigation'

const mobileApplication = {
  '@context': 'http://schema.org/',
  '@type': 'MobileApplication',
  name: 'VulkanSpiele',
  applicationCategory: 'SportsApplication',
  operatingSystem: 'Android',
  softwareVersion: '9.03.26',
  fileSize: '75,50 MB',
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '90361',
  },
}

const qaPage = {
  '@context': 'https://schema.org',
  '@type': 'QAPage',
  mainEntity: {
    '@type': 'Question',
    dateCreated: '2026-04-23T12:01:00+03:00',
    name: 'Vulkan Spiele',
    author: { '@type': 'Person', name: 'Viktor Kravc' },
    acceptedAnswer: {
      '@type': 'Answer',
      author: { '@type': 'Organization', name: 'VulkanSpiele' },
      text: '🔥 Kod promocyjny działa',
    },
    answerCount: 1,
  },
}

export default function InternalJsonLd() {
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === '' || pathname === null

  if (isHome) return null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(qaPage) }}
      />
    </>
  )
}

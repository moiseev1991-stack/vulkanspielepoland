import type { Metadata } from 'next'
import GoClient from './GoClient'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export default function GoPage() {
  return <GoClient />
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const bottomLinks = [
  { label: 'Kasyno',     href: '/',             icon: '🎰' },
  { label: 'Turnieje',   href: '/tournaments/', icon: '🏆' },
  { label: 'Bonusy',     href: '/bonus/',       icon: '🎁' },
  { label: 'Sport',      href: '/go/',          icon: '⚽' },
  { label: 'Menu',       href: '/promotions/',  icon: '☰'  },
]

export default function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: '#0A0008',
        borderTop: '1px solid #3E0020',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-stretch">
        {bottomLinks.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors"
              style={{ color: isActive ? '#FFB627' : '#6b6b6b' }}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="text-[10px] font-bold leading-none">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bell, ChevronDown, Gift, Menu, Package, Sparkles, Star, Tag, Target, X, Zap } from 'lucide-react'

const dropdownLinks = [
  { label: 'Bonus',             href: '/bonus/',            Icon: Gift },
  { label: 'Bonus bez Depozytu',href: '/bonus-bez-depozytu/',Icon: Zap },
  { label: 'Darmowe Spiny',     href: '/darmowe-spiny/',    Icon: Sparkles },
  { label: 'Kod Promocyjny',    href: '/kod-promocyjny/',   Icon: Tag },
  { label: 'Skrzynki z łupami', href: '/lootboxes',         Icon: Package },
  { label: 'Questy',            href: '/quests',            Icon: Target },
  { label: 'Koło fortuny',      href: '/wheel-of-fortune',  Icon: Star },
]

const siteNavLinks: { label: string; href: string; hasDropdown?: boolean; isSpecial?: boolean }[] = [
  { label: 'KASYNO',              href: '/' },
  { label: 'TURNIEJE',            href: '/tournaments' },
  { label: 'PROMOCJE',            href: '/promotions', hasDropdown: true },
  { label: 'KLUB VIP',            href: '/vip' },
  { label: 'GALERIA SŁAW',        href: '/hall-of-fame' },
]

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 flex items-center"
      style={{ height: '56px', background: '#0A0008', borderBottom: '1px solid #3E0020' }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/images/logo-official-39145b.png" alt="Vulkan Spiele" width={110} height={44} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {siteNavLinks.map((link) =>
            link.hasDropdown ? (
              /* PROMOCJE with hover dropdown */
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-md transition-colors whitespace-nowrap text-[13px] font-medium text-[#DDDDDD] hover:text-white hover:bg-white/5"
                >
                  {link.label}
                  <ChevronDown size={11} className="transition-transform duration-150 group-hover:rotate-180" />
                </Link>

                {/* Dropdown panel */}
                <div
                  className="absolute top-full left-0 mt-1 w-52 rounded-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150"
                  style={{ background: '#1A0014', border: '1px solid #3E0020', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}
                >
                  {dropdownLinks.map(({ label, href, Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-white/70 hover:text-white hover:bg-white/5 first:rounded-t-xl last:rounded-b-xl transition-colors"
                    >
                      <Icon size={13} className="text-white/40" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors whitespace-nowrap text-[13px] font-medium
                  ${link.isSpecial
                    ? 'text-gold hover:text-gold/80'
                    : 'text-[#DDDDDD] hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.isSpecial && <Gift size={13} />}
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right block */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="text-white/50 hover:text-white p-1.5">
            <Bell size={18} />
          </button>
          <span className="flex items-center gap-1.5 text-[12px] text-white/60 px-2 py-1">
            <span className="inline-flex flex-col overflow-hidden rounded-sm shrink-0" style={{ width: '18px', height: '13px', border: '1px solid rgba(255,255,255,0.15)' }}>
              <span className="flex-1" style={{ background: '#fff' }} />
              <span className="flex-1" style={{ background: '#DC143C' }} />
            </span>
            PL
          </span>
          <Link
            href="/logowanie/"
            className="px-4 text-white text-[13px] font-semibold hover:bg-white/5 transition-colors rounded-md"
            style={{ height: '32px', display: 'flex', alignItems: 'center', border: '1px solid #555' }}
          >
            ZALOGUJ SIĘ
          </Link>
          <Link
            href="/go/"
            className="px-4 text-black text-[13px] font-bold hover:bg-yellow-400 transition-colors rounded-md"
            style={{ height: '32px', display: 'flex', alignItems: 'center', background: '#FFB627' }}
          >
            ZAREJESTRUJ SIĘ
          </Link>
        </div>

        {/* Mobile: кнопки + бургер */}
        <div className="lg:hidden flex items-center gap-1.5">
          <Link
            href="/logowanie/"
            className="text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-md"
            style={{ border: '1px solid #555' }}
          >
            Zaloguj
          </Link>
          <Link
            href="/go/"
            className="text-black text-[11px] font-bold px-2.5 py-1.5 rounded-md"
            style={{ background: '#FFB627' }}
          >
            Rejestracja
          </Link>
          <button
            className="text-white p-1.5"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Menu"
          >
            {isNavOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isNavOpen && (
        <div className="lg:hidden fixed inset-0 top-14 bg-[#0A0008] z-40 overflow-y-auto">
          <div className="flex flex-col p-4 gap-1">
            {siteNavLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <div className="flex items-center rounded-lg hover:bg-white/5">
                    <Link
                      href={link.href}
                      className="flex-1 px-4 py-3 text-sm font-semibold text-[#DDDDDD]"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => setIsDropdownOpen((v) => !v)}
                      className="px-3 py-3 text-[#DDDDDD]"
                      aria-label="Rozwiń"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  {isDropdownOpen && (
                    <div className="ml-4 flex flex-col gap-0.5 mb-1">
                      {dropdownLinks.map(({ label, href, Icon }) => (
                        <Link
                          key={href}
                          href={href}
                          className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5"
                          onClick={() => setIsNavOpen(false)}
                        >
                          <Icon size={13} className="text-white/40" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold
                    ${link.isSpecial ? 'text-gold' : 'text-[#DDDDDD]'} hover:bg-white/5`}
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.isSpecial && <Gift size={16} />}
                  {link.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-2 mt-4 px-4">
              <Link href="/logowanie/" className="w-full py-3 text-center rounded-lg text-white text-sm font-semibold" style={{ border: '1px solid #555' }}>
                ZALOGUJ SIĘ
              </Link>
              <Link href="/go/" className="w-full py-3 text-center rounded-lg text-black text-sm font-bold" style={{ background: '#FFB627' }}>
                ZAREJESTRUJ SIĘ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import BonusesClient from './BonusesClient'

export const metadata: Metadata = {
  title: { absolute: 'Vulkan Spiele Bonus Bez Depozytu i Kody Promocyjne 2026' },
  description: 'Aktualne bonusy Vulkan Spiele: 10€ bez depozytu, 88 darmowych spinów i kody promocyjne 2026. Sprawdź warunki obrotu, limity wypłat i jak aktywować każdą ofertę w polskim kasynie online.',
  openGraph: {
    title: 'Vulkan Spiele Bonus Bez Depozytu i Kody Promocyjne 2026',
    description: 'Aktualne bonusy Vulkan Spiele: 10€ bez depozytu, 88 darmowych spinów i kody promocyjne 2026. Sprawdź warunki obrotu, limity wypłat i jak aktywować każdą ofertę w polskim kasynie online.',
    url: 'https://vulkanspielepoland.pl/bonus/',
  },
}

const offerList = [
  { title: 'Bonus powitalny', desc: '100% do 2 500 EUR + 350 FS na pierwsze cztery depozyty', badge: 'POWITALNY', value: '2 500 €' },
  { title: 'Cashback 10%', desc: 'Tygodniowy zwrot środków bez limitu — automatycznie co poniedziałek', badge: 'CASHBACK', value: '10%' },
  { title: 'Reload Friday', desc: 'Co piątek 50% do 200 EUR + 50 darmowych spinów', badge: 'RELOAD', value: '+50%' },
  { title: 'Bonus urodzinowy', desc: 'Specjalna niespodzianka w Twoje urodziny — kod aktywuje się automatycznie', badge: 'VIP', value: 'X' },
  { title: 'Highroller Bonus', desc: '200% do 1 000 EUR + 100 FS Crown Coins dla graczy wysokich stawek', badge: 'HIGHROLLER', value: '200%' },
  { title: 'Bonus za polecenie', desc: 'Zaproś znajomego i odbierz 50 EUR po jego pierwszym depozycie', badge: 'REFERRAL', value: '50 €' },
]

export default function BonusPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0000' }}>

      {/* ── Hero (szapka) z dawnego /bonuses ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: '320px', background: 'linear-gradient(135deg, #3d0000 0%, #1a0000 50%, #0d0000 100%)' }}
      >
        <div
          className="absolute right-0 top-0 h-full hidden lg:block"
          style={{
            width: '55%',
            maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
          }}
        >
          <img
            src="/images/bonuses/hero-913bca.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 flex items-center" style={{ minHeight: '320px' }}>
          <div className="max-w-lg">
            <span
              className="inline-block text-xs font-bold text-white px-3 py-1 rounded-sm mb-4"
              style={{ background: '#CC0000' }}
            >
              🎁 BONUSY
            </span>
            <h1 className="text-4xl font-black text-white mb-3">Vulkan Spiele Bonus: Kompletny Przewodnik po Kodach Promocyjnych 2026</h1>
            <p className="text-white/60 text-sm mb-6 max-w-md">
              Odbierz ekskluzywne bonusy i zwiększ swoje szanse na wygraną. Nowe oferty każdego tygodnia!
            </p>
            <Link
              href="#bonuses"
              className="inline-block text-black font-bold text-sm px-6 py-2.5 rounded-md hover:bg-yellow-400 transition"
              style={{ background: '#FFD700' }}
            >
              Zobacz wszystkie bonusy
            </Link>
          </div>
        </div>
      </div>

      {/* ── Sekcja autorska: badge + main offer + lista 6 ofert ── */}
      <div className="container mx-auto px-4 py-12 max-w-2xl">

        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1 text-xs font-bold text-white px-3 py-1 rounded-sm mb-4"
            style={{ background: '#C9000D' }}
          >
            🎁 BONUSY
          </span>
          <h2 className="text-4xl font-black text-white mb-3">
            Vulkan Spiele <span style={{ color: '#FFD700' }}>Bonus</span> Casino PL — Powitalny i Cashback
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Vulkan Spiele Bonus — powitalny pakiet do 2 500 EUR + 350 FS, cotygodniowy cashback
            i sezonowe oferty dla polskich graczy w 2026 roku.
          </p>
        </div>

        {/* Main offer */}
        <div
          className="rounded-3xl p-8 mb-6 text-center"
          style={{ background: 'linear-gradient(135deg, #180007 0%, #0b000e 100%)', border: '1px solid #35001c' }}
        >
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Bonus powitalny</p>
          <p className="text-6xl font-black mb-2" style={{ color: '#FFD700' }}>2 500 €</p>
          <p className="text-white font-bold text-xl mb-1">+ 350 darmowych spinów</p>
          <p className="text-gray-500 text-sm mb-6">Pierwsze cztery depozyty — tylko dla nowych graczy PL</p>
          <Link
            href="/go/"
            className="inline-block text-black font-black text-base px-8 py-3 rounded-xl hover:bg-yellow-400 transition"
            style={{ background: '#FFD700' }}
          >
            Odbierz Bonus Powitalny
          </Link>
          <p className="text-gray-600 text-xs mt-3">18+ | Graj odpowiedzialnie | Obowiązuje regulamin</p>
        </div>

        {/* Offer list */}
        <div className="space-y-4 mb-2">
          <h2 className="text-lg font-bold text-white">Wszystkie bonusy Vulkan Spiele</h2>
          {offerList.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5 flex items-center justify-between gap-4"
              style={{ background: '#140002', border: '1px solid #2a0008' }}
            >
              <div>
                <span className="text-xs font-bold px-2 py-0.5 rounded mb-2 inline-block" style={{ background: '#3a0000', color: '#FFD700' }}>
                  {item.badge}
                </span>
                <p className="text-white font-bold">{item.title} — <span style={{ color: '#FFD700' }}>{item.value}</span></p>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              </div>
              <Link href="/go/" className="text-black font-bold text-xs px-4 py-2 rounded-lg hover:bg-yellow-400 transition whitespace-nowrap" style={{ background: '#FFD700' }}>
                Odbierz
              </Link>
            </div>
          ))}
        </div>

      </div>

      {/* ── 4 karty + regulamin + długi SEO (z dawnego /bonuses) ── */}
      <BonusesClient />

    </div>
  )
}

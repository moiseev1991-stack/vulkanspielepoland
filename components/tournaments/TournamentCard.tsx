'use client'

import React from 'react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { Tournament } from '@/data/tournaments'
import { Game } from '@/data/games'

interface TournamentCardProps {
  tournament: Tournament
  games: Game[]
  variant?: 'active' | 'upcoming' | 'finished'
}

const tournamentTypeNames: Record<string, string> = {
  weekly:  'TYGODNIOWY',
  weekend: 'SOBOTNI',
  big:     'WIELKI',
  easter:  'WIELKANOCNY',
}


function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}`
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ActiveTimer({ endsAt }: { endsAt: string }) {
  const DEMO_SECONDS = 15 * 60 // 15 минут
  const [total, setTotal] = React.useState(DEMO_SECONDS)

  React.useEffect(() => {
    const id = setInterval(() => {
      setTotal((prev) => (prev <= 1 ? DEMO_SECONDS : prev - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const minutes = Math.floor(total / 60)
  const seconds = total % 60

  return (
    <div className="flex items-end gap-1">
      <span className="text-white font-black text-2xl leading-none">{String(minutes).padStart(2, '0')}</span>
      <span className="text-gray-500 text-xs mb-0.5">m</span>
      <span className="text-gray-600 mx-0.5 mb-0.5">:</span>
      <span className="text-white font-black text-2xl leading-none">{String(seconds).padStart(2, '0')}</span>
      <span className="text-gray-500 text-xs mb-0.5">s</span>
    </div>
  )
}

export default function TournamentCard({ tournament, games, variant = 'active' }: TournamentCardProps) {
  const isDoneCard    = variant === 'finished'
  const isPendingCard = variant === 'upcoming'
  const gamesScrollRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // ── Finished ──────────────────────────────────────────────────────────────
  if (isDoneCard) {
    const cardThemeMap: Record<string, {
      accent: string; accentDim: string; glow: string;
      bg: string; border: string; borderHover: string;
      btnBg: string; btnColor: string;
      medal: string;
    }> = {
      weekly: {
        accent:      '#FFA520',
        accentDim:   'rgba(255,165,32,0.15)',
        glow:        'rgba(255,145,20,0.28)',
        bg:          'linear-gradient(160deg, #1a0900 0%, #100500 60%, #090100 100%)',
        border:      '#381600',
        borderHover: '#7a3800',
        btnBg:       'linear-gradient(135deg, #D46000, #9E3800)',
        btnColor:    '#fff',
        medal:       '🥇',
      },
      weekend: {
        accent:      '#00BBCC',
        accentDim:   'rgba(0,180,200,0.12)',
        glow:        'rgba(0,180,200,0.22)',
        bg:          'linear-gradient(160deg, #00151a 0%, #000e12 60%, #000a0d 100%)',
        border:      '#003a44',
        borderHover: '#006677',
        btnBg:       'linear-gradient(135deg, #007788, #005566)',
        btnColor:    '#fff',
        medal:       '🥈',
      },
      big: {
        accent:      '#CC44FF',
        accentDim:   'rgba(180,50,255,0.15)',
        glow:        'rgba(180,50,255,0.25)',
        bg:          'linear-gradient(160deg, #0f0018 0%, #08000f 60%, #050008 100%)',
        border:      '#2d0055',
        borderHover: '#5500aa',
        btnBg:       'linear-gradient(135deg, #7700cc, #440088)',
        btnColor:    '#fff',
        medal:       '🏆',
      },
      easter: {
        accent:      '#66DD00',
        accentDim:   'rgba(100,220,0,0.12)',
        glow:        'rgba(100,220,0,0.2)',
        bg:          'linear-gradient(160deg, #071200 0%, #040d00 60%, #020800 100%)',
        border:      '#1a3300',
        borderHover: '#336600',
        btnBg:       'linear-gradient(135deg, #448800, #2a5500)',
        btnColor:    '#fff',
        medal:       '🐰',
      },
    }

    const cardTheme = cardThemeMap[tournament.type] ?? {
      accent: '#C9000D', accentDim: 'rgba(200,0,0,0.15)', glow: 'rgba(200,0,0,0.2)',
      bg: 'linear-gradient(160deg, #1c0000 0%, #120000 100%)',
      border: '#2d0000', borderHover: '#660000',
      btnBg: 'linear-gradient(135deg, #C9000D, #880000)', btnColor: '#fff',
      medal: '🏅',
    }

    return (
      <div
        className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
        style={{ background: cardTheme.bg, border: `1px solid ${cardTheme.border}` }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.borderColor = cardTheme.borderHover
          el.style.boxShadow = `0 8px 32px ${cardTheme.glow}, 0 0 0 1px ${cardTheme.borderHover}`
          el.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.borderColor = cardTheme.border
          el.style.boxShadow = 'none'
          el.style.transform = 'translateY(0)'
        }}
      >
        {/* Верхняя акцентная полоса */}
        <div
          className="w-full h-1"
          style={{ background: `linear-gradient(to right, transparent, ${cardTheme.accent}, transparent)` }}
        />

        {/* Фоновый ореол */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${cardTheme.accentDim} 0%, transparent 70%)`,
          }}
        />

        {/* Медаль — декоративный угол */}
        <div
          className="absolute top-3 right-3 text-2xl pointer-events-none"
          style={{ filter: `drop-shadow(0 0 8px ${cardTheme.accent})`, opacity: 0.7 }}
        >
          {cardTheme.medal}
        </div>

        <div className="relative p-4 pt-3">
          {/* Бейдж типа */}
          <div className="mb-3">
            <span
              className="text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider"
              style={{
                background: cardTheme.accentDim,
                color: cardTheme.accent,
                border: `1px solid ${cardTheme.accent}40`,
              }}
            >
              {tournamentTypeNames[tournament.type]}
            </span>
          </div>

          {/* Название */}
          <h4 className="text-white font-black text-sm mb-3 leading-tight pr-8">{tournament.title}</h4>

          {/* Призовой фонд — крупно */}
          <div className="mb-3">
            <p className="text-[9px] uppercase tracking-widest mb-0.5" style={{ color: `${cardTheme.accent}99` }}>
              Fundusz nagród
            </p>
            <p
              className="text-2xl font-black leading-none"
              style={{
                color: cardTheme.accent,
                textShadow: `0 0 20px ${cardTheme.glow}`,
              }}
            >
              €{tournament.prizePool.toLocaleString('pl-PL')}
            </p>
          </div>

          {/* Дата */}
          <div
            className="flex items-center gap-1.5 mb-4 text-[10px]"
            style={{ color: `${cardTheme.accent}66` }}
          >
            <span>{formatDate(tournament.startsAt)}</span>
            <span>—</span>
            <span>{formatDate(tournament.endsAt)}</span>
          </div>

          {/* Кнопка */}
          <button
            className="w-full text-xs font-bold py-2 rounded-lg transition-all duration-200 hover:brightness-125"
            style={{ background: cardTheme.btnBg, color: cardTheme.btnColor }}
          >
            Zobacz wyniki
          </button>
        </div>
      </div>
    )
  }

  // ── Upcoming ──────────────────────────────────────────────────────────────
  if (isPendingCard) {
    return (
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0022 0%, #140010 45%, #180014 100%)',
          border: '1px solid rgba(150,50,255,0.28)',
          boxShadow: '0 0 60px rgba(110,0,240,0.1), 0 0 120px rgba(110,0,240,0.04), inset 0 1px 0 rgba(255,255,255,0.05)',
          minHeight: '200px',
        }}
      >
        {/* Top accent line */}
        <div className="w-full h-0.5" style={{ background: 'linear-gradient(to right, transparent 0%, rgba(160,60,255,0.8) 30%, rgba(255,215,0,0.6) 60%, transparent 100%)' }} />

        {/* Background ambient */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{ position: 'absolute', top: '-60px', right: '25%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(120,0,255,0.1) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(180,0,100,0.08) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', top: '20%', left: '35%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,180,0,0.04) 0%, transparent 70%)' }} />
        </div>

        {/* Diagonal stripe texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px)',
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-stretch">
          {/* LEFT: main content */}
          <div className="flex-1 p-7 pr-4">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span
                className="text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase"
                style={{ background: 'rgba(120,0,240,0.28)', color: '#b57cfa', border: '1px solid rgba(150,50,250,0.4)' }}
              >
                ⏳ NADCHODZĄCE
              </span>
              <span
                className="text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase"
                style={{ background: 'rgba(255,180,0,0.15)', color: '#FFD700', border: '1px solid rgba(255,180,0,0.3)' }}
              >
                {tournamentTypeNames[tournament.type]}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-black leading-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#fff', textShadow: '0 2px 20px rgba(160,60,255,0.25)' }}
            >
              {tournament.title}
            </h3>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-6">
              {/* Prize */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] mb-1" style={{ color: 'rgba(255,215,0,0.5)' }}>Fundusz nagród</p>
                <p className="font-black text-2xl" style={{ color: '#FFD700', textShadow: '0 0 24px rgba(255,215,0,0.5)' }}>
                  €{tournament.prizePool.toLocaleString('pl-PL')}
                </p>
              </div>
              {/* Divider */}
              <div className="w-px self-stretch" style={{ background: 'rgba(160,60,255,0.2)' }} />
              {/* Dates */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] mb-1" style={{ color: 'rgba(160,60,255,0.6)' }}>Okres trwania</p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{formatDate(tournament.startsAt)}</span>
                  <span style={{ color: 'rgba(160,60,255,0.5)', fontSize: '10px' }}>▶</span>
                  <span className="font-bold text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{formatDate(tournament.endsAt)}</span>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <a
                href="/go/"
                className="text-black text-xs font-black px-6 py-2.5 rounded-lg transition-all duration-200 hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', boxShadow: '0 4px 16px rgba(255,180,0,0.3)' }}
              >
                Poznaj szczegóły
              </a>
              <button
                className="text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: 'rgba(160,60,255,0.15)', border: '1px solid rgba(160,60,255,0.35)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(160,60,255,0.25)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(160,60,255,0.15)' }}
              >
                Przypomnij mi
              </button>
            </div>
          </div>

          {/* RIGHT: trophy decoration */}
          <div
            className="hidden md:flex relative items-center justify-center overflow-hidden"
            style={{ width: '260px', flexShrink: 0 }}
          >
            {/* Left fade */}
            <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, #0c001f 0%, transparent 40%)' }} />

            {/* Decorative rings */}
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute rounded-full" style={{ width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(140,0,255,0.15) 0%, rgba(255,180,0,0.06) 45%, transparent 70%)' }} />
              {/* Ring 1 */}
              <div className="absolute rounded-full" style={{ width: '180px', height: '180px', border: '1px solid rgba(160,60,255,0.18)', boxShadow: '0 0 30px rgba(140,0,255,0.1)' }} />
              {/* Ring 2 */}
              <div className="absolute rounded-full" style={{ width: '130px', height: '130px', border: '1px solid rgba(255,180,0,0.12)' }} />
              {/* Ring 3 inner */}
              <div className="absolute rounded-full" style={{ width: '86px', height: '86px', background: 'radial-gradient(circle, rgba(255,180,0,0.08) 0%, transparent 70%)', border: '1px solid rgba(255,200,50,0.15)' }} />

              {/* Corner sparkles */}
              {[
                { top: '12px', left: '62px' },
                { top: '28px', right: '50px' },
                { bottom: '18px', left: '55px' },
                { bottom: '30px', right: '58px' },
              ].map((pos, i) => (
                <div key={i} className="absolute" style={{ ...pos, width: '4px', height: '4px', borderRadius: '50%', background: '#FFD700', boxShadow: '0 0 6px rgba(255,215,0,0.8)', opacity: 0.7 }} />
              ))}

              {/* Trophy */}
              <span
                className="relative z-10"
                style={{
                  fontSize: '80px',
                  lineHeight: 1,
                  filter: 'drop-shadow(0 0 24px rgba(255,180,0,0.65)) drop-shadow(0 0 8px rgba(200,80,255,0.5))',
                }}
              >
                🏆
              </span>

              {/* Floor glow */}
              <div className="absolute" style={{ bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '12px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,180,0,0.35) 0%, transparent 70%)', filter: 'blur(4px)' }} />
            </div>

            {/* Right fade */}
            <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to left, #1a0010 0%, transparent 35%)' }} />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent 0%, rgba(160,60,255,0.2) 50%, transparent 100%)' }} />
      </div>
    )
  }

  // ── Active ────────────────────────────────────────────────────────────────
  return (
    <div
      className="relative rounded-3xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0e0002 0%, #060004 60%, #030001 100%)', border: '1px solid #1e0003' }}
    >
      {/* Right decoration — CSS rings */}
      <div className="hidden md:flex absolute right-0 top-0 h-full w-64 pointer-events-none overflow-hidden items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Внешнее кольцо */}
          <div
            className="absolute w-44 h-44 rounded-full"
            style={{
              border: '1px solid rgba(255,180,0,0.1)',
              boxShadow: '0 0 40px rgba(255,160,0,0.05)',
            }}
          />
          {/* Среднее кольцо */}
          <div
            className="absolute w-28 h-28 rounded-full"
            style={{ border: '1px solid rgba(255,190,0,0.12)' }}
          />
          {/* Центральный символ */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(255,170,0,0.08) 0%, transparent 70%)',
              border: '1px solid rgba(255,190,0,0.14)',
            }}
          >
            <span className="text-3xl" style={{ filter: 'grayscale(0.3)', opacity: 0.35 }}>🏆</span>
          </div>
        </div>
        {/* Fade mask left */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #070000 0%, transparent 50%)' }}
        />
      </div>

      <div className="relative z-10 p-6">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1.5 text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: '#C9000D' }}>
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            NA ŻYWO
          </span>
          <span className="text-white/70 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
            {tournamentTypeNames[tournament.type]}
          </span>
        </div>

        <h3 className="text-white font-black text-2xl mb-4">{tournament.title}</h3>

        {/* Prize + Timer */}
        <div className="flex gap-8 mb-5">
          <div>
            <p className="text-[11px] text-gray-500 uppercase tracking-wide mb-0.5">Fundusz nagród</p>
            <p className="text-gold font-black text-2xl">€{tournament.prizePool.toLocaleString('pl-PL')}</p>
          </div>
          <div className="w-px bg-[#3a0000]" />
          <div>
            <p className="text-[11px] text-gray-500 uppercase tracking-wide mb-0.5">Pozostały czas</p>
            <ActiveTimer endsAt={tournament.endsAt} />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mb-5">
          <Link href="/go/" className="text-black font-bold text-sm px-6 py-2 rounded-lg hover:bg-yellow-400 transition" style={{ background: '#FFD700' }}>
            Weź udział
          </Link>
          <Link href="/go/" className="text-white text-sm px-6 py-2 rounded-lg hover:border-gray-400 transition" style={{ border: '1px solid #555' }}>
            Czytaj więcej
          </Link>
        </div>

        {/* Games scroll */}
        {games.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Gry turniejowe</span>
              <button className="text-xs text-gold hover:underline flex items-center gap-1">
                Zobacz wszystko <span>›</span>
              </button>
            </div>

            <div className="relative">
              <div
                ref={gamesScrollRef}
                className="flex gap-2 overflow-x-auto pb-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onScroll={(e) => setIsScrolled((e.target as HTMLDivElement).scrollLeft > 0)}
              >
                {games.map((game) => (
                  <div key={game.id} className="flex-shrink-0 w-20">
                    <img src={game.image} alt={game.title} className="w-20 h-20 rounded-lg object-cover" />
                    <p className="text-[10px] text-gray-400 mt-1 truncate">{game.title}</p>
                    <p className="text-[9px] text-gray-600 truncate">{game.provider}</p>
                  </div>
                ))}
              </div>

              {/* Fade right */}
              <div
                className="absolute right-0 top-0 h-full w-20 pointer-events-none"
                style={{ background: 'linear-gradient(to right, transparent, #1a0000)' }}
              />
              {/* Fade left */}
              {isScrolled && (
                <div
                  className="absolute left-0 top-0 h-full w-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to left, transparent, #1a0000)' }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

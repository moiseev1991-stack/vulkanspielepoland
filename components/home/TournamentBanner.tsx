'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCountdown } from '@/hooks/useCountdown'
import { Tournament } from '@/data/tournaments'
import { Game } from '@/data/games'

interface TournamentBannerProps {
  tournament: Tournament
  games: Game[]
}

const typeLabels: Record<string, string> = {
  weekly: 'TYGODNIOWY',
  weekend: 'WEEKEND',
  big: 'WIELKI',
  easter: 'WIELKANOCNY',
}

export default function TournamentBanner({ tournament, games }: TournamentBannerProps) {
  const [endsAt] = useState(() => new Date(Date.now() + 15 * 60 * 1000).toISOString())
  const { minutes, seconds } = useCountdown(endsAt)

  return (
    <div
      className="my-6 rounded-3xl overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #2d0000 0%, #1a0005 50%, #0d0000 100%)',
        border: '1px solid #3a0000',
        boxShadow: '0 4px 24px rgba(180,0,0,0.15)',
      }}
    >
      {/* Full-size background image on the right */}
      <div
        className="absolute right-0 top-0 w-[58%] h-full hidden lg:block"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
        }}
      >
        <img
          src="/images/tournament/tournament-bg-9a0ccd.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 py-8">
        {/* Left: content */}
        <div className="lg:w-[45%]">
          {/* Badges */}
          <div className="flex gap-3 mb-3">
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              NA ŻYWO
            </span>
            <span className="text-[11px] font-bold text-yellow-400">
              ⚡ {typeLabels[tournament.type]}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-black text-white mb-5">{tournament.title}</h3>

          {/* Metrics */}
          <div className="flex gap-8 mb-6">
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">Fundusz nagród</p>
              <p className="text-gold font-bold text-xl">€{tournament.prizePool.toLocaleString('pl-PL')}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">Kończy się za</p>
              <p className="text-white font-bold text-xl">
                {String(minutes).padStart(2, '0')}m : {String(seconds).padStart(2, '0')}s
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link
              href="/go/"
              className="text-black font-bold text-sm px-7 py-2.5 rounded-md hover:bg-yellow-400 transition"
              style={{ background: '#FFD700' }}
            >
              Weź udział
            </Link>
            <Link
              href="/tournaments"
              className="text-white text-sm px-7 py-2.5 rounded-md hover:border-gray-400 transition"
              style={{ border: '1px solid #555' }}
            >
              Czytaj więcej
            </Link>
          </div>
        </div>
      </div>

      {/* Game scroll */}
      {games.length > 0 && (
        <div className="relative z-10 px-8 pb-6">
          <div className="mb-3">
            <span className="text-xs text-gray-500">Gry turniejowe</span>
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {games.map((game) => (
              <div key={game.id} className="flex-shrink-0 w-20">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#1a0000]">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-[9px] text-gray-500 mt-1 truncate">{game.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

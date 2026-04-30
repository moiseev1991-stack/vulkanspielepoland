'use client'

import { useState } from 'react'
import { sportsList } from '@/data/sports'
import { Star, Trophy, Zap } from 'lucide-react'

export default function SportsSidebar() {
  const [activeView, setActiveView] = useState<'sport' | 'esport'>('sport')
  const [activeMode, setActiveMode] = useState<'live' | 'prematch'>('live')

  const iconMap: Record<string, React.ReactNode> = {
    Star: <Star size={14} />,
    Trophy: <Trophy size={14} />,
    Circle: <Zap size={14} />,
  }

  return (
    <aside className="w-48 shrink-0 hidden lg:block">
      {/* Sport / Esport tabs */}
      <div className="flex gap-1 mb-4">
        {(['sport', 'esport'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveView(tab)}
            className={`flex-1 py-2 rounded-lg text-xs font-bold capitalize transition-colors
              ${activeView === tab ? 'bg-brand text-white' : 'bg-surface-light text-white/50 hover:text-white'}`}
          >
            {tab === 'sport' ? 'Sport' : 'Esport'}
          </button>
        ))}
      </div>

      {/* Live / Pre-match toggle */}
      <div className="flex gap-1 mb-4">
        {([['live', 'Na żywo'], ['prematch', 'Przedmecz']] as const).map(([val, label]) => (
          <button
            key={val}
            onClick={() => setActiveMode(val)}
            className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold transition-colors
              ${activeMode === val ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Sports list */}
      <div className="space-y-0.5">
        {sportsList.map((sport) => (
          <button
            key={sport.name}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-left"
          >
            <div className="flex items-center gap-2">
              <span className="text-white/40">{iconMap[sport.icon]}</span>
              <span className="text-white/70 text-xs">{sport.name}</span>
            </div>
            {sport.count !== null && (
              <span className="text-white/30 text-[10px] bg-white/5 rounded px-1.5">{sport.count}</span>
            )}
          </button>
        ))}
      </div>
    </aside>
  )
}

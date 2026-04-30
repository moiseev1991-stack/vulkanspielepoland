'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Layers, BarChart2 } from 'lucide-react'

export default function BetSlip() {
  const [mode, setMode] = useState<'solo' | 'kombo'>('solo')

  return (
    <div className="w-72 shrink-0 hidden xl:block">
      <div className="bg-surface-light rounded-xl border border-white/5 sticky top-20">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <h3 className="text-white font-bold text-sm">Kupon</h3>
          <div className="flex gap-1">
            <button
              onClick={() => setMode('solo')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors
                ${mode === 'solo' ? 'bg-brand/20 text-brand' : 'text-white/30 hover:text-white/60'}`}
            >
              <BarChart2 size={12} /> Solo
            </button>
            <button
              onClick={() => setMode('kombo')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors
                ${mode === 'kombo' ? 'bg-brand/20 text-brand' : 'text-white/30 hover:text-white/60'}`}
            >
              <Layers size={12} /> Kombo
            </button>
          </div>
        </div>

        {/* Empty state */}
        <div className="flex flex-col items-center justify-center py-10 px-4">
          <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-3 text-2xl">
            🎫
          </div>
          <p className="text-white/40 text-xs text-center">Kupon jest pusty</p>
          <p className="text-white/20 text-[10px] text-center mt-1">Dodaj zakłady klikając na kurs</p>
        </div>

        {/* Login CTA */}
        <div className="p-4 pt-0">
          <Link
            href="#"
            className="block w-full bg-gold text-black font-bold py-3 rounded-xl text-sm text-center hover:bg-gold/90 transition-colors"
          >
            Zaloguj się i postaw
          </Link>
        </div>
      </div>
    </div>
  )
}

import { Match } from '@/data/sports'
import { Lock } from 'lucide-react'

interface MatchCardProps {
  match: Match
  compact?: boolean
}

export default function MatchCard({ match, compact = false }: MatchCardProps) {
  if (compact) {
    return (
      <div className="shrink-0 bg-surface-light rounded-xl border border-white/5 p-3 min-w-[180px]">
        <p className="text-white/40 text-[10px] mb-2">{match.league}</p>
        <div className="flex justify-between items-center mb-2">
          <div className="text-xs text-white/80">
            <p>{match.team1}</p>
            <p>{match.team2}</p>
          </div>
          {match.isLive && (
            <div className="text-center">
              <span className="text-brand font-bold text-sm">{match.score1}:{match.score2}</span>
            </div>
          )}
        </div>
        <div className="flex gap-1">
          {[match.odds.home, match.odds.draw || null, match.odds.away].filter(Boolean).map((odd, i) => (
            <button key={i} className="flex-1 bg-white/5 hover:bg-brand/20 rounded text-white/70 text-[10px] font-semibold py-1 transition-colors">
              {odd}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface-light rounded-xl border border-white/5 p-4 hover:border-white/10 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {match.isLive && (
            <span className="flex items-center gap-1 bg-brand/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              <span className="w-1 h-1 bg-red-300 rounded-full animate-pulse" />
              LIVE
            </span>
          )}
          <span className="text-white/40 text-xs">{match.sport}</span>
          <span className="text-white/20 text-xs">›</span>
          <span className="text-white/60 text-xs">{match.league}</span>
        </div>
        <span className="text-white/30 text-xs">{match.minuteOrPeriod || match.time}</span>
      </div>

      {/* Teams and score */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <p className="text-white font-semibold text-sm mb-1">{match.team1}</p>
          <p className="text-white font-semibold text-sm">{match.team2}</p>
        </div>
        {match.isLive && match.score1 !== undefined && (
          <div className="text-center bg-black/30 rounded-lg px-3 py-2 min-w-[60px]">
            <p className="text-brand font-black text-lg leading-none">{match.score1}:{match.score2}</p>
          </div>
        )}
      </div>

      {/* Odds */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: '1', value: match.odds.home },
          { label: 'X', value: match.odds.draw },
          { label: '2', value: match.odds.away },
        ].map(({ label, value }) => (
          <button
            key={label}
            className="bg-white/5 hover:bg-brand/20 border border-white/5 hover:border-brand/30 rounded-lg py-2 transition-colors text-center"
          >
            <p className="text-white/40 text-[10px]">{label}</p>
            {value ? (
              <p className="text-white font-bold text-sm">{value.toFixed(2)}</p>
            ) : (
              <Lock size={12} className="text-white/20 mx-auto" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

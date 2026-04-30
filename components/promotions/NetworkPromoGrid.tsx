import Link from 'next/link'
import { Bonus } from '@/data/bonuses'

interface NetworkPromoGridProps {
  bonuses: Bonus[]
}

export default function NetworkPromoGrid({ bonuses }: NetworkPromoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {bonuses.map((bonus) => (
        <div
          key={bonus.id}
          className="bg-surface-light rounded-xl border border-white/5 p-5 hover:border-brand/30 transition-colors"
        >
          {/* Placeholder image */}
          <div className="w-full h-28 bg-gradient-to-br from-brand/20 to-surface rounded-lg mb-4 flex items-center justify-center">
            <span className="text-3xl">🌐</span>
          </div>
          <h3 className="text-white font-bold text-sm mb-1">{bonus.title}</h3>
          <p className="text-gold font-bold text-xs mb-2">{bonus.reward}</p>
          <p className="text-white/50 text-xs mb-3">{bonus.description}</p>
          <Link href="#" className="text-brand hover:text-brand/80 text-xs font-semibold transition-colors">
            Czytaj więcej →
          </Link>
        </div>
      ))}
    </div>
  )
}

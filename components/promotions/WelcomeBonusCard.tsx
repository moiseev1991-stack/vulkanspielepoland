import Link from 'next/link'
import { Bonus } from '@/data/bonuses'

interface WelcomeBonusCardProps {
  bonus: Bonus
}

export default function WelcomeBonusCard({ bonus }: WelcomeBonusCardProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3d0000] to-[#1a0505] border border-brand/20 p-6 flex flex-col justify-between min-h-[220px]">
      {/* Placeholder image area */}
      <div className="absolute right-4 top-4 w-32 h-32 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-gold/30 to-brand/20 rounded-full flex items-center justify-center text-5xl">
          {bonus.category === 'casino' ? '🎰' : '⚽'}
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
          {bonus.category === 'casino' ? 'Bonus Powitalny' : 'Bonus Powitalny na Zakłady'}
        </p>
        <h3 className="text-white font-black text-2xl lg:text-3xl mb-2">{bonus.reward}</h3>
        <p className="text-white/60 text-sm max-w-xs">{bonus.description}</p>
      </div>

      <div className="mt-6 relative z-10">
        <Link
          href="#"
          className="inline-block bg-brand hover:bg-brand/80 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
        >
          Czytaj więcej
        </Link>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Bonus } from '@/data/bonuses'

interface PromoCardProps {
  bonus: Bonus
}

const icons: Record<string, string> = {
  missions: '🎯',
  'lootboxes-promo': '📦',
  highroller: '💎',
  birthday: '🎂',
}

export default function PromoCard({ bonus }: PromoCardProps) {
  return (
    <div className="bg-surface-light rounded-xl border border-white/5 p-5 flex flex-col justify-between hover:border-brand/30 transition-colors">
      <div>
        <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-2xl mb-3">
          {icons[bonus.id] || '🎁'}
        </div>
        <h3 className="text-white font-bold text-base mb-1">{bonus.title}</h3>
        <p className="text-white/50 text-sm">{bonus.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gold font-bold text-sm">{bonus.reward}</span>
        <Link href="#" className="text-white/50 hover:text-white text-xs underline transition-colors">
          Czytaj więcej
        </Link>
      </div>
    </div>
  )
}

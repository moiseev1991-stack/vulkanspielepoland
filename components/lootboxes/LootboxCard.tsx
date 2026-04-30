import Link from 'next/link'
import { Info } from 'lucide-react'
import { Lootbox } from '@/data/lootboxes'

interface LootboxCardProps {
  lootbox: Lootbox
}

const rewardIcons: Record<string, string> = {
  'Bonus pieniężny': '🔴',
  'Darmowe obroty': '🎰',
  'Koło Fortuny': '🎡',
  'Pieniądze na saldzie': '💰',
  'Pieniądze na saldzie rzeczywistym': '💰',
  'Darmowe obroty w najlepszej grze': '🎰',
}

export default function LootboxCard({ lootbox }: LootboxCardProps) {
  return (
    <div className={`relative rounded-3xl border border-white/10 bg-gradient-to-b ${lootbox.color} p-6 flex flex-col items-center text-center`}>
      {/* Chest placeholder */}
      <div className="w-24 h-24 mb-4 rounded-xl bg-black/20 flex items-center justify-center text-5xl">
        📦
      </div>

      <h3 className="text-white font-black text-xl mb-1">{lootbox.name}</h3>
      <p className="text-white/60 text-sm mb-3">€{lootbox.price}</p>

      {/* Badge */}
      <span className="bg-black/30 text-gold text-xs font-bold px-3 py-1 rounded-full mb-4">
        Zdobądź {lootbox.rewardCount} nagród
      </span>

      {/* Reward type icons */}
      <div className="flex gap-2 mb-5">
        {lootbox.rewardTypes.map((type) => (
          <span key={type} title={type} className="text-xl">
            {rewardIcons[type] || '🎁'}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 w-full">
        <button className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-colors shrink-0">
          <Info size={14} />
        </button>
        <Link
          href="#"
          className="flex-1 bg-gold text-black font-bold py-2 rounded-lg text-sm hover:bg-gold/90 transition-colors"
        >
          Otwórz dla {lootbox.price}€
        </Link>
      </div>
    </div>
  )
}

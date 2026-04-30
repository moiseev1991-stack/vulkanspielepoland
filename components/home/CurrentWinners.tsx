import { Winner } from '@/data/winners'

interface CurrentWinnersProps {
  winners: Winner[]
}

function formatWin(amount: number, currency: string): string {
  const formatted = amount.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const symbols: Record<string, string> = { EUR: '€', PLN: 'zł', RON: 'RON' }
  return `${formatted} ${symbols[currency] || currency}`
}

export default function CurrentWinners({ winners }: CurrentWinnersProps) {
  const marqueeItems = [...winners, ...winners]

  return (
    <section className="py-4">
      <div className="flex items-center gap-2 mb-3">
        <span>🎖️</span>
        <h2 className="text-base font-bold text-white">Ostatnie wygrane</h2>
        <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{ background: '#0f0002', border: '1px solid #270005' }}
      >
        <div className="relative overflow-hidden">
          <div className="flex animate-ribbon-slide" style={{ width: 'max-content' }}>
            {marqueeItems.map((winner, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 shrink-0"
                style={{ borderRight: '1px solid #270005' }}
              >
                <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-[#190003]">
                  <img
                    src={winner.gameImage}
                    alt={winner.gameTitle}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{formatWin(winner.amount, winner.currency)}</p>
                  <p className="text-[11px] text-gray-500">
                    wygrał(a) <span className="text-gray-400">{winner.nick}</span>
                  </p>
                  <p className="text-[10px] text-gold cursor-pointer hover:underline">w {winner.gameTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

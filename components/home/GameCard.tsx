import { Game } from '@/data/games'

interface GameCardProps {
  game: Game
  size?: 'sm' | 'md'
  index?: number
}

export default function GameCard({ game, size = 'md', index = 0 }: GameCardProps) {
  const isCompact = size === 'sm'
  const glowOffset = `${(index % 7) * -0.75}s`
  const shineOffset = `${(index % 6) * -1.1}s`

  return (
    <div className="group cursor-pointer">
      <div
        className="game-tile-aura relative rounded-xl overflow-hidden"
        style={{ animationDelay: glowOffset }}
      >
        {/* Image area */}
        <div className={`relative ${isCompact ? 'w-[120px] h-[120px]' : 'aspect-square w-full'} bg-[#1a0000]`}>

          {/* Diagonal shine sweep (idle) */}
          <div className="game-tile-glance" style={{ animationDelay: shineOffset }} />

          {/* Placeholder bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d0000] to-[#1a0000] flex items-center justify-center">
            <span className="text-white/20 text-xs text-center px-2 leading-tight">{game.title}</span>
          </div>

          <img
            src={game.image}
            alt={game.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 z-10">
            <a
              href="/go/"
              className="text-white text-xs font-bold px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
              style={{ background: '#CC0000' }}
            >
              Zagraj
            </a>
            <a
              href="/go/"
              className="text-white text-xs px-6 py-1.5 rounded-md hover:border-gray-400 transition-colors"
              style={{ border: '1px solid #666' }}
            >
              Demo
            </a>
          </div>
        </div>

        {/* Badges */}
        {game.tags.length > 0 && (
          <div className="absolute top-1.5 left-1.5 flex flex-col gap-0.5 z-20">
            {game.tags.includes('hot') && (
              <span className="text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm" style={{ background: '#CC0000' }}>HOT</span>
            )}
            {game.tags.includes('network-promo') && (
              <span className="text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm" style={{ background: '#CC6600' }}>NETWORK PROMO</span>
            )}
            {game.tags.includes('drops-wins') && (
              <span className="text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm" style={{ background: '#0066CC' }}>DROPS & WINS</span>
            )}
            {game.tags.includes('new') && (
              <span className="text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm" style={{ background: '#006633' }}>NEW</span>
            )}
          </div>
        )}
      </div>

      {/* Title + provider */}
      <div className="mt-1 px-0.5">
        <p className="text-[11px] sm:text-sm font-semibold text-white truncate">{game.title}</p>
        <p className="text-[10px] sm:text-xs text-gray-500 truncate">{game.provider}</p>
      </div>
    </div>
  )
}

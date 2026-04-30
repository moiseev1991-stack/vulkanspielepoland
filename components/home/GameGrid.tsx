import { Game } from '@/data/games'
import GameCard from './GameCard'

interface GameGridProps {
  title: string
  count?: number
  games: Game[]
  showMore?: boolean
  icon?: string
}

export default function GameGrid({ title, count, games, showMore = true, icon = '🏆' }: GameGridProps) {
  return (
    <section className="py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{icon}</span>
        <h2 className="text-base font-bold text-white">{title}</h2>
        {count !== undefined && (
          <span className="text-gold font-bold text-sm ml-1">{count}</span>
        )}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3">
        {games.map((game, i) => (
          <GameCard key={game.id} game={game} index={i} />
        ))}
      </div>
      {showMore && (
        <div className="flex justify-center mt-6">
          <button
            className="text-gray-300 text-sm px-8 py-2.5 rounded-md hover:text-white transition-colors"
            style={{ border: '1px solid #3a0000' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#CC0000')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#3a0000')}
          >
            Pokaż więcej
          </button>
        </div>
      )}
    </section>
  )
}

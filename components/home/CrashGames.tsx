import { games } from '@/data/games'
import GameGrid from './GameGrid'

export default function CrashGames() {
  const crashGamesList = games.filter((g) => g.category === 'crash')
  return <GameGrid title="Gry Crash" count={22} games={crashGamesList} icon="💥" />
}

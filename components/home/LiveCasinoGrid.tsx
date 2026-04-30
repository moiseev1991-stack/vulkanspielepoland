import { liveGames as liveCasinoGames } from '@/data/games'
import GameGrid from './GameGrid'

export default function LiveCasinoGrid() {
  return <GameGrid title="Kasyno na żywo" count={567} games={liveCasinoGames} icon="🎰" />
}

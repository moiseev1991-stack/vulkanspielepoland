export interface Game {
  id: string
  title: string
  provider: string
  category: 'slots' | 'live' | 'crash' | 'table' | 'instant'
  tags: ('hot' | 'network-promo' | 'drops-wins' | 'new')[]
  image: string
  isPopular: boolean
}

export const games: Game[] = [
  { id: 'crown-coins', title: 'Crown Coins', provider: 'Evoplay', category: 'slots', tags: ['hot'], image: '/images/games/crown-coins-79e702.jpg', isPopular: true },
  { id: 'big-bass-splash', title: 'Big Bass Splash', provider: 'Pragmatic Play', category: 'slots', tags: ['drops-wins', 'hot'], image: '/images/games/big-bass-splash-75b2e4.jpg', isPopular: true },
  { id: 'seven-seven', title: 'Seven Seven', provider: 'Evoplay', category: 'slots', tags: ['hot'], image: '/images/games/seven-seven-5f2fa1.jpg', isPopular: true },
  { id: 'blazing-crown-deluxe', title: 'Blazing Crown Deluxe', provider: 'Gamomat', category: 'slots', tags: [], image: '/images/games/blazing-crown-deluxe-955ef3.jpg', isPopular: true },
  { id: 'vulkanspiele-spark', title: 'Vulkanspiele Spark', provider: 'BGaming', category: 'slots', tags: ['new'], image: '/images/games/vulkanspiele-spark-3af614.png', isPopular: false },
  { id: 'all-ways-luck', title: 'All Ways Luck', provider: 'Amatic', category: 'slots', tags: [], image: '/images/games/all-ways-luck-d699e6.jpg', isPopular: false },
  { id: 'book-of-ra-deluxe', title: 'Book of Ra Deluxe', provider: 'Novomatic', category: 'slots', tags: ['hot'], image: '/images/games/book-of-ra-deluxe-9870ea.jpg', isPopular: true },
  { id: 'joker-stoker', title: 'Joker Stoker', provider: 'Evoplay', category: 'slots', tags: [], image: '/images/games/joker-stoker-695e58.jpg', isPopular: false },
  { id: 'book-of-fallen', title: 'Book of the Fallen', provider: 'Pragmatic Play', category: 'slots', tags: ['drops-wins'], image: '/images/games/book-of-fallen-e13ed1.jpg', isPopular: true },
  { id: 'cash-the-gold', title: 'Cash the Gold', provider: 'Pragmatic Play', category: 'slots', tags: ['network-promo'], image: '/images/games/cash-the-gold-f13352.jpg', isPopular: false },
  { id: 'gates-of-olympus-1000', title: 'Gates of Olympus 1000', provider: 'Pragmatic Play', category: 'slots', tags: ['hot', 'drops-wins'], image: '/images/games/gates-of-olympus-1000-0c9993.jpg', isPopular: true },
  { id: 'book-of-ra-magic', title: 'Book of Ra Magic', provider: 'Novomatic', category: 'slots', tags: [], image: '/images/games/book-of-ra-magic-a92068.jpg', isPopular: false },
  { id: 'sugar-rush', title: 'Sugar Rush', provider: 'Pragmatic Play', category: 'slots', tags: ['drops-wins', 'hot'], image: '/images/games/sugar-rush-3bc568.jpg', isPopular: true },
  { id: 'wild-love', title: 'Wild Love', provider: 'Endorphina', category: 'slots', tags: ['network-promo'], image: '/images/games/wild-love-6878e2.png', isPopular: false },
  { id: 'candy-craze', title: 'Candy Craze', provider: 'Evoplay', category: 'slots', tags: [], image: '/images/games/candy-craze-264b7e.jpg', isPopular: false },
  { id: 'fortune-bags', title: 'Fortune Bags', provider: 'BGaming', category: 'slots', tags: ['new'], image: '/images/games/fortune-bags-0d8367.webp', isPopular: false },
  { id: 'vulkanspiele-joker', title: 'Vulkanspiele Joker', provider: 'BGaming', category: 'slots', tags: ['new'], image: '/images/games/vulkanspiele-joker-9c50cf.webp', isPopular: false },
  // Crash games
  { id: 'aviator', title: 'Aviator', provider: 'Spribe', category: 'crash', tags: ['hot'], image: '/images/games/aviator-25a4d9.png', isPopular: true },
  { id: 'spaceman', title: 'Spaceman', provider: 'Pragmatic Play', category: 'crash', tags: ['hot'], image: '/images/games/spaceman-3faac5.jpg', isPopular: true },
  { id: 'high-striker', title: 'High Striker', provider: 'Evoplay', category: 'crash', tags: [], image: '/images/games/high-striker-fd51a3.png', isPopular: false },
  { id: 'save-the-hamster', title: 'Save the Hamster', provider: 'Evoplay', category: 'crash', tags: [], image: '/images/games/save-the-hamster-a283d6.jpg', isPopular: false },
  { id: 'speed-crash', title: 'Speed Crash', provider: 'BGaming', category: 'crash', tags: [], image: '/images/games/speed-crash-e947d2.jpg', isPopular: false },
  { id: 'high-flyer', title: 'High Flyer', provider: 'Evoplay', category: 'crash', tags: [], image: '/images/games/high-flyer-e53137.jpg', isPopular: false },
]

export const liveGames: Game[] = [
  { id: 'european-roulette-vip', title: 'European Roulette VIP', provider: 'Evolution', category: 'live', tags: ['hot'], image: '/images/live/european-roulette-vip-9e96b1.png', isPopular: true },
  { id: 'lightning-roulette', title: 'Lightning Roulette', provider: 'Evolution', category: 'live', tags: ['hot'], image: '/images/live/lightning-roulette-5cdf29.jpg', isPopular: true },
  { id: 'one-blackjack', title: 'ONE Blackjack', provider: 'Pragmatic Play', category: 'live', tags: [], image: '/images/live/one-blackjack-ea9e2c.png', isPopular: false },
  { id: 'immersive-roulette', title: 'Immersive Roulette', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/immersive-roulette-950091.jpg', isPopular: false },
  { id: 'roulette-lobby', title: 'Roulette Lobby', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/roulette-lobby-eeb24b.jpg', isPopular: false },
  { id: 'crazy-coin-flip', title: 'Crazy Coin Flip', provider: 'Evolution', category: 'live', tags: ['hot'], image: '/images/live/crazy-coin-flip-fd61cb.png', isPopular: true },
  { id: 'baccarat-lobby', title: 'Baccarat Lobby', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/baccarat-lobby-7df14f.jpg', isPopular: false },
  { id: 'first-person-blackjack', title: 'First Person Blackjack', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/first-person-blackjack-1ca1c6.webp', isPopular: false },
  { id: 'blackjack-lobby', title: 'Blackjack Lobby', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/blackjack-lobby-3f78f5.jpg', isPopular: false },
  { id: 'azure-blackjack', title: 'Azure Blackjack', provider: 'Pragmatic Play', category: 'live', tags: [], image: '/images/live/azure-blackjack-27fe57.jpg', isPopular: false },
  { id: 'first-person-hilo', title: 'First Person HiLo', provider: 'Evolution', category: 'live', tags: [], image: '/images/live/first-person-hilo-6a2d47.jpg', isPopular: false },
]

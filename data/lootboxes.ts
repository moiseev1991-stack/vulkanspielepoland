export interface Lootbox {
  id: string
  name: string
  price: number
  rewardCount: number
  rewardTypes: string[]
  image: string
  color: string
  glowColor: string
}

export const lootboxes: Lootbox[] = [
  {
    id: 'zar',
    name: 'Żar',
    price: 55,
    rewardCount: 4,
    rewardTypes: ['Bonus pieniężny', 'Darmowe obroty', 'Koło Fortuny', 'Pieniądze na saldzie'],
    image: '/images/lootboxes/chest-gold-963657.png',
    color: 'from-yellow-600 to-yellow-900',
    glowColor: '#FF8800',
  },
  {
    id: 'plomien',
    name: 'Płomień',
    price: 30,
    rewardCount: 3,
    rewardTypes: ['Bonus pieniężny', 'Darmowe obroty', 'Pieniądze na saldzie'],
    image: '/images/lootboxes/chest-red-3cb4dc.png',
    color: 'from-red-600 to-red-900',
    glowColor: '#CC0000',
  },
  {
    id: 'iskra',
    name: 'Iskra',
    price: 15,
    rewardCount: 2,
    rewardTypes: ['Bonus pieniężny', 'Darmowe obroty'],
    image: '/images/lootboxes/chest-silver-e24d33.png',
    color: 'from-gray-400 to-gray-700',
    glowColor: '#8888AA',
  },
  {
    id: 'easter',
    name: 'Easter Box',
    price: 45,
    rewardCount: 4,
    rewardTypes: ['Bonus pieniężny', 'Pieniądze na saldzie rzeczywistym', 'Darmowe obroty w najlepszej grze', 'Koło Fortuny'],
    image: '/images/lootboxes/chest-easter-546cb3.png',
    color: 'from-purple-600 to-pink-700',
    glowColor: '#FF8C00',
  },
]

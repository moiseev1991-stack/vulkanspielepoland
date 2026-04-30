const benefits = [
  {
    id: 1,
    icon: '💎',
    title: 'Wyższe limity wypłat',
    description: 'Ciesz się podwyższonymi limitami wypłat dopasowanymi do Twojego poziomu VIP.',
    bgColor: 'rgba(100,200,255,0.15)',
    borderColor: 'rgba(100,200,255,0.2)',
  },
  {
    id: 2,
    icon: '🎁',
    title: 'Ekskluzywne bonusy',
    description: 'Otrzymuj specjalne bonusy, cashback i darmowe spiny tylko dla VIP-ów.',
    bgColor: 'rgba(255,100,0,0.15)',
    borderColor: 'rgba(255,100,0,0.2)',
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Priorytetowe wsparcie',
    description: 'Dedykowany menedżer VIP do dyspozycji 24/7.',
    bgColor: 'rgba(255,215,0,0.15)',
    borderColor: 'rgba(255,215,0,0.2)',
  },
  {
    id: 4,
    icon: '🎰',
    title: 'Dostęp do ekskluzywnych gier',
    description: 'Graj w gry niedostępne dla zwykłych graczy.',
    bgColor: 'rgba(200,0,0,0.15)',
    borderColor: 'rgba(200,0,0,0.2)',
  },
  {
    id: 5,
    icon: '🎂',
    title: 'Specjalne nagrody urodzinowe',
    description: 'Wyjątkowe prezenty w Twoje urodziny.',
    bgColor: 'rgba(255,100,150,0.15)',
    borderColor: 'rgba(255,100,150,0.2)',
  },
  {
    id: 6,
    icon: '✈️',
    title: 'Zaproszenia na eventy',
    description: 'Ekskluzywne zaproszenia na turnieje i events VIP.',
    bgColor: 'rgba(100,150,255,0.15)',
    borderColor: 'rgba(100,150,255,0.2)',
  },
]

export default function VipBenefits() {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: '#FFD700' }}>KORZYŚCI</p>
        <h2 className="text-2xl font-black text-white">Sprawdź swoje przywileje</h2>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        style={{ maxWidth: '1000px', margin: '0 auto' }}
      >
        {benefits.map((b) => (
          <div
            key={b.id}
            className="group relative rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(160deg, #1e0000 0%, #130000 100%)',
              border: '1px solid #2a0000',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#4a0000')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2a0000')}
          >
            {/* Иконка — стилизованный блок */}
            <div className="relative mb-5" style={{ width: '56px', height: '56px' }}>
              {/* Внешнее кольцо */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  border: `1px solid ${b.borderColor}`,
                  boxShadow: `0 0 16px ${b.bgColor}`,
                }}
              />
              {/* Внутренний градиент-фон */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${b.bgColor} 0%, rgba(0,0,0,0.6) 100%)`,
                }}
              />
              {/* Блик в углу */}
              <div
                className="absolute rounded-full"
                style={{
                  top: '6px', left: '7px',
                  width: '10px', height: '6px',
                  background: 'rgba(255,255,255,0.12)',
                  filter: 'blur(2px)',
                  transform: 'rotate(-20deg)',
                }}
              />
              {/* Emoji с drop-shadow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  style={{
                    fontSize: '26px',
                    lineHeight: 1,
                    filter: `drop-shadow(0 0 6px ${b.borderColor}) drop-shadow(0 2px 4px rgba(0,0,0,0.6))`,
                  }}
                >
                  {b.icon}
                </span>
              </div>
            </div>

            <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
            <p className="text-gray-600 text-xs leading-relaxed">{b.description}</p>

            {/* Glow при hover */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 20% 20%, ${b.bgColor} 0%, transparent 55%)`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

import Link from 'next/link'

export default function VipHero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center text-center"
      style={{ minHeight: '520px' }}
    >
      {/* Фон: радиальный градиент */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%,
              rgba(180,120,0,0.15) 0%,
              rgba(100,0,0,0.3) 40%,
              #0a0000 100%)
          `,
        }}
      />

      {/* Декоративные диагональные линии */}
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.05 }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${10 + i * 12}%`,
              background: 'linear-gradient(to right, transparent, #FFD700, transparent)',
              transform: `rotate(${-15 + i * 2}deg)`,
            }}
          />
        ))}
      </div>

      {/* Искры-кресты */}
      {([
        { top: '15%', left: '8%',    right: undefined, size: 20, opacity: 0.4 },
        { top: '25%', left: '18%',   right: undefined, size: 12, opacity: 0.25 },
        { top: '60%', left: '6%',    right: undefined, size: 16, opacity: 0.3 },
        { top: '20%', left: undefined, right: '10%',   size: 18, opacity: 0.35 },
        { top: '50%', left: undefined, right: '7%',    size: 14, opacity: 0.25 },
        { top: '70%', left: undefined, right: '15%',   size: 10, opacity: 0.2 },
      ] as { top: string; left?: string; right?: string; size: number; opacity: number }[]).map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{ top: s.top, left: s.left, right: s.right, opacity: s.opacity }}
        >
          <div style={{ position: 'relative', width: s.size, height: s.size }}>
            <div style={{
              position: 'absolute', top: '50%', left: 0, right: 0,
              height: 1, background: '#FFD700',
              transform: 'translateY(-50%)',
            }} />
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: 1, background: '#FFD700',
              transform: 'translateX(-50%)',
            }} />
          </div>
        </div>
      ))}

      {/* Контент */}
      <div className="relative z-10 px-4">
        <p className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-3">
          WITAJ W
        </p>
        <h1
          className="font-black mb-4"
          style={{
            fontSize: 'clamp(56px, 8vw, 96px)',
            lineHeight: 1,
            background: 'linear-gradient(180deg, #FFD700 0%, #CC8800 50%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(255,180,0,0.4))',
            letterSpacing: '-0.02em',
          }}
        >
          VIP CLUB
        </h1>
        <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
          Odblokuj ekskluzywne nagrody, wyższe limity i przywileje
          dla najbardziej cenionych klientów!
        </p>
        <Link
          href="#register"
          className="inline-block font-bold text-black px-10 py-3 rounded-lg text-sm hover:brightness-110 transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, #FFD700, #CC8800)',
            boxShadow: '0 4px 20px rgba(255,180,0,0.35)',
          }}
        >
          Zostań VIP-em
        </Link>
      </div>
    </section>
  )
}

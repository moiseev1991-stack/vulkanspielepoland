import Link from 'next/link'

const steps = [
  {
    title: 'Zarejestruj się',
    description: 'Utwórz konto w kilka kliknięć i dołącz do grona VIP-ów.',
  },
  {
    title: 'Miłej gry!',
    description: 'Kręć sloty, obstawiaj zakłady i ciesz się grą.',
  },
]

export default function VipSteps() {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: '#FFD700' }}>KROKI</p>
        <h2 className="text-2xl font-black text-white">Jak zostać członkiem VIP</h2>
      </div>

      <div
        className="relative flex gap-4"
        style={{ maxWidth: '1000px', margin: '0 auto' }}
      >
        {/* Соединительная линия между шагами */}
        <div
          className="absolute h-px pointer-events-none"
          style={{
            top: '36px',
            left: 'calc(25% + 20px)',
            width: 'calc(50% - 40px)',
            background: 'linear-gradient(to right, #CC0000, #FFD700)',
          }}
        />

        {steps.map((step, i) => (
          <div
            key={i}
            className="flex-1 rounded-3xl p-6 relative"
            style={{
              background: 'linear-gradient(160deg, #1e0000 0%, #130000 100%)',
              border: '1px solid #2a0000',
            }}
          >
            {/* Номер шага */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-black text-base mb-4"
              style={{
                background: 'linear-gradient(135deg, #CC0000, #880000)',
                boxShadow: '0 0 16px rgba(200,0,0,0.3)',
                color: '#fff',
              }}
            >
              {i + 1}
            </div>

            <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">
              KROK {i + 1}
            </p>
            <h3 className="font-black text-base mb-1" style={{ color: '#FFD700' }}>
              {step.title}
            </h3>
            <p className="text-gray-500 text-xs mb-4">{step.description}</p>

            <Link
              href="#register"
              className="inline-block text-white text-xs font-bold px-5 py-2 rounded-md transition"
              style={{ background: '#CC0000' }}
            >
              Rozpocznij
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

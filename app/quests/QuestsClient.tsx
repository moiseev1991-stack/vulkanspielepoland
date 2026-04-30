'use client'

import { useState } from 'react'
import { quests } from '@/data/quests'

const faqs = [
  {
    q: 'Czym są codzienne questy?',
    a: 'Codzienne questy to zadania, które możesz wykonać każdego dnia. Każde ukończone zadanie daje ci punkty i nagrody. Questy resetują się o północy czasu UTC.',
  },
  {
    q: 'Jak zdobywać punkty questów?',
    a: 'Punkty zbierasz przez grę w wyznaczone automaty lub zakłady sportowe. Każda misja określa wymagany typ gry i minimalną kwotę zakładu.',
  },
  {
    q: 'Kiedy resetują się questy?',
    a: 'Questy codzienne resetują się każdego dnia o 00:00 UTC. Questy tygodniowe — w każdy poniedziałek o 00:00 UTC.',
  },
  {
    q: 'Czy mogę wykonywać questy na urządzeniu mobilnym?',
    a: 'Tak, platforma jest w pełni responsywna. Możesz wykonywać questy zarówno na komputerze, jak i na telefonie lub tablecie.',
  },
  {
    q: 'Co się dzieje z nieodebranymi nagrodami?',
    a: 'Nieodebrane nagrody wygasają po 7 dniach od momentu ukończenia questa. Pamiętaj o regularnym odbieraniu swoich nagród.',
  },
]

export default function QuestsClient() {
  const [questTab, setQuestTab] = useState<'casino' | 'sports'>('casino')
  const [faqOpen, setFaqOpen]   = useState<number | null>(null)

  const filtered = quests.filter((q) => q.category === questTab)

  return (
    <div className="min-h-screen">

      {/* ── 1. Hero ── */}
      <section
        className="relative w-full overflow-hidden flex items-center"
        style={{ minHeight: '270px', background: 'linear-gradient(135deg, #1a0000 0%, #2d0005 50%, #0a0000 100%)' }}
      >
        <div
          className="relative z-10 flex items-center justify-between w-full px-16 py-10"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          {/* Левый контент */}
          <div style={{ maxWidth: '480px' }}>
            <div className="flex gap-2 mb-4">
              <span className="flex items-center gap-1 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#CC0000' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> NA ŻYWO
              </span>
              <span
                className="flex items-center gap-1 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: '#1a1a00', border: '1px solid #a16207' }}
              >
                ⚡ TYGODNIOWY
              </span>
            </div>

            <h1 className="text-4xl font-black text-white mb-3">Strefa Questów</h1>
            <p className="text-gray-400 text-sm mb-5">
              Wykonuj zadania, aby odblokować bonusy. Im więcej questów ukończysz,
              tym większe nagrody otrzymasz!
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Łatwe misje',  icon: '⚡' },
                { label: 'Fajne bonusy', icon: '🎁' },
                { label: 'Nagrody dnia', icon: '🏆' },
              ].map((tag) => (
                <button
                  key={tag.label}
                  className="flex items-center gap-1.5 text-xs text-gray-300 px-3 py-1.5 rounded-full hover:text-white transition"
                  style={{ background: '#1a0000', border: '1px solid #3a0000' }}
                >
                  {tag.icon} {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Правая картинка */}
          <div
            className="absolute right-0 top-0 h-full hidden lg:block"
            style={{
              width: '420px',
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
            }}
          >
            <img
              src="/images/quests/mascot-63e2b1.png"
              alt=""
              className="w-full h-full object-contain object-right"
              style={{ filter: 'drop-shadow(0 0 30px rgba(255,100,0,0.3))' }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Codzienne questy ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="px-4 pt-8 pb-4">
          <h2 className="text-white font-bold text-xl mb-4">Codzienne questy</h2>

          {/* Табы */}
          <div className="flex gap-2">
            {(['casino', 'sports'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setQuestTab(tab)}
                className="flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-md transition"
                style={
                  questTab === tab
                    ? { background: '#CC0000', color: '#fff' }
                    : { background: '#1a0000', border: '1px solid #3a0000', color: 'rgba(255,255,255,0.5)' }
                }
              >
                {tab === 'casino' ? '🎰 KASYNO' : '⚽ SPORTY'}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка квестов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-8">
          {filtered.map((quest) => (
            <div
              key={quest.id}
              className="rounded-xl overflow-hidden"
              style={{ background: 'linear-gradient(160deg, #1e0000 0%, #150000 100%)', border: '1px solid #2a0000' }}
            >
              {/* Картинка */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={quest.image}
                  alt={quest.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-12"
                  style={{ background: 'linear-gradient(to top, #1e0000, transparent)' }}
                />
                <span
                  className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-sm text-white"
                  style={{ background: quest.badgeColor }}
                >
                  {quest.badgeLabel}
                </span>
              </div>

              {/* Контент */}
              <div className="p-4">
                <h3 className="text-white font-bold text-sm mb-1">{quest.title}</h3>
                <p className="text-gray-500 text-xs mb-4">{quest.description}</p>

                {/* Прогресс */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Postęp</span>
                    <span style={{ color: '#FFD700' }}>{quest.progress}/{quest.total}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full" style={{ background: '#2a0000' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(quest.progress / quest.total) * 100}%`,
                        background: 'linear-gradient(to right, #CC0000, #FFD700)',
                      }}
                    />
                  </div>
                </div>

                {/* Награда + кнопка */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">🏆</span>
                    <span className="text-xs font-bold" style={{ color: '#FFD700' }}>{quest.reward}</span>
                  </div>
                  <button
                    className="text-black text-xs font-bold px-4 py-1.5 rounded-md hover:bg-yellow-400 transition"
                    style={{ background: '#FFD700' }}
                  >
                    Rozpocznij
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. Twój postęp ── */}
      <div className="px-4 mb-8" style={{ maxWidth: '1280px', margin: '0 auto 32px' }}>
        <section
          className="rounded-3xl overflow-hidden p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{
            background: 'linear-gradient(135deg, #1a0000 0%, #0d0000 100%)',
            border: '1px solid #2a0000',
          }}
        >
          {/* Левая часть */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">TWÓJ POSTĘP</p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-6xl font-black" style={{ color: '#FFD700' }}>50</span>
              <span className="text-gray-400 text-sm">do nagrody</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Ukończ wszystkie dostępne misje i zdobądź unikalną nagrodę specjalną!
            </p>

            <div className="w-80 h-3 rounded-full mb-5" style={{ background: '#2a0000' }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: '33%',
                  background: 'linear-gradient(to right, #CC0000, #FFD700)',
                  boxShadow: '0 0 8px rgba(255,200,0,0.4)',
                }}
              />
            </div>

            <button
              className="text-black font-bold text-sm px-8 py-2.5 rounded-lg hover:bg-yellow-400 transition"
              style={{ background: '#FFD700' }}
            >
              Rozpocznij
            </button>
          </div>

          {/* Правая часть: иконки наград */}
          <div className="flex gap-4">
            {['🎰', '💰', '🎡', '🏆'].map((icon, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: '#1a0000', border: '1px solid #3a0000' }}
              >
                {icon}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── FAQ ── */}
      <section className="px-4 pb-16" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 className="text-white font-bold text-xl mb-4">Warunki i zasady</h2>
        <div className="rounded-xl overflow-hidden" style={{ background: '#110000', border: '1px solid #2a0000' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #2a0000' : 'none' }}>
              <button
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-white/[0.03]"
              >
                <span className="text-white/80 text-sm font-medium pr-4">{faq.q}</span>
                <span
                  className="text-white/40 text-xl flex-shrink-0 transition-transform duration-200"
                  style={{ transform: faqOpen === i ? 'rotate(45deg)' : 'none' }}
                >
                  +
                </span>
              </button>
              {faqOpen === i && (
                <div className="px-5 pb-4 text-white/50 text-sm leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

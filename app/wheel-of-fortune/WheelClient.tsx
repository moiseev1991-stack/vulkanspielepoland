'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

const SEGMENTS = [
  { label: 'EU€10',      color: '#8B0000' },
  { label: 'FS 25',      color: '#9B4400' },
  { label: 'EU€50',      color: '#8B0000' },
  { label: 'FS 5',       color: '#7A0020' },
  { label: '150% BONUS', color: '#4A0070' },
  { label: 'Respin',     color: '#006644' },
  { label: 'Puste',      color: '#5a0000' },
  { label: 'EU€20',      color: '#004488' },
]

const MULTIPLIERS  = [1, 3, 7, 15]
const SPINS_PER_DAY = 3
const RADIUS       = 220
const CENTER       = RADIUS + 24          // padding for dots/glow ring
const SIZE         = CENTER * 2
const ARC          = (2 * Math.PI) / SEGMENTS.length

function getWinner(finalRad: number): number {
  // pointer is at top = -π/2 in canvas coords
  // local pointer angle inside the (non-rotated) wheel
  const local = ((-Math.PI / 2 - finalRad) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI)
  return Math.floor(local / ARC) % SEGMENTS.length
}

export default function WheelClient() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const rotRef     = useRef(0)           // current rotation in radians
  const animRef    = useRef<number>()
  const [spinning,   setSpinning]   = useState(false)
  const [spinsLeft,  setSpinsLeft]  = useState(SPINS_PER_DAY)
  const [multiplier, setMultiplier] = useState(1)
  const [modal,      setModal]      = useState<{ label: string } | null>(null)

  // ─── Draw ───────────────────────────────────────────────────────────────────
  const draw = useCallback((rot: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, SIZE, SIZE)

    // Glow ring
    const glowGrad = ctx.createRadialGradient(CENTER, CENTER, RADIUS - 10, CENTER, CENTER, RADIUS + 24)
    glowGrad.addColorStop(0, 'rgba(255,200,0,0.55)')
    glowGrad.addColorStop(1, 'rgba(255,200,0,0)')
    ctx.beginPath()
    ctx.arc(CENTER, CENTER, RADIUS + 12, 0, 2 * Math.PI)
    ctx.fillStyle = glowGrad
    ctx.fill()

    // Gold border ring
    ctx.beginPath()
    ctx.arc(CENTER, CENTER, RADIUS + 6, 0, 2 * Math.PI)
    ctx.strokeStyle = '#FFFFFF'
    ctx.lineWidth = 4
    ctx.stroke()

    // Dots
    for (let i = 0; i < 32; i++) {
      const a = (i / 32) * 2 * Math.PI
      const x = CENTER + (RADIUS + 16) * Math.cos(a)
      const y = CENTER + (RADIUS + 16) * Math.sin(a)
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#FF6600'
      ctx.shadowColor = i % 2 === 0 ? 'rgba(255,255,255,0.8)' : 'transparent'
      ctx.shadowBlur  = i % 2 === 0 ? 7 : 0
      ctx.fill()
      ctx.shadowBlur = 0
    }

    // Segments
    SEGMENTS.forEach((seg, i) => {
      const start = rot + i * ARC
      const end   = start + ARC

      // Fill
      ctx.beginPath()
      ctx.moveTo(CENTER, CENTER)
      ctx.arc(CENTER, CENTER, RADIUS, start, end)
      ctx.closePath()
      ctx.fillStyle = seg.color
      ctx.fill()

      // Divider
      ctx.beginPath()
      ctx.moveTo(CENTER, CENTER)
      ctx.arc(CENTER, CENTER, RADIUS, start, end)
      ctx.closePath()
      ctx.strokeStyle = 'rgba(0,0,0,0.35)'
      ctx.lineWidth   = 1.5
      ctx.stroke()

      // Text — rotated radially, always readable
      const textAngle  = start + ARC / 2
      const textRadius = RADIUS * 0.63

      ctx.save()
      ctx.translate(
        CENTER + textRadius * Math.cos(textAngle),
        CENTER + textRadius * Math.sin(textAngle),
      )
      // +π/2 makes text read from centre toward rim
      ctx.rotate(textAngle + Math.PI / 2)
      ctx.fillStyle     = '#FFFFFF'
      ctx.font          = 'bold 13px Inter, Arial, sans-serif'
      ctx.textAlign     = 'center'
      ctx.textBaseline  = 'middle'
      ctx.shadowColor   = 'rgba(0,0,0,0.9)'
      ctx.shadowBlur    = 5
      ctx.fillText(seg.label, 0, 0)
      ctx.restore()
    })

    // Centre button gradient
    const btnGrad = ctx.createRadialGradient(CENTER, CENTER, 0, CENTER, CENTER, 42)
    btnGrad.addColorStop(0, '#FFDD00')
    btnGrad.addColorStop(1, '#CC8800')
    ctx.beginPath()
    ctx.arc(CENTER, CENTER, 42, 0, 2 * Math.PI)
    ctx.fillStyle   = btnGrad
    ctx.shadowColor = 'rgba(255,215,0,0.6)'
    ctx.shadowBlur  = 16
    ctx.fill()
    ctx.shadowBlur  = 0
    ctx.strokeStyle = '#FFD700'
    ctx.lineWidth   = 3
    ctx.stroke()

    // Play triangle
    ctx.fillStyle = '#000'
    ctx.beginPath()
    ctx.moveTo(CENTER - 10, CENTER - 14)
    ctx.lineTo(CENTER + 16, CENTER)
    ctx.lineTo(CENTER - 10, CENTER + 14)
    ctx.closePath()
    ctx.fill()
  }, [])

  useEffect(() => { draw(rotRef.current) }, [draw])

  // ─── Spin ────────────────────────────────────────────────────────────────────
  const spin = () => {
    if (spinning || spinsLeft <= 0) return
    setSpinning(true)
    setSpinsLeft((s) => s - 1)

    const extraSpins  = (5 + Math.random() * 5) * 2 * Math.PI
    const extraAngle  = Math.random() * 2 * Math.PI
    const target      = rotRef.current + extraSpins + extraAngle
    const duration    = 4200
    const startAngle  = rotRef.current
    const startTime   = performance.now()

    const animate = (now: number) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease     = 1 - Math.pow(1 - progress, 3)   // ease-out cubic
      const current  = startAngle + (target - startAngle) * ease

      rotRef.current = current
      draw(current)

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        const finalRad   = ((target % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
        rotRef.current   = finalRad
        setSpinning(false)
        setModal(SEGMENTS[getWinner(finalRad)])
      }
    }

    animRef.current = requestAnimationFrame(animate)
  }

  // ─── UI ──────────────────────────────────────────────────────────────────────
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 40%, #2a0008 0%, #110002 50%, #060000 100%)' }}
    >
      {/* Laser beams */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CC0000" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#CC0000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lg2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8800" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF8800" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="0,900 0,0 380,900"       fill="url(#lg1)" />
        <polygon points="1440,900 1440,0 1060,900" fill="url(#lg1)" opacity="0.7" />
        <polygon points="720,0 560,900 880,900"    fill="url(#lg1)" opacity="0.3" />
        <polygon points="300,0 100,900 500,900"    fill="url(#lg2)" opacity="0.5" />
        <polygon points="1140,0 940,900 1340,900"  fill="url(#lg2)" opacity="0.5" />
      </svg>

      {/* Floating casino symbols */}
      {[
        { emoji: '🎰', top: '8%',  left: '4%',  size: 48, opacity: 0.12 },
        { emoji: '🃏', top: '15%', left: '88%', size: 40, opacity: 0.10 },
        { emoji: '🎲', top: '70%', left: '6%',  size: 44, opacity: 0.10 },
        { emoji: '💎', top: '75%', left: '90%', size: 40, opacity: 0.12 },
        { emoji: '⭐', top: '5%',  left: '50%', size: 36, opacity: 0.09 },
        { emoji: '🏆', top: '80%', left: '48%', size: 38, opacity: 0.08 },
        { emoji: '🎴', top: '40%', left: '2%',  size: 34, opacity: 0.08 },
        { emoji: '🎯', top: '35%', left: '94%', size: 36, opacity: 0.09 },
        { emoji: '💰', top: '90%', left: '20%', size: 42, opacity: 0.10 },
        { emoji: '🔥', top: '88%', left: '75%', size: 38, opacity: 0.10 },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            top: s.top, left: s.left,
            fontSize: s.size,
            opacity: s.opacity,
            filter: 'blur(1px)',
          }}
        >
          {s.emoji}
        </span>
      ))}

      {/* Center glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,0,0,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center py-12 select-none">

        {/* Title */}
        <h1 className="text-white font-black text-3xl mb-1 tracking-wide uppercase">
          Koło <span style={{ color: '#FFD700' }}>Fortuny</span>
        </h1>
        <p className="text-white/40 text-sm mb-8">
          Pozostałe obroty dzisiaj:{' '}
          <span className="font-bold" style={{ color: spinsLeft > 0 ? '#FFD700' : '#666' }}>
            {spinsLeft} / {SPINS_PER_DAY}
          </span>
        </p>

        {/* Arrow — flex justify-center keeps it strictly centred over canvas */}
        <div className="flex justify-center" style={{ marginBottom: '-12px', zIndex: 10, position: 'relative' }}>
          <div
            style={{
              width: 0, height: 0,
              borderLeft:  '14px solid transparent',
              borderRight: '14px solid transparent',
              borderTop:   '28px solid #FFD700',
              filter:      'drop-shadow(0 2px 8px rgba(255,200,0,0.9))',
            }}
          />
        </div>

        {/* Canvas wheel */}
        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          style={{
            cursor:   spinning || spinsLeft <= 0 ? 'not-allowed' : 'pointer',
            maxWidth: '100%',
          }}
          onClick={spin}
        />

        {/* Spin button */}
        <button
          onClick={spin}
          disabled={spinning || spinsLeft <= 0}
          className="mt-6 px-12 py-3 rounded-xl font-black text-base uppercase tracking-wider transition-all"
          style={{
            background: spinning || spinsLeft <= 0
              ? '#333'
              : 'linear-gradient(135deg, #FFD700, #FFC107)',
            color:  spinning || spinsLeft <= 0 ? '#666' : '#111',
            boxShadow: spinning || spinsLeft <= 0 ? 'none' : '0 4px 20px rgba(255,215,0,0.4)',
            cursor: spinning || spinsLeft <= 0 ? 'not-allowed' : 'pointer',
          }}
        >
          {spinsLeft <= 0 ? 'Brak obrotów' : spinning ? 'Kręci się...' : 'Zakręć!'}
        </button>

        {/* Multiplier */}
        <div className="mt-6 text-center">
          <p className="text-white/40 text-xs mb-3 uppercase tracking-widest">Wybierz mnożnik zakładu:</p>
          <div className="flex gap-3 justify-center">
            {MULTIPLIERS.map((m) => (
              <button
                key={m}
                onClick={() => { if (!spinning) setMultiplier(m) }}
                className="px-5 py-2 rounded-lg text-sm font-bold transition-all"
                style={
                  multiplier === m
                    ? { background: '#FFD700', color: '#111', boxShadow: '0 0 12px rgba(255,215,0,0.5)' }
                    : { background: '#1a0000', color: 'rgba(255,255,255,0.45)', border: '1px solid #3a0000' }
                }
              >
                X{m}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Result modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={() => setModal(null)}
        >
          <div
            className="relative flex flex-col items-center rounded-3xl px-12 py-10 text-center"
            style={{
              background:  'linear-gradient(135deg, #1a0000, #2d0000)',
              border:      '2px solid #FFD700',
              boxShadow:   '0 0 60px rgba(255,215,0,0.3)',
              minWidth:    320,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-4xl mb-4">
              {modal.label === 'Puste' ? '😔' : '🎉'}
            </div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
              {modal.label === 'Puste' ? 'Tym razem bez wygranej' : 'Twoja nagroda'}
            </p>
            {modal.label !== 'Puste' && (
              <div className="text-3xl font-black mb-1" style={{ color: '#FFD700' }}>
                {modal.label}
              </div>
            )}
            {multiplier > 1 && modal.label !== 'Puste' && modal.label !== 'Respin' && (
              <p className="text-white/60 text-sm mt-1">Mnożnik x{multiplier} zastosowany!</p>
            )}
            <button
              onClick={() => setModal(null)}
              className="mt-8 px-8 py-2.5 rounded-xl font-bold text-sm hover:opacity-80 transition"
              style={{ background: '#FFD700', color: '#111' }}
            >
              {modal.label === 'Respin' ? '🔄 Zakręć ponownie!' : 'Odbierz'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

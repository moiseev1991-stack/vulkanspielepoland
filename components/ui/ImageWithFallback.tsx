'use client'

import { useState } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  fallbackIcon?: string
  fallbackGradient?: string
}

export default function ImageWithFallback({
  src,
  alt,
  className,
  style,
  fallbackIcon = '🎰',
  fallbackGradient = 'linear-gradient(135deg, #2d0000, #1a0008)',
}: Props) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`w-full h-full flex items-center justify-center ${className ?? ''}`}
        style={{ background: fallbackGradient, ...style }}
      >
        <span style={{ fontSize: '48px', opacity: 0.3 }}>{fallbackIcon}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
    />
  )
}

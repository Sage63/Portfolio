'use client'

import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

type ConfettiBurstProps = {
  burstKey: number
}

export default function ConfettiBurst({ burstKey }: ConfettiBurstProps) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!burstKey) {
      return
    }
    setActive(true)
    const timer = setTimeout(() => setActive(false), 1700)
    return () => clearTimeout(timer)
  }, [burstKey])

  const pieces = useMemo(
    () =>
      Array.from({ length: 36 }, (_, index) => ({
        id: `${burstKey}-${index}`,
        x: (index - 18) * 14,
        y: 220 + (index % 10) * 10,
        rotate: index * 25,
        color: ['#7C5CFF', '#22D3EE', '#A78BFA', '#2DD4BF'][index % 4]
      })),
    [burstKey]
  )

  if (!active) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden" aria-hidden>
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          animate={{ opacity: 0, x: piece.x, y: piece.y, rotate: piece.rotate }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/3 h-2 w-2 rounded-sm"
          style={{ backgroundColor: piece.color }}
        />
      ))}
    </div>
  )
}
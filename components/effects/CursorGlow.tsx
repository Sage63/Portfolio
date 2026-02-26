'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function CursorGlow() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const x = useSpring(mouseX, { stiffness: 180, damping: 30 })
  const y = useSpring(mouseY, { stiffness: 180, damping: 30 })

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      mouseX.set(event.clientX - 120)
      mouseY.set(event.clientY - 120)
    }

    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed z-[5] hidden h-60 w-60 rounded-full bg-primary/15 blur-3xl md:block"
      aria-hidden
    />
  )
}
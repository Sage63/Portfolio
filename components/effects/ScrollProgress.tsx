'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  return <motion.div style={{ scaleX: width }} className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-primary to-accent" />
}
'use client'

import { motion } from 'framer-motion'
import { Braces, Cpu, Database, Globe, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import ResumeActions from '@/components/ui/ResumeActions'

const roles = ['Frontend Engineer', 'UI Designer', 'Creative Problem Solver']
const floatingIcons = [
  { Icon: Braces, className: 'left-[8%] top-[22%]' },
  { Icon: Sparkles, className: 'left-[82%] top-[20%]' },
  { Icon: Globe, className: 'left-[12%] top-[70%]' },
  { Icon: Database, className: 'left-[76%] top-[68%]' },
  { Icon: Cpu, className: 'left-[50%] top-[12%]' }
]

export default function HeroSection() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    // Type one character at a time, then rotate to the next role.
    const currentRole = roles[roleIndex]
    let charIndex = 0

    const interval = setInterval(() => {
      charIndex += 1
      setText(currentRole.slice(0, charIndex))
      if (charIndex >= currentRole.length) {
        clearInterval(interval)
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setText('')
        }, 1300)
      }
    }, 70)

    return () => clearInterval(interval)
  }, [roleIndex])

  return (
    <section id="hero" className="section-shell relative flex min-h-screen items-center overflow-hidden bg-aurora">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" aria-hidden />

      {/* Floating technology badges for ambient motion in the hero area */}
      {floatingIcons.map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          className={`absolute hidden rounded-full border border-white/20 bg-white/5 p-3 text-accent lg:block ${className}`}
          animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        >
          <Icon size={18} />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl"
      >
        <p className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-sm text-accent">
          Premium, high-performance digital experiences
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Hi, I’m <span className="text-accent">Jan-Jan</span>
          <span className="block text-primary">{text}<span className="animate-pulse">|</span></span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-text/80">
          I design and build futuristic, conversion-focused products with clean architecture, smooth motion,
          and pixel-perfect execution.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:bg-primary/90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-text transition hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
        </div>
        <ResumeActions />
      </motion.div>
    </section>
  )
}
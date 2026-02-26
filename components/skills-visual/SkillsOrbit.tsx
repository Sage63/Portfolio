'use client'

import { motion } from 'framer-motion'
import { Cloud, Code, Database, Palette } from 'lucide-react'

const skills = [
  { label: 'Frontend', icon: Code, angle: 0 },
  { label: 'Backend', icon: Database, angle: 90 },
  { label: 'DevOps', icon: Cloud, angle: 180 },
  { label: 'UI/UX', icon: Palette, angle: 270 }
]

export default function SkillsOrbit() {
  return (
    <div className="relative mx-auto h-[20rem] w-full max-w-md [--orbit-radius:112px] sm:h-[22rem] sm:[--orbit-radius:136px]">
      <div className="absolute inset-0 rounded-full border border-white/15" aria-hidden />
      <div className="absolute inset-[22%] rounded-full border border-white/10" aria-hidden />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        className="absolute inset-0"
      >
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <div
              key={skill.label}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${skill.angle}deg) translateY(calc(var(--orbit-radius) * -1))` }}
            >
              <div
                className="w-[4.5rem] rounded-xl border border-accent/40 bg-background/80 px-2 py-2 text-center shadow-cyan sm:w-24 sm:px-3 sm:py-3"
                style={{ transform: `translate(-50%, -50%) rotate(-${skill.angle}deg)` }}
              >
                <Icon size={16} className="mx-auto text-accent" />
                <p className="mt-1 whitespace-nowrap text-[10px] text-text/85 sm:text-xs">{skill.label}</p>
              </div>
            </div>
          )
        })}
      </motion.div>

      <div className="absolute left-1/2 top-1/2 w-[8.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/35 bg-primary/10 px-4 py-5 text-center sm:w-[11rem] sm:px-5 sm:py-8">
        <p className="text-xs uppercase tracking-[0.15em] text-accent sm:text-sm">Skills Core</p>
        <p className="mt-2 text-base font-semibold text-white sm:text-lg">Full-Stack Focus</p>
      </div>
    </div>
  )
}
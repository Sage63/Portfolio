'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'

const lighthouseScores = [
  { label: 'Performance', score: 100, color: '#22D3EE' },
  { label: 'Accessibility', score: 100, color: '#7C5CFF' },
  { label: 'Best Practices', score: 100, color: '#34D399' },
  { label: 'SEO', score: 100, color: '#F59E0B' }
]

export default function LighthouseScores() {
  return (
    <section className="section-shell" id="lighthouse">
      <SectionHeading
        eyebrow="Quality"
        title="Lighthouse-oriented engineering standards"
        subtitle="Performance, accessibility, best practices, and SEO goals represented with animated score rings."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {lighthouseScores.map((item) => (
          <LighthouseRing key={item.label} {...item} />
        ))}
      </div>
    </section>
  )
}

function LighthouseRing({ label, score, color }: { label: string; score: number; color: string }) {
  const radius = 44
  const circumference = 2 * Math.PI * radius
  const progress = circumference - (score / 100) * circumference

  return (
    <motion.article whileHover={{ y: -4 }} className="glass rounded-2xl p-5 text-center">
      <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: progress }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <p className="-mt-20 text-2xl font-bold text-white">{score}</p>
      <p className="mt-10 text-sm text-text/75">{label}</p>
    </motion.article>
  )
}
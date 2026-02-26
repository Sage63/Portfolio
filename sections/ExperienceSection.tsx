'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { timelineItems } from '@/lib/data'
import { motion } from 'framer-motion'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Work, internships, and education timeline"
        subtitle="A growth-focused journey across design, development, and product delivery."
      />

      <div className="relative ml-2 border-l border-white/15 pl-6">
        {timelineItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            className="relative mb-10"
          >
            <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-accent shadow-cyan" aria-hidden />
            <p className="text-sm text-accent">{item.period}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-text/75">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
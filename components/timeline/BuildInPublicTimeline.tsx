'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2022',
    title: 'Started Building in Public',
    detail: 'Shared progress updates, experiments, and component systems while learning modern frontend architecture.'
  },
  {
    year: '2023',
    title: 'First Real Client Projects',
    detail: 'Delivered branded portfolio websites and improved launch quality with responsive and accessible UX.'
  },
  {
    year: '2024',
    title: 'Product-Focused Engineering',
    detail: 'Moved from static pages to data-driven products with reusable patterns and measurable outcomes.'
  },
  {
    year: '2025+',
    title: 'Senior-Level Delivery',
    detail: 'Leading production-ready builds that combine polished interaction design and reliable technical execution.'
  }
]

export default function BuildInPublicTimeline() {
  return (
    <section className="section-shell" id="build-public">
      <SectionHeading
        eyebrow="Build In Public"
        title="Developer journey and learning timeline"
        subtitle="A transparent progression of skills, product thinking, and engineering maturity."
      />

      <div className="relative border-l border-white/15 pl-6">
        {milestones.map((step, index) => (
          <motion.article
            key={step.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative mb-8"
          >
            <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-glow" aria-hidden />
            <p className="text-sm text-accent">{step.year}</p>
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-1 text-sm text-text/75">{step.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
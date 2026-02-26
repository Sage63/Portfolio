'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'
import { CodeXml, Figma, FileJson, GitBranch, Layers, MonitorCog, ServerCog } from 'lucide-react'

const techItems = [
  { label: 'TypeScript', icon: FileJson },
  { label: 'React', icon: Layers },
  { label: 'Next.js', icon: MonitorCog },
  { label: 'Tailwind CSS', icon: CodeXml },
  { label: 'Node.js', icon: ServerCog },
  { label: 'Git', icon: GitBranch },
  { label: 'Figma', icon: Figma }
]

export default function TechStackSection() {
  return (
    <section id="tech" className="section-shell">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools that power my workflow"
        subtitle="Modern technologies for building fast, scalable, and delightful digital products."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-5"
            >
              <Icon className="text-accent transition group-hover:text-primary" size={20} />
              <p className="mt-3 font-medium text-white">{item.label}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
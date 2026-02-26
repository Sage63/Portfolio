'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { projectItems } from '@/lib/data'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

const filters = ['All', 'Web', 'Mobile', 'UI'] as const

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')

  const filteredProjects = useMemo(() => {
    // Keep filtering logic memoized to avoid unnecessary recalculation on render.
    if (activeFilter === 'All') {
      return projectItems
    }
    return projectItems.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work with measurable impact"
        subtitle="A curated set of products that combine visual polish, technical depth, and business outcomes."
      />

      {/* Category filter chips */}
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? 'border-accent bg-accent/15 text-accent'
                : 'border-white/15 bg-white/5 text-text/75 hover:border-white/30'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Glass project cards with hover lift interactions */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <motion.article
            key={project.slug}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="glass group rounded-2xl p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs text-accent">
                {project.category}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Live demo for ${project.title}`}
                  className="rounded-lg border border-white/20 p-2 text-text/70 transition hover:border-accent hover:text-accent"
                >
                  <ExternalLink size={16} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub repository for ${project.title}`}
                  className="rounded-lg border border-white/20 p-2 text-text/70 transition hover:border-accent hover:text-accent"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text/75">{project.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text/80">
                  {tech}
                </li>
              ))}
            </ul>

            <Link
              href={`/projects/${project.slug}`}
              className="mt-5 inline-flex text-sm font-semibold text-accent transition hover:text-primary"
            >
              View case study →
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
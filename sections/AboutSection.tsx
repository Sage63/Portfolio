'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import SkillsOrbit from '@/components/skills-visual/SkillsOrbit'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Building modern products with strong design and code quality"
        subtitle="I focus on creating websites that feel premium, interactive, and efficient from first paint to final conversion."
      />

      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <article className="glass rounded-3xl p-6">
          <Image
            src="/jan.png"
            alt="Portrait of Jan-Jan"
            width={500}
            height={620}
            className="mx-auto h-[22rem] w-full object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.55)] sm:h-[24rem]"
            priority
          />
          <p className="mt-4 text-text/80">
            I blend strategy, creativity, and engineering to build interfaces that are beautiful, scalable, and genuinely useful.
          </p>
        </article>

        <article className="glass rounded-3xl p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-white">Skills & Focus</h3>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="mt-6 flex justify-center"
          >
            <SkillsOrbit />
          </motion.div>
        </article>
      </div>
    </section>
  )
}
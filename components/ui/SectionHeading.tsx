import { motion } from 'framer-motion'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="mb-10"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-text/75">{subtitle}</p> : null}
    </motion.div>
  )
}
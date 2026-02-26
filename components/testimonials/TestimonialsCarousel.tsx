'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'A. Romero',
    role: 'Startup Founder',
    quote:
      'Working with Jan-Jan felt like having a product-minded engineer and designer in one person. Fast, clean, and reliable delivery.'
  },
  {
    name: 'L. Kim',
    role: 'Design Lead',
    quote:
      'The interface quality and micro-interactions were exceptional. The final experience felt premium and easy to use.'
  },
  {
    name: 'M. Santos',
    role: 'Tech Consultant',
    quote:
      'Strong technical decisions, thoughtful accessibility, and impressive communication throughout the implementation phase.'
  }
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-shell" id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What collaborators say"
        subtitle="Feedback from people I have built products and interfaces with."
      />

      <div className="glass rounded-3xl p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index].name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-lg text-text/85">“{testimonials[index].quote}”</p>
            <p className="mt-4 font-semibold text-white">{testimonials[index].name}</p>
            <p className="text-sm text-text/70">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 flex gap-2">
          {testimonials.map((item, dot) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(dot)}
              className={`h-2 w-8 rounded-full transition ${dot === index ? 'bg-accent' : 'bg-white/20'}`}
              aria-label={`Go to testimonial ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
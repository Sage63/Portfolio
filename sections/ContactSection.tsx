'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  message: ''
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    // Lightweight client-side validation before backend integration.
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete all fields before submitting.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setSuccess('Thanks! Your message is ready to send. Connect backend/email service next.')
    setForm(initialState)
  }

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s create something exceptional"
        subtitle="Tell me about your idea, timeline, and goals. I will get back to you with a practical plan."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.form
          onSubmit={submitHandler}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="glass rounded-3xl p-6 sm:p-8"
          aria-label="Contact form"
        >
          <div className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-text/80">Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-text placeholder:text-text/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Your name"
                aria-label="Name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-text/80">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-text placeholder:text-text/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="you@example.com"
                aria-label="Email"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-text/80">Message</span>
              <textarea
                rows={5}
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-text placeholder:text-text/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Tell me about your project"
                aria-label="Message"
              />
            </label>
          </div>

          {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
          {success ? <p className="mt-4 text-sm text-emerald-300">{success}</p> : null}

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-primary/90"
          >
            Send Message
            <Send size={16} />
          </button>
        </motion.form>

        <aside className="glass rounded-3xl p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-white">Connect</h3>
          <p className="mt-3 text-text/75">Prefer socials? Reach out on your favorite platform.</p>
          <div className="mt-6 space-y-3">
            <a href="mailto:hello@example.com" className="flex items-center gap-3 rounded-xl border border-white/15 p-3 text-text/80 transition hover:border-accent hover:text-accent">
              <Mail size={18} />
              hello@example.com
            </a>
            <a href="https://github.com/" className="flex items-center gap-3 rounded-xl border border-white/15 p-3 text-text/80 transition hover:border-accent hover:text-accent">
              <Github size={18} />
              github.com/janjan
            </a>
            <a href="https://linkedin.com/" className="flex items-center gap-3 rounded-xl border border-white/15 p-3 text-text/80 transition hover:border-accent hover:text-accent">
              <Linkedin size={18} />
              linkedin.com/in/janjan
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
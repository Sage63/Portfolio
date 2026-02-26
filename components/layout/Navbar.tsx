'use client'

import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#tech', label: 'Tech' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <a href="#hero" className="text-sm font-bold tracking-[0.2em] text-accent">
          JAN.JAN
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="hidden items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 md:inline-flex"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Available for work
          </motion.span>
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-lg border border-white/20 p-2 text-text md:hidden"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="glass mx-4 mb-4 rounded-2xl p-4 md:hidden"
        >
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-text/90 transition hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  )
}
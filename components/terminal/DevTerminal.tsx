'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Terminal, X } from 'lucide-react'
import { FormEvent, KeyboardEvent as ReactKeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'

type DevTerminalProps = {
  onCelebrate: () => void
}

type OutputLine = {
  id: number
  text: string
}

const commandDocs = [
  'help',
  'about',
  'skills',
  'projects',
  'contact',
  'github',
  'resume',
  'clear',
  'theme matrix',
  'sudo hire-me'
]

export default function DevTerminal({ onCelebrate }: DevTerminalProps) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyPointer, setHistoryPointer] = useState(-1)
  const [matrixEnabled, setMatrixEnabled] = useState(false)
  const [output, setOutput] = useState<OutputLine[]>([
    { id: 1, text: 'Welcome to Dev Mode Terminal. Type `help` to see available commands.' }
  ])

  const lineIdRef = useRef(2)
  const viewportRef = useRef<HTMLDivElement>(null)

  const commandMap = useMemo(
    () => ({
      help: `Available commands:\n${commandDocs.map((item) => `- ${item}`).join('\n')}`,
      about: "Hi, I'm Jan-Jan Laguan. Information Technology developer focused on modern web apps and interactive digital experiences.",
      skills: 'Core skills: Next.js, TypeScript, Tailwind, Framer Motion, Node.js, UI/UX systems.',
      projects: 'Explore featured projects and click into each case study from the Projects section.',
      contact: 'Reach me via the contact form or email: janjanlaguan9@gmail.com',
      github: 'GitHub profile: https://github.com/Sage63',
      resume: 'Download resume from /resume.pdf and vCard from /contact.vcf',
      'sudo hire-me': 'Access granted ✅. Excellent decision. Let’s build something remarkable.'
    }),
    []
  )

  useEffect(() => {
    if (!viewportRef.current) {
      return
    }
    viewportRef.current.scrollTop = viewportRef.current.scrollHeight
  }, [output])

  useEffect(() => {
    if (!open) {
      return
    }
    const onEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [open])

  const pushOutput = (text: string) => {
    const nextId = lineIdRef.current
    lineIdRef.current += 1
    setOutput((current) => [...current, { id: nextId, text }])
  }

  const executeCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase()
    if (!command) {
      return
    }

    pushOutput(`> ${command}`)

    if (command === 'clear') {
      setOutput([])
      return
    }

    if (command === 'theme matrix') {
      const next = !matrixEnabled
      setMatrixEnabled(next)
      pushOutput(next ? 'Matrix mode enabled.' : 'Matrix mode disabled.')
      return
    }

    if (command === 'sudo hire-me') {
      onCelebrate()
    }

    pushOutput(commandMap[command as keyof typeof commandMap] || `Command not found: ${command}. Try \`help\`.`)
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!input.trim()) {
      return
    }
    setHistory((prev) => [input, ...prev])
    setHistoryPointer(-1)
    executeCommand(input)
    setInput('')
  }

  const onHistoryNavigation = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (!history.length) {
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const nextPointer = Math.min(historyPointer + 1, history.length - 1)
      setHistoryPointer(nextPointer)
      setInput(history[nextPointer])
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextPointer = historyPointer - 1
      if (nextPointer < 0) {
        setHistoryPointer(-1)
        setInput('')
        return
      }
      setHistoryPointer(nextPointer)
      setInput(history[nextPointer])
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-5 z-[80] inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/90 px-4 py-2 text-sm font-semibold text-accent shadow-cyan transition hover:scale-[1.02]"
      >
        <Terminal size={16} />
        Enter Dev Mode
      </button>

      <AnimatePresence>
        {open ? (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[100] p-3 sm:p-6 ${matrixEnabled ? 'terminal-matrix bg-[#010b06]/95' : 'bg-[#02050d]/95'}`}
            aria-label="Developer terminal overlay"
          >
            <div className="mx-auto flex h-full max-w-6xl flex-col rounded-2xl border border-emerald-300/25 bg-black/70 p-3 sm:p-6">
              <div className="mb-3 flex items-center justify-between border-b border-emerald-300/20 pb-3">
                <p className="font-mono text-sm text-emerald-300">dev-shell@portfolio:~</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-emerald-300/20 p-2 text-emerald-200"
                  aria-label="Close terminal"
                >
                  <X size={16} />
                </button>
              </div>

              <div ref={viewportRef} className="min-h-0 flex-1 overflow-y-auto pr-1 font-mono text-sm text-emerald-200">
                {output.map((line) => (
                  <pre key={line.id} className="mb-2 whitespace-pre-wrap break-words">
                    {line.text}
                  </pre>
                ))}
              </div>

              <form onSubmit={onSubmit} className="mt-3 flex shrink-0 items-center gap-2 border-t border-emerald-300/20 pt-3">
                <span className="font-mono text-emerald-300">$</span>
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={onHistoryNavigation}
                  className="w-full bg-transparent font-mono text-sm text-emerald-100 outline-none"
                  placeholder="Type a command..."
                  autoFocus
                  aria-label="Terminal command input"
                />
                <span className="terminal-cursor text-emerald-300">▋</span>
              </form>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </>
  )
}
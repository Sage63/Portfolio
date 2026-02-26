'use client'

import { assistantResponses, findAssistantResponse, suggestedQuestions } from '@/data/assistantResponses'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
import { FormEvent, useMemo, useState } from 'react'

type Message = {
  id: number
  role: 'user' | 'assistant'
  text: string
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'assistant', text: 'Hi! I am your local AI portfolio assistant. Ask me anything about this developer.' }
  ])

  const assistantKnowledgeSize = useMemo(() => Object.keys(assistantResponses).length, [])

  const sendMessage = (text: string) => {
    if (!text.trim()) {
      return
    }
    const userId = Date.now()
    setMessages((prev) => [...prev, { id: userId, role: 'user', text }])
    setMessage('')
    setTyping(true)

    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { id: userId + 1, role: 'assistant', text: findAssistantResponse(text) }])
    }, 650)
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    sendMessage(message)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-[85] inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/90 px-4 py-2 text-sm font-semibold text-primary shadow-glow"
      >
        <MessageCircle size={16} />
        Ask AI about me
      </button>

      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            className="fixed bottom-20 right-5 z-[86] flex h-[30rem] w-[min(94vw,25rem)] flex-col rounded-2xl border border-white/20 bg-slate-950/98 p-4 text-text shadow-2xl backdrop-blur"
          >
            <div className="mb-3 flex shrink-0 items-center justify-between border-b border-white/10 pb-3">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-accent">
                  <Bot size={16} />
                  AI Portfolio Assistant
                </p>
                <p className="text-xs text-text/60">Offline responses · {assistantKnowledgeSize} intents</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/20 p-2 text-text/80"
                aria-label="Close AI assistant"
              >
                <X size={14} />
              </button>
            </div>

            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
              {messages.map((item) => (
                <div
                  key={item.id}
                  className={`max-w-[88%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    item.role === 'assistant'
                      ? 'mr-auto border border-white/10 bg-white/10 text-text/90'
                      : 'ml-auto border border-primary/40 bg-primary/25 text-primary'
                  }`}
                >
                  {item.text}
                </div>
              ))}
              {typing ? <p className="text-xs text-accent">Assistant is typing...</p> : null}
            </div>

            <div className="mt-3 flex shrink-0 flex-wrap gap-2 border-t border-white/10 pt-3">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-text/80 transition hover:border-accent/60 hover:text-accent"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="mt-3 flex shrink-0 items-center gap-2">
              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ask something..."
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-text outline-none placeholder:text-text/55 focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="AI message input"
              />
              <button
                type="submit"
                className="rounded-xl bg-primary px-3 py-2 text-white transition hover:bg-primary/90"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  )
}
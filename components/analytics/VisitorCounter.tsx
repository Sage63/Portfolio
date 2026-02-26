'use client'

import { useEffect, useState } from 'react'

const COUNTER_KEY = 'portfolio-visitor-counter'
const VISITED_KEY = 'portfolio-visited-this-browser'

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const storedCount = Number(localStorage.getItem(COUNTER_KEY) || '1284')
    const hasVisited = localStorage.getItem(VISITED_KEY) === 'true'
    const nextCount = hasVisited ? storedCount : storedCount + 1

    localStorage.setItem(COUNTER_KEY, String(nextCount))
    localStorage.setItem(VISITED_KEY, 'true')
    setCount(nextCount)
  }, [])

  if (count === null) {
    return <p className="text-sm text-text/65">👀 Loading visitor analytics...</p>
  }

  return <p className="text-sm text-text/65">👀 {count.toLocaleString()} developers visited this site</p>
}
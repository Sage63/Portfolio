'use client'

import ConfettiBurst from '@/components/effects/ConfettiBurst'
import AIAssistant from '@/components/ai-assistant/AIAssistant'
import DevTerminal from '@/components/terminal/DevTerminal'
import { useState } from 'react'

export default function HomeEnhancements() {
  const [burstKey, setBurstKey] = useState(0)

  return (
    <>
      <ConfettiBurst burstKey={burstKey} />
      <DevTerminal onCelebrate={() => setBurstKey((prev) => prev + 1)} />
      <AIAssistant />
    </>
  )
}

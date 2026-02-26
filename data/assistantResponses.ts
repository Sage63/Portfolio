export const suggestedQuestions = [
  'What technologies do you use?',
  'Show me your projects',
  'Are you available for work?',
  'How can I contact you?',
  'Tell me about your experience'
] as const

export const assistantResponses: Record<string, string> = {
  'what technologies do you use?':
    'I build with Next.js, TypeScript, Tailwind CSS, Framer Motion, Node.js, and modern UI/UX tooling.',
  'show me your projects':
    'You can explore featured work in the Projects section, and each card links to a detailed case study page.',
  'are you available for work?':
    'Yes — I am currently available for freelance and collaborative product opportunities.',
  'how can i contact you?':
    'Use the contact form, email link, or social links in the Contact section for the fastest response.',
  'tell me about your experience':
    'I focus on frontend engineering, interactive UI systems, and building polished, high-performance web experiences.'
}

export function findAssistantResponse(question: string) {
  const normalized = question.trim().toLowerCase()
  return (
    assistantResponses[normalized] ||
    'Great question. I can answer about technologies, projects, availability, contact, and experience.'
  )
}
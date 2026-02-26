import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/styles/effects.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Jan-Jan | Frontend Developer Portfolio',
  description:
    'Premium, futuristic, and high-performance personal portfolio built with Next.js, TypeScript, and Tailwind CSS.',
  keywords: ['Jan-Jan', 'Portfolio', 'Frontend Developer', 'Next.js', 'TypeScript', 'Tailwind'],
  openGraph: {
    title: 'Jan-Jan Portfolio',
    description: 'Modern, unique, and interactive frontend portfolio.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background text-text`}>{children}</body>
    </html>
  )
}
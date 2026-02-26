import { Github, Linkedin, Mail } from 'lucide-react'
import VisitorCounter from '@/components/analytics/VisitorCounter'

const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: Linkedin },
  { label: 'Email', href: 'mailto:hello@example.com', icon: Mail }
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-shell flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div>
          <p className="text-sm text-text/70">© {new Date().getFullYear()} Jan-Jan. All rights reserved.</p>
          <VisitorCounter />
        </div>
        <div className="flex items-center gap-3">
          {socials.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="rounded-lg border border-white/15 p-2 text-text/70 transition hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
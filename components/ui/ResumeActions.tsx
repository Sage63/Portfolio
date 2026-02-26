import { Download, UserRoundPlus } from 'lucide-react'

export default function ResumeActions() {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-text transition hover:border-accent"
      >
        <Download size={14} />
        Download Resume PDF
      </a>
      <a
        href="/contact.vcf"
        download
        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-text transition hover:border-accent"
      >
        <UserRoundPlus size={14} />
        Add Contact (vCard)
      </a>
    </div>
  )
}
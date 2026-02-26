import { ProjectItem } from '@/lib/data'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

type CaseStudyLayoutProps = {
  project: ProjectItem
}

export default function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <article className="section-shell">
      <a href="/#projects" className="mb-4 inline-block text-sm text-accent">
        ← Back to projects
      </a>

      <div className="glass rounded-3xl p-6 sm:p-8">
        <p className="text-sm text-accent">{project.category}</p>
        <h1 className="mt-1 text-3xl font-bold text-white sm:text-4xl">{project.title}</h1>
        <p className="mt-3 text-text/80">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-text/75">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a href={project.liveUrl} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">
            Live Demo
            <ExternalLink size={14} />
          </a>
          <a href={project.githubUrl} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-text">
            GitHub
            <Github size={14} />
          </a>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <ContentCard title="Overview" content={project.caseStudy.overview} />
        <ContentCard title="Problem" content={project.caseStudy.problem} />
        <ContentCard title="Solution" content={project.caseStudy.solution} />
        <ContentCard title="Challenges" content={project.caseStudy.challenges} />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <section className="glass rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-white">What I Learned</h2>
          <p className="mt-3 text-text/80">{project.caseStudy.learned}</p>
        </section>

        <section className="glass rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
          <ul className="mt-3 space-y-2 text-text/80">
            {project.stack.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-6">
        <h2 className="mb-3 text-2xl font-semibold text-white">Screenshots Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.caseStudy.screenshots.map((shot, index) => (
            <div key={`${shot}-${index}`} className="overflow-hidden rounded-2xl border border-white/15">
              <Image src={shot} alt={`${project.title} screenshot ${index + 1}`} width={600} height={400} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}

function ContentCard({ title, content }: { title: string; content: string }) {
  return (
    <section className="glass rounded-2xl p-5">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-text/80">{content}</p>
    </section>
  )
}
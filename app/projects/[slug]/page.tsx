import CaseStudyLayout from '@/components/projects/CaseStudyLayout'
import { getProjectBySlug, projectItems } from '@/lib/data'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projectItems.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: `${project.title} | Case Study`,
    description: project.description
  }
}

export default async function ProjectCaseStudyPage({ params }: Params) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <CaseStudyLayout project={project} />
}
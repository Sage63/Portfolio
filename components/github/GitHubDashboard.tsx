'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'
import { Github, Star } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

type GitHubRepo = {
  id: number
  name: string
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
}

type DashboardData = {
  username: string
  profile: {
    login: string
    avatar_url: string
    html_url: string
    followers: number
    public_repos: number
    name: string | null
  } | null
  repos: GitHubRepo[]
  stars: number
}

export default function GitHubDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/github')
        const json = (await response.json()) as DashboardData
        setData(json)
      } catch {
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    void fetchData()
  }, [])

  const heatmap = useMemo(() => {
    const seed = (data?.username || 'dev').split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
    return Array.from({ length: 49 }, (_, index) => ((seed + index * 13) % 5) + 1)
  }, [data?.username])

  return (
    <section id="github" className="section-shell">
      <SectionHeading
        eyebrow="GitHub"
        title="Live coding activity dashboard"
        subtitle="A real-time profile snapshot from GitHub API with animated repository and contribution insights."
      />

      {loading ? <p className="text-text/70">Loading GitHub dashboard...</p> : null}

      {!loading && data ? (
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="glass rounded-3xl p-6">
            <div className="flex items-center gap-4">
              {data.profile ? (
                <Image
                  src={data.profile.avatar_url}
                  alt="GitHub profile"
                  width={72}
                  height={72}
                  className="rounded-full border border-white/20"
                />
              ) : (
                <div className="h-[72px] w-[72px] rounded-full border border-white/20 bg-white/5" />
              )}
              <div>
                <h3 className="text-xl font-semibold text-white">{data.profile?.name || data.username}</h3>
                <a href={data.profile?.html_url || `https://github.com/${data.username}`} className="text-sm text-accent">
                  @{data.profile?.login || data.username}
                </a>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <StatCard label="Followers" value={data.profile?.followers || 0} />
              <StatCard label="Repos" value={data.profile?.public_repos || data.repos.length} />
              <StatCard label="Stars" value={data.stars} />
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm text-text/70">Contribution style heatmap</p>
              <div className="grid grid-cols-7 gap-1">
                {heatmap.map((value, index) => (
                  <span
                    key={index}
                    className="h-3 rounded-sm"
                    style={{ backgroundColor: `rgba(34,211,238,${0.12 + value * 0.17})` }}
                  />
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {data.repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <p className="truncate font-medium text-white">{repo.name}</p>
                  <Github size={16} className="text-accent" />
                </div>
                <p className="text-xs text-text/65">{repo.language || 'Unspecified'}</p>
                <p className="mt-2 flex items-center gap-1 text-xs text-text/70">
                  <Star size={12} />
                  {repo.stargazers_count} stars
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
      <p className="text-xl font-semibold text-accent">{value}</p>
      <p className="text-xs text-text/70">{label}</p>
    </motion.div>
  )
}
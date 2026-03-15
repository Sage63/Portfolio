type GitHubProfile = {
  login: string
  avatar_url: string
  html_url: string
  followers: number
  public_repos: number
  name: string | null
}

type GitHubRepo = {
  id: number
  name: string
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
}

type GitHubContributionDay = {
  date: string
  level: number
  color: string
}

export type GitHubDashboardData = {
  username: string
  profile: GitHubProfile | null
  repos: GitHubRepo[]
  stars: number
  contributions: GitHubContributionDay[]
}

const GITHUB_API = 'https://api.github.com'

const GITHUB_LEVEL_COLORS = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'] as const

async function safeFetch<T>(url: string, token?: string): Promise<T | null> {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    next: { revalidate: 300 }
  })

  if (!response.ok) {
    return null
  }

  return (await response.json()) as T
}

async function getGitHubContributions(username: string): Promise<GitHubContributionDay[]> {
  const response = await fetch(`https://github.com/users/${username}/contributions`, {
    headers: {
      Accept: 'text/html'
    },
    next: { revalidate: 300 }
  })

  if (!response.ok) {
    return []
  }

  const html = await response.text()
  const tdTags = html.match(/<td[^>]*ContributionCalendar-day[^>]*>/g) || []

  const days = tdTags
    .map((tag) => {
      const date = tag.match(/data-date="([^"]+)"/)?.[1]
      const levelValue = tag.match(/data-level="([0-4])"/)?.[1]

      if (!date || !levelValue) {
        return null
      }

      const level = Number(levelValue)
      return {
        date,
        level,
        color: GITHUB_LEVEL_COLORS[level] || GITHUB_LEVEL_COLORS[0]
      }
    })
    .filter((day) => day !== null) as GitHubContributionDay[]

  return days.slice(-49)
}

export async function getGitHubDashboardData(): Promise<GitHubDashboardData> {
  const username = process.env.GITHUB_USERNAME || process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'octocat'
  const token = process.env.GITHUB_TOKEN

  const profile = await safeFetch<GitHubProfile>(`${GITHUB_API}/users/${username}`, token)
  const repos =
    (await safeFetch<GitHubRepo[]>(
      `${GITHUB_API}/users/${username}/repos?per_page=6&sort=pushed&direction=desc&type=owner`,
      token
    )) || []
  const contributions = await getGitHubContributions(username)

  const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)

  return {
    username,
    profile,
    repos,
    stars,
    contributions
  }
}
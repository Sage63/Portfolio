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

export type GitHubDashboardData = {
  username: string
  profile: GitHubProfile | null
  repos: GitHubRepo[]
  stars: number
}

const GITHUB_API = 'https://api.github.com'

async function safeFetch<T>(url: string, token?: string): Promise<T | null> {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    next: { revalidate: 1800 }
  })

  if (!response.ok) {
    return null
  }

  return (await response.json()) as T
}

export async function getGitHubDashboardData(): Promise<GitHubDashboardData> {
  const username = process.env.GITHUB_USERNAME || process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'octocat'
  const token = process.env.GITHUB_TOKEN

  const profile = await safeFetch<GitHubProfile>(`${GITHUB_API}/users/${username}`, token)
  const repos =
    (await safeFetch<GitHubRepo[]>(`${GITHUB_API}/users/${username}/repos?per_page=6&sort=updated`, token)) || []

  const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)

  return {
    username,
    profile,
    repos,
    stars
  }
}
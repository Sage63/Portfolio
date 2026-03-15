import { getGitHubDashboardData } from '@/lib/github'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const data = await getGitHubDashboardData()
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'no-store, max-age=0'
    }
  })
}
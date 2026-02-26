import { getGitHubDashboardData } from '@/lib/github'
import { NextResponse } from 'next/server'

export async function GET() {
  const data = await getGitHubDashboardData()
  return NextResponse.json(data)
}
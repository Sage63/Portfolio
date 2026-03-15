# Jan-Jan Portfolio (Next.js)

Modern and futuristic personal portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build production bundle:

   ```bash
   npm run build
   ```

4. Run production server:

   ```bash
   npm run start
   ```

## Environment Variables

Create a `.env.local` file:

```bash
GITHUB_USERNAME=your-github-username
# Optional for higher API limits
GITHUB_TOKEN=your-github-token
```

For Vercel production, add the same variables in Project Settings > Environment Variables:

- `GITHUB_USERNAME`
- `GITHUB_TOKEN` (recommended to avoid GitHub rate limits)

After adding or changing env vars in Vercel, redeploy so the latest values are applied.

If `GITHUB_USERNAME` is missing, the app will try to infer your username from `GITHUB_TOKEN` via the GitHub API.

## Advanced Features Added

- Developer terminal mode with command parser and command history
- Local AI assistant chat panel with predefined intents
- Live GitHub dashboard using GitHub REST API
- Dynamic case study pages via `/projects/[slug]`
- Lighthouse score visualization section
- Orbiting interactive skills visualization
- Build-in-public timeline
- Konami easter egg system with matrix mode + confetti
- Navbar availability badge
- Resume and vCard download actions
- Testimonials carousel
- Local visitor analytics counter

## Folder Structure

- `app/` - App Router pages and global styles
- `components/` - Reusable UI, layout, and effects
- `data/` - Local assistant and feature data sources
- `hooks/` - Reusable React hooks (e.g., Konami code)
- `sections/` - Page sections as modular components
- `lib/` - Data and utility helpers
- `styles/` - Extra utility styling
- `public/` - Static assets
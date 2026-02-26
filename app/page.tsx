import GitHubDashboard from '@/components/github/GitHubDashboard'
import LighthouseScores from '@/components/lighthouse/LighthouseScores'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import TestimonialsCarousel from '@/components/testimonials/TestimonialsCarousel'
import BuildInPublicTimeline from '@/components/timeline/BuildInPublicTimeline'
import BackgroundParticles from '@/components/effects/BackgroundParticles'
import CursorGlow from '@/components/effects/CursorGlow'
import ScrollProgress from '@/components/effects/ScrollProgress'
import AboutSection from '@/sections/AboutSection'
import ContactSection from '@/sections/ContactSection'
import ExperienceSection from '@/sections/ExperienceSection'
import HeroSection from '@/sections/HeroSection'
import ProjectsSection from '@/sections/ProjectsSection'
import TechStackSection from '@/sections/TechStackSection'
import HomeEnhancements from './ui-home-enhancements'

export default function HomePage() {
  return (
    <>
      {/* Global visual helpers */}
      <ScrollProgress />
      <CursorGlow />
      <BackgroundParticles />

      {/* Persistent site chrome */}
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <BuildInPublicTimeline />
        <TechStackSection />
        <LighthouseScores />
        <GitHubDashboard />
        <TestimonialsCarousel />
        <ContactSection />
      </main>

      <HomeEnhancements />

      {/* Minimal footer with social links */}
      <Footer />
    </>
  )
}
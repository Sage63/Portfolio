export type ProjectCategory = 'Web' | 'Mobile' | 'UI'

export type CaseStudy = {
  overview: string
  problem: string
  solution: string
  challenges: string
  learned: string
  screenshots: string[]
}

export type ProjectItem = {
  slug: string
  title: string
  description: string
  category: ProjectCategory
  stack: string[]
  liveUrl: string
  githubUrl: string
  caseStudy: CaseStudy
}

export const projectItems: ProjectItem[] = [
  {
    slug: 'iot-rfid-door-lock-system',
    title: 'Capstone Project: Smart IoT-Enabled RFID Door Lock System',
    description:
      'An intelligent access-control system using RFID and IoT connectivity for secure, real-time monitoring and remote management.',
    category: 'Web',
    stack: ['IoT', 'RFID', 'Embedded Systems', 'Web Dashboard'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    caseStudy: {
      overview:
        'A capstone system that combines hardware access control and a web management dashboard for campus and office security workflows.',
      problem:
        'Traditional door security workflows relied on manual key handling and lacked centralized logs, making monitoring and incident response slow.',
      solution:
        'Built an RFID-based smart lock integrated with IoT messaging and a browser dashboard for access history, user provisioning, and alerting.',
      challenges:
        'Device connectivity stability and RFID edge-case handling were challenging during early testing and required retry and fallback logic.',
      learned:
        'Learned end-to-end product thinking across hardware, software, and UX while balancing reliability, security, and usability.',
      screenshots: ['/jan.png', '/jan.png', '/jan.png']
    }
  },
  {
    slug: 'shopee-instagram-ui-clones',
    title: 'Shopee and Instagram UI Clone Projects',
    description:
      'High-fidelity UI clone designs created in Adobe XD, focused on layout consistency, component reuse, and modern mobile-first UX patterns.',
    category: 'UI',
    stack: ['Adobe XD', 'UI Design', 'Wireframing', 'Prototyping'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    caseStudy: {
      overview:
        'A design-focused exploration of two widely used consumer apps to understand visual hierarchy, spacing systems, and interaction flows.',
      problem:
        'The challenge was replicating complex interfaces while keeping consistency across typography, color systems, and reusable UI primitives.',
      solution:
        'Created reusable design components and responsive screen variants in Adobe XD, then documented spacing, sizing, and interaction states.',
      challenges:
        'Matching production-level polish required careful pixel alignment and repeated review of component state behavior.',
      learned:
        'Improved mastery of visual systems and learned how to design interfaces that are both familiar and performance-oriented.',
      screenshots: ['/jan.png', '/jan.png']
    }
  },
  {
    slug: 'school-management-system-web',
    title: 'School Management System (Web-Based)',
    description:
      'A web-based academic management platform for handling student records, class scheduling, grading workflows, and administrative operations.',
    category: 'Web',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Database'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    caseStudy: {
      overview:
        'A centralized school operations platform for administrators, instructors, and students with role-based access controls.',
      problem:
        'Academic processes were fragmented across spreadsheets and manual forms, causing data inconsistencies and reporting delays.',
      solution:
        'Built a modular web system with role-based dashboards, student records, class scheduling, and grading tools.',
      challenges:
        'Role permissions and data modeling for enrollment, grading, and schedules required careful planning and validation.',
      learned:
        'Gained practical experience in building scalable data-driven systems and mapping technical architecture to institutional workflows.',
      screenshots: ['/jan.png', '/jan.png']
    }
  }
]

export const timelineItems = [
  {
    period: '2025 — Present',
    title: 'Senior Frontend Engineer · Freelance',
    description: 'Led UX-focused product builds for startups, from rapid prototypes to production-grade delivery.'
  },
  {
    period: '2023 — 2025',
    title: 'Frontend Developer · Product Studio',
    description: 'Built scalable interface systems with TypeScript and improved Lighthouse scores across client projects.'
  },
  {
    period: '2020 — 2023',
    title: 'Information Technology · University',
    description: 'Focused on software engineering foundations, web architecture, and human-centered product design.'
  }
]

export function getProjectBySlug(slug: string) {
  return projectItems.find((project) => project.slug === slug)
}

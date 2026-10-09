export type Category = 'Full Stack' | 'Frontend' | 'Backend' | 'AI' | 'APIs'
export interface CaseStudy { problem: string; solution: string; features: string[]; challenges: { challenge: string; solution: string }[]; state: string; lessons: string }
export interface Project {
  id: string; title: string; tagline: string; description: string; category: Category[]; technologies: string[]
  image?: string; gallery: { src: string; alt: string }[]; liveUrl?: string; githubUrl?: string; placeholder?: boolean; caseStudy?: CaseStudy
}
export interface TimelineEntry { period: string; title: string; description: string }
export interface SocialLink { label: string; href: string; icon: 'github' | 'linkedin' | 'mail' }

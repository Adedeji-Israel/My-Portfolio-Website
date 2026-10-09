import type { Project } from '../types'
import home from '../assets/eventplace/home.jpg'
import categories from '../assets/eventplace/categories.jpg'
import events from '../assets/eventplace/events.jpg'
import organizers from '../assets/eventplace/organizers.jpg'
import speakers from '../assets/eventplace/speakers.jpg'
import footer from '../assets/eventplace/footer.jpg'

export const projects: Project[] = [
  {
    id: 'eventplace', title: 'EventPlace', tagline: 'Full-stack event management platform',
    description: 'Organizers create and manage events. Attendees discover events, pay for tickets and receive e-tickets.',
    category: ['Full Stack', 'Frontend', 'Backend', 'APIs'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Paystack'],
    image: home, liveUrl: 'https://eventplace-sable.vercel.app', githubUrl: "https://github.com/Adedeji-Israel/Event-Management-Frontend",
    gallery: [
      { src: home, alt: 'Home page with event search by name, location and category' },
      { src: categories, alt: 'Browse events by category' },
      { src: events, alt: 'Featured events with organizer and Buy Now buttons' },
      { src: organizers, alt: 'Featured organizers list' },
      { src: speakers, alt: 'Popular speakers grid' },
      { src: footer, alt: 'Footer with app links and newsletter signup' },
    ],
    caseStudy: {
      problem: 'Organizers need one place to publish events and sell tickets, and attendees need a simple way to find events and pay.',
      solution: 'A multi-vendor platform with organizer, admin and attendee dashboards, online payments, e-tickets and email notifications.',
      features: ['Authentication with JWT access and refresh tokens', 'Role-based access control with an organizer approval workflow', 'Event and ticket management', 'Paystack payment integration', 'E-ticket generation and email notifications', 'Organizer, admin and attendee dashboards'],
      challenges: [
        { challenge: 'Different permissions for admins, organizers and attendees.', solution: 'Role-based authorization on both frontend and backend, so what the UI shows and what the API allows are both controlled by the signed-in role.' },
        { challenge: 'A role changed in the database while the frontend still showed the old dashboard.', solution: 'Refreshed the user after approval, with a short polling check that redirects to the right dashboard without a re-login.' },
        { challenge: 'Transactional email was blocked in production on Gmail SMTP.', solution: 'Moved to Resend with a verified subdomain and SPF/DKIM records.' },
      ],
      state: 'Live on Vercel.',
      lessons: 'Add your own lessons learned here.',
    },
  },
  { id: 'project-two', title: 'Project Two', tagline: 'Placeholder project', description: 'Replace this entry in src/data/projects.ts with a real project.', category: ['AI'], technologies: ['Add tech'], gallery: [], placeholder: true },
  { id: 'project-three', title: 'Project Three', tagline: 'Placeholder project', description: 'Replace this entry in src/data/projects.ts with a real project.', category: ['Full Stack'], technologies: ['Add tech'], gallery: [], placeholder: true },
]

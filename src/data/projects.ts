import type { Project } from "../types";
import home from "../assets/eventplace/home.jpg";
import categories from "../assets/eventplace/categories.jpg";
import events from "../assets/eventplace/events.jpg";
import organizers from "../assets/eventplace/organizers.jpg";
import speakers from "../assets/eventplace/speakers.jpg";
import footer from "../assets/eventplace/footer.jpg";

import cardifyHome from "../assets/cardify/cardify-land-page 01.png";
import cardifyAbout from "../assets/cardify/cardify-about.png";
import cardifyContact from "../assets/cardify/cardify-contact.png";
import cardifySignUp from "../assets/cardify/cardify-sign-up.png";
import cardifySignIn from "../assets/cardify/cardify-sign-in.png";
import cardifyFooter from "../assets/cardify/cardify-footer.png"

export const projects: Project[] = [
  // project one
  {
    id: "eventplace",
    title: "EventPlace",
    tagline: "AI Powered Full-stack Event Management System",
    description:
      "Organizers create and manage events. Attendees discover events, pay for tickets and receive e-tickets.",
    category: ["Full Stack", "Frontend", "Backend", "APIs"],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Paystack",
    ],
    image: home,
    liveUrl: "https://eventplace-sable.vercel.app",
    githubUrl: "https://github.com/Adedeji-Israel/Event-Management-Frontend",
    gallery: [
      {
        src: home,
        alt: "Home page with event search by name, location and category",
      },
      { src: categories, alt: "Browse events by category" },
      {
        src: events,
        alt: "Featured events with organizer and Buy Now buttons",
      },
      { src: organizers, alt: "Featured organizers list" },
      { src: speakers, alt: "Popular speakers grid" },
      { src: footer, alt: "Footer with app links and newsletter signup" },
    ],
    caseStudy: {
      problem:
        "Organizers need one place to publish events and sell tickets, and attendees need a simple way to find events and pay.",
      solution:
        "A multi-vendor platform with organizer, admin and attendee dashboards, online payments, e-tickets and email notifications.",
      features: [
        "Authentication with JWT access and refresh tokens",
        "Role-based access control with an organizer approval workflow",
        "Event and ticket management",
        "Paystack payment integration",
        "E-ticket generation and email notifications",
        "Organizer, admin and attendee dashboards",
      ],
      challenges: [
        {
          challenge:
            "Different permissions for admins, organizers and attendees.",
          solution:
            "Role-based authorization on both frontend and backend, so what the UI shows and what the API allows are both controlled by the signed-in role.",
        },
        {
          challenge:
            "A role changed in the database while the frontend still showed the old dashboard.",
          solution:
            "Refreshed the user after approval, with a short polling check that redirects to the right dashboard without a re-login.",
        },
        {
          challenge:
            "Transactional email was blocked in production on Gmail SMTP.",
          solution:
            "Moved to Resend with a verified subdomain and SPF/DKIM records.",
        },
      ],
      state: "Live on Vercel.",
      lessons: `Building EventPlace was a valuable hands-on experience that strengthened my full-stack development skills and taught me important lessons, including:

1. Full-Stack Development: Gained practical experience connecting frontend and backend systems using React, TypeScript, Node.js, Express.js, and MongoDB.
2. Authentication & Security: Learned to implement secure authentication, role-based access control (RBAC), protected routes, and user permissions.
3. API & Payment Integration: Improved my understanding of RESTful APIs, Paystack payment integration, transaction verification, and webhook handling.
4. Problem-Solving & Debugging: Developed better debugging skills by identifying and resolving real-world challenges involving APIs, database connections, authentication, and deployment.
5. Deployment & Production: Gained experience deploying full-stack applications using Vercel and Render, configuring environment variables, and managing production environments.
6. Code Quality & Scalability: Learned the importance of writing reusable, maintainable, and well-structured code while building applications that can grow with users' needs.

Key Takeaway: I learned that building great software goes beyond writing code. It requires thoughtful planning, security, problem-solving, continuous learning, and a focus on delivering solutions that solve real-world problems.
`,
    },
  },

  // project two
  {
    id: "cardify",
    title: "Cardify",
    tagline:
      "Responsive Website Rebuilt with React, and Tailwind CSS using AI tools",
    description:
      "A five-page marketing site (landing, about, contact, sign up and sign in) rebuilt from my original college project into a modern, responsive React app.",
    category: ["Frontend", "AI"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: cardifyHome,
    liveUrl: "https://cardify-liard.vercel.app",
    githubUrl: "https://github.com/Adedeji-Israel/cardify-web-app",
    gallery: [
      { src: cardifyHome, alt: "Cardify landing page" },
      { src: cardifyAbout, alt: "About us page" },
      { src: cardifyContact, alt: "Contact us page" },
      { src: cardifySignUp, alt: "Create account page" },
      { src: cardifySignIn, alt: "Sign in page" },
      { src: cardifyFooter, alt: "Footer section" },
    ],
    caseStudy: {
      problem:
        "Cardify was my level-one project at SQI College of ICT, hand-coded in plain HTML, CSS and JavaScript. It worked, but it was hard to maintain, not fully responsive and visually dated.",
      solution:
        "I rebuilt it in React, TypeScript and Tailwind CSS, keeping the original branding and look of the live site while moving to reusable components and a responsive layout.",
      features: [
        "Five pages: landing, about us, contact us, create account and sign in",
        "Fully responsive layout, mobile first",
        "Reusable, typed React components",
        "Original branding preserved and refreshed",
      ],
      challenges: [
        {
          challenge:
            "Some assets in the original project were outdated compared to the live site.",
          solution:
            "Used the live site as the source of truth for branding and imagery instead of the old files.",
        },
      ],
      state: "Live on Vercel.",
      lessons: `Rebuilding Cardify showed me how far I've come since my first project, and taught me several things:
  
  1. Refactoring: Turning a plain HTML/CSS/JS site into reusable React components.
  2. Responsive Design: Building layouts with Tailwind CSS that work on every screen size.
  3. TypeScript: Typing props and form state to catch mistakes early.
  4. Deployment: Shipping a production build to Vercel.
  
  Key Takeaway: Revisiting old work is one of the clearest ways to measure growth, and a good rebuild keeps what worked while fixing what didn't.
  `,
    },
  },

  // project three
  {
    id: "project-three",
    title: "Project Three",
    tagline: "Placeholder project",
    description:
      "Replace this entry in src/data/projects.ts with a real project.",
    category: ["Full Stack"],
    technologies: ["Add tech"],
    gallery: [],
    placeholder: true,
  },
];

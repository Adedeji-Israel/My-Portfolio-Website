# Israel Adedayo: Developer Portfolio

A responsive, animated portfolio built with React, TypeScript, Vite, Tailwind CSS v4 and Framer Motion. Content lives in `src/data`, so adding a project never touches UI code.

## Features
Sticky navbar with scroll-spy and an accessible mobile drawer (Escape, focus trap, scroll lock) · dark/light theme with no flash on load · animated hero with typing code panel · filterable project grid with animated transitions · case-study pages with a screenshot viewer · skills tabs, journey timeline, process and AI-workflow sections · validated contact form with loading, success and error states · 404 page · reduced-motion support · SPA routing for Vercel.

## Tech stack
React 19, TypeScript (strict), Vite, Tailwind CSS v4, Framer Motion, React Router, Lucide React.

## Project structure
```
src/
  components/ layout/ hero/ projects/ sections/ contact/ ui/
  data/       site.ts, projects.ts, skills.ts, experience.ts, socialLinks.ts
  pages/      Home, Projects, ProjectDetails, NotFound
  hooks/ lib/ types/ context/
```

## Getting started
```bash
npm install
npm run dev       # development server
npm run build     # type-check + production build
npm run preview   # serve the production build
```

## Environment variables
Copy `.env.example` to `.env`. All are optional, and `VITE_` variables are public, so never put secrets in them.

| Variable | Purpose |
|---|---|
| `VITE_CONTACT_API_URL` | Your backend endpoint (POST JSON `{name,email,message}`). Empty = opens the visitor's email app. |
| `VITE_RESUME_URL` | Overrides the résumé link. |
| `VITE_SITE_URL` | Your deployed URL. |

## Deployment (Vercel)
Import the repo into Vercel. The framework preset is Vite (build `npm run build`, output `dist`). `vercel.json` rewrites all routes to `index.html` so deep links work. Set the environment variables above in the Vercel dashboard. Then replace `CANONICAL_URL` in `index.html` with your live URL.

## Customization
- **Name, email, résumé:** `src/data/site.ts`
- **Social links:** `src/data/socialLinks.ts`
- **Projects, screenshots, case studies:** `src/data/projects.ts` (add your repo URL as `githubUrl`; replace the two placeholder projects)
- **Skills:** `src/data/skills.ts` · **Journey, process, AI list:** `src/data/experience.ts`
- **Bio text:** `About` in `src/components/sections/Sections.tsx`
- **Accent colors:** CSS variables at the top of `src/index.css` (`--ac`, `--acfg`, `--soft`)
- **Contact backend:** implement an endpoint, set `VITE_CONTACT_API_URL`, and validate and rate-limit server-side.

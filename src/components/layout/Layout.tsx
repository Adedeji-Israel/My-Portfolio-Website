import { MotionConfig } from 'framer-motion'
import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { LoadingSpinner } from '../ui/Bits'
import { Footer, ScrollToTop } from './Footer'
import { Navbar } from './Navbar'
export function Layout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) { const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60); return () => clearTimeout(t) }
    scrollTo(0, 0)
  }, [pathname, hash])
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only z-[100] rounded-lg bg-ac px-4 py-2 text-acfg focus:not-sr-only focus:fixed focus:left-2 focus:top-2">Skip to content</a>
      <Navbar />
      <main id="main"><Suspense fallback={<LoadingSpinner />}><Outlet /></Suspense></main>
      <Footer /><ScrollToTop />
    </MotionConfig>
  )
}

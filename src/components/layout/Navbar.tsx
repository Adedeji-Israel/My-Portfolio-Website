import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useActiveSection } from '../../hooks/useActiveSection'
import { site } from '../../data/site'
import { Button, ButtonLink } from '../ui/Button'
import { ThemeToggle } from './ThemeToggle'
const links = [['home', 'Home'], ['work', 'Work'], ['about', 'About'], ['skills', 'Skills'], ['contact', 'Contact']] as const
const ids = links.map(([id]) => id)
export function Navbar() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  const active = useActiveSection(ids)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const openRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  useEffect(() => { const f = () => setScrolled(scrollY > 12); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'; closeRef.current?.focus()
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'Tab' && panelRef.current) {
        const f = [...panelRef.current.querySelectorAll<HTMLElement>('a,button')]
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    addEventListener('keydown', k)
    return () => { removeEventListener('keydown', k); document.body.style.overflow = ''; openRef.current?.focus() }
  }, [open])
  const href = (id: string) => (home ? `#${id}` : `/#${id}`)
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent'}`} style={{ paddingTop: 'env(safe-area-inset-top,0px)' }}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold" aria-label={`${site.shortName}, home`}><span className="grid size-8 place-items-center rounded-lg bg-ac font-mono text-xs text-acfg">{site.initials}</span>{site.shortName}</Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map(([id, label]) => <a key={id} href={href(id)} aria-current={home && active === id ? 'true' : undefined} className="relative px-3 py-2 text-sm font-medium text-mut transition hover:text-fg aria-[current]:text-fg">{label}{home && active === id && <motion.span layoutId="nav-ind" className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-ac" />}</a>)}
          <ButtonLink href={site.resumeUrl} className="ml-2 !min-h-10">Resume</ButtonLink><div className="ml-1"><ThemeToggle /></div>
        </nav>
        <Button ref={openRef} onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} className="!px-0 w-11 md:hidden"><Menu size={20} /></Button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
            <motion.div ref={panelRef} role="dialog" aria-modal="true" aria-label="Menu" className="absolute inset-y-0 right-0 flex w-[min(82vw,330px)] flex-col gap-1 border-l border-line bg-bg p-5" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }}>
              <Button ref={closeRef} onClick={() => setOpen(false)} aria-label="Close menu" className="mb-2 ml-auto !px-0 w-11"><X size={20} /></Button>
              {links.map(([id, label]) => <a key={id} href={href(id)} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3.5 font-display text-2xl font-bold">{label}</a>)}
              <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3.5 font-display text-2xl font-bold">Resume</a>
              <div className="mt-auto"><ThemeToggle /></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

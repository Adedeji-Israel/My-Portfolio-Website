import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site } from '../../data/site'
import { socialLinks } from '../../data/socialLinks'
import { Button } from '../ui/Button'
export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5">
        <div><p className="font-display text-lg font-extrabold">{site.shortName}</p><p className="text-mut">Building useful things for the web. {site.location}.</p><p className="mt-1 text-xs text-mut">© {new Date().getFullYear()} {site.name}</p></div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-mut">
          {['work', 'about', 'skills', 'contact'].map((id) => <a key={id} href={`/#${id}`} className="capitalize hover:text-ac">{id}</a>)}
          {socialLinks.map((s) => <a key={s.label} href={s.href} className="hover:text-ac" {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{s.label}</a>)}
        </nav>
      </div>
    </footer>
  )
}
export function ScrollToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(scrollY > 700); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return <Button onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" tabIndex={show ? 0 : -1} className={`fixed bottom-5 right-5 z-40 w-11 !px-0 bg-card transition ${show ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}><ArrowUp size={20} /></Button>
}

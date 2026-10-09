import { AlertTriangle } from 'lucide-react'
import type { ReactNode } from 'react'
import { ButtonLink } from './Button'
import { Reveal } from './Reveal'
export function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return <Reveal className="mb-9"><h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>{sub && <p className="mt-3 max-w-prose text-mut">{sub}</p>}</Reveal>
}
export function Section({ id, children }: { id?: string; children: ReactNode }) {
  return <section id={id} className="py-20"><div className="mx-auto max-w-6xl px-5">{children}</div></section>
}
export function TechBadge({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-ac/25 bg-soft px-2.5 py-1 font-mono text-xs text-ac">{children}</span>
}
export function Chip({ active, children, ...p }: { active: boolean; children: ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button aria-pressed={active} className={`min-h-10 rounded-full border px-4 text-sm font-medium transition ${active ? 'border-ac bg-ac text-acfg' : 'border-line hover:border-ac'}`} {...p}>{children}</button>
}
export function LoadingSpinner() {
  return <div role="status" className="grid min-h-[60vh] place-items-center"><span className="size-8 animate-spin rounded-full border-2 border-ac border-r-transparent" /><span className="sr-only">Loading</span></div>
}
export function ErrorState({ title, message }: { title: string; message: string }) {
  return <div role="alert" className="mx-auto grid max-w-md place-items-center gap-3 py-32 text-center"><AlertTriangle className="text-bad" /><h1 className="text-2xl font-bold">{title}</h1><p className="text-mut">{message}</p><ButtonLink to="/" variant="primary">Back home</ButtonLink></div>
}

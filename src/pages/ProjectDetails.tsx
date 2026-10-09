import { ArrowLeft } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ButtonLink } from '../components/ui/Button'
import { ErrorState, Section, TechBadge } from '../components/ui/Bits'
import { Reveal } from '../components/ui/Reveal'
import { projects } from '../data/projects'
import { useSeo } from '../hooks/useSeo'
export default function ProjectDetails() {
  const { id } = useParams()
  const p = projects.find((x) => x.id === id)
  const [shot, setShot] = useState<number | null>(null)
  const dlg = useRef<HTMLDialogElement>(null)
  useSeo(p ? `${p.title} case study — Israel Adedayo` : 'Project not found', p?.description)
  if (!p || !p.caseStudy) return <ErrorState title="Project not found" message="That project doesn't exist or has no case study yet. Head back and pick another." />
  const c = p.caseStudy
  const block = (t: string, body: React.ReactNode) => <Reveal><h2 className="mb-2 text-2xl font-bold">{t}</h2><div className="text-mut">{body}</div></Reveal>
  return (
    <div className="pt-16"><Section><article className="grid max-w-3xl gap-10">
      <Link to="/#work" className="inline-flex items-center gap-2 text-mut hover:text-ac"><ArrowLeft size={16} />Back to work</Link>
      <header><h1 className="text-4xl font-extrabold sm:text-5xl">{p.title}</h1><p className="mt-3 text-lg text-mut">{p.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">{p.technologies.map((t) => <TechBadge key={t}>{t}</TechBadge>)}</div>
        <div className="mt-5 flex flex-wrap gap-3">{p.liveUrl && <ButtonLink variant="primary" href={p.liveUrl}>Live demo</ButtonLink>}{p.githubUrl && <ButtonLink href={p.githubUrl}>GitHub</ButtonLink>}</div></header>
      {p.gallery.length > 0 && <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{p.gallery.map((g, i) => (
        <button key={g.src} onClick={() => { setShot(i); dlg.current?.showModal() }} aria-label={`Enlarge: ${g.alt}`} className="overflow-hidden rounded-xl border border-line transition hover:scale-[1.03] hover:border-ac"><img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover object-top" /></button>))}</div>}
      {block('The problem', <p>{c.problem}</p>)}{block('The solution', <p>{c.solution}</p>)}
      {block('Key features', <ul className="list-disc space-y-1 pl-5">{c.features.map((f) => <li key={f}>{f}</li>)}</ul>)}
      {block('Challenges and how I solved them', <div className="grid gap-3">{c.challenges.map((x) => <div key={x.challenge} className="rounded-2xl border border-line bg-card p-4"><p className="font-semibold text-fg">{x.challenge}</p><p className="mt-1">{x.solution}</p></div>)}</div>)}
      {block('Current state', <p>{c.state}</p>)}{block('Lessons learned', <p>{c.lessons}</p>)}
    </article></Section>
    <dialog ref={dlg} onClick={(e) => e.target === dlg.current && dlg.current.close()} aria-label="Screenshot" className="m-auto w-[min(900px,94vw)] rounded-2xl border border-line bg-bg p-0 backdrop:bg-black/70">
      {shot !== null && <><img src={p.gallery[shot].src} alt={p.gallery[shot].alt} className="block h-auto w-full" /><div className="p-3 text-right"><ButtonLink onClick={(e) => { e.preventDefault(); dlg.current?.close() }} href="#" className="!min-h-10">Close</ButtonLink></div></>}
    </dialog></div>
  )
}

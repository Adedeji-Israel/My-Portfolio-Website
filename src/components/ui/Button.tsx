import type { AnchorHTMLAttributes, ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'
const base = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-5 font-semibold transition active:scale-[.97] disabled:cursor-not-allowed disabled:opacity-60'
const look = { primary: 'border-ac bg-ac text-acfg hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--ac)_40%,transparent)]', ghost: 'border-line hover:border-ac' }
type V = keyof typeof look
export function Button({ variant = 'ghost', className = '', ...p }: ComponentProps<'button'> & { variant?: V }) {
  return <button className={`${base} ${look[variant]} ${className}`} {...p} />
}
export function ButtonLink({ variant = 'ghost', to, href, children, className = '', ...p }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: V; to?: string; children: ReactNode }) {
  const c = `${base} ${look[variant]} ${className}`
  if (to) return <Link to={to} className={c}>{children}</Link>
  const ext = href?.startsWith('http')
  return <a href={href} className={c} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...p}>{children}</a>
}

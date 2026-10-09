import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
const parts: [string, string][] = [['const ', 'text-ac'], ['developer', ''], [' = {\n  role: ', ''], ['"AI-Powered Web Developer"', 'text-amber-600 dark:text-amber-300'], [',\n  frontend: [', ''], ['"React", "TypeScript"', 'text-amber-600 dark:text-amber-300'], ['],\n  backend: [', ''], ['"Node.js", "Express"', 'text-amber-600 dark:text-amber-300'], ['],\n  database: ', ''], ['"MongoDB"', 'text-amber-600 dark:text-amber-300'], [',\n  mindset: ', ''], ['"Problem solver"', 'text-amber-600 dark:text-amber-300'], [',\n};', '']]
const total = parts.reduce((n, [t]) => n + t.length, 0)
export function CodePanel() {
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? total : 0)
  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setN((v) => (v >= total ? (clearInterval(id), v) : v + 2)), 22)
    return () => clearInterval(id)
  }, [reduce])
  let left = n
  return (
    <div aria-hidden className="hidden rounded-2xl border border-line bg-card shadow-2xl lg:block">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">{[0, 1, 2].map((i) => <span key={i} className="size-3 rounded-full bg-line" />)}<span className="ml-2 font-mono text-xs text-mut">developer.ts</span></div>
      <pre className="min-h-64 whitespace-pre-wrap p-5 font-mono text-sm leading-7">
        {parts.map(([t, c], i) => { const s = t.slice(0, Math.max(0, left)); left -= t.length; return s ? <span key={i} className={c}>{s}</span> : null })}
        {n < total && <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-ac" />}
      </pre>
    </div>
  )
}

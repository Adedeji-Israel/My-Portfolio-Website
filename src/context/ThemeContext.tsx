import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
type Theme = 'light' | 'dark'
const Ctx = createContext<{ theme: Theme; toggle: () => void } | null>(null)
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'))
  const toggle = useCallback(() => setTheme((t) => {
    const n: Theme = t === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = n
    try { localStorage.setItem('theme', n) } catch { /* storage unavailable */ }
    return n
  }), [])
  const value = useMemo(() => ({ theme, toggle }), [theme, toggle])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export function useTheme() { const c = useContext(Ctx); if (!c) throw new Error('useTheme must be used inside ThemeProvider'); return c }

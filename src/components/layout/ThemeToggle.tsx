import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { Button } from '../ui/Button'
export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <Button onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} className="!px-0 w-11">
      <AnimatePresence mode="wait" initial={false}><motion.span key={theme} initial={{ rotate: -60, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 60, opacity: 0 }} transition={{ duration: 0.18 }}>{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}</motion.span></AnimatePresence>
    </Button>
  )
}

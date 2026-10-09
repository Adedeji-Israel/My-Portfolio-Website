import type { Variants } from 'framer-motion'
export const ease = [0.2, 0.8, 0.2, 1] as const
export const fadeUp: Variants = { hidden: { opacity: 0, y: 18 }, show: (d: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease } }) }
export const fadeIn: Variants = { hidden: { opacity: 0 }, show: (d: number = 0) => ({ opacity: 1, transition: { duration: 0.5, delay: d } }) }
export const scaleIn: Variants = { hidden: { opacity: 0, scale: 0.94 }, show: (d: number = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.4, delay: d, ease } }) }

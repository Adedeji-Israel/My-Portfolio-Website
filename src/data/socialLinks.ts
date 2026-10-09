import type { SocialLink } from '../types'
import { site } from './site'
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Adedeji-Israel', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/adedeji-israel-developer', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
]

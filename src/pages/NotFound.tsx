import { ButtonLink } from '../components/ui/Button'
import { useSeo } from '../hooks/useSeo'
export default function NotFound() {
  useSeo('Page not found — Israel Adedayo')
  return <div className="grid min-h-screen place-content-center gap-4 px-5 text-center"><p className="font-display text-8xl font-extrabold text-ac">404</p><h1 className="text-2xl font-bold">Looks like this route got lost.</h1><p className="text-mut">The page you're after doesn't exist. Head back to the homepage.</p><div><ButtonLink to="/" variant="primary">Back home</ButtonLink></div></div>
}

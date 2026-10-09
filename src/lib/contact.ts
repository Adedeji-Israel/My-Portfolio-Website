import { site } from '../data/site'
export interface ContactPayload { name: string; email: string; message: string }
export type ContactResult = 'sent' | 'mailto'
const endpoint = import.meta.env.VITE_CONTACT_API_URL as string | undefined

/** Sends the message to VITE_CONTACT_API_URL (POST JSON). With no endpoint configured it opens the visitor's email app instead. */
export async function submitContactForm(p: ContactPayload): Promise<ContactResult> {
  if (endpoint) {
    const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) })
    if (!res.ok) throw new Error(`Contact request failed (${res.status})`)
    return 'sent'
  }
  const subject = encodeURIComponent(`Portfolio message from ${p.name}`)
  const body = encodeURIComponent(`${p.message}\n\n${p.name} (${p.email})`)
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  return 'mailto'
}
export function validate(p: ContactPayload): Partial<Record<keyof ContactPayload, string>> {
  const e: Partial<Record<keyof ContactPayload, string>> = {}
  if (!p.name.trim()) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) e.email = 'Enter a valid email, like name@example.com.'
  if (p.message.trim().length < 20) e.message = `Write at least 20 characters (${p.message.trim().length}/20).`
  return e
}

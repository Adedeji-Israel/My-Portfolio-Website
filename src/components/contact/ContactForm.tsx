import { useRef, useState, type FormEvent } from 'react'
import { site } from '../../data/site'
import { submitContactForm, validate, type ContactPayload } from '../../lib/contact'
import { Button } from '../ui/Button'
type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'ok' | 'bad'; text: string }
const field = 'min-h-12 w-full rounded-xl border bg-card px-3.5 py-3 transition focus:border-ac focus:outline-none focus:ring-4 focus:ring-ac/25'
export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const busy = useRef(false)
  const form = useRef<HTMLFormElement>(null)
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (busy.current) return
    const fd = new FormData(e.currentTarget)
    const data: ContactPayload = { name: String(fd.get('name') ?? '').trim(), email: String(fd.get('email') ?? '').trim(), message: String(fd.get('message') ?? '').trim() }
    const errs = validate(data); setErrors(errs)
    const first = (['name', 'email', 'message'] as const).find((k) => errs[k])
    if (first) { form.current?.querySelector<HTMLElement>(`[name=${first}]`)?.focus(); return }
    busy.current = true; setStatus({ kind: 'sending' })
    try {
      const r = await submitContactForm(data)
      setStatus({ kind: 'ok', text: r === 'sent' ? "Message sent successfully. I'll get back to you soon." : `Your email app should open with the message ready. If it doesn't, email ${site.email} directly.` })
      form.current?.reset()
    } catch {
      setStatus({ kind: 'bad', text: navigator.onLine ? `Something went wrong. Please try again or contact me directly at ${site.email}.` : 'You appear to be offline. Reconnect and try again.' })
    } finally { busy.current = false }
  }
  const f = (k: keyof ContactPayload, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}, area = false) => (
    <div><label htmlFor={k} className="mb-1.5 block font-semibold">{label}</label>
      {area ? <textarea id={k} name={k} rows={5} aria-invalid={!!errors[k]} aria-describedby={`${k}-e`} className={`${field} resize-y ${errors[k] ? 'border-bad' : 'border-line'}`} />
        : <input id={k} name={k} aria-invalid={!!errors[k]} aria-describedby={`${k}-e`} className={`${field} ${errors[k] ? 'border-bad' : 'border-line'}`} {...props} />}
      <p id={`${k}-e`} className="min-h-5 text-sm text-bad">{errors[k]}</p></div>)
  return (
    <form ref={form} onSubmit={onSubmit} noValidate className="grid gap-2">
      {f('name', 'Name', { autoComplete: 'name' })}{f('email', 'Email', { type: 'email', autoComplete: 'email' })}{f('message', 'Message', {}, true)}
      <Button type="submit" variant="primary" disabled={status.kind === 'sending'}>{status.kind === 'sending' ? <><span className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" />Sending</> : 'Send message'}</Button>
      <div role="status" className={status.kind === 'ok' || status.kind === 'bad' ? `mt-2 rounded-xl border p-3.5 ${status.kind === 'ok' ? 'border-ac text-ac' : 'border-bad text-bad'}` : ''}>{(status.kind === 'ok' || status.kind === 'bad') && status.text}</div>
    </form>
  )
}

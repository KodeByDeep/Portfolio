import { useState, useRef, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Github, Linkedin, MapPin, Send, Loader2 } from 'lucide-react'
import { SOCIAL, CONTACT } from '../data/content'

type FormState = 'idle' | 'sending' | 'success' | 'error'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(name: string, email: string, message: string): FormErrors {
  const errors: FormErrors = {}
  if (!name.trim()) errors.name = 'Name is required.'
  if (!email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!message.trim()) {
    errors.message = 'Message is required.'
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }
  return errors
}

function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<FormErrors>({})

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return

    const data = new FormData(formRef.current)
    const name = data.get('from_name') as string
    const email = data.get('from_email') as string
    const message = data.get('message') as string

    const errs = validate(name, email, message)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setFormState('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string }
      )
      setFormState('success')
      formRef.current.reset()
    } catch {
      setFormState('error')
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-2xl border ${
      errors[field] ? 'border-red-500/60' : 'border-white/10'
    } bg-black/40 px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-emerald-400 transition-colors`

  return (
    <section className="mx-auto max-w-7xl px-6 pt-32 pb-20">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{CONTACT.heading}</h1>
        <p className="mt-3 text-base text-white/60">{CONTACT.subtext}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">

        {/* Left — contact info */}
        <div className="space-y-6">
          <a
            href={`mailto:${SOCIAL.email}`}
            className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Mail size={20} className="text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white/40">Email</p>
              <p className="text-sm text-white truncate">{SOCIAL.email}</p>
            </div>
          </a>

          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Github size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-white/40">GitHub</p>
              <p className="text-sm text-white">github.com/KodeByDeep</p>
            </div>
          </a>

          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Linkedin size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-white/40">LinkedIn</p>
              <p className="text-sm text-white">linkedin.com/in/sandeep-kaur-dev</p>
            </div>
          </a>

          <div className="flex items-center gap-4 text-white">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <MapPin size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-white/40">Location</p>
              <p className="text-sm text-white">{CONTACT.location}</p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
                <Send size={28} className="text-emerald-400" />
              </div>
              <p className="text-lg font-semibold text-white">{CONTACT.successMessage}</p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-2 text-sm text-white/50 hover:text-emerald-400 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label className="mb-2 block text-sm text-white" htmlFor="from_name">Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  placeholder="Your name"
                  className={inputClass('name')}
                  onChange={() => errors.name && setErrors(p => ({ ...p, name: undefined }))}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div className="mb-5">
                <label htmlFor="from_email" className="mb-2 block text-sm text-white">Email</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="your.email@example.com"
                  className={inputClass('email')}
                  onChange={() => errors.email && setErrors(p => ({ ...p, email: undefined }))}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-sm text-white" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity"
                  className={`${inputClass('message')} resize-none`}
                  onChange={() => errors.message && setErrors(p => ({ ...p, message: undefined }))}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
              </div>

              {formState === 'error' && (
                <p className="mb-4 text-sm text-red-400">
                  {CONTACT.errorMessage}
                  <a href={`mailto:${SOCIAL.email}`} className="underline hover:text-white">{SOCIAL.email}</a>
                </p>
              )}

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-4 text-base font-semibold text-black hover:from-emerald-500 hover:to-cyan-500 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === 'sending' ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending…</>
                ) : (
                  <><Send size={16} /> Send message</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactPage

import { Mail, Github, Linkedin } from 'lucide-react'
import { SOCIAL } from '../data/content'

function Contact() {
  return (
    <section id='contact' className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">

        {/* Left - Info */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Let's build something amazing together.
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-8 text-white/70">
            Currently available for freelance projects and open to new full-time opportunities. Drop me a message and let's chat.
          </p>

          <div className='mt-10 space-y-6'>
            <a
              href={`mailto:${SOCIAL.email}`}
              className='flex items-center gap-4 text-white hover:opacity-80 transition-opacity duration-200'
            >
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5'>
                <Mail size={20} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-white/50">Email</p>
                <p className="text-sm sm:text-base text-white truncate">{SOCIAL.email}</p>
              </div>
            </a>

            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-4 text-white hover:opacity-80 transition-opacity duration-200'
            >
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5'>
                <Github size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-white/50">GitHub</p>
                <p className="text-sm sm:text-base text-white">github.com/KodeByDeep</p>
              </div>
            </a>

            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-4 text-white hover:opacity-80 transition-opacity duration-200'
            >
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5'>
                <Linkedin size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-white/50">LinkedIn</p>
                <p className="text-sm sm:text-base text-white">linkedin.com/in/sandeep-kaur-dev</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right - Form */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="mb-5">
            <label className="mb-2 block text-sm text-white" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder='Your name'
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-2 block text-sm text-white">Email</label>
            <input
              id='email'
              type="email"
              placeholder='your.email@example.com'
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
          <div className="mb-5">
            <label className="mb-2 block text-sm text-white" htmlFor="message">Message</label>
            <textarea
              id='message'
              rows={6}
              placeholder='Tell me about your project'
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-emerald-400 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-4 text-base font-semibold text-black hover:from-emerald-500 hover:to-cyan-500 transition-all duration-200"
            aria-label="Send message to Sandeep Kaur"
          >
            Send Message
          </button>
        </div>

      </div>
    </section>
  )
}

export default Contact

import { Link } from 'react-router-dom'
import { Download, ArrowRight } from 'lucide-react'
import { HOME } from '../data/content'

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* ── Page content ── */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pt-28 pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Photo — shown above text on mobile, right column on desktop */}
          <div className="order-first md:order-last relative">
            {/* Emerald glow ring */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-emerald-500/30 to-cyan-400/20 blur-2xl" />
            <div
              className="relative overflow-hidden rounded-3xl border border-emerald-500/40 shadow-[0_0_40px_rgba(52,211,153,0.15)] mx-auto md:mx-0 min-h-[320px] md:min-h-[420px]"
              style={{ maxHeight: '520px', maxWidth: '420px' }}
            >
              <img
                src="/images/sandeep.jpg"
                alt="Sandeep Kaur"
                className="w-full h-full object-cover object-top"
                style={{ maxHeight: '520px' }}
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  img.onerror = null
                  // Hide the broken icon; the green-glowing container remains visible
                  img.style.visibility = 'hidden'
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-last md:order-first">
            <p className="inline-flex px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              {HOME.badge}
            </p>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              {HOME.heading}
            </h1>

            <p className="mt-3 text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              {HOME.subheading}
            </p>

            <p className="mt-6 text-base sm:text-lg leading-8 text-white/70 max-w-lg">
              {HOME.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-black hover:bg-emerald-500 transition-colors duration-200 shadow-lg"
              >
                View projects <ArrowRight size={15} />
              </Link>
              <a
                href="/Sandeep-Kaur-CV-Developer.pdf"
                download
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
              >
                <Download size={15} />
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero

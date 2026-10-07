import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Hero from '../components/Hero'
import { HOME, HOME_FEATURED_IDS, PROJECTS } from '../data/content'

const featuredProjects = HOME_FEATURED_IDS.map(id => PROJECTS.find(p => p.id === id)!)

function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Proof points ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {HOME.proofPoints.map(({ stat, detail }) => (
            <div
              key={stat}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-colors duration-300"
            >
              <p className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                {stat}
              </p>
              <p className="mt-2 text-sm text-white/70">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Selected work ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-2 text-base text-white/60">A few highlights from my projects.</p>
          </div>
          <Link
            to="/projects"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
          >
            See all projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map(project => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className={`rounded-full ${project.badgeColor} px-3 py-1 text-xs font-semibold text-black`}>
                    {project.badge}
                  </span>
                </div>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/60 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags — first 3 only to keep card compact */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(tag => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">
                      {tag}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/40">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-200">
                  {project.liveUrl ? <ExternalLink size={14} /> : null}
                  View details <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "see all" link */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
          >
            See all projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {HOME.cta.heading}
          </h2>
          <p className="mt-3 text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            {HOME.cta.subheading}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-emerald-400 px-8 py-4 text-base font-semibold text-black hover:bg-emerald-500 transition-colors duration-200 shadow-lg"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage

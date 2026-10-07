import { useParams, Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react'
import { PROJECTS } from '../data/content'

function ProjectImage({ src, fallback, alt, className }: {
  src: string; fallback: string; alt: string; className: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const img = e.currentTarget
        if (img.src.includes('/images/projects/')) {
          img.src = fallback
        } else {
          img.style.display = 'none'
        }
      }}
    />
  )
}

function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const index = PROJECTS.findIndex(p => p.id === slug)

  if (index === -1) {
    return (
      <div className="mx-auto max-w-5xl px-6 pt-32 pb-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Project not found</h1>
        <p className="text-white/60 mb-8">That project doesn't exist or may have moved.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-500 transition-colors"
        >
          <ArrowLeft size={15} /> Back to projects
        </Link>
      </div>
    )
  }

  const project = PROJECTS[index]
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 pb-20">

      {/* Back link */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-emerald-400 transition-colors duration-200 mb-10"
      >
        <ArrowLeft size={15} /> Back to projects
      </Link>

      {/* Title + badge + action buttons */}
      <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
        <div>
          <span className={`inline-block rounded-full ${project.badgeColor} px-3 py-1 text-xs font-semibold text-black mb-3`}>
            {project.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
        </div>
        <div className="flex gap-3 flex-wrap">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-emerald-500 transition-colors"
            >
              <ExternalLink size={15} /> Live site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Github size={15} /> Code
            </a>
          )}
        </div>
      </div>

      {/* Hero screenshot */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 mb-12">
        <ProjectImage
          src={`/images/projects/${project.id}.png`}
          fallback={project.image}
          alt={project.imageAlt}
          className="w-full h-64 sm:h-80 md:h-[440px] object-cover"
        />
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Main column */}
        <div className="md:col-span-2 space-y-10">

          {/* Overview */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Overview</h2>
            <p className="text-base leading-7 text-white/70">{project.overview}</p>
          </section>

          {/* My role */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">My role</h2>
            <p className="text-base leading-7 text-white/70">{project.role}</p>
          </section>

          {/* Key features */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Key features</h2>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Challenges &amp; what I learned</h2>
            <p className="text-base leading-7 text-white/70">{project.challenges}</p>
          </section>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 2}`}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sticky top-24">
            <h2 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tag => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom nav */}
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-10">
        <Link
          to="/projects"
          className="flex items-center gap-2 text-sm text-white/50 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft size={15} /> All projects
        </Link>
        <Link
          to={`/projects/${nextProject.id}`}
          className="flex items-center gap-2 text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
        >
          Next: {nextProject.title} <ArrowRight size={15} />
        </Link>
      </div>

    </div>
  )
}

export default ProjectDetailPage

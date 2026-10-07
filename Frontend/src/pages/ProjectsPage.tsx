import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { PROJECTS, type Project, type ProjectCategory } from '../data/content'

type FilterKey = 'all' | ProjectCategory

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all',        label: 'All' },
  { key: 'client',     label: 'Client' },
  { key: 'university', label: 'University' },
  { key: 'concept',    label: 'Concept' },
]

function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="relative h-48 w-full overflow-hidden bg-white/5">
      <img
        src={`/images/projects/${project.id}.png`}
        alt={project.imageAlt}
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          const img = e.currentTarget
          if (img.src.includes('/images/projects/')) {
            img.src = project.image
          } else {
            img.style.display = 'none'
          }
        }}
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm text-center px-4 -z-0">
        {project.title}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 flex flex-col group hover:border-white/20 transition-colors duration-300">
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <span className={`rounded-full ${project.badgeColor} px-3 py-1 text-xs font-semibold text-black`}>
            {project.badge}
          </span>
        </div>
        <ProjectImage project={project} />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/60 flex-1 line-clamp-2">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map(tag => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-2">
          <Link
            to={`/projects/${project.id}`}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-400/20 transition-colors duration-200"
          >
            <ArrowRight size={13} /> Details
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 rounded-2xl bg-emerald-400 px-3 py-2.5 text-xs font-semibold text-black hover:bg-emerald-500 transition-colors duration-200"
            >
              <ExternalLink size={13} /> Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-colors duration-200"
            >
              <Github size={13} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectsPage() {
  const [filter, setFilter] = useState<FilterKey>('all')

  const visible = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter)

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Projects</h1>
        <p className="mt-3 text-base text-white/60">
          Client websites, university work and practice builds.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
              filter === key
                ? 'bg-emerald-400 text-black'
                : 'border border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {visible.length === 0 ? (
        <p className="text-white/40 text-sm">No projects in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectsPage

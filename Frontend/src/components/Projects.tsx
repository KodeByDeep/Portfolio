import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS, type Project } from '../data/content'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 flex flex-col">
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <span className={`rounded-full ${project.badgeColor} px-3 py-1 text-xs font-semibold text-black`}>
            {project.badge}
          </span>
        </div>
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-52 sm:h-64 w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm sm:text-base leading-7 text-white/70 flex-1">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map(tag => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-4 py-3 text-center text-sm font-semibold text-black hover:bg-emerald-500 transition-colors duration-200"
            >
              <ExternalLink size={15} />
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200"
            >
              <Github size={15} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const clientProjects = PROJECTS.filter(p => p.category === 'client')
const practiceProjects = PROJECTS.filter(p => p.category === 'practice')

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-white/70">
          A selection of my recent full-stack applications and freelance projects.
        </p>
      </div>

      {/* Client Work */}
      <div className="mt-12">
        <h3 className="mb-6 text-lg font-semibold text-emerald-400 uppercase tracking-widest">Client Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clientProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Practice Projects */}
      <div className="mt-16">
        <h3 className="mb-6 text-lg font-semibold text-white/50 uppercase tracking-widest">Practice Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Briefcase, Shield, Languages, Download, MapPin, BookOpen } from 'lucide-react'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiNodedotjs, SiExpress, SiPhp, SiMongodb, SiGit, SiGithub,
  SiPostman, SiVite, SiVercel, SiFramer, SiSolidity,
} from 'react-icons/si'
import { ABOUT } from '../data/content'
import FloatingIcons from '../components/FloatingIcons'
import CodeCard from '../components/CodeCard'

// ── Brand icon map ────────────────────────────────────────────
type IconComp = React.ComponentType<{ size?: number; className?: string }>

const ICON_MAP: Record<string, { icon: IconComp; color: string }> = {
  'HTML':                       { icon: SiHtml5,       color: 'text-orange-400' },
  'CSS':                        { icon: SiCss,         color: 'text-blue-300'   },
  'JavaScript':                 { icon: SiJavascript,  color: 'text-yellow-300' },
  'TypeScript':                 { icon: SiTypescript,  color: 'text-blue-400'   },
  'React':                      { icon: SiReact,       color: 'text-cyan-400'   },
  'Next.js':                    { icon: SiNextdotjs,   color: 'text-white'      },
  'Tailwind CSS':               { icon: SiTailwindcss, color: 'text-cyan-300'   },
  'Framer Motion':              { icon: SiFramer,      color: 'text-pink-400'   },
  'Node.js':                    { icon: SiNodedotjs,   color: 'text-emerald-400'},
  'Express':                    { icon: SiExpress,     color: 'text-white/70'   },
  'PHP':                        { icon: SiPhp,         color: 'text-indigo-400' },
  'MongoDB':                    { icon: SiMongodb,     color: 'text-green-400'  },
  'Git':                        { icon: SiGit,         color: 'text-orange-400' },
  'GitHub':                     { icon: SiGithub,      color: 'text-white/80'   },
  'Postman':                    { icon: SiPostman,     color: 'text-orange-500' },
  'Vite':                       { icon: SiVite,        color: 'text-purple-400' },
  'Vercel':                     { icon: SiVercel,      color: 'text-white'      },
  'Solidity':                   { icon: SiSolidity,    color: 'text-purple-300' },
}

// accent colours per group label
const GROUP_ACCENT: Record<string, { text: string; border: string; bg: string }> = {
  'Front end':  { text: 'text-cyan-400',    border: 'border-cyan-500/20',    bg: 'bg-cyan-500/5'    },
  'Back end':   { text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5' },
  'Databases':  { text: 'text-green-400',   border: 'border-green-500/20',   bg: 'bg-green-500/5'   },
  'Tools':      { text: 'text-blue-400',    border: 'border-blue-500/20',    bg: 'bg-blue-500/5'    },
  'Also':       { text: 'text-white/60',    border: 'border-white/10',       bg: 'bg-white/5'       },
}

// ── Animate-in on scroll ──────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ── Skill pill ────────────────────────────────────────────────
function SkillPill({ name, accent }: { name: string; accent: string }) {
  const entry = ICON_MAP[name]
  const Icon = entry?.icon
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:scale-105 transition-all duration-200">
      {Icon
        ? <Icon size={15} className={entry.color} />
        : <span className={`w-1.5 h-1.5 rounded-full ${accent.replace('text-', 'bg-')} shrink-0`} />
      }
      {name}
    </div>
  )
}

// ── Skill group ───────────────────────────────────────────────
function SkillGroup({ label, skills }: { label: string; skills: string[] }) {
  const { ref, visible } = useInView()
  const ac = GROUP_ACCENT[label] ?? GROUP_ACCENT['Also']
  return (
    <div ref={ref} className={`rounded-2xl border ${ac.border} ${ac.bg} p-5`}>
      <h3 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${ac.text}`}>{label}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((name, i) => (
          <div
            key={name}
            className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${i * 55}ms` }}
          >
            <SkillPill name={name} accent={ac.text} />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Module bar ────────────────────────────────────────────────
function ModuleBar({ name, pct, delay }: { name: string; pct: number; delay: number }) {
  const { ref, visible } = useInView(0.1)
  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-xs text-white/60">
        <span>{name}</span>
        <span className="font-semibold text-emerald-400">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-700 ease-out"
          style={{
            width: visible ? `${pct}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 pb-20">

      {/* ── INTRO with floating icon background ─────────── */}
      <div className="relative rounded-3xl overflow-hidden mb-16 -mx-6 px-6 py-14 md:py-18">
        <FloatingIcons />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_100%_at_35%_50%,rgba(0,0,0,0.85)_0%,transparent_100%)]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="inline-flex px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-5">
              {ABOUT.availability}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              About Me
            </h1>
            <div className="space-y-4">
              {ABOUT.bio.map((para, i) => (
                <p key={i} className="text-base leading-7 text-white/70">{para}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={ABOUT.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-500 transition-colors duration-200 shadow-lg"
              >
                <Download size={15} /> Download CV
              </a>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <MapPin size={14} className="text-emerald-400" />
                {ABOUT.location}
              </div>
            </div>
          </div>

          {/* Right column: code card */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/10 to-emerald-500/10 blur-2xl rounded-2xl" />
            <div className="relative">
              <CodeCard />
            </div>
          </div>
        </div>
      </div>

      {/* ── EXPERIENCE ────────────────────────────────────── */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
            <Briefcase size={20} className="text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Experience</h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 space-y-0">
          {ABOUT.experience.map((job, i) => (
            <div key={i} className="relative pl-8 pb-10 last:pb-0">
              {/* Timeline dot */}
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition-colors duration-200">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-white">{job.role}</h3>
                  <span className="text-xs text-emerald-400 font-medium whitespace-nowrap">{job.period}</span>
                </div>
                <p className="text-sm text-white/50 mb-3">{job.org}</p>
                <ul className="space-y-1.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm leading-6 text-white/65">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400/60 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ─────────────────────────────────────── */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">
            <GraduationCap size={20} className="text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Education</h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
            <div>
              <p className="text-lg font-bold text-white">{ABOUT.education.degree}</p>
              <p className="text-sm text-white/60">{ABOUT.education.institution}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-emerald-400">{ABOUT.education.grade}</p>
              <p className="text-xs text-white/50">{ABOUT.education.years}</p>
            </div>
          </div>

          {/* Module bars */}
          <div className="space-y-3 mb-6">
            {ABOUT.education.modules.map((m, i) => (
              <ModuleBar key={m.name} name={m.name} pct={m.pct} delay={i * 80} />
            ))}
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-sm text-white/50">
              <span className="text-white/70 font-medium">Dissertation:</span>{' '}
              QuickBreak — {ABOUT.education.dissertation}
            </p>
          </div>
        </div>
      </section>

      {/* ── TRAINING ──────────────────────────────────────── */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-500/30 bg-yellow-500/10">
            <Shield size={20} className="text-yellow-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Training</h2>
        </div>

        <div className="space-y-4">
          {ABOUT.training.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <p className="text-sm font-semibold text-white mb-1">{t.org}</p>
              <p className="text-sm text-white/65 leading-6">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────────────── */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10">
            <BookOpen size={20} className="text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Skills</h2>
        </div>

        <div className="space-y-4">
          {ABOUT.skillGroups.map(({ label, skills }) => (
            <SkillGroup key={label} label={label} skills={skills} />
          ))}
        </div>
      </section>

      {/* ── LANGUAGES ─────────────────────────────────────── */}
      <section className="mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-pink-500/30 bg-pink-500/10">
            <Languages size={20} className="text-pink-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Languages</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {ABOUT.languages.map(lang => (
            <span
              key={lang}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 hover:bg-white/10 transition-colors"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

    </div>
  )
}

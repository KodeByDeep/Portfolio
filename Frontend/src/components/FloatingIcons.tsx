/**
 * FloatingIcons
 * Renders large semi-transparent tech brand icons that drift and rotate in 3-D
 * behind the page content. Fully decorative — aria-hidden.
 *
 * Usage:
 *   <div className="relative overflow-hidden">
 *     <FloatingIcons />
 *     <div className="relative z-10">...content...</div>
 *   </div>
 */

import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiMongodb, SiTailwindcss, SiJavascript, SiGithub,
} from 'react-icons/si'

interface IconDef {
  Icon: React.ComponentType<{ size?: number; className?: string }>
  color: string         // Tailwind text-* class
  size: number          // px
  top: string           // CSS top
  left?: string         // CSS left
  right?: string        // CSS right
  animClass: string     // one of the .anim-* classes from index.css
  duration: string      // animation-duration
  delay: string         // animation-delay
  opacity: string       // base opacity (Tailwind or inline)
}

const ICONS: IconDef[] = [
  {
    Icon: SiReact,
    color: 'text-cyan-400',
    size: 120,
    top: '12%', right: '6%',
    animClass: 'anim-float-a',
    duration: '9s', delay: '0s', opacity: 'opacity-20',
  },
  {
    Icon: SiNextdotjs,
    color: 'text-white',
    size: 100,
    top: '58%', left: '4%',
    animClass: 'anim-float-b',
    duration: '11s', delay: '1.5s', opacity: 'opacity-15',
  },
  {
    Icon: SiTypescript,
    color: 'text-blue-400',
    size: 90,
    top: '30%', right: '14%',
    animClass: 'anim-float-c',
    duration: '8s', delay: '3s', opacity: 'opacity-20',
  },
  {
    Icon: SiNodedotjs,
    color: 'text-emerald-400',
    size: 110,
    top: '70%', right: '8%',
    animClass: 'anim-float-a',
    duration: '13s', delay: '0.8s', opacity: 'opacity-15',
  },
  {
    Icon: SiMongodb,
    color: 'text-green-400',
    size: 85,
    top: '20%', left: '8%',
    animClass: 'anim-drift',
    duration: '14s', delay: '2s', opacity: 'opacity-15',
  },
  {
    Icon: SiTailwindcss,
    color: 'text-cyan-300',
    size: 95,
    top: '80%', left: '18%',
    animClass: 'anim-float-c',
    duration: '10s', delay: '4s', opacity: 'opacity-15',
  },
  {
    Icon: SiJavascript,
    color: 'text-yellow-300',
    size: 80,
    top: '45%', left: '2%',
    animClass: 'anim-float-b',
    duration: '12s', delay: '5s', opacity: 'opacity-10',
  },
  {
    Icon: SiGithub,
    color: 'text-white',
    size: 88,
    top: '5%', left: '30%',
    animClass: 'anim-drift',
    duration: '16s', delay: '1s', opacity: 'opacity-10',
  },
]

export default function FloatingIcons() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: '800px' }}
    >
      {ICONS.map(({ Icon, color, size, top, left, right, animClass, duration, delay, opacity }, i) => (
        <div
          key={i}
          className={`absolute ${animClass} ${opacity}`}
          style={{
            top,
            ...(left  ? { left }  : {}),
            ...(right ? { right } : {}),
            animationDuration: duration,
            animationDelay: delay,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          <Icon size={size} className={color} />
        </div>
      ))}
    </div>
  )
}

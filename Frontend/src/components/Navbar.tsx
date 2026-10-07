import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors duration-200 ${
      isActive
        ? 'text-emerald-400 font-semibold'
        : 'text-white/80 hover:text-emerald-400'
    }`

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 border-b border-white/5 transition-colors duration-200 ${
      isActive
        ? 'text-emerald-400 font-semibold'
        : 'text-white/80 hover:text-emerald-400'
    }`

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Sandeep Kaur
        </NavLink>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CV button */}
        <a
          href="/Sandeep-Kaur-CV-Developer.pdf"
          download
          className="hidden md:flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200"
          aria-label="Download CV"
        >
          <Download size={15} />
          Download CV
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/Sandeep-Kaur-CV-Developer.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white text-center hover:bg-white/10 transition-colors duration-200"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar

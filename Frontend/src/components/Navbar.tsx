import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Sandeep Kaur
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-emerald-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          aria-label="Contact me for hire"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-emerald-400 transition-colors duration-200 py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black text-center hover:bg-gray-100 transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar


import React, { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // lock body scroll when menu open
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`} aria-label="Primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#hero" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500/40 rounded">
            <Sparkles className="w-8 h-8 text-purple-400" aria-hidden="true" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              BRGRCollective
            </span>
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#courses" className="hover:text-purple-400 transition">Courses</a>
            <a href="#impact" className="hover:text-purple-400 transition">Impact</a>
            <a href="#pricing" className="hover:text-purple-400 transition">Pricing</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>

          <a href="#contact" className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Get Started
          </a>

          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-slate-900/98 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {['about','courses','impact','pricing','contact'].map(id => (
              <a key={id} href={`#${id}`} className="block py-2 hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a href="#contact" className="block w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-center" onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

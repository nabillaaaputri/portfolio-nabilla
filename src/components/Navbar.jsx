import { useState, useEffect } from 'react'
import useScrollSpy from '../hooks/useScrollSpy'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = NAV_ITEMS.map(item => item.id)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS, 120)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleClick = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const offset = 64
      const top = el.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleClick('home') }}>
          Nabilla<span>.</span>
        </a>

        <div className="navbar-links">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleClick(item.id) }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className={`navbar-hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleClick(item.id) }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
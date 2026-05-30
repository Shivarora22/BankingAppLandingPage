import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      if (window.scrollY > 10) setMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">N7</div>
        <ul className="navbar-links">
          <li><a href="#">Solutions <span className="navbar-arrow">›</span></a></li>
          <li><a href="#">Resources <span className="navbar-arrow">›</span></a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <div className="navbar-actions">
          <button className="navbar-cta">Request Demo</button>
        </div>
        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar-mobile-links">
          <li><a href="#" onClick={() => setMenuOpen(false)}>Solutions <span className="navbar-arrow">›</span></a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Resources <span className="navbar-arrow">›</span></a></li>
          <li><a href="#" onClick={() => setMenuOpen(false)}>About Us</a></li>
        </ul>
        <button className="navbar-cta navbar-mobile-cta">Request Demo</button>
      </div>
    </div>
  )
}

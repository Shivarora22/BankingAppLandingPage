import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
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
      </nav>
    </div>
  )
}
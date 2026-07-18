import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Sections', to: '/sections' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Archive', to: '/archive' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          <img src={`${import.meta.env.BASE_URL}images/branding/maxi-logo.svg`} alt="MAXI, XLRI Jamshedpur" />
          <span>Section Wars</span>
        </NavLink>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar

import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, studentProfile } from '../data/portfolioData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isRouteActive = (to, end) => {
    if (end) return location.pathname === '/';
    if (to === '/experiments') return location.pathname.startsWith('/experiments');
    return location.pathname === to;
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink
          to="/"
          className="header-title"
          aria-label="Data Science Laboratory Home"
          onClick={() => setMenuOpen(false)}
        >
          <span>{studentProfile.subjectTitle}</span>
          <small>Subject Code: {studentProfile.subjectCode}</small>
        </NavLink>

        <div className="header-right">
          <nav
            id="primary-navigation"
            className={`primary-navigation ${menuOpen ? 'is-open' : ''}`}
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={`nav-link ${
                  isRouteActive(link.to, link.end) ? 'is-active' : ''
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

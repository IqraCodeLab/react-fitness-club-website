import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data/data';
import Icon from './Icon';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header className={`header ${scrolled || open ? 'header--scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="logo" aria-label="IronForge Fitness home">
              <span className="logo-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="34" height="34">
                  <rect width="48" height="48" rx="8" fill="#050505" />
                  <rect x="8" y="14" width="4" height="20" rx="2" fill="#E50914" />
                  <rect x="36" y="14" width="4" height="20" rx="2" fill="#E50914" />
                  <rect x="17" y="14" width="4" height="20" rx="2" fill="#FFFFFF" />
                  <rect x="27" y="14" width="4" height="20" rx="2" fill="#FFFFFF" />
                  <path d="M8 28 L40 20" stroke="#E50914" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              IRON<span>FORGE</span>
            </Link>

            <nav className="nav" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="header-actions">
              <Link to="/membership" className="btn btn--primary header-cta">
                Join Now
              </Link>
              <button
                type="button"
                className={`hamburger ${open ? 'open' : ''}`}
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-nav"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav id="mobile-nav" className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {link.name}
            <Icon name="arrowRight" size={18} />
          </NavLink>
        ))}
        <Link to="/membership" className="btn btn--primary mobile-nav-cta btn--block" onClick={closeMenu}>
          Join Now
        </Link>
        <div className="mobile-nav-social">
          <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
          <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
          <a href="#" aria-label="Twitter"><Icon name="twitter" size={18} /></a>
          <a href="#" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
        </div>
      </nav>
    </>
  );
}

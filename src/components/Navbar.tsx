import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'
import logo from '../assets/logo-mark.png'

const links = [
  { to: '/#about', label: 'About Us' },
  { to: '/#what-we-do', label: 'What We Do' },
  { to: '/#team', label: 'Members' },
  { to: '/events', label: 'Events' },
  { to: '/#supporters', label: 'Supporters' },
  { to: '/#volunteer', label: 'Volunteer' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={close}>
          <img src={logo} alt="" width={64} height={51} />
          <span>
            <strong>24Telemed Foundation</strong>
            <small>Connecting Rural Africa</small>
          </span>
        </Link>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map((l) =>
            l.to.startsWith('/#') ? (
              <Link key={l.to} to={l.to} onClick={close}>
                {l.label}
              </Link>
            ) : (
              <NavLink key={l.to} to={l.to} onClick={close}>
                {l.label}
              </NavLink>
            ),
          )}
          <Link to="/#donate" className="btn btn--accent nav__cta" onClick={close}>
            <Heart size={16} fill="currentColor" /> Donate
          </Link>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

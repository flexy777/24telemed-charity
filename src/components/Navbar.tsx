import { useEffect, useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import logo from '../assets/logo-mark.png'

const links = [
  { href: '#about', label: 'About Us' },
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#team', label: 'Members' },
  { href: '#supporters', label: 'Supporters' },
  { href: '#volunteer', label: 'Volunteer' },
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
        <a href="#top" className="nav__brand" onClick={close}>
          <img src={logo} alt="" width={64} height={51} />
          <span>
            <strong>24Telemed Foundation</strong>
            <small>Connecting Rural Africa</small>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#donate" className="btn btn--accent nav__cta" onClick={close}>
            <Heart size={16} fill="currentColor" /> Donate
          </a>
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

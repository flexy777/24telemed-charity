import { Link } from 'react-router-dom'
import { MapPin, Phone, ShieldCheck } from 'lucide-react'
import logo from '../assets/logo-mark.png'
import { org } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">
            <img src={logo} alt="" width={80} height={63} />
          </span>
          <div>
            <strong>{org.name}</strong>
            <span>{org.tagline}</span>
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <p className="footer__row">
            <MapPin size={16} />
            <span>
              {org.address[0]}
              <br />
              {org.address[1]}
            </span>
          </p>
          <p className="footer__row">
            <Phone size={16} />
            <a href={org.phoneHref}>{org.phone}</a>
          </p>
        </div>

        <div>
          <h4>Nonprofit status</h4>
          <p className="footer__row">
            <ShieldCheck size={16} />
            <span>
              24Telemed is a 501(c)(3) organization
              <br />
              EIN: {org.ein}
              <br />
              Donations are tax-deductible
            </span>
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <nav className="footer__links" aria-label="Footer">
            <Link to="/#about">About Us</Link>
            <Link to="/#what-we-do">What We Do</Link>
            <Link to="/#team">Members</Link>
            <Link to="/events">Events</Link>
            <Link to="/#volunteer">Volunteer</Link>
            <Link to="/#donate">Donate</Link>
          </nav>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {org.name}. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

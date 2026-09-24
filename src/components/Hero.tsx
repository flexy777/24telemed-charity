import { ArrowRight, HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react'
import hero from '../assets/hero1.jpg'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="panel hero__panel">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--light">
              <HeartPulse size={16} /> Telemedicine for rural Africa
            </span>
            <h1>
              Quality care shouldn't depend on <em>how far</em> you live from a doctor.
            </h1>
            <p className="hero__lead">
              24Telemed connects patients in remote communities with qualified doctors through
              virtual visits — so families get the care they need without travelling for miles.
            </p>
            <div className="hero__actions">
              <a href="#donate" className="btn btn--accent btn--lg">
                Donate today <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn btn--ghost btn--lg">
                Learn about our work
              </a>
            </div>
            <ul className="hero__trust">
              <li>
                <ShieldCheck size={18} /> 501(c)(3) nonprofit
              </li>
              <li>
                <ShieldCheck size={18} /> Tax-deductible donations
              </li>
            </ul>
          </div>

          <div className="hero__media">
            <div className="hero__image">
              <img src={hero} alt="A rural patient receiving an eye examination during a 24Telemed outreach" />
            </div>
            <div className="float-card float-card--top">
              <span className="float-card__icon">
                <Stethoscope size={20} />
              </span>
              <div>
                <strong>Virtual visits</strong>
                <small>Doctors in cities, patients at home</small>
              </div>
            </div>
            <div className="float-card float-card--bottom">
              <strong className="float-card__big">100%</strong>
              <small>of your donation goes to medical care</small>
            </div>
          </div>

          <span className="orb orb--1" aria-hidden />
          <span className="orb orb--2" aria-hidden />
        </div>
      </div>
    </section>
  )
}

import { Megaphone, Phone, Stethoscope, Users } from 'lucide-react'
import { org } from '../data'

const ways = [
  {
    icon: Stethoscope,
    title: 'Medical professionals',
    text: 'Doctors and nurses can give time through virtual consultations from anywhere.',
  },
  {
    icon: Users,
    title: 'Community outreach',
    text: 'Help organise screenings and health education in rural communities.',
  },
  {
    icon: Megaphone,
    title: 'Advocates & partners',
    text: 'Spread the word, fundraise, or bring your organisation on board as a supporter.',
  },
]

export default function Volunteer() {
  return (
    <section id="volunteer" className="section section--tint">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Get involved</span>
          <h2>
            Volunteer with <em>24Telemed</em>
          </h2>
          <p className="lead">There's a place for you in closing the healthcare gap.</p>
        </div>

        <div className="cards">
          {ways.map(({ icon: Icon, title, text }, i) => (
            <article className="card reveal" style={{ transitionDelay: `${i * 90}ms` }} key={title}>
              <span className="card__icon">
                <Icon size={22} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="volunteer__cta reveal">
          <p>Ready to help? Give us a call and we'll find the right role for you.</p>
          <a href={org.phoneHref} className="btn btn--primary btn--lg">
            <Phone size={18} /> {org.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

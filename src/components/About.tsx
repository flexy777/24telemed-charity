import { Eye, Gem, Target } from 'lucide-react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'Transform healthcare delivery in rural communities by building lasting partnerships and optimal use of technology and innovation.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'Build a community where the most vulnerable have access to medical services.',
  },
  {
    icon: Gem,
    title: 'Our Values',
    text: 'Compassion, Integrity and Agility.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about">
          <div className="about__copy reveal">
            <span className="eyebrow">About us</span>
            <h2>
              Healthcare in rural Africa is still far from reality.
            </h2>
            <p>
              Poor funding and limited community engagement on health programmes keep medical
              services out of reach. Many people in rural communities walk miles — or travel long
              distances, if they can afford transport — just to see a doctor. Most of them are women
              and children.
            </p>
            <p>
              Africa's healthcare workforce shortage hits hard-to-reach communities hardest. Through
              strategic partnerships and efficient use of technology, 24Telemed strives to close
              those gaps.
            </p>
            <p className="about__join">
              Join us to transform healthcare delivery in rural communities.
            </p>
          </div>

          <div className="about__gallery reveal">
            <img src={about1} alt="24Telemed volunteers and community members at an outreach" />
            <img src={about2} alt="The 24Telemed team with local partners" />
            <img src={about3} alt="24Telemed team with partner organisation staff" />
          </div>
        </div>

        <div className="cards">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <article className="card reveal" style={{ transitionDelay: `${i * 90}ms` }} key={title}>
              <span className="card__icon">
                <Icon size={22} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

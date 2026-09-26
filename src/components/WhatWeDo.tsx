import { Cpu, Handshake, MapPin } from 'lucide-react'
import clinic from '../assets/hero2.jpg'

const pillars = [
  {
    icon: Handshake,
    title: 'Lasting partnerships',
    text: 'We work with governments, hospitals, pharmacies and local organisations to reach communities where they are.',
  },
  {
    icon: Cpu,
    title: 'Technology & innovation',
    text: 'Smart devices and secure virtual consultations bring specialist expertise into rural clinics.',
  },
  {
    icon: MapPin,
    title: 'Distance is no longer a barrier',
    text: 'Patients get year-round medical care without long, costly journeys to the city.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <div className="container split">
        <div className="split__media reveal">
          <img src={clinic} alt="Health workers examining a patient" className="rounded-img" />
        </div>

        <div className="split__copy reveal">
          <span className="eyebrow">What we do</span>
          <h2>
            Bridging the gap between medical professionals and the patients who need them.
          </h2>
          <p className="lead">
            24Telemed's mission is to transform healthcare delivery in rural communities by building
            lasting partnerships and through optimal use of technology and innovation.
          </p>

          <ul className="pillars">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <span className="pillars__icon">
                  <Icon size={20} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

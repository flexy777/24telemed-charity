import { HandCoins, Handshake, MonitorSmartphone, Users } from 'lucide-react'
import { partners } from '../data'

const items = [
  {
    icon: HandCoins,
    value: '100%',
    label: 'of donations fund virtual medical services',
  },
  {
    icon: Handshake,
    value: `${partners.length}+`,
    label: 'partners, governments and supporters',
  },
  {
    icon: MonitorSmartphone,
    value: 'e-Visits',
    label: 'connecting urban doctors to rural patients',
  },
  {
    icon: Users,
    value: 'Year-round',
    label: 'care for women, children and families',
  },
]

export default function Impact() {
  return (
    <section className="impact" aria-label="Our impact">
      <div className="container impact__grid">
        {items.map(({ icon: Icon, value, label }, i) => (
          <div className="impact__item reveal" style={{ transitionDelay: `${i * 80}ms` }} key={label}>
            <span className="impact__icon">
              <Icon size={22} />
            </span>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

import { Video } from 'lucide-react'
import { diseases } from '../data'

export default function Challenge() {
  return (
    <section className="section section--tint">
      <div className="container challenge">
        <div className="challenge__head reveal">
          <span className="eyebrow">The challenge</span>
          <h2>
            A critical shortage of doctors is costing lives.
          </h2>
          <p className="lead">
            In developing countries, too few qualified doctors serve too many patients — and most of
            them work in cities. Because of this shortage, more people die from treatable conditions.
          </p>
        </div>

        <ul className="chips reveal" aria-label="Conditions we help address">
          {diseases.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <div className="panel challenge__answer reveal">
          <span className="challenge__icon">
            <Video size={28} />
          </span>
          <div>
            <h3>24Telemed leads telemedicine projects in rural communities.</h3>
            <p>
              Technology allows healthcare providers in urban areas to offer quality care through
              e-visits and virtual visits, enabling rural patients to access the care they need
              without travelling long distances.
            </p>
          </div>
          <span className="orb orb--3" aria-hidden />
        </div>
      </div>
    </section>
  )
}

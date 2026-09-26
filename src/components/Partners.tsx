import { Building2 } from 'lucide-react'
import { partners } from '../data'

export default function Partners() {
  const half = Math.ceil(partners.length / 2)
  const rows = [partners.slice(0, half), partners.slice(half)]

  return (
    <section id="supporters" className="section">
      <div className="container section__head reveal">
        <h2>Our Supporters</h2>
      </div>

      <div className="marquee" aria-label="Partner logos">
        {rows.map((row, r) => (
          <div className={`marquee__track ${r ? 'marquee__track--reverse' : ''}`} key={r}>
            {[...row, ...row].map((src, i) => (
              <div className="logo-tile" key={i} aria-hidden={i >= row.length}>
                <img src={src} alt={i < row.length ? 'Supporter logo' : ''} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="container">
        <p className="supporter-feature reveal">
          <Building2 size={20} />
          General Housing and Products Limited, Abuja, Nigeria
        </p>
      </div>
    </section>
  )
}

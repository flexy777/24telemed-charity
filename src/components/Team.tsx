import { founder, team } from '../data'

export default function Team() {
  return (
    <section id="team" className="section section--tint">
      <div className="container">
        <div className="section__head reveal">
          <h2>Members</h2>
        </div>

        <div className="panel founder reveal">
          <img src={founder.photo} alt={founder.name} className="founder__photo" />
          <div className="founder__copy">
            <strong>{founder.name}</strong>
            <span>{founder.role}, 24Telemed Foundation</span>
            <p>
              Leading 24Telemed's mission to transform healthcare delivery in rural communities
              through lasting partnerships, technology and innovation.
            </p>
          </div>
          <span className="orb orb--2" aria-hidden />
        </div>

        <ul className="team">
          {team.map((p, i) => (
            <li className="member reveal" style={{ transitionDelay: `${(i % 5) * 70}ms` }} key={p.name}>
              <div className={`member__photo ${p.noZoom ? 'member__photo--full' : ''} ${p.shrink ? 'member__photo--shrink' : ''}`}>
                <span>
                  <img src={p.photo} alt={p.name} loading="lazy" />
                </span>
              </div>
              <strong>{p.name}</strong>
              <span>{p.role}</span>
              {p.location && <small className="member__location">{p.location}</small>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Award,
  CalendarDays,
  Check,
  Expand,
  Globe2,
  Handshake,
  Heart,
  HeartHandshake,
  Images,
  MapPin,
  Users,
} from 'lucide-react'
import Lightbox from '../components/Lightbox'
import { award, kano, pastEvents, programme2026, stories, type EventItem } from '../events'
import { useReveal } from '../useReveal'

type Open = { photos: string[]; index: number; title: string } | null
type OpenFn = (photos: string[], index: number, title: string) => void

const years = ['All', ...Array.from(new Set(pastEvents.map((e) => e.year))).map(String)]

function Mosaic({ event, onOpen }: { event: EventItem; onOpen: OpenFn }) {
  const shown = event.photos.slice(0, 4)
  const extra = event.photos.length - shown.length

  return (
    <div
      className={`mosaic mosaic--${shown.length} ${event.poster ? 'mosaic--poster' : ''}`}
    >
      {shown.map((src, i) => (
        <button
          key={src}
          className="mosaic__item"
          onClick={() => onOpen(event.photos, i, event.title)}
          aria-label={`View photo ${i + 1} of ${event.title}`}
        >
          <img src={src} alt="" loading="lazy" />
          {i === shown.length - 1 && extra > 0 && <span className="mosaic__more">+{extra}</span>}
          {i === 0 && (
            <span className="mosaic__zoom" aria-hidden>
              <Expand size={16} />
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

function EventCard({ event, onOpen }: { event: EventItem; onOpen: OpenFn }) {
  return (
    <article className="event reveal" id={event.id}>
      <Mosaic event={event} onOpen={onOpen} />
      <div className="event__body">
        <div className="event__meta">
          <span className="event__date">
            <CalendarDays size={15} /> {event.date}
          </span>
          <span className="event__country">{event.country}</span>
        </div>
        <h3>{event.title}</h3>
        <p className="event__place">
          <MapPin size={16} /> {event.location}
        </p>
        {event.partner && (
          <p className="event__place">
            <Handshake size={16} /> With {event.partner}
          </p>
        )}
        <p className="event__text">{event.description}</p>
        {event.highlights && (
          <ul className="event__list">
            {event.highlights.map((h) => (
              <li key={h}>
                <Check size={14} /> {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default function Events() {
  const [year, setYear] = useState('All')
  const [open, setOpen] = useState<Open>(null)
  useReveal([year])

  const onOpen = useCallback<OpenFn>((photos, index, title) => setOpen({ photos, index, title }), [])
  const onClose = useCallback(() => setOpen(null), [])
  const onIndex = useCallback((i: number) => setOpen((o) => (o ? { ...o, index: i } : o)), [])

  const grouped = useMemo(() => {
    const list = year === 'All' ? pastEvents : pastEvents.filter((e) => String(e.year) === year)
    const byYear = new Map<number, EventItem[]>()
    list.forEach((e) => byYear.set(e.year, [...(byYear.get(e.year) ?? []), e]))
    return [...byYear.entries()].sort((a, b) => b[0] - a[0])
  }, [year])

  const heroPhotos = [
    pastEvents.find((e) => e.id === 'ghana')!.photos[0],
    pastEvents.find((e) => e.id === 'st-michaels')!.photos[0],
    pastEvents.find((e) => e.id === 'kaduna')!.photos[0],
  ]
  const countries = new Set([...pastEvents, ...programme2026].map((e) => e.country)).size

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero events-hero">
        <div className="container">
          <div className="panel events-hero__panel">
            <div>
              <span className="eyebrow eyebrow--light">
                <HeartHandshake size={16} /> Events & Gallery
              </span>
              <h1>Out in the communities we serve.</h1>
              <p className="hero__lead">
                Medical outreaches, telemedicine training, health fairs and celebrations across
                Nigeria, Ghana and Uganda — bringing free care to the people who need it most.
              </p>
              <ul className="events-hero__stats">
                <li>
                  <strong>{pastEvents.length + programme2026.length}+</strong>
                  <span>events & outreaches</span>
                </li>
                <li>
                  <strong>{countries}</strong>
                  <span>countries</span>
                </li>
                <li>
                  <strong>5,000+</strong>
                  <span>people reached in Kano alone</span>
                </li>
              </ul>
            </div>
            <div className="events-hero__collage" aria-hidden>
              {heroPhotos.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </div>
            <span className="orb orb--1" aria-hidden />
            <span className="orb orb--2" aria-hidden />
          </div>
        </div>
      </section>

      {/* ---------- 2026 ---------- */}
      <section className="section" id="2026">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">2026 Programme</span>
            <h2>Please support our 2026 events</h2>
            <p className="lead">
              Outreaches, check-up days and a new telemedicine hub in Nigeria and Ghana.
            </p>
          </div>

          <div className="flyers">
            {programme2026.map((e, i) => (
              <article
                className="flyer reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
                key={e.id}
              >
                <button
                  className="flyer__img"
                  onClick={() => onOpen(e.photos, 0, e.title)}
                  aria-label={`View flyer for ${e.title}`}
                >
                  <img src={e.photos[0]} alt={`${e.title} flyer`} loading="lazy" />
                </button>
                <div className="flyer__body">
                  <span className="event__date">
                    <CalendarDays size={15} /> {e.date}
                  </span>
                  <h3>{e.title}</h3>
                  <p className="event__place">
                    <MapPin size={16} /> {e.location}, {e.country}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="volunteer__cta reveal">
            <p>Every donation helps us reach one more community.</p>
            <Link to="/#donate" className="btn btn--primary btn--lg">
              <Heart size={18} fill="currentColor" /> Support our events
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Kano feature ---------- */}
      <section className="section section--tint">
        <div className="container">
          <div className="panel kano reveal">
            <div className="kano__copy">
              <span className="eyebrow eyebrow--light">
                <Globe2 size={16} /> In partnership with the Oweno Foundation
              </span>
              <h2>{kano.title}</h2>
              <p>{kano.text}</p>
              <ul className="kano__stats">
                {kano.stats.map((s) => (
                  <li key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="kano__photos">
              {kano.photos.map((src, i) => (
                <button key={src} onClick={() => onOpen(kano.photos, i, kano.title)}>
                  <img src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
            <span className="orb orb--3" aria-hidden />
          </div>
        </div>
      </section>

      {/* ---------- Past events ---------- */}
      <section className="section" id="past">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">Gallery</span>
            <h2>Past outreaches & events</h2>
            <p className="lead">Tap any photo to see the full gallery.</p>
          </div>

          <div className="year-tabs" role="tablist" aria-label="Filter by year">
            {years.map((y) => (
              <button
                key={y}
                role="tab"
                aria-selected={year === y}
                className={year === y ? 'is-active' : ''}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>

          {grouped.map(([y, list]) => (
            <div className="timeline" key={y}>
              <div className="timeline__year">
                <span>{y}</span>
              </div>
              <div className="timeline__events">
                {list.map((e) => (
                  <EventCard key={e.id} event={e} onOpen={onOpen} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Stories ---------- */}
      <section className="section section--tint">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">More from the field</span>
            <h2>Partnerships and donations</h2>
          </div>
          <div className="stories">
            {stories.map((s, i) => (
              <article
                className={`story reveal ${i === 0 ? 'story--featured' : ''}`}
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
                key={s.id}
              >
                <button
                  onClick={() => onOpen(s.photos, 0, s.title)}
                  aria-label={s.photos.length > 1 ? `View ${s.photos.length} photos` : 'View photo'}
                >
                  {i === 0 && (
                    <img src={s.photos[0]} alt="" className="story__backdrop" aria-hidden />
                  )}
                  <img src={s.photos[0]} alt="" loading="lazy" />
                  {s.photos.length > 1 && (
                    <span className="story__count">
                      <Images size={14} /> {s.photos.length}
                    </span>
                  )}
                </button>
                <p>{s.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Award ---------- */}
      <section className="section">
        <div className="container award reveal">
          <button
            className="award__img"
            onClick={() => onOpen([award.photo], 0, award.title)}
            aria-label="View award"
          >
            <img src={award.photo} alt={award.text} loading="lazy" />
          </button>
          <div>
            <span className="eyebrow">
              <Award size={16} /> Recognition
            </span>
            <h2>{award.title}</h2>
            <p className="lead">{award.text}</p>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section section--tint">
        <div className="container">
          <div className="panel closing reveal">
            <h2>Our communities deserve better health care. Together we can make this happen!</h2>
            <div className="hero__actions">
              <Link to="/#donate" className="btn btn--accent btn--lg">
                <Heart size={18} fill="currentColor" /> Donate
              </Link>
              <Link to="/#volunteer" className="btn btn--ghost btn--lg">
                <Users size={18} /> Volunteer
              </Link>
            </div>
            <span className="orb orb--1" aria-hidden />
          </div>
        </div>
      </section>

      {open && (
        <Lightbox
          photos={open.photos}
          index={open.index}
          title={open.title}
          onClose={onClose}
          onIndex={onIndex}
        />
      )}
    </>
  )
}

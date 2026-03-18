import { useState, useEffect } from 'react'

export function Reservation() {
  const today = new Date().toISOString().split('T')[0]
  const [date, setDate] = useState(today)
  const [guests, setGuests] = useState('2')

  const resyUrl = `https://resy.com/cities/dfw/saint-emilion?date=${date}&seats=${guests}`

  useEffect(() => {
    setDate(today)
  }, [today])

  return (
    <section id="reservation">
      <div className="section-inner">
        <span className="eyebrow reveal">Reservations</span>
        <h2 className="section-title reveal">
          Join us for<br /><em>dinner</em>
        </h2>
        <div className="gold-rule reveal" style={{ margin: '0 auto' }} />

        <p className="body-text reveal" style={{ margin: '1.5rem auto 0', textAlign: 'center' }}>
          Reservations are accepted up to 30 days in advance, online via Resy.
        </p>

        <div className="res-form reveal">
          <div className="res-field">
            <label className="res-label" htmlFor="date">Date</label>
            <input
              className="res-input"
              type="date"
              id="date"
              value={date}
              min={today}
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <div className="res-field">
            <label className="res-label" htmlFor="guests">Guests</label>
            <select
              className="res-input"
              id="guests"
              value={guests}
              onChange={e => setGuests(e.target.value)}
            >
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={String(n)}>
                  {n} {n === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <a
          className="res-cta"
          href={resyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Availability
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <p className="res-note reveal">
          For parties of 7 or more, private dining, or same-day enquiries<br />
          please call{' '}
          <a href="tel:8177372781" style={{ color: 'var(--gold)' }}>
            (817) 737-2781
          </a>
        </p>
      </div>
    </section>
  )
}

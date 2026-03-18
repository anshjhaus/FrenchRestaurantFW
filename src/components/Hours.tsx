const hours = [
  { days: 'Monday – Tuesday', time: 'Closed', closed: true },
  { days: 'Wednesday', time: 'Special Events & Private Dining', closed: false },
  { days: 'Thursday – Sunday', time: 'Dinner from 6:00 PM', closed: false },
]

export function Hours() {
  return (
    <section id="hours">
      <div className="section-inner">
        <div className="reveal">
          <span className="eyebrow">Visit Us</span>
          <h2 className="section-title">
            Hours &<br /><em>Location</em>
          </h2>
          <div className="gold-rule" />

          <table className="hours-table">
            <tbody>
              {hours.map(({ days, time, closed }) => (
                <tr key={days} className={closed ? 'closed' : ''}>
                  <td>{days}</td>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="map-address" style={{ marginTop: '2.5rem' }}>
            3617 West 7th Street<br />Fort Worth, Texas 76107
          </div>

          <div className="contact-links">
            <a href="tel:8177372781">(817) 737-2781</a>
            <a href="mailto:SaintEmilionFW@gmail.com">SaintEmilionFW@gmail.com</a>
            <a href="https://resy.com/cities/dfw/saint-emilion" target="_blank" rel="noopener noreferrer">
              Reserve via Resy →
            </a>
          </div>
        </div>

        <div className="reveal">
          <div className="map-embed-wrap">
            <iframe
              title="Saint-Émilion location"
              src="https://www.google.com/maps?q=3617+W+7th+St,+Fort+Worth,+TX+76107&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="body-text" style={{ marginTop: '2rem', fontSize: '0.9rem' }}>
            Located in Fort Worth's Cultural District, steps from the Kimbell Art Museum and the Modern Art Museum. Valet available Thursday through Sunday.
          </p>
        </div>
      </div>
    </section>
  )
}

import { pressItems } from '../data/press'

export function Press() {
  return (
    <section id="press">
      <div className="section-inner">
        <span className="eyebrow reveal">As Featured In</span>
        <h2 className="section-title reveal">Critics' <em>Table</em></h2>
        <div className="gold-rule reveal" style={{ margin: '0 auto 0' }} />

        <div className="press-grid reveal">
          {pressItems.map(({ source, quote, year }) => (
            <div key={source} className="press-item">
              <span className="press-source">{source}</span>
              <p className="press-quote">{quote}</p>
              <span className="press-year">{year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

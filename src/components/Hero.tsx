import type { CSSProperties } from 'react'

const heroLines = [
  ['An', 'evening'],
  ['worth', 'remembering.'],
]

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grain" />
      <div className="hero-vignette" />

      <div className="hero-content">
        <div className="hero-badge reveal reveal-fade" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
          Fort Worth · French Cuisine Since 1985
        </div>

        <h1 className="hero-title">
          {heroLines.map((line, lineIndex) => (
            <span key={line.join('-')} className="hero-line">
              {line.map((word, wordIndex) => {
                const isEmphasis = lineIndex === 1
                const delay = 160 + (lineIndex * 2 + wordIndex) * 140

                return (
                  <span
                    key={word}
                    className={`hero-word reveal reveal-hero-word${isEmphasis ? ' is-emphasis' : ''}`}
                    style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
                  >
                    {word}
                  </span>
                )
              })}
            </span>
          ))}
        </h1>

        <p className="hero-sub reveal reveal-fade" style={{ '--reveal-delay': '560ms' } as CSSProperties}>
          Classic French cuisine by Chef Pascal Paviani in the heart of Fort Worth's Cultural District.
        </p>

        <a
          href="https://resy.com/cities/dfw/saint-emilion"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta reveal reveal-fade"
          style={{ '--reveal-delay': '680ms' } as CSSProperties}
        >
          Reserve a Table
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="hero-scroll reveal reveal-fade" style={{ '--reveal-delay': '820ms' } as CSSProperties}>
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

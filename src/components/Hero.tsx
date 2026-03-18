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
        <div className="hero-badge">
          Fort Worth · French Cuisine Since 1985
        </div>

        <h1 className="hero-title">
          {heroLines.map((line, lineIndex) => (
            <span key={line.join('-')} className="hero-line">
              {line.map((word, wordIndex) => {
                const isEmphasis = lineIndex === 1

                return (
                  <span key={word} className="hero-word-wrap">
                    <span className={`hero-word${isEmphasis ? ' is-emphasis' : ''}`}>
                      {word}
                    </span>
                  </span>
                )
              })}
            </span>
          ))}
        </h1>

        <p className="hero-sub">
          Classic French cuisine by Chef Pascal Paviani in the heart of Fort Worth's Cultural District.
        </p>

        <a
          href="https://resy.com/cities/dfw/saint-emilion"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Reserve a Table
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

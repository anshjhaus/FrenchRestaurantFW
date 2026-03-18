const stats = [
  { num: '40+', label: 'Years in Fort Worth' },
  { num: '500+', label: 'Labels in our cellar' },
]

const images = [
  { src: '/images/experience-dining-room.jpg', alt: 'Dining room atmosphere' },
  { src: '/images/experience-plate.jpg', alt: 'French cuisine plate' },
  { src: '/images/experience-wine-service.jpg', alt: 'Wine service' },
]

export function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <div className="reveal">
          <span className="eyebrow">The Experience</span>
          <h2 className="section-title">
            Where every<br />detail <em>matters</em>
          </h2>
          <div className="gold-rule" />
          <p className="body-text">
            From the moment you arrive, Saint-Émilion is designed with one purpose in mind: to let you disappear from the world for a couple of hours. Our dining room, warm and unhurried, has been the setting for anniversaries, proposals, and quiet celebrations for four decades.
          </p>
          <div className="exp-stats-row experience-stats">
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div className="exp-stat-num">{num}</div>
                <div className="exp-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-right reveal">
          {images.map(({ src, alt }) => (
            <img key={src} className="exp-img" src={src} alt={alt} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState, type CSSProperties } from 'react'

const stats = [
  { value: 40, suffix: '+', label: 'Years in Fort Worth' },
  { value: 500, suffix: '+', label: 'Labels in our cellar' },
]

const images = [
  { src: '/images/experience-dining-room.jpg', alt: 'Dining room atmosphere' },
  { src: '/images/experience-plate.jpg', alt: 'French cuisine plate' },
  { src: '/images/experience-wine-service.jpg', alt: 'Wine service' },
]

export function Experience() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const node = statsRef.current
    if (!node) return

    let frameId = 0
    let started = false

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || started) return

          started = true
          const start = performance.now()
          const duration = 1400

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)

            setCounts(stats.map(stat => Math.round(stat.value * eased)))

            if (progress < 1) {
              frameId = window.requestAnimationFrame(tick)
            }
          }

          frameId = window.requestAnimationFrame(tick)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <section id="experience">
      <div className="section-inner">
        <div className="reveal reveal-left">
          <span className="eyebrow">The Experience</span>
          <h2 className="section-title">
            Where every<br />detail <em>matters</em>
          </h2>
          <div className="gold-rule reveal reveal-line" />
          <p className="body-text">
            From the moment you arrive, Saint-Émilion is designed with one purpose in mind: to let you disappear from the world for a couple of hours. Our dining room, warm and unhurried, has been the setting for anniversaries, proposals, and quiet celebrations for four decades.
          </p>
          <div ref={statsRef} className="exp-stats-row experience-stats">
            {stats.map(({ suffix, label }, index) => (
              <div
                key={label}
                className="reveal reveal-fade-up"
                style={{ '--reveal-delay': `${index * 120}ms` } as CSSProperties}
              >
                <div className="exp-stat-num">
                  {counts[index]}{suffix}
                </div>
                <div className="exp-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-right reveal reveal-right">
          {images.map(({ src, alt }, index) => (
            <img
              key={src}
              className="exp-img reveal reveal-scale"
              style={{ '--reveal-delay': `${120 + index * 140}ms` } as CSSProperties}
              src={src}
              alt={alt}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

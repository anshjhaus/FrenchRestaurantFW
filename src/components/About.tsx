export function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-image-wrap reveal reveal-left">
          <img
            className="about-image"
            src="/images/about-hero.jpg"
            alt="Saint-Émilion dining room"
            loading="lazy"
          />
          <div className="about-image-accent" />
        </div>

        <div className="reveal reveal-right">
          <div className="about-since">1985</div>
          <span className="eyebrow">Our Story</span>
          <h2 className="section-title">
            A tradition of<br /><em>French excellence</em>
          </h2>
          <div className="gold-rule reveal reveal-line" />
          <p className="body-text">
            Since 1985, Saint-Émilion has offered Fort Worth a true taste of France. Named for the storied wine region of Bordeaux, our restaurant reflects the same commitment to terroir, craft, and unhurried pleasure that defines the finest French table.
          </p>
          <blockquote className="about-quote">
            "To dine here is to understand why the French invented the word <em>gastronomie.</em>"
          </blockquote>
          <p className="body-text">
            Chef Pascal Paviani brings decades of classical training to every plate — from a delicate sole meunière to a cassoulet that has warmed the same loyal guests for thirty years.
          </p>
        </div>
      </div>
    </section>
  )
}

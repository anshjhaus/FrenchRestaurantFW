const links = [
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#experience', label: 'Experience' },
  { href: '#press', label: 'Press' },
  { href: '#reservation', label: 'Reserve' },
  { href: '#hours', label: 'Visit' },
]

export function Footer() {
  return (
    <footer>
      <div className="footer-logo">Saint-<span>Émilion</span></div>
      <p className="footer-tagline">French Restaurant · Fort Worth · Est. 1985</p>

      <div className="footer-links">
        {links.map(({ href, label }) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </div>

      <p className="footer-copy">
        © 2025 Saint-Émilion Restaurant · 3617 West 7th Street, Fort Worth TX · (817) 737-2781
      </p>
    </footer>
  )
}

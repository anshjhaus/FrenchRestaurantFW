import { useNavScroll } from '../hooks/useNavScroll'

export function Nav() {
  const scrolled = useNavScroll()

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">
        Saint-<span>Émilion</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">Our Story</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#press">Press</a></li>
        <li><a href="#hours">Visit</a></li>
      </ul>
      <a
        href="https://resy.com/cities/dfw/saint-emilion"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-reserve"
      >
        Reserve
      </a>
    </nav>
  )
}

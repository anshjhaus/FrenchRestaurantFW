import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Experience } from './components/Experience'
import { Press } from './components/Press'
import { Reservation } from './components/Reservation'
import { Hours } from './components/Hours'
import { Footer } from './components/Footer'
import { useCursor } from './hooks/useCursor'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useCursor()
  useScrollProgress()
  useScrollReveal()

  return (
    <>
      <div id="scroll-progress" />
      <div id="cursor" />
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <Press />
      <Reservation />
      <Hours />
      <Footer />
    </>
  )
}

export default App

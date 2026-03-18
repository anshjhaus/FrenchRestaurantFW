# Saint-Émilion

A full restaurant landing page for Saint-Émilion, a French restaurant in Fort Worth, TX.

## Stack

- **React 19** + **TypeScript**
- **Vite** (dev server on port 5000)
- **Tailwind CSS** (utility layer)
- **Custom CSS** in `src/index.css` (CSS custom properties, component styles)
- **@paper-design/shaders-react** — dithering shader background on the CTA card
- **lucide-react** — icons

## Project Structure

```
src/
  components/
    Nav.tsx           Navigation bar with scroll-aware background
    Hero.tsx          Full-screen hero section with animations
    About.tsx         Restaurant story section with image
    Menu.tsx          Tabbed menu (Starters / Mains / Desserts / Wine)
    Experience.tsx    Gallery and stats section
    Press.tsx         Press quotes grid
    Reservation.tsx   Date/guest form that builds a dynamic Resy URL
    Hours.tsx         Hours table and location/map placeholder
    Footer.tsx        Site footer with links
    CTASection.tsx    Standalone CTA card with dithering shader (original component)

  hooks/
    useCursor.ts        Custom gold dot cursor that tracks mouse
    useNavScroll.ts     Returns true when page is scrolled past threshold
    useScrollReveal.ts  IntersectionObserver that adds .visible to .reveal elements

  data/
    menu.ts     All menu items typed as MenuItem[], keyed by tab
    press.ts    Press quote items typed as PressItem[]

  App.tsx       Assembles all sections and wires up global hooks
  main.tsx      React root entry
  index.css     All CSS custom properties, component styles, animations, responsive
```

## Running

```
npm run dev
```

Starts the dev server at `http://localhost:5000`.

## Notes

- The Resy reservation button URL is built dynamically from the date and guest count state in `Reservation.tsx`.
- Menu tab state lives entirely in `Menu.tsx` — no global state needed.
- Scroll reveal uses `IntersectionObserver` via `useScrollReveal` and fires once per element.
- The custom cursor expands on hover of any `a` or `button` element via `useCursor`.

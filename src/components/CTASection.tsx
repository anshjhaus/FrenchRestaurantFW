import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-[#5C3D1E]/30 bg-[#0D0905] shadow-sm min-h-[600px] md:min-h-[600px] flex flex-col items-center justify-center duration-500">

          {/* Dithering shader — warm Bordeaux/amber tones */}
          <Suspense fallback={<div className="absolute inset-0 bg-[#1a0f07]" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront="#8B3A0F"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.5 : 0.15}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#0D0905_100%)]" />

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/10 px-4 py-1.5 text-sm font-light text-[#C9A96E] tracking-widest uppercase backdrop-blur-sm"
              style={{ fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", fontSize: "10px" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A96E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C9A96E]"></span>
              </span>
              Fort Worth · French Cuisine Since 1985
            </div>

            {/* Headline */}
            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#F5ECD7] mb-6 leading-[1.05]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              An evening <br />
              <span className="italic text-[#C9A96E]">worth remembering.</span>
            </h2>

            {/* Description */}
            <p
              className="text-[#A89070] text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              Classic French cuisine by Chef Pascal Paviani. Thursday through Sunday,
              dinner service in the Cultural District.
            </p>

            {/* CTA button */}
            <a
              href="https://resy.com/cities/dfw/saint-emilion"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full px-12 text-sm font-light transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "'Jost', sans-serif",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "11px",
                background: "transparent",
                border: "1px solid #C9A96E",
                color: "#C9A96E",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#C9A96E"
                ;(e.currentTarget as HTMLAnchorElement).style.color = "#0D0905"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent"
                ;(e.currentTarget as HTMLAnchorElement).style.color = "#C9A96E"
              }}
            >
              <span className="relative z-10">Reserve a Table</span>
              <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

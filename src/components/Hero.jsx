import { SITE } from '../data'
import { Check, Phone } from './Icons'

const HIGHLIGHTS = [
  'Solar Savings',
  'PM Surya Ghar Subsidy',
  'Clean Energy',
  'Professional Installation',
]

const PARTICLES = [
  { left: '6%', size: 9, delay: 0.0, dur: 12 },
  { left: '16%', size: 5, delay: 3.0, dur: 15 },
  { left: '30%', size: 7, delay: 1.4, dur: 11 },
  { left: '44%', size: 5, delay: 5.0, dur: 14 },
  { left: '58%', size: 8, delay: 2.2, dur: 12 },
  { left: '71%', size: 6, delay: 4.2, dur: 16 },
  { left: '84%', size: 9, delay: 0.8, dur: 13 },
  { left: '94%', size: 5, delay: 6.0, dur: 11 },
]

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src="./images/hero-solar.jpg"
        alt="Rooftop solar panels under a bright sky"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-950/95 via-primary-900/85 to-primary-800/60" />

      <div className="hero-scene" aria-hidden="true">
        <div className="hero-glow-secondary" />
        <div className="hero-sun" style={{ top: '7%', right: '7%', width: 'clamp(170px, 24vw, 300px)', height: 'clamp(170px, 24vw, 300px)' }}>
          <span className="hero-ray-ring" />
          <span className="hero-sun-core" />
        </div>
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
            }}
          />
        ))}
        <div className="hero-panel-strip">
          <div className="hero-panel-sheen" />
        </div>
      </div>

      <div className="container-site relative z-10 flex flex-col items-start justify-center py-20 sm:py-24 lg:min-h-[640px] lg:py-28">
        <span className="hero-anim" style={{ animationDelay: '0.1s' }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/90 px-4 py-1.5 text-sm font-semibold text-white shadow-card">
            PM Surya Ghar Subsidy Support
          </span>
        </span>

        <h1 className="hero-anim mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ animationDelay: '0.2s' }}>
          Powering a Sustainable Future
        </h1>

        <p className="hero-anim mt-5 max-w-xl text-lg leading-relaxed text-white/90" style={{ animationDelay: '0.3s' }}>
          Solar EPC &amp; Energy Solutions — Residential, Commercial &amp; Industrial. Lower
          your electricity bills with clean rooftop solar and verified government subsidy
          assistance.
        </p>

        <div className="hero-anim mt-4 flex max-w-2xl flex-wrap gap-2" style={{ animationDelay: '0.4s' }}>
          {HIGHLIGHTS.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/20"
            >
              <Check className="h-4 w-4 text-accent-300" />
              {item}
            </span>
          ))}
        </div>

        <div className="hero-anim mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '0.5s' }}>
          <a href="#contact" className="btn-accent">
            Get Free Consultation
          </a>
          <a href="#calculator" className="btn-outline-light">
            Check Solar Savings
          </a>
        </div>

        <div className="hero-anim mt-10 flex flex-col gap-2 text-sm text-white/85 sm:flex-row sm:items-center sm:gap-6" style={{ animationDelay: '0.6s' }}>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {SITE.phones.join(' · ')}
          </span>
          <span className="font-semibold text-accent-300">{SITE.website}</span>
        </div>
      </div>
    </section>
  )
}
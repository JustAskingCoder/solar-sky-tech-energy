import { SITE } from '../data'
import { Check, Phone } from './Icons'

const HIGHLIGHTS = [
  'Solar Savings',
  'PM Surya Ghar Subsidy',
  'Clean Energy',
  'Professional Installation',
]

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src="./images/hero-solar.jpg"
        alt="Rooftop solar panels under a bright sky"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-950/95 via-primary-900/85 to-primary-800/60" />

      <div className="container-site flex flex-col items-start justify-center py-20 sm:py-24 lg:min-h-[640px] lg:py-28">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/90 px-4 py-1.5 text-sm font-semibold text-white shadow-card">
          PM Surya Ghar Subsidy Support
        </span>

        <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Powering a Sustainable Future
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
          Solar EPC &amp; Energy Solutions — Residential, Commercial &amp; Industrial. Lower
          your electricity bills with clean rooftop solar and verified government subsidy
          assistance.
        </p>

        <div className="mt-4 flex max-w-2xl flex-wrap gap-2">
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

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn-accent">
            Get Free Consultation
          </a>
          <a href="#calculator" className="btn-outline-light">
            Check Solar Savings
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-sm text-white/85 sm:flex-row sm:items-center sm:gap-6">
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
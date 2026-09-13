import { SUBSIDY, SITE } from '../data'
import { BadgeCheck, ArrowRight } from './Icons'

export default function SubsidySection() {
  return (
    <section id="subsidy" className="bg-mist py-16 sm:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">PM Surya Ghar: Muft Bijli Yojana</span>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">
            Government Subsidy on Rooftop Solar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Verified central government subsidy on rooftop solar systems. Sky Tech Energy
            assists you with the application from start to finish.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SUBSIDY.map((item) => (
            <div
              key={item.capacity}
              className="card relative flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent-100 px-2.5 py-1 text-xs font-bold text-accent-800">
                <BadgeCheck className="h-4 w-4" />
                Subsidy
              </span>
              <p className="text-sm font-bold uppercase tracking-wide text-primary-700">
                {item.capacity} System
              </p>
              <p className="mt-3 text-4xl font-extrabold tabular-nums tracking-tight text-primary-900">
                {item.amount}
              </p>
              <p className="mt-2 text-sm text-muted">under PM Surya Ghar</p>
            </div>
          ))}
        </div>

        <div className="card mt-8 mx-auto max-w-3xl text-center sm:p-8">
          <p className="text-lg font-semibold text-ink">
            Example — 3 kW rooftop solar system
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 text-base text-ink sm:flex-row sm:gap-6">
            <span>
              System total <strong className="tabular-nums">₹1,90,000</strong>
            </span>
            <span className="hidden text-accent-600 sm:inline">−</span>
            <span>
              Subsidy <strong className="tabular-nums text-accent-600">− ₹78,000</strong>
            </span>
            <span className="hidden text-accent-600 sm:inline">=</span>
            <span>
              Net cost <strong className="tabular-nums text-accent-700">≈ ₹1,12,000</strong>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted">
            Estimated / Indicative figure for planning only — not an official quotation.
            Final cost depends on the site survey and system configuration.
          </p>
          <a href="#contact" className="btn-accent mt-6">
            Check My Subsidy — Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
import { WHY_SKY_TECH } from '../data'
import { ICON_MAP } from './Icons'
import SolarPanels from './SolarPanels'

export default function WhySkyTech() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <SolarPanels className="section-panels" id="aboutpv" />
      <div className="container-site relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[2fr_3fr]">
          <div>
            <span className="eyebrow">Why Sky Tech Energy</span>
            <h2 className="heading mt-4 text-3xl sm:text-4xl">
              Your Trusted Solar EPC &amp; Energy Partner
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Sky Tech Energy delivers Solar EPC &amp; Energy Solutions for Residential,
              Commercial and Industrial rooftops — with professional installation, subsidy
              assistance and customer-focused service from first call to long after
              activation.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>“Powering a Sustainable Future”</li>
              <li>Trusted panel partners include Adani, Waaree, Polycab, Fujiyama</li>
              <li>Approachable, honest guidance — no jargon, no pressure</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {WHY_SKY_TECH.map((item) => {
              const Icon = ICON_MAP[item.icon] || ICON_MAP.support
              return (
                <div key={item.title} className="card flex gap-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-primary-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
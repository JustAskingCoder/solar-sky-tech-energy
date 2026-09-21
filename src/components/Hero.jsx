import { SITE, SUBSIDY } from '../data'
import { Mail, Phone } from './Icons'

export default function Hero() {
  return (
    <section id="home">
      <img
        src="./images/hero-banner.png"
        alt="Sky Tech Energy — Clean Energy, Brighter Tomorrow. Switch to solar and save on electricity bills. PM Surya Ghar subsidy support."
        className="block w-full object-cover"
      />

      <div className="bg-mist">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-sm lg:flex-row lg:gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-accent-600">Get In Touch</p>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <a
                href="tel:+919307870422"
                className="inline-flex items-center gap-2 font-semibold text-primary-900 hover:text-primary-700"
              >
                <Phone className="h-4 w-4" />
                {SITE.phones.join(' · ')}
              </a>
              <span className="hidden text-muted sm:inline">·</span>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-1.5 font-semibold text-primary-900 hover:text-primary-700"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-600">PM Surya Ghar Subsidy</p>
            <p className="mt-1 font-semibold text-primary-900">
              {SUBSIDY.map((s) => `${s.capacity} ${s.amount}`).join('  ·  ')}
            </p>
          </div>

          <div className="text-center lg:text-right">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-600">Website</p>
            <a
              href={`https://${SITE.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block font-semibold text-primary-900 hover:text-primary-700"
            >
              {SITE.website}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
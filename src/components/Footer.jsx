import { NAV_LINKS, SITE } from '../data'
import { Instagram, Phone, WhatsApp } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-site grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="" className="h-10 w-auto" />
            <span className="text-lg font-extrabold tracking-tight">Sky Tech Energy</span>
          </div>
          <p className="mt-4 font-semibold text-accent-300">“{SITE.tagline}”</p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {SITE.offering} — Residential · Commercial · Industrial rooftop solar.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-bold uppercase tracking-wide text-accent-300">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-accent-300">Contact</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {SITE.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:+91${phone}`} className="inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white">
                  <Phone className="h-4 w-4" />
                  <span className="tabular-nums">{phone}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/75">{SITE.website}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-accent-300">Connect</h3>
          <div className="mt-4 flex gap-3">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Sky Tech Energy on WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-800 text-accent-300 transition-colors hover:bg-accent-600 hover:text-white"
            >
              <WhatsApp className="h-5 w-5" />
            </a>
            <a
              href="https://www.skytechenerg.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sky Tech Energy Instagram (via website)"
              title="Instagram — reachable via www.skytechenerg.in"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-800 text-accent-300 transition-colors hover:bg-accent-600 hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/60">
            Figures marked ‘Estimated / Indicative’ are for planning only, not official
            quotations. Subsidy subject to PM Surya Ghar scheme terms.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {year} Sky Tech Energy. All rights reserved.</p>
          <p>“{SITE.tagline}”</p>
        </div>
      </div>
    </footer>
  )
}
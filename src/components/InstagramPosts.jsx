import { OFFERS, SITE } from '../data'
import { Phone, WhatsApp } from './Icons'

export default function InstagramPosts() {
  return (
    <section id="offers" className="bg-mist py-16 sm:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Offers &amp; Highlights</span>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">Solar Made Easy</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Explore our latest offers — from zero down payment and loan facility to
            professional installation with subsidy assistance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((offer, index) => (
            <article key={offer.src} className="card group flex flex-col overflow-hidden p-0">
              <div className="overflow-hidden bg-primary-100">
                <img
                  src={offer.src}
                  alt={`Sky Tech Energy promotional artwork ${index + 1}`}
                  loading="lazy"
                  className="w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                    `Hello Sky Tech Energy, I saw your offer on the website and I'd like to enquire.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  <WhatsApp className="h-5 w-5" />
                  Enquire Now
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 font-semibold text-primary-800 hover:text-primary-950"
                >
                  Get Quote
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          For this and other offers, call {SITE.phones.join(' · ')} or email{' '}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-primary-800 underline">
            {SITE.email}
          </a>{' '}
          — we are happy to help.
        </p>
      </div>
    </section>
  )
}
import { useState } from 'react'
import { CONTACT_DEFAULTS, SITE } from '../data'
import { Check, Mail, Phone, WhatsApp } from './Icons'

const CUSTOMER_TYPES = ['Residential', 'Commercial', 'Industrial']

const initialForm = {
  name: '',
  mobile: '',
  email: '',
  city: '',
  bill: '',
  customerType: 'Residential',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const whatsappText = encodeURIComponent(
    `Hello The Sky Tech Energy, I'd like a free solar consultation.\nName: ${form.name}\nCity: ${form.city}\nCustomer type: ${form.customerType}`
  )

  if (submitted) {
    return (
      <section id="contact" className="bg-primary-900 py-16 sm:py-20">
        <div className="container-site">
          <div className="card mx-auto max-w-xl text-center">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-100 text-accent-600">
              <Check className="h-7 w-7" />
            </span>
            <h2 className="heading mt-5 text-2xl">Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}!</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Your consultation request has been received. Our team will get back to you
              shortly at the number you shared{form.email ? ` (or ${form.email})` : ''}.
            </p>
            <p className="mt-3 text-sm text-muted">
              Want a faster reply? Message us on WhatsApp now.
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-6"
            >
              <WhatsApp className="h-5 w-5" />
              Chat on WhatsApp — {SITE.phones[0]}
            </a>
            <button type="button" onClick={() => { setForm(initialForm); setSubmitted(false) }} className="mt-4 text-sm font-semibold text-muted underline-offset-2 hover:underline">
              Submit another request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-primary-900 py-16 sm:py-20">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-4 py-1.5 text-sm font-semibold text-accent-300">
              Get In Touch
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {CONTACT_DEFAULTS.heading}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/85">
              {CONTACT_DEFAULTS.sub}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {SITE.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:+91${phone}`}
                    className="inline-flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-accent-300"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-800 text-accent-300">
                      <Phone className="h-5 w-5" />
                    </span>
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-accent-300"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-800 text-accent-300">
                    <Mail className="h-5 w-5" />
                  </span>
                  {SITE.email}
                </a>
              </li>
            </ul>

            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello The Sky Tech Energy, I would like a free solar consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-8"
            >
              <WhatsApp className="h-5 w-5" />
              WhatsApp Us
            </a>

            <p className="mt-6 text-sm text-white/70">
              Prefer email or the web? Write to{' '}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-accent-300 underline">
                {SITE.email}
              </a>{' '}
              or visit <span className="font-semibold text-accent-300">{SITE.website}</span>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card" aria-label="Free consultation request">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-semibold text-ink">
                  Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  required
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-primary-200 px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
                />
              </div>
              <div>
                <label htmlFor="contact-mobile" className="text-sm font-semibold text-ink">
                  Mobile Number <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-mobile"
                  required
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  pattern="[0-9+ ]{10,15}"
                  title="10 to 15 digits, e.g. 9307870422"
                  value={form.mobile}
                  onChange={set('mobile')}
                  placeholder="e.g. 9307870422"
                  className="mt-2 w-full rounded-xl border border-primary-200 px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-semibold text-ink">
                  Email <span className="font-normal text-muted">(optional)</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-primary-200 px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
                />
              </div>
              <div>
                <label htmlFor="contact-city" className="text-sm font-semibold text-ink">
                  City <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-city"
                  required
                  type="text"
                  autoComplete="address-level2"
                  value={form.city}
                  onChange={set('city')}
                  placeholder="Your city"
                  className="mt-2 w-full rounded-xl border border-primary-200 px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
                />
              </div>
              <div>
                <label htmlFor="contact-bill" className="text-sm font-semibold text-ink">
                  Monthly Electricity Bill (₹) <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-bill"
                  required
                  type="number"
                  min={0}
                  inputMode="numeric"
                  value={form.bill}
                  onChange={set('bill')}
                  placeholder="e.g. 5000"
                  className="mt-2 w-full rounded-xl border border-primary-200 px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
                />
              </div>
              <div>
                <label htmlFor="contact-type" className="text-sm font-semibold text-ink">
                  Customer Type <span aria-hidden="true">*</span>
                </label>
                <select
                  id="contact-type"
                  required
                  value={form.customerType}
                  onChange={set('customerType')}
                  className="mt-2 w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
                >
                  {CUSTOMER_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="btn-accent mt-7 w-full">
              {CONTACT_DEFAULTS.button}
            </button>

            <p className="mt-4 text-center text-xs leading-relaxed text-muted">
              This is a consultation request only — not a binding quotation. Prefer WhatsApp?{' '}
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hello The Sky Tech Energy, I would like a free solar consultation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent-600 underline-offset-2 hover:underline"
              >
                Message us on WhatsApp ({SITE.phones[0]})
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
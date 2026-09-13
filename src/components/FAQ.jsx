import { useState } from 'react'
import { FAQS } from '../data'

function ChevronDown({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQs</span>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Honest answers to the questions we hear most often.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="flex flex-col gap-4">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index
              const panelId = `faq-panel-${index}`
              const buttonId = `faq-button-${index}`
              return (
                <div key={item.q} className="card p-0">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-bold text-primary-900 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2"
                    >
                      {item.q}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-accent-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-muted">{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            Have a question we didn’t cover?{' '}
            <a href="#contact" className="font-semibold text-accent-600 underline-offset-2 hover:underline">
              Ask us directly
            </a>{' '}
            — we’ll get back to you.
          </p>
        </div>
      </div>
    </section>
  )
}
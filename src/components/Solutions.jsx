import { SOLUTIONS } from '../data'
import { ArrowRight } from './Icons'

export default function Solutions() {
  return (
    <section id="solutions" className="bg-mist py-16 sm:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Solar EPC &amp; Energy Solutions</span>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">
            Solutions for Every Rooftop
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Residential, Commercial and Industrial rooftop solar — designed, installed and
            supported by one trusted team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <article
              key={solution.title}
              className="group card flex flex-col overflow-hidden p-0 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary-100">
                <img
                  src={solution.image}
                  alt={solution.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-primary-900">{solution.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{solution.text}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-accent-600 hover:text-accent-700"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
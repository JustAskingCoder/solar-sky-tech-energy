import { BENEFITS } from '../data'
import { ICON_MAP } from './Icons'

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-16 sm:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Choose Solar</span>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">
            The Benefits of Going Solar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Rooftop solar is one of the simplest ways to cut your electricity bills, use
            clean energy, and take charge of your power.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = ICON_MAP[benefit.icon] || ICON_MAP.leaf
            return (
              <div
                key={benefit.title}
                className="card transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-primary-900">{benefit.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{benefit.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
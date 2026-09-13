import { PROCESS } from '../data'

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 sm:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">Going Solar in 5 Simple Steps</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A clear, guided journey from first conversation to a working rooftop system.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((item) => (
            <li key={item.step} className="relative">
              <div className="card h-full pt-10">
                <span
                  className="absolute -top-0 left-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 text-lg font-extrabold text-white shadow-card"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-primary-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-sm text-muted">
          Timelines depend on your site and system size — we will give you a clear schedule
          after the site survey.
        </p>
      </div>
    </section>
  )
}
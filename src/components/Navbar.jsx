import { useEffect, useState } from 'react'
import { NAV_LINKS, SITE } from '../data'
import { Menu, Close, Phone } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        scrolled ? 'border-primary-100 bg-white/95 shadow-card backdrop-blur' : 'border-transparent bg-white'
      }`}
    >
      <nav aria-label="Main" className="container-site flex items-center justify-between gap-4 py-3">
        <a href="#home" className="flex shrink-0 items-center gap-2" aria-label="Sky Tech Energy — home">
          <img src="/images/logo.png" alt="" className="h-9 w-auto" />
          <span className="hidden text-base font-extrabold tracking-tight text-primary-900 sm:block">
            Sky Tech Energy
          </span>
        </a>

        <ul className="hidden items-center gap-4 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-2 py-1.5 text-sm font-medium text-ink transition-colors hover:text-primary-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919307870422"
            className="hidden items-center gap-2 text-sm font-semibold text-primary-900 hover:text-primary-700 lg:flex"
          >
            <Phone className="h-4 w-4" />
            {SITE.phones[0]}
          </a>
          <a href="#contact" className="btn-accent hidden px-5 py-2.5 text-sm sm:inline-flex">
            Get Free Consultation
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-primary-900 hover:bg-primary-50 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-primary-100 bg-white xl:hidden">
          <div className="container-site flex flex-col py-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-base font-semibold text-ink hover:bg-primary-50 hover:text-primary-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t border-primary-100 pt-4">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-accent">
                Get Free Consultation
              </a>
              <a
                href="tel:+919307870422"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-900 px-6 py-3 font-semibold text-primary-900 hover:bg-primary-50"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phones[0]}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
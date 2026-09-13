import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SubsidySection from './components/SubsidySection'
import Benefits from './components/Benefits'
import Solutions from './components/Solutions'
import Process from './components/Process'
import Calculator from './components/Calculator'
import WhySkyTech from './components/WhySkyTech'
import InstagramPosts from './components/InstagramPosts'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

const SECTIONS = [
  SubsidySection,
  Benefits,
  Solutions,
  Process,
  Calculator,
  WhySkyTech,
  InstagramPosts,
  FAQ,
  ContactForm,
]

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {SECTIONS.map((Section, i) => (
          <Reveal key={i} delay={i * 60}>
            <Section />
          </Reveal>
        ))}
      </main>
      <Footer />
    </div>
  )
}
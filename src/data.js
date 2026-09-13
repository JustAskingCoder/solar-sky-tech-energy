export const SITE = {
  name: 'Sky Tech Energy',
  tagline: 'Powering a Sustainable Future',
  offering: 'Solar EPC & Energy Solutions',
  segments: ['Residential', 'Commercial', 'Industrial'],
  website: 'www.skytechenerg.in',
  phones: ['9307870422', '7448224139', '9699462881'],
  whatsapp: '919307870422',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solar Solutions', href: '#solutions' },
  { label: 'PM Surya Ghar', href: '#subsidy' },
  { label: 'Why Solar', href: '#benefits' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const SUBSIDY = [
  { capacity: '1 kW', amount: '₹30,000' },
  { capacity: '2 kW', amount: '₹60,000' },
  { capacity: '3 kW', amount: '₹78,000' },
]

export const SUBSIDY_TABLE = { '1': 30000, '2': 60000, '3': 78000 }

/* Verified: 3 kW system total ₹1,90,000 before subsidy.
   Per-kW scale (₹63,333) is DERIVED from that single verified figure and used
   only for the labelled "Estimated / Indicative" calculator. */
export const COST_PER_KW = 190000 / 3

export const BENEFITS = [
  {
    title: 'Lower Electricity Bills',
    text: 'Rooftop solar converts sunlight into power you use directly, reducing the units you buy from the grid every month.',
    icon: 'rupee',
  },
  {
    title: 'Government Subsidy',
    text: 'The PM Surya Ghar scheme offers a verified central subsidy on rooftop solar systems — we assist with the application.',
    icon: 'badge',
  },
  {
    title: 'Clean & Green Energy',
    text: 'Solar is a clean, renewable source that cuts your carbon footprint and keeps the air cleaner.',
    icon: 'leaf',
  },
  {
    title: 'Long-Term Savings',
    text: 'Once installed, sunlight generates your power for free — the savings build up steadily year after year.',
    icon: 'trend',
  },
  {
    title: 'Energy Independence',
    text: 'Generate your own electricity and reduce your reliance on grid supply and rising tariffs.',
    icon: 'home',
  },
  {
    title: 'Environmentally Friendly',
    text: 'Every rooftop system you install helps reduce demand on fossil-fuel-based power generation.',
    icon: 'globe',
  },
]

export const SOLUTIONS = [
  {
    title: 'Residential',
    text: 'Rooftop solar for homes — right-sized systems that cut monthly bills and qualify for the PM Surya Ghar subsidy.',
    image: './images/solar-home.jpg',
    alt: 'Rooftop solar panels on a modern home',
  },
  {
    title: 'Commercial',
    text: 'Solar solutions for offices, shops and commercial premises to reduce operating costs and meet sustainability goals.',
    image: './images/solar-commercial.jpg',
    alt: 'Solar panels installed on a commercial rooftop',
  },
  {
    title: 'Industrial',
    text: 'High-capacity rooftop systems for factories and industrial units built for scale and reliable long-term output.',
    image: './images/solar-industrial.jpg',
    alt: 'Large solar array on an industrial building',
  },
]

export const PROCESS = [
  {
    step: '1',
    title: 'Contact & Consultation',
    text: 'Reach out by phone or the consultation form. We understand your energy needs and answer your questions.',
  },
  {
    step: '2',
    title: 'Site Survey',
    text: 'Our team surveys your rooftop to check roof area, orientation, shading and structural suitability.',
  },
  {
    step: '3',
    title: 'System Design',
    text: 'We prepare a customised system design with the right capacity and equipment for your site and budget.',
  },
  {
    step: '4',
    title: 'Installation',
    text: 'Professional installation by our team, with careful attention to safety, quality and a clean finish.',
  },
  {
    step: '5',
    title: 'Solar Activation & Support',
    text: 'We activate your system, guide you through the subsidy application, and stay available for ongoing support.',
  },
]

export const WHY_SKY_TECH = [
  {
    title: 'Zero Down Payment',
    text: 'Start your solar journey with zero down payment options — backed by loan facility arrangements.',
    icon: 'zero',
  },
  {
    title: 'Loan Facility',
    text: 'Flexible financing lets you move to solar without paying the full cost upfront.',
    icon: 'loan',
  },
  {
    title: 'Professional Installation',
    text: 'Expert, professional installation by an experienced solar EPC team.',
    icon: 'install',
  },
  {
    title: 'Subsidy Assistance',
    text: 'We guide you through the PM Surya Ghar subsidy application so you can claim the benefits you are eligible for.',
    icon: 'subsidy',
  },
  {
    title: 'Solar EPC & Energy Solutions',
    text: 'Engineering, procurement and construction across Residential, Commercial & Industrial rooftop projects.',
    icon: 'epc',
  },
  {
    title: 'Customer-Focused Service',
    text: 'We stay with you after installation — questions answered, support extended, relationships kept.',
    icon: 'support',
  },
]

export const FAQS = [
  {
    q: 'What is rooftop solar?',
    a: 'Rooftop solar is a system of solar panels installed on your building roof. The panels convert sunlight into electricity that is used directly to power your home or business, reducing the electricity you buy from the grid.',
  },
  {
    q: 'What is PM Surya Ghar?',
    a: 'PM Surya Ghar: Muft Bijli Yojana is the central government\u2019s rooftop solar scheme. It provides a direct subsidy per verified capacity — currently 1 kW (₹30,000), 2 kW (₹60,000) and 3 kW (₹78,000). Sky Tech Energy assists with the application process.',
  },
  {
    q: 'How does solar lower my electricity bill?',
    a: 'During daylight hours your home runs on solar energy first. The fewer units you draw from the grid, the lower your bill. Any excess generation can be exported under net-metering rules, subject to your local discom. Exact savings depend on your usage and location.',
  },
  {
    q: 'What system size fits my home?',
    a: 'The right size depends on your monthly electricity bill, available roof area, and how much of your load you want to cover. Use the savings calculator on this page for an indicative recommendation — a paid site survey gives the precise answer.',
  },
  {
    q: 'How does the subsidy work?',
    a: 'Under PM Surya Ghar, the central government provides a verified subsidy of ₹30,000 / ₹60,000 / ₹78,000 for 1 / 2 / 3 kW rooftop systems. The subsidy is subject to official scheme terms and eligibility checks. Sky Tech Energy assists with the application.',
  },
  {
    q: 'How long does installation take?',
    a: 'Installation time depends on site conditions, system size and approvals. We will give you a clear timeline for your specific project after the site survey — please contact us for a definitive answer for your property.',
  },
  {
    q: 'Does solar work on cloudy days?',
    a: 'Solar panels generate more power in bright sunlight, but they still produce electricity on cloudy days — just at a reduced output. The grid covers any shortfall, so your supply stays uninterrupted.',
  },
  {
    q: 'What maintenance does a solar system need?',
    a: 'Solar systems need very little day-to-day maintenance. Periodic cleaning of the panels and a routine inspection keep them generating efficiently. Sky Tech Energy remains available for support after installation.',
  },
]

export const OFFERS = Array.from({ length: 4 }, (_, i) => ({
  src: `./images/instagram-post-${i + 1}.jpg`,
  alt: `Sky Tech Energy promotional creative ${i + 1}`,
}))

export const CONTACT_DEFAULTS = {
  heading: 'Ready to Switch to Solar?',
  sub: 'Get a free consultation and find the right solar solution for your home or business.',
  button: 'Get Free Consultation',
}
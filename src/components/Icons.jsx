const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Icon = ({ d, children, className = 'h-6 w-6', solid = false, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill={solid ? 'currentColor' : base.fill}
    stroke={solid ? 'none' : base.stroke}
    strokeWidth={solid ? 0 : base.strokeWidth}
    strokeLinecap={base.strokeLinecap}
    strokeLinejoin={base.strokeLinejoin}
    {...rest}
  >
    {children || <path d={d} />}
  </svg>
)

export const Sun = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </Icon>
)

export const Rupee = (p) => (
  <Icon {...p} solid>
    <path d="M8 2h8v2h-3.2c1.7.6 2.9 2.1 3 4H17v2h-1.2a5.5 5.5 0 0 1-4.7 4.9L14 20.6 12 22l-4.8-6H9l3.2 4.3c1.4-.6 2.5-1.6 3-2.9H8v-2h7.1c-.2-1.1-.9-2-1.9-2.6L17 11.6V8.2H8V6.8a3 3 0 0 1 1.8-2.6H8V2z" />
  </Icon>
)

export const BadgeCheck = (p) => (
  <Icon {...p}>
    <path d="M12 3l1.8 1.2 2.2-.1 1 2 2 1-.1 2.2L20.1 12l-1.2 1.8.1 2.2-2 1-1 2-2.2-.1L12 21l-1.8-1.2-2.2.1-1-2-2-1 .1-2.2L3.9 12l1.2-1.8-.1-2.2 2-1 1-2 2.2.1z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
)

export const Leaf = (p) => (
  <Icon {...p}>
    <path d="M20 4s-8 1-12 6c-3 4-2.5 8.5-1 10 .5.5 3 1.5 6-1 4-3.5 7-10 7-15z" />
    <path d="M5 20c2-4 5-8 9-11" />
  </Icon>
)

export const Trend = (p) => (
  <Icon {...p}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </Icon>
)

export const HomeSolar = (p) => (
  <Icon {...p}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
    <path d="M9.5 21v-6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6" />
    <path d="M6 6h12v3.5" />
  </Icon>
)

export const Globe = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c-2.5 2.3-3.8 5.5-3.8 9s1.3 6.7 3.8 9c2.5-2.3 3.8-5.5 3.8-9s-1.3-6.7-3.8-9z" />
  </Icon>
)

export const TagZero = (p) => (
  <Icon {...p}>
    <path d="M20.6 13.4L13.6 20.4a2 2 0 0 1-2.8 0l-6-6A2 2 0 0 1 4 12.9V5a1 1 0 0 1 1-1h7.9a2 2 0 0 1 1.4.6l6.3 6.3a2 2 0 0 1 0 2.5z" />
    <circle cx="8.5" cy="8.5" r="1.5" />
  </Icon>
)

export const Loan = (p) => (
  <Icon {...p}>
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <path d="M3 10h18M7 15h4" />
  </Icon>
)

export const Install = (p) => (
  <Icon {...p}>
    <path d="M12 3v4M8 7h8v4a6 6 0 0 1-4 5.6V20h-2v-3.4A6 6 0 0 1 6 11V7h2z" />
    <path d="M5 20h14" />
  </Icon>
)

export const Subsidy = (p) => (
  <Icon {...p}>
    <path d="M4 9h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9z" />
    <path d="M8 9V6a4 4 0 0 1 8 0v3" />
    <path d="M12 12v3M10.5 13.5h3" />
  </Icon>
)

export const EPC = (p) => (
  <Icon {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <path d="M10 6.5h4M6.5 10v4M10 17.5h4M17.5 10v4" />
  </Icon>
)

export const Support = (p) => (
  <Icon {...p}>
    <path d="M3 11h3l2 5 3-10 2 7h4l2-2h2" />
  </Icon>
)

export const Check = (p) => (
  <Icon {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Icon>
)

export const Phone = (p) => (
  <Icon {...p}>
    <path d="M5 4h4l1.5 4L8 10a12 12 0 0 0 6 6l2-2.5 4 1.5v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Icon>
)

export const WhatsApp = (p) => (
  <Icon {...p} solid>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.2L2 22l4.9-1.6A9.9 9.9 0 1 0 12.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.95 1.34-.52.05-1.17.24-3.9-.8 1.1-1.8 1.9-3.4 2.6-4.9-2.4-1.4-4.6-0.4-5.4 0.9-.4.6-1 .85-1 1.05 0 .2-.2.2 0 1 .5.8 1.6 1.5 2.6 2 .5.3 1.4 1 2.6.55.6-.2 3.9-2.1 4.05-3.6.1-.85-.6-1.5-1-1.8-.3-.2-.6-.2-.8-.2h-.6c-.2 0-.5 0-.7.4-.25.6-.8 1.9-.85 1.95-.2.4-.4.5-.8.2-.4-.3-1.6-1-2-1.2-.5-.25-.8-.15-1.1.2l-.85.9c-.3.3-.5.55-.05 1.15.6.75 1.5 1.85 2.5 2.6.75.6 1.6.9 2 .95l1.05.13c.35-.05.6.1.75.3" />
  </Icon>
)

export const Instagram = (p) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </Icon>
)

export const Menu = (p) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)

export const Close = (p) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
)

export const ArrowRight = (p) => (
  <Icon {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </Icon>
)

export const CalculatorIcon = (p) => (
  <Icon {...p}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
  </Icon>
)

export const Sparkle = (p) => (
  <Icon {...p} solid>
    <path d="M12 2l2.2 6.2L20.5 10l-6.3 1.8L12 18l-2.2-6.2L3.5 10l6.3-1.8z" />
    <path d="M19 15l.9 2.6L22.5 18.5l-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z" />
  </Icon>
)

export const Zap = (p) => (
  <Icon {...p} solid>
    <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z" />
  </Icon>
)

/* Map used by data.js-driven cards */
export const ICON_MAP = {
  rupee: Rupee,
  badge: BadgeCheck,
  leaf: Leaf,
  trend: Trend,
  home: HomeSolar,
  globe: Globe,
  zero: TagZero,
  loan: Loan,
  install: Install,
  subsidy: Subsidy,
  epc: EPC,
  support: Support,
}
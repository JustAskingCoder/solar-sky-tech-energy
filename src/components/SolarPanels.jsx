export default function SolarPanels({ className = '', id = 'pv' }) {
  const uid = `${id}-`
  return (
    <svg
      className={className}
      viewBox="0 0 560 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}cell`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1C5C8F" />
          <stop offset="1" stopColor="#0E3A5D" />
        </linearGradient>
        <linearGradient id={`${uid}sheen`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(255,255,255,0)" />
          <stop offset="0.5" stopColor="rgba(255,236,180,0.55)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      <g transform="skewX(-5)">
        <g className="pv-roof">
          {Array.from({ length: 3 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => {
              const x = 10 + c * 112
              const y = 26 + r * 76
              return (
                <g key={`${r}-${c}`} transform={`translate(${x} ${y})`} className="pv-panel">
                  <rect width="104" height="68" rx="3" fill={`url(#${uid}cell)`} stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
                  <rect x="11" y="11" width="39" height="21" rx="1" fill="rgba(255,255,255,0.10)" />
                  <rect x="54" y="11" width="39" height="21" rx="1" fill="rgba(255,255,255,0.10)" />
                  <rect x="11" y="36" width="39" height="22" rx="1" fill="rgba(255,255,255,0.10)" />
                  <rect x="54" y="36" width="39" height="22" rx="1" fill="rgba(255,255,255,0.10)" />
                </g>
              )
            })
          )}
        </g>

        <g className="pv-sheen">
          <rect x="-280" y="0" width="220" height="340" fill={`url(#${uid}sheen)`} />
        </g>
      </g>

      <g transform="skewX(-5)">
        <rect x="4" y="308" width="552" height="8" rx="4" fill="rgba(255,255,255,0.28)" />
      </g>
      <ellipse cx="280" cy="336" rx="320" ry="18" fill="rgba(5,20,35,0.45)" />
    </svg>
  )
}
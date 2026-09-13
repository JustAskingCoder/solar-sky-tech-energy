import { useMemo, useState } from 'react'
import { SUBSIDY_TABLE, COST_PER_KW } from '../data'
import { CalculatorIcon, Check } from './Icons'

const fmt = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`
const fmtUnits = (n) => Math.round(n).toLocaleString('en-IN')
const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n))

const ASSUMPTIONS = {
  unitsPerKwMonth: 125,
  defaultTariff: 8,
  unitsMin: 80,
  unitsMax: 180,
  tariffMin: 4,
  tariffMax: 12,
}

function subsidyFor(capacityKw) {
  if (capacityKw >= 3) return SUBSIDY_TABLE['3']
  if (capacityKw >= 2) return SUBSIDY_TABLE['2']
  return SUBSIDY_TABLE['1']
}

export default function Calculator() {
  const [bill, setBill] = useState(5000)
  const [consumption, setConsumption] = useState('')
  const [tariff, setTariff] = useState(ASSUMPTIONS.defaultTariff)
  const [unitsPerKw, setUnitsPerKw] = useState(ASSUMPTIONS.unitsPerKwMonth)
  const [size, setSize] = useState(5)
  const [sizeTouched, setSizeTouched] = useState(false)

  const resolution = useMemo(() => {
    const billNum = clamp(bill, 0, 200000)
    const consumptionNum = parseFloat(consumption)
    const hasConsumption = Number.isFinite(consumptionNum) && consumptionNum > 0
    const effTariff = hasConsumption
      ? clamp(billNum / consumptionNum, ASSUMPTIONS.tariffMin, ASSUMPTIONS.tariffMax)
      : tariff

    const savingsPerKwMonth = unitsPerKw * effTariff
    const recommended = savingsPerKwMonth > 0
      ? clamp(Math.round((billNum / savingsPerKwMonth) * 2) / 2, 1, 10)
      : 3

    const capacityKw = sizeTouched ? size : recommended
    const generationMonthly = capacityKw * unitsPerKw
    const savingsMonthly = generationMonthly * effTariff
    const savingsAnnual = savingsMonthly * 12

    const cost = Math.round((capacityKw * COST_PER_KW) / 1000) * 1000
    const subsidy = subsidyFor(capacityKw)
    const finalCost = Math.max(0, cost - subsidy)

    return {
      hasConsumption,
      effTariff,
      recommended,
      capacityKw,
      generationMonthly,
      savingsMonthly,
      savingsAnnual,
      cost,
      subsidy,
      finalCost,
    }
  }, [bill, consumption, tariff, unitsPerKw, size, sizeTouched])

  const r = resolution

  const outputs = [
    {
      label: 'Estimated Monthly Savings',
      value: fmt(r.savingsMonthly) + ' /month',
      sub: `≈ ${fmt(r.savingsAnnual)} per year (indicative, based on your bill and inputs)`,
      strong: true,
    },
    {
      label: 'Recommended Capacity',
      value: `${r.recommended} kW`,
      sub: `You currently have ${r.capacityKw} kW selected`,
    },
    {
      label: 'Approximate System Cost',
      value: fmt(r.cost),
      sub: 'Estimated cost before subsidy',
    },
    {
      label: 'Estimated Subsidy',
      value: fmt(r.subsidy),
      sub: 'PM Surya Ghar — capped at ₹78,000 (3 kW) per verified rates',
      accent: true,
    },
    {
      label: 'Estimated Final Cost',
      value: fmt(r.finalCost),
      sub: 'Estimated cost after subsidy',
      strong: true,
    },
  ]

  return (
    <section id="calculator" className="bg-primary-900 py-16 sm:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-4 py-1.5 text-sm font-semibold text-accent-300">
            <CalculatorIcon className="h-4 w-4" />
            Savings Calculator
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Estimate Your Solar Savings
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Enter your monthly bill to get an indicative system size, savings and subsidy.
            Based on the verified PM Surya Ghar subsidy table and the ₹1,90,000 3&nbsp;kW figure.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-bold text-primary-900">Your Details</h3>

            <div className="mt-6">
              <div className="flex items-baseline justify-between gap-3">
                <label htmlFor="calc-bill" className="text-sm font-semibold text-ink">
                  Monthly electricity bill
                </label>
                <output htmlFor="calc-bill" className="text-lg font-extrabold tabular-nums text-primary-900">
                  {fmt(bill)}
                </output>
              </div>
              <input
                id="calc-bill"
                type="range"
                min={1000}
                max={50000}
                step={250}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="mt-3 w-full accent-accent-500"
              />
              <div className="mt-1 flex justify-between text-xs text-muted">
                <span>₹1,000</span>
                <span>₹50,000</span>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="calc-consumption" className="text-sm font-semibold text-ink">
                Monthly electricity consumption (units) — optional
              </label>
              <input
                id="calc-consumption"
                type="number"
                min={0}
                max={10000}
                placeholder="e.g. 800"
                value={consumption}
                onChange={(e) => setConsumption(e.target.value)}
                className="mt-2 w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-200"
              />
              <p className="mt-1 text-xs text-muted">
                If provided, your bill ÷ units gives your actual tariff (₹{r.hasConsumption ? r.effTariff.toFixed(2) : '—'}/unit). Leave blank to use the assumption below.
              </p>
            </div>

            {!r.hasConsumption && (
              <div className="mt-6">
                <div className="flex items-baseline justify-between gap-3">
                  <label htmlFor="calc-tariff" className="text-sm font-semibold text-ink">
                    Assumed tariff (₹/unit)
                  </label>
                  <output htmlFor="calc-tariff" className="text-lg font-extrabold tabular-nums text-primary-900">
                    ₹{tariff.toFixed(1)}
                  </output>
                </div>
                <input
                  id="calc-tariff"
                  type="range"
                  min={ASSUMPTIONS.tariffMin}
                  max={ASSUMPTIONS.tariffMax}
                  step={0.5}
                  value={tariff}
                  onChange={(e) => setTariff(Number(e.target.value))}
                  className="mt-3 w-full accent-accent-500"
                />
                <p className="mt-1 text-xs text-muted">Adjustable assumption — set it to your local tariff.</p>
              </div>
            )}

            <div className="mt-6">
              <div className="flex items-baseline justify-between gap-3">
                <label htmlFor="calc-units" className="text-sm font-semibold text-ink">
                  Assumed units generated per installed kW / month
                </label>
                <output htmlFor="calc-units" className="text-lg font-extrabold tabular-nums text-primary-900">
                  {unitsPerKw} units
                </output>
              </div>
              <input
                id="calc-units"
                type="range"
                min={ASSUMPTIONS.unitsMin}
                max={ASSUMPTIONS.unitsMax}
                step={5}
                value={unitsPerKw}
                onChange={(e) => setUnitsPerKw(Number(e.target.value))}
                className="mt-3 w-full accent-accent-500"
              />
              <p className="mt-1 text-xs text-muted">
                Adjustable assumption. Lower values = more conservative estimates.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <label htmlFor="calc-size" className="text-sm font-semibold text-ink">
                    System size
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setSize(r.recommended)
                      setSizeTouched(false)
                    }}
                    className="text-xs font-bold text-accent-600 underline-offset-2 hover:underline"
                  >
                    Use recommended ({r.recommended} kW)
                  </button>
                </div>
                <input
                  id="calc-size"
                  type="range"
                  min={1}
                  max={10}
                  step={0.5}
                  value={r.capacityKw}
                  onChange={(e) => {
                    setSize(Number(e.target.value))
                    setSizeTouched(true)
                  }}
                  className="mt-2 w-full accent-accent-500"
                />
                <p className="mt-1 text-xs text-muted">Recommended based on your bill: {r.recommended} kW.</p>
              </div>
              <output htmlFor="calc-size" className="rounded-xl bg-accent-100 px-4 py-2 text-center text-xl font-extrabold tabular-nums text-accent-800">
                {r.capacityKw} kW
              </output>
            </div>
          </div>

          <div className="card bg-mist">
            <h3 className="text-lg font-bold text-primary-900">Estimated Results</h3>
            <div className="mt-6 flex flex-col gap-4">
              {outputs.map((o) => (
                <div key={o.label} className="rounded-xl bg-white p-4 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{o.label}</p>
                  <p
                    className={`mt-1 text-2xl font-extrabold tabular-nums ${o.accent ? 'text-accent-600' : 'text-primary-900'}`}
                  >
                    {o.value}
                  </p>
                  {o.sub && <p className="mt-1 text-xs leading-relaxed text-muted">{o.sub}</p>}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-accent-100 p-4 text-sm leading-relaxed text-accent-900">
              <p className="font-bold">3 kW baseline (verified):</p>
              <p className="mt-1">
                System total ₹1,90,000 − subsidy ₹78,000 ≈ net ₹1,12,000 — Estimated / Indicative.
              </p>
            </div>

            <div className="mt-4 space-y-2 rounded-xl bg-primary-50 p-4 text-sm leading-relaxed text-primary-800">
              <p className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                All figures are <strong>Estimated / Indicative calculations for planning only</strong> — not an
                official Sky Tech Energy quotation.
              </p>
              <p className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                Cost scales from the verified 3 kW = ₹1,90,000 figure (≈ ₹63,333/kW). Subsidy uses the verified
                PM Surya Ghar rates, capped at ₹78,000; subject to official scheme terms and eligibility.
              </p>
              <p className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                Contact Sky Tech Energy for a precise, site-survey-based quotation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
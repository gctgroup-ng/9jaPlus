export interface StatItem {
  number: string
  label: string
}

export const stats: StatItem[] = [
  { number: '17M+', label: 'Nigerians abroad' },
  { number: '< 30s', label: 'Average top-up speed' },
  { number: '150+', label: 'Supported countries' },
  { number: '99.9%', label: 'Direct route uptime' },
]

export function WhySection() {
  return (
    <section id="why-9ja" className="bg-[#F4FAF6] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#008751]">
              Made for movement
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#005A36] sm:text-6xl">
              Carry your connection with you.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#42715C]">
            Keep your UK, US, or Canadian line alongside 9ja connectivity. Download an eSIM before flying to Lagos or Abuja, no swapping hassle, no missed moments.
          </p>
        </div>

        {/* <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-[#CFE8D9] pt-10 md:grid-cols-4">
          {stats.map(({ number, label }) => (
            <div key={label}>
              <p className="text-4xl font-semibold tracking-tighter text-[#005A36] sm:text-5xl">
                {number}
              </p>
              <p className="mt-3 text-sm text-[#42715C]">{label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

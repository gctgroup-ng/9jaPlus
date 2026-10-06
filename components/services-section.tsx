import { ArrowUpRight, Globe2, PhoneCall, Zap } from 'lucide-react'

export interface Offering {
  icon: React.ComponentType<{ className?: string }>
  eyebrow: string
  title: string
  copy: string
}

export const offerings: Offering[] = [
  {
    icon: Zap,
    eyebrow: 'Instant top-ups',
    title: 'Airtime & data',
    copy: 'Send airtime and data to every major Nigerian network in seconds.',
  },
  {
    icon: Globe2,
    eyebrow: 'Travel without limits',
    title: 'Global eSIMs',
    copy: 'Land connected. Download a digital roaming profile before you fly.',
  },
  {
    icon: PhoneCall,
    eyebrow: 'Clear connection',
    title: 'International calls',
    copy: 'Affordable, premium voice channels that bring home closer.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#008751]">
            Everything you need
          </p>
          <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-[#005A36] sm:text-5xl">
            Your connection to Nigeria, simplified.
          </h2>
        </div>
        <p className="max-w-sm leading-7 text-[#42715C]">
          Thoughtfully built for life between place, and the people who make home feel close.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {offerings.map(({ icon: Icon, eyebrow, title, copy }) => (
          <article
            key={title}
            className="group rounded-[2rem] border border-[#CFE8D9] bg-[#E6F4EC]/60 p-8 transition hover:-translate-y-1 hover:bg-[#E6F4EC]"
          >
            <div className="mb-16 flex size-12 items-center justify-center rounded-2xl bg-[#005A36] text-[#6BE4A4]">
              <Icon className="size-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#008751]">
              {eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#005A36]">
              {title}
            </h3>
            <p className="mt-4 leading-7 text-[#42715C]">{copy}</p>
            <ArrowUpRight className="mt-8 size-5 text-[#008751] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </article>
        ))}
      </div>
    </section>
  )
}

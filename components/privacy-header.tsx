import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

interface PrivacyHeaderProps {
  lastUpdated?: string
}

export function PrivacyHeader({ lastUpdated = 'October 6, 2026' }: Readonly<PrivacyHeaderProps>) {
  return (
    <div className="border-b border-[#CFE8D9]/60 bg-[#E6F4EC]/40 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#008751] transition hover:text-[#005A36]"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to home</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#008751]/30 bg-[#008751]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#008751]">
            <Shield className="size-3.5" />
            Legal
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#005A36] sm:text-5xl lg:text-6xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-base text-[#42715C]">
          Last updated: {lastUpdated}
        </p>
      </div>
    </div>
  )
}

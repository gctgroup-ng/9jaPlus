import Image from 'next/image'
import Link from 'next/link'
import { StoreBadges } from '@/components/store-badges'

export function Footer() {
  return (
    <footer className="bg-[#005A36] px-6 py-10 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[-0.02em]">Take 9jaPlus with you</p>
            <p className="mt-1 text-sm text-white/65">
              eSIMs, airtime, data, and internet calls — right from your phone.
            </p>
          </div>
          <StoreBadges />
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="Back to home" className='bg-[#ffffff] px-3 py-3 rounded-full self-start'>
            <Image
              src="/9japlus-mark.svg"
              alt="9jaPlus by IntarvAS"
              width={180}
              height={100}
              className="h-11 w-auto"
              // brightness-0 invert
            />
          </Link>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/65">
            <span>© 2026 IntarvAS Communications Limited</span>
            <Link href="/privacy" className="transition hover:text-white">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

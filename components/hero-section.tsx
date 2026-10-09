import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-[#005A36] text-white">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pb-32 lg:pt-14">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#008751] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6BE4A4]">
            <span className="size-2 rounded-full bg-[#6BE4A4]" /> Always connected to home
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
            Home is never <span className="text-[#6BE4A4]">far away.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/72">
            Airtime, data, eSIMs, and International calling, unified for Nigerians everywhere. Everywhere you goooo
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-[#1016A8] px-6 py-3.5 font-semibold text-[#ffffff] transition hover:bg-[#1016A8]/50"
            >
              Explore services 
              {<ArrowUpRight className="ml-1 inline size-4" />}
            </a>
            <a
              href="#why-9ja"
              className="rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Why 9jaPlus
            </a>
          </div>
        </div>

        <div className="relative flex min-h-80 items-center justify-center lg:min-h-110">
          <div className="absolute size-65 rounded-full border border-[#6BE4A4]/30 sm:size-95" />
          <div className="absolute size-47.5 rounded-full border border-[#6BE4A4]/20 sm:size-70" />
          <div className="relative flex size-56 rotate-[-8deg] items-center justify-center rounded-[42%] border-2 border-[#6BE4A4] bg-white/70 shadow-[0_0_90px_rgba(107,228,164,.18)] sm:size-72">
            <Image
              src="/logos/9japlus-mark.svg"
              alt="9jaPlus infinity mark"
              width={230}
              height={130}
              className="h-auto w-40 sm:w-52"
              // brightness-0 invert
            />
          </div>
          <p className="absolute bottom-0 right-2 max-w-36 text-right text-xs leading-5 text-white/50 lg:right-8">
            Connecting the diaspora home, one signal at a time.
          </p>
        </div>
      </div>
    </section>
  )
}

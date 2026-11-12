import type { Metadata } from 'next'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GoBackButton } from '@/components/go-back-button'

export const metadata: Metadata = {
  title: '404 - Page Not Found | 9jaPlus by IntarvAS',
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#F4FAF6] text-[#005A36]">
      <Navbar />
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-24 text-center lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#008751]/30 bg-[#008751]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#008751]">
          <span className="size-2 rounded-full bg-[#008751]" /> Error 404
        </span>
        <p className="mt-8 text-8xl font-semibold leading-none tracking-[-0.06em] text-[#005A36] sm:text-9xl">
          4<span className="text-[#008751]">0</span>4
        </p>
        <h1 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md leading-7 text-[#42715C]">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on the line.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GoBackButton />
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#005A36] px-6 py-3.5 font-semibold text-white transition hover:bg-[#008751]"
          >
            <Home className="size-4" />
            Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}


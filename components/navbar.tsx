'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'

const LIGHT_LOGO = '/logos/9japlus-logo.svg'
const DARK_LOGO = '/logos/9japlus-logo-dark.svg'

interface NavbarProps {
  className?: string
}

export function Navbar({ className = '' }: Readonly<NavbarProps>) {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <header className={`relative w-full bg-[#005A36] text-white ${className}`}>
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-size-[72px_72px]" />
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="9jaPlus home" className="flex items-center">
          <Image
            src={darkMode ? DARK_LOGO : LIGHT_LOGO}
            alt="9jaPlus by IntarvAS"
            width={160}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-white/75 md:flex">
          <Link href="/#services" className="transition hover:text-white">
            Services
          </Link>
          <Link href="/#why-9ja" className="transition hover:text-white">
            Why 9jaPlus
          </Link>
          <Link href="/privacy" className="transition hover:text-white">
            Privacy
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10 cursor-pointer"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            href="/#services"
            className="rounded-full bg-[#E6F4EC] px-5 py-2.5 text-sm font-semibold text-[#005A36] transition hover:bg-white"
          >
            Get connected <ArrowUpRight className="ml-1 inline size-4" />
          </Link>
        </div>
      </nav>
    </header>
  )
}

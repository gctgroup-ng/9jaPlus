export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.esim.invas.app'

// TODO: Replace with the official Apple App Store listing URL (https://apps.apple.com/...).
// The URL supplied for the App Store currently points to the Google Play listing.
export const APP_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.esim.invas.app'

function AppleLogo({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  )
}

function GooglePlayLogo({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#00A0FF" d="M3.6 1.8 13.4 11.9 3.6 22c-.3-.2-.5-.6-.5-1.1V3c0-.5.2-.9.5-1.2Z" />
      <path fill="#34A853" d="M3.6 1.8 13.4 11.9l3.2-3.2L5 2c-.5-.3-1-.4-1.4-.2Z" />
      <path fill="#EA4335" d="M3.6 22c.4.2.9.1 1.4-.2l11.6-6.7-3.2-3.2L3.6 22Z" />
      <path fill="#FBBC04" d="m16.6 8.7-3.2 3.2 3.2 3.2 3.7-2.1c1-.6 1-1.6 0-2.2l-3.7-2.1Z" />
    </svg>
  )
}

const badgeClass =
  'inline-flex h-14 min-w-[10.5rem] items-center gap-3 rounded-xl border border-white/25 bg-black px-4 text-white transition hover:-translate-y-0.5 hover:border-[#6BE4A4]/70 hover:shadow-[0_8px_30px_rgba(107,228,164,.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6BE4A4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#005A36]'

interface StoreBadgesProps {
  className?: string
}

export function StoreBadges({ className = '' }: Readonly<StoreBadgesProps>) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download 9jaPlus on the App Store"
        className={badgeClass}
      >
        <AppleLogo className="size-7 shrink-0" />
        <span className="flex flex-col leading-none text-left">
          <span className="text-[0.65rem] font-medium tracking-wide">Download on the</span>
          <span className="mt-1 text-lg font-semibold tracking-[-0.01em]">App Store</span>
        </span>
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get 9jaPlus on Google Play"
        className={badgeClass}
      >
        <GooglePlayLogo className="size-7 shrink-0" />
        <span className="flex flex-col leading-none text-left">
          <span className="text-[0.65rem] font-medium uppercase tracking-wide">Get it on</span>
          <span className="mt-1 text-lg font-semibold tracking-[-0.01em]">Google Play</span>
        </span>
      </a>
    </div>
  )
}


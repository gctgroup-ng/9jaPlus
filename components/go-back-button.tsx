'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export function GoBackButton() {
  const router = useRouter()

  const handleBack = () => {
    if (globalThis.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#005A36]/25 px-6 py-3.5 font-semibold text-[#005A36] transition hover:bg-[#005A36]/5"
    >
      <ArrowLeft className="size-4" />
      Go back
    </button>
  )
}


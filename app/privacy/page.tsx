import { Navbar } from '@/components/navbar'
import { PrivacyHeader } from '@/components/privacy-header'
import { PrivacyContent } from '@/components/privacy-content'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F4FAF6] text-[#005A36] flex flex-col justify-between">
      <div>
        <Navbar />
        <PrivacyHeader />
        <PrivacyContent />
      </div>
      <Footer />
    </main>
  )
}

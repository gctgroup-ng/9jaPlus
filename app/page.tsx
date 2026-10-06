import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { WhySection } from '@/components/why-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen max-w-8xl overflow-hidden bg-[#E6F4EC] text-[#005A36]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhySection />
      <Footer />
    </main>
  )
}

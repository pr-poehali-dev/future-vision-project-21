import { useState } from "react"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { LeadModal } from "@/components/sections/insights-section"

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <HeroSection onOpenModal={() => setModalOpen(true)} />
        <ManifestoSection />
        <FeaturesSection />
        <ShowcaseSection />
        <CarouselSection />
        <PricingSection onOpenModal={() => setModalOpen(true)} />
        <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </main>
    </LenisProvider>
  )
}

export default Index

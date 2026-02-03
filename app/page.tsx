import Header from "@/components/Header"
import Hero from "./sections/Hero"
import AnimatedGradient from "./sections/AnimatedGradient"
import LogosStrip from "./sections/LogosStrip"
import PainPoints from "./sections/PainPoints"
import WhyChooseUs from "./sections/WhyChooseUs"
import FeaturesGrid from "./sections/FeaturesGrid"
import DashboardParallax from "./sections/DashboardParallax"
import Testimonials from "./sections/Testimonials"
import Pricing from "./sections/Pricing"
import CTAUpgrade from "./sections/CTAUpgrade"
import Footer from "./sections/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimatedGradient />
        <LogosStrip />
        <PainPoints />
        <WhyChooseUs />
        <FeaturesGrid />
        <DashboardParallax />
        <Testimonials />
        <Pricing />
        <CTAUpgrade />
      </main>
      <Footer />
    </>
  )
}

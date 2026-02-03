"use client"
import Image from "next/image"
import Container from "@/components/ui/Container"

export default function AnimatedGradient() {
  return (
    <section className="relative w-full h-auto md:h-96 bg-white mt-0 md:-mt-8 pb-8 md:pb-0">
      <div className="relative z-20 animate-fade-in-delay-2">
        <Container>
          <div className="relative mx-auto max-w-6xl">
            {/* Mobile Image */}
            <Image
              src="/images/hero-img-mobile.png"
              alt="BookingLedger Dashboard - Leads Management Interface"
              width={1400}
              height={800}
              className="w-full h-auto rounded-lg md:hidden"
              priority
            />
            {/* Desktop Image */}
            <Image
              src="/images/dashboard.webp"
              alt="BookingLedger Dashboard - Leads Management Interface"
              width={1400}
              height={800}
              className="w-full h-auto rounded-lg hidden md:block"
              priority
            />
          </div>
        </Container>
      </div>
      {/* Animated gradient circles */}
      <div className="absolute inset-0">
        {/* Pink/Peach circle - top left */}
        <div
          className="hidden md:block absolute w-96 h-96 rounded-full blur-3xl opacity-50 animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 160, 180, 0.8) 0%, rgba(255, 200, 170, 0.5) 50%, transparent 70%)",
            top: "-10%",
            left: "5%",
          }}
        />

        {/* Light yellow circle - top right */}
        <div
          className="hidden md:block absolute w-80 h-80 rounded-full blur-3xl opacity-45 animate-float-medium"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 160, 180, 0.8) 0%, rgba(255, 200, 170, 0.5) 50%, transparent 70%)",
            top: "20%",
            right: "5%",
          }}
        />

        {/* Peach circle - bottom left */}
        <div
          className="hidden md:block absolute w-72 h-72 rounded-full blur-3xl opacity-40 animate-float-fast"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 200, 160, 0.8) 0%, rgba(255, 220, 180, 0.5) 50%, transparent 70%)",
            bottom: "10%",
            left: "5%",
          }}
        />

        {/* Light pink circle - center */}
        <div
          className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full blur-3xl opacity-45 animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 180, 190, 0.7) 0%, rgba(255, 170, 180, 0.5) 50%, transparent 70%)",
            top: "40%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center overflow-hidden">
        <div className="animate-scroll-rtl flex">
          <img
            src="/images/line-curve.svg"
            alt=""
            className="w-full object-cover flex-shrink-0 inline-block"
            aria-hidden="false"
          />
          <img
            src="/images/line-curve.svg"
            alt=""
            className="w-full object-cover flex-shrink-0 inline-block"
            aria-hidden="false"
          />
        </div>
      </div>
    </section>
  )
}

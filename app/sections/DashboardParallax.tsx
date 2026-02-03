"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function DashboardParallax() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return

      const scrolled = window.scrollY
      const rect = imageRef.current.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const scrollProgress = (scrolled - elementTop + windowHeight) / (elementHeight + windowHeight)
        const parallaxOffset = (scrolled - elementTop + windowHeight) * 0.3
        const scale = 1 + scrollProgress * 0.05

        imageRef.current.style.transform = `translateY(${parallaxOffset}px) scale(${scale})`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative pb-16 md:pb-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFE5D0]/40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={imageRef}
          className="relative w-full max-w-7xl mx-auto transition-transform duration-100 ease-out h-[350px] md:h-[450px] overflow-hidden"
          style={{ willChange: "transform" }}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Image
            src="/images/tilt-template.webp"
            alt="Dashboard interface preview"
            width={1400}
            height={600}
            className="w-full h-auto object-cover object-top"
            style={{ minHeight: "120%" }}
            priority
          />
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rachel Kim",
      title: "CEO, Travel Agency, ABC",
      image: "/images/testimonial1.webp",
      text: "BookingLedger replaced a patchwork of spreadsheets, emails, and forms. Now our whole pipeline—leads, clients, bookings, payments—is visible in one place. It saves us hours every week.",
      rating: 5,
    },
    {
      name: "Daniel K.",
      title: "Solo Agent",
      image: "/images/testimonial2.webp",
      text: "As a solo agent, I used to struggle keeping track of reservations and commissions. With BookingLedger, I finally have a clear system. I feels like having an assistant.",
      rating: 5,
    },
    {
      name: "Priya V",
      title: "GM, Travel Agency, XYZ",
      image: "/images/testimonial3.webp",
      text: "Our managers can see exactly how agents are performing, what revenue is coming in, and where costs sit—all without digging. BookingLedger gave us both control and confidence.",
      rating: 5,
    },
  ]

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  const [currentIndex, setCurrentIndex] = useState(testimonials.length)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(testimonials.length)
      }, 500)
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentIndex, testimonials.length])

  const handleDotClick = (index: number) => {
    setIsTransitioning(true)
    setCurrentIndex(testimonials.length + index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const getTransform = () => {
    return `translateX(calc(-${currentIndex * 100}% / 3 - ${currentIndex * 8}px))`
  }

  return (
    <section className="py-16 md:py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-[55px] font-heading text-center mb-12 md:mb-16 leading-tight"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          We Love Our <br />
          <span className="bg-[#FFCFBD] px-2 rounded inline-block relative border border-dashed border-[rgba(0,0,0,0.3)] rounded-2xl">
            Happy Customers
          </span>
        </h2>

        <div
          className="relative max-w-7xl mx-auto mb-8"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="overflow-hidden">
            <div
              className={`flex gap-6 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{
                transform: getTransform(),
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4 mb-4 font-heading">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-[#7E7E7E]">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-[#4A4A4A] mb-4 leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-[#FDB022] text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-[#7E7E7E]">{testimonial.rating}/5 Stars on Google</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex % testimonials.length === index ? "bg-[#FF8C42] w-8" : "bg-[#D9D9D9] hover:bg-[#B8B8B8]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

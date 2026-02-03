"use client"

import { useState } from "react"
import Image from "next/image"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "AGENT",
      monthlyPrice: 40,
      annualPrice: 400, // Updated to realistic annual price ($40 × 12 months with ~17% discount)
      period: "per month",
      annualPeriod: "per year",
      icon: "/images/pricing-agent-icon.svg",
      iconPosition: "left",
      features: ["1 agent", "Manage leads & Reservations", "Create Custom Forms & Emails", "Task Management"],
      cta: "Start Free Trial",
      ctaImage: "/images/CTA-Button-yellow.svg",
      bookDemo: true,
      bgColor: "bg-white",
      roundedClass: "rounded-l-2xl",
    },
    {
      name: "SMALL AGENCY",
      monthlyPrice: 60,
      annualPrice: 600, // Updated to realistic annual price ($60 × 12 months with ~17% discount)
      period: "per month, per agent",
      annualPeriod: "per year, per agent",
      icon: null,
      popular: true,
      features: [
        "2 to 5 agents",
        "1 admin",
        'All "Agent features"',
        "+ Commission splitting, reports, administrator features",
      ],
      cta: "Start Free Trial",
      ctaImage: "/images/CTA-Button-orange.svg",
      bookDemo: true,
      bgColor: "bg-[#F8F8F8]",
      roundedClass: "rounded-xl",
    },
    {
      name: "LARGE AGENCY",
      monthlyPrice: 69,
      annualPrice: 690, // Updated to realistic annual price ($69 × 12 months with ~17% discount)
      period: "per month",
      annualPeriod: "per year",
      icon: "/images/pricing-large-agency-icon.svg",
      iconPosition: "right",
      features: [
        "Unlimited agents (min 6)",
        'All "Small Agency" and Agent Features',
        'All "Agent" Features',
        'All "Small Agency" Features',
        "All 60 features",
      ],
      cta: "Start Free Trial",
      ctaImage: "/images/CTA-Button-grey.svg",
      bookDemo: true,
      bgColor: "bg-white",
      roundedClass: "rounded-r-2xl",
    },
  ]

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_77%,rgba(242,242,242,1)_100%)] border-t border-[#E6E6E6]"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-[55px] font-heading text-center mb-8 md:mb-12 leading-tight"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Find The Right Plan
          <br />
          For You Needs
        </h2>

        <div
          className="flex items-center justify-center gap-4 mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <span className={`text-base font-medium ${!isAnnual ? "text-black" : "text-[#7E7E7E]"}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle pricing period"
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-base font-medium ${isAnnual ? "text-black" : "text-[#7E7E7E]"}`}>Annually</span>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 items-center gap-4 md:gap-0">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${plan.bgColor} ${plan.roundedClass} ${
                  index === 1 ? "py-8 md:py-12 px-6 md:px-8 md:scale-105 z-20" : "py-8 md:py-10 px-6 md:px-8 z-10"
                } border border-[#EDEDED] hover:shadow-lg transition-all`}
                data-aos={index === 1 ? "zoom-in" : "fade-up"}
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD6BB] text-xs font-semibold px-4 py-4 rounded-full flex items-center gap-1">
                    <span>
                      <Image src="/images/pricing-most-popular-icon.svg" alt="Most Popular" width={16} height={16} />
                    </span>{" "}
                    MOST POPULAR
                  </div>
                )}

                {plan.icon && (
                  <div className={`absolute top-6 ${plan.iconPosition === "right" ? "right-6" : "left-6"} w-10 h-10`}>
                    <Image
                      src={plan.icon || "/placeholder.svg"}
                      alt={`${plan.name} icon`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                )}

                <div className="text-center mb-4 md:mb-6 mt-4 md:mt-8">
                  <p className="text-[#7E7E7E] text-sm font-medium mb-2 md:mb-4">{plan.name}</p>
                  <div className="flex items-baseline justify-center gap-1 mb-1 md:mb-2">
                    <span className="text-4xl md:text-5xl font-heading">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  </div>
                  <p className="text-sm text-[#7E7E7E]">{isAnnual ? plan.annualPeriod : plan.period}</p>
                </div>

                <ul className="mb-4 md:mb-8 md:min-h-[220px]">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`text-sm text-[#4A4A4A] leading-relaxed text-center py-2 md:py-3 ${
                        i > 0 ? "border-t border-[#EDEDED]" : ""
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 md:space-y-3">
                  <button className="w-full relative h-12 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                    <Image src={plan.ctaImage || "/placeholder.svg"} alt={plan.cta} fill className="object-contain" />
                  </button>
                  {plan.bookDemo && (
                    <button className="w-full text-sm text-[#7E7E7E] hover:text-black transition-colors cursor-pointer">
                      Book A Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

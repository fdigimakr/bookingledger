"use client"

import Image from "next/image"
import { useState } from "react"

export default function FeaturesGrid() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const features = [
    {
      icon: "/images/card-ico1.svg",
      title: "CRM For Leads",
      description: "Kanban + List views. Quotes, Follow Up, task reminders & priority flags.",
    },
    {
      icon: "/images/card-ico2.svg",
      title: "Reservations",
      description: "Create bookings, track costs, commissions, traveler info, and payment dates.",
    },
    {
      icon: "/images/card-ico3.svg",
      title: "Commissions & Reporting",
      description: "Full breakdowns per agent, vendor, reservation. See what you've earned and what's pending.",
    },
    {
      icon: "/images/card-ico4.svg",
      title: "Client Communications",
      description: "Secure forms (waivers, authorizations), branded client-facing emails.",
    },
    {
      icon: "/images/card-ico5.svg",
      title: "Governance & Audit Tools",
      description: "Invite agents, approvals, track every action; ideal for agencies that need compliance & oversight.",
    },
    {
      icon: "/images/card-ico6.svg",
      title: "To-Do Management",
      description: "View and manage all your tasks. Prioritized, dated, and connected to leads and bookings.",
    },
    {
      icon: "/images/card-ico7.svg",
      title: "Bulk Action",
      description: "Send emails or update multiple bookings in seconds.",
    },
    {
      icon: "/images/card-ico8.svg",
      title: "Easy Reassign",
      description: "Move leads or tasks between your agents in a few clicks.",
    },
    {
      icon: "/images/card-ico9.svg",
      title: "Vendor Vendor Catalog",
      description: "Organize and link your top suppliers to bookings.",
    },
    {
      icon: "/images/card-ico10.svg",
      title: "Quick Lookup",
      description: "Find any lead, client, reservation, or task instantly. Save hours every week!",
    },
    {
      icon: "/images/card-ico11.svg",
      title: "Smart Notifications",
      description: "Stay on top of bookings, forms, and more. Get real-time updates in one activity feed.",
    },
    {
      icon: "/images/card-ico12.svg",
      title: "Custom Templates",
      description: "Build and reuse templates for emails and forms. Stay fast and on-brand every time.",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-background -scroll-mt-[-40px] md:scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="700">
          <h2 className="text-3xl md:text-[55px] font-heading mb-4 leading-tight">
            All You Need To{" "}
            <span className="bg-[#DFDFDF] px-2 rounded inline-block relative border border-dashed border-[rgba(0,0,0,0.3)] rounded-2xl">
              Manage Your Agency
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#F5E6D3] -z-10"></span>
            </span>
          </h2>
          <p className="text-[#666666] text-sm md:text-base mt-6">
            Leads, bookings, commissions, suppliers and more.
            <br />
            Manage your whole business from one place.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 transition-all duration-700 ease-in-out"
            style={{
              maxHeight: isExpanded ? '2000px' : '400px'
            }}
          >
            {features.map((feature, index) => {
              // Calculate if this item should have a bottom border
              const totalFeatures = isExpanded ? features.length : 6
              const isInCompleteRow = index < totalFeatures - (totalFeatures % 3 || 3)
              const isHidden = !isExpanded && index >= 6
              
              return (
                <div
                  key={index}
                  className={`flex flex-col items-start gap-4 h-full p-8 transition-all duration-300 ${
                    isInCompleteRow ? "border-b border-gray-200 hover:border-gray-400" : ""
                  } ${isHidden ? 'opacity-0' : 'opacity-100'}`}
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={index < 6 ? index * 80 : 0}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image
                      src={feature.icon || "/placeholder.svg"}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />
                  </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-[#2F2F2F] mb-2">{feature.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{feature.description}</p>
                </div>
                </div>
              )
            })}
          </div>
        </div>

        {!isExpanded && (
          <div className="text-center mt-12" data-aos="fade-up" data-aos-duration="700">
            <button 
              onClick={() => setIsExpanded(true)}
              className="px-8 py-3 border-2 border-[#2F2F2F] text-[#2F2F2F] font-medium hover:bg-[#2F2F2F] hover:text-white transition-colors rounded-xl cursor-pointer"
            >
              More Features
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

import Image from "next/image"

export default function WhyChooseUs() {
  const benefits = [
    {
      image: "/images/why-choose-us-1.webp",
      label: "FOR AGENCIES",
      description: "Total control & visibility across team performance, revenue, commissions.",
    },
    {
      image: "/images/why-choose-us-2.webp",
      label: "FOR AGENTS",
      description: "Simplified to-do's, templates, tasks; know what to follow up & when.",
    },
    {
      image: "/images/why-choose-us-3.webp",
      label: "HAPPY CUSTOMERS",
      description: "Branded emails, secure forms; feel confident & informed every step.",
    },
  ]

  const animations = ["fade-right", "fade-up", "fade-left"]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-[55px] font-heading text-center mb-12 md:mb-16 leading-tight"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] rounded-2xl p-6 border border-[#EDEDED] hover:shadow-md transition-shadow"
              data-aos={animations[index]}
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <div className="relative aspect-[4/3] bg-white rounded-xl overflow-hidden mb-6">
                <Image src={benefit.image || "/placeholder.svg"} alt={benefit.label} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#7E7E7E] uppercase tracking-wide mb-3">{benefit.label}</h3>
                <p className="text-[#2F2F2F] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

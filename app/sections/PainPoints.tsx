import Image from "next/image"

export default function PainPoints() {
  const painPoints = [
    {
      icon: "/images/pipeline-icon.svg",
      title: "PIPELINE",
      description: (
        <>
          Leads falling through the cracks due to lack of <strong>central pipeline</strong>.
        </>
      ),
    },
    {
      icon: "/images/tracking-icon.svg",
      title: "TRACKING",
      description: (
        <>
          We solve hard to track <strong>agent performance</strong>, <strong>commissions</strong>, or{" "}
          <strong>who owes what</strong>.
        </>
      ),
    },
    {
      icon: "/images/admin-icon.svg",
      title: "ADMIN",
      description: (
        <>
          We structure, secure and backup with <strong>automatic admin documentation</strong>
        </>
      ),
    },
    {
      icon: "/images/clinet-icon.svg",
      title: "CLIENT SATISFACTION",
      description: (
        <>
          We resolve client frustration by <strong>eliminating delay</strong> and{" "}
          <strong>improving communication</strong>
        </>
      ),
    },
    {
      icon: "/images/high-level-icon.svg",
      title: "HIGH-LEVEL VIEW",
      description: (
        <>
          We give decision-makers a <strong>clear view into bookings, revenues, costs and compliance</strong>
        </>
      ),
    },
    {
      icon: "/images/data-icon.svg",
      title: "DATA",
      description: (
        <>
          We centralise data <strong>solving scattered data and lack of single source of truth</strong>
        </>
      ),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-[55px] font-heading text-center mb-12 md:mb-16 leading-tight"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          What Most Agencies{" "}
          <span className="bg-[#F1E2C1] px-2 rounded border border-dashed border-[rgba(0,0,0,0.3)] rounded-2xl">
            Struggle With
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] rounded-2xl p-6 border border-[#EDEDED] hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start gap-3 mb-3">
                <Image
                  src={point.icon || "/placeholder.svg"}
                  alt={point.title}
                  width={20}
                  height={20}
                  className="mt-0.5"
                />
                <h3 className="text-base font-semibold text-[#7E7E7E] uppercase tracking-wide">{point.title}</h3>
              </div>
              <p className="text-[#2F2F2F] text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

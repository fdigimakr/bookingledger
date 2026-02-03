import Container from "@/components/ui/Container"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 md:py-32 bg-white pb-0 md:pt-0 pt-10 md:pt-16"
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] mb-6 text-balance leading-[1.1] animate-fade-in"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span style={{ fontFamily: "EditorsNote, serif", fontWeight: 300 }}>
              Run Your Whole Travel Agency
            </span>{" "}
            <span style={{ fontFamily: "EditorsNote, serif", fontWeight: 600 }}>
              With 1 Tool
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-foreground mb-10 max-w-2xl mx-auto text-pretty animate-fade-in-delay"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            A secure hub for travel professionals to manage leads, customers, bookings, and fulfillment.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col gap-4 justify-center items-center animate-fade-in-delay-2 mb-12 md:mb-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <Link href="/signup" className="relative group cursor-pointer inline-block">
              <Image
                src="/images/CTA-Button-orange.svg"
                alt="Start Free Trial"
                width={200}
                height={56}
                className="transition-transform group-hover:scale-105"
              />
            </Link>
            <a 
              href="https://cal.com/flomotive/booking-ledger-demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base text-foreground hover:text-muted-foreground transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Book A Demo
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

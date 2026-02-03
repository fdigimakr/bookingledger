import Image from "next/image"

export default function CTAUpgrade() {
  return (
    <section className="pt-16 md:pt-24 bg-white">
      <div className="container mx-auto px-4 relative z-20">
        <div className="bg-gradient-to-b from-[#FFE9DA] to-[#FFD6BB] rounded-3xl overflow-visible">
          <div className="grid lg:grid-cols-[7fr_5fr] gap-8 items-center">
            {/* Left content */}
            <div className="p-8 md:p-12 lg:p-16 lg:col-span-1 col-span-full text-center lg:text-left" data-aos="fade-right" data-aos-duration="800">
              <h2 className="text-4xl md:text-[64px] font-heading mb-4 leading-tight tracking-[-1.5px] md:tracking-normal">
                Ready to upgrade
                <br />
                your operations?
              </h2>
              <p className="text-[#4A4A4A] mb-8 text-lg">
                Bring order, visibility & revenue clarity to your travel business.
              </p>
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                <button className="relative w-48 h-22 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src="/images/CTA-Button-grey.svg"
                    alt="Start Free Trial"
                    fill
                    className="object-contain object-center lg:object-left"
                  />
                </button>
                <button className="block text-[#2F2F2F]/80 hover:text-[#2F2F2F] transition-colors cursor-pointer -mt-5 xl:pl-3">
                  Book A Demo
                </button>
              </div>
            </div>

            {/* Right image */}
            <div className="relative h-full xl:h-[120%] xl:-mt-[20%] self-end hidden lg:block" data-aos="fade-left" data-aos-duration="800">
              <Image
                src="/images/bottom-section-lady.webp"
                alt="Professional woman"
                fill
                className="object-cover object-left-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

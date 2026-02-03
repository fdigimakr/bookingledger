import Image from 'next/image'

export default function LogosStrip() {
  const uniqueLogos = [
    { src: '/images/sponsor-logo1.webp', alt: 'Partner Logo 1' },
    { src: '/images/sponsor-logo2.webp', alt: 'Partner Logo 2' },
    { src: '/images/sponsor-logo3.webp', alt: 'Partner Logo 3' },
    { src: '/images/sponsor-logo4.webp', alt: 'Partner Logo 4' },
  ]

  // We render multiple identical groups to ensure full coverage on wide screens
  // and translate the whole track by -50% for seamless looping.

  return (
    <section
      className="pb-12 md:py-12 bg-white overflow-hidden mt-4 md:mt-28 relative z-50"
      aria-label="Partner logos"
    >
      <div className="relative w-full">
        <div className="flex animate-scroll-logos flex-nowrap items-center gap-12 md:gap-20 w-max">
          {/* Group 1 */}
          {uniqueLogos.map((logo, index) => (
            <div key={`group1-${index}`} className="shrink-0 px-4">
              <Image
                src={logo.src || '/placeholder.svg'}
                alt={logo.alt}
                width={180}
                height={60}
                className="h-8 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
          {/* Group 2 (duplicate for seamless loop) */}
          {uniqueLogos.map((logo, index) => (
            <div key={`group2-${index}`} className="shrink-0 px-4" aria-hidden="true">
              <Image
                src={logo.src || '/placeholder.svg'}
                alt={logo.alt}
                width={180}
                height={60}
                className="h-8 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
          {/* Group 3 (extra duplicate for wide screens) */}
          {uniqueLogos.map((logo, index) => (
            <div key={`group3-${index}`} className="shrink-0 px-4" aria-hidden="true">
              <Image
                src={logo.src || '/placeholder.svg'}
                alt={logo.alt}
                width={180}
                height={60}
                className="h-8 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
          {/* Group 4 (extra duplicate for wide screens) */}
          {uniqueLogos.map((logo, index) => (
            <div key={`group4-${index}`} className="shrink-0 px-4" aria-hidden="true">
              <Image
                src={logo.src || '/placeholder.svg'}
                alt={logo.alt}
                width={180}
                height={60}
                className="h-8 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

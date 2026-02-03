import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="-mt-[180px] py-12 bg-[#FBF7F3] pt-[248px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Left - Logo and description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.svg" alt="BookingLedger" width={210} height={40} />
            </div>
            <p className="text-sm text-[#7E7E7E] leading-relaxed">
              Built for travel agencies and solo agents who need clarity, not clutter—giving you control, visibility,
              and peace of mind.
            </p>
          </div>

          {/* Middle - Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-[#7E7E7E] hover:text-black transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm text-[#7E7E7E] hover:text-black transition-colors cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-[#7E7E7E] hover:text-black transition-colors cursor-pointer">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+1123456789"
                  className="text-sm text-[#7E7E7E] hover:text-black transition-colors cursor-pointer"
                >
                  +1 123 456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@email.com"
                  className="text-sm text-[#7E7E7E] hover:text-black transition-colors cursor-pointer"
                >
                  contact@email.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom - Copyright and Privacy */}
        <div className="border-t border-[#EDEDED] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-[#7E7E7E]">© 2025 BookingLedger. All Rights Reserved</p>
          <a href="#" className="text-sm text-[#7E7E7E] hover:text-black transition-colors cursor-pointer">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

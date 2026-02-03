"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Container from "./ui/Container"
import Button from "./ui/Button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    
    setTimeout(() => {
      // Special case for home - scroll to top
      if (targetId === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        return
      }
      
      const element = document.querySelector(targetId)
      if (element) {
        const headerHeight = 80 // Height of sticky header (h-20 = 80px)
        const additionalOffset = 200 // Additional scroll offset for mobile
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - additionalOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <header className="sticky top-0 z-[100] w-full bg-white border-b border-border">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image src="/images/logo.svg" alt="BookingLedger" width={180} height={40} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="text-base text-[#3D3D3D] hover:text-[#1F1F1F] transition-colors cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, '#home')}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-base text-[#3D3D3D] hover:text-[#1F1F1F] transition-colors cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, '#features')}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-base text-[#3D3D3D] hover:text-[#1F1F1F] transition-colors cursor-pointer"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/signup">
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full px-6 hover:bg-gradient-to-b hover:from-white hover:to-orange-50 transition-all duration-300 cursor-pointer"
              >
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full px-6 hover:bg-gradient-to-b hover:from-white hover:to-orange-50 transition-all duration-300 cursor-pointer"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 py-6 border-t border-border">
            <Link
              href="#home"
              className="text-base text-[#3D3D3D] hover:text-[#1F1F1F] transition-colors cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, '#home')}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-base text-[#3D3D3D] hover:text-[#1F1F1F] transition-colors cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, '#features')}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-base text-[#3D3D3D] hover:text-[#1F1F1F] transition-colors cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, '#pricing')}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-base text-[#3D3D3D] hover:text-[#1F1F1F] transition-colors cursor-pointer"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full rounded-full hover:bg-gradient-to-b hover:from-white hover:to-orange-50 transition-all duration-300 cursor-pointer"
                >
                  Sign Up
                </Button>
              </Link>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full rounded-full hover:bg-gradient-to-b hover:from-white hover:to-orange-50 transition-all duration-300 cursor-pointer"
                >
                  Login
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}

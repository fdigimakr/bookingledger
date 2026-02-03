"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Container from "@/components/ui/Container"
import Header from "@/components/Header"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    plan: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match" })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: "success", text: "Our team will be in touch to finalize and integrate your team into BookingLedger within 48 hours." })
        setFormData({ name: "", email: "", password: "", confirmPassword: "", plan: "" })
      } else {
        setMessage({ type: "error", text: data.error || "Something went wrong. Please try again." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
        <Container>
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.svg" alt="BookingLedger" width={180} height={40} priority />
            </Link>
          </div>

          {/* Sign Up Form */}
          <div className="bg-white border border-[#EDEDED] rounded-2xl p-8 shadow-sm">
            <h1 className="text-3xl font-heading mb-2 text-center">Create an Account</h1>
            <p className="text-[#7E7E7E] text-sm text-center mb-8">
              Start managing your travel agency today
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2F2F2F] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EDEDED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD6BB] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2F2F2F] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EDEDED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD6BB] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-[#2F2F2F] mb-2">
                  Select Plan
                </label>
                <select
                  id="plan"
                  required
                  value={formData.plan}
                  onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EDEDED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD6BB] focus:border-transparent transition-all bg-white"
                >
                  <option value="">Choose a plan</option>
                  <option value="Agent">Agent</option>
                  <option value="Small Agency">Small Agency</option>
                  <option value="Large Agency">Large Agency</option>
                </select>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#2F2F2F] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EDEDED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD6BB] focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#2F2F2F] mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EDEDED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD6BB] focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              {message && (
                <div
                  className={`p-4 rounded-lg ${
                    message.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2F2F2F] text-white py-3 rounded-lg font-medium hover:bg-[#1F1F1F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#7E7E7E]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#2F2F2F] hover:underline font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

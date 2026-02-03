"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Container from "@/components/ui/Container"
import Header from "@/components/Header"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotEmail, setForgotEmail] = useState("")
  const [forgotMessage, setForgotMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // This will never happen since login always fails
        window.location.href = "/dashboard"
      } else {
        setError(data.error || "Invalid email or password")
      }
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setForgotMessage(null)

    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      })

      const data = await response.json()

      if (response.ok) {
        setForgotMessage({ type: "success", text: "If an account exists, you'll receive password reset instructions." })
      } else {
        setForgotMessage({ type: "error", text: data.error || "Email not found" })
      }
    } catch (error) {
      setForgotMessage({ type: "error", text: "Email not found" })
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

          {/* Login Form */}
          {!showForgotPassword ? (
            <div className="bg-white border border-[#EDEDED] rounded-2xl p-8 shadow-sm">
              <h1 className="text-3xl font-heading mb-2 text-center">Welcome Back</h1>
              <p className="text-[#7E7E7E] text-sm text-center mb-8">
                Sign in to your BookingLedger account
              </p>

              <form onSubmit={handleLogin} className="space-y-6">
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 text-[#2F2F2F] border-[#EDEDED] rounded focus:ring-[#FFD6BB]"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-[#7E7E7E]">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-[#2F2F2F] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                {error && (
                  <div className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2F2F2F] text-white py-3 rounded-lg font-medium hover:bg-[#1F1F1F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-[#7E7E7E]">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#2F2F2F] hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          ) : (
            <div className="bg-white border border-[#EDEDED] rounded-2xl p-8 shadow-sm">
              <h1 className="text-3xl font-heading mb-2 text-center">Reset Password</h1>
              <p className="text-[#7E7E7E] text-sm text-center mb-8">
                Enter your email address and we'll send you a link to reset your password
              </p>

              <form onSubmit={handleForgotPassword} className="space-y-6">
                <div>
                  <label htmlFor="forgotEmail" className="block text-sm font-medium text-[#2F2F2F] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="forgotEmail"
                    required
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-[#EDEDED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD6BB] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {forgotMessage && (
                  <div
                    className={`p-4 rounded-lg ${
                      forgotMessage.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {forgotMessage.text}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#2F2F2F] text-white py-3 rounded-lg font-medium hover:bg-[#1F1F1F] transition-colors"
                >
                  Send Reset Link
                </button>
              </form>

              <button
                type="button"
                onClick={() => {
                  setShowForgotPassword(false)
                  setForgotEmail("")
                  setForgotMessage(null)
                }}
                className="mt-4 w-full text-sm text-[#2F2F2F] hover:underline"
              >
                Back to login
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
    </>
  )
}

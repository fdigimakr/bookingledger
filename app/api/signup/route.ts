import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password, plan } = body

    if (!name || !email || !password || !plan) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Send email to fred@flomotive.com
    // In production, you would use an email service like Resend, SendGrid, etc.
    const emailContent = `
New Signup:
Name: ${name}
Email: ${email}
Plan: ${plan}
Password: ${password}
Timestamp: ${new Date().toISOString()}
    `.trim()

    // For now, we'll log it. In production, integrate with an email service:
    // await resend.emails.send({
    //   from: 'noreply@bookingledger.com',
    //   to: 'fred@flomotive.com',
    //   subject: 'New BookingLedger Signup',
    //   text: emailContent,
    // })

    console.log("New signup email would be sent to fred@flomotive.com:", emailContent)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      { message: "Sign up successful! Check your email for confirmation." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}

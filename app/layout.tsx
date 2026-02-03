import type React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Vo AI - Run Your Whole Travel Agency With 1 Tool',
  description:
    'All-in-one travel agency management platform. Streamline operations, manage clients, and grow your business with powerful tools designed for agencies.',
  keywords: ['travel agency', 'agency management', 'travel CRM', 'booking management'],
  authors: [{ name: 'Vo AI' }],
  icons: {
    icon: '/images/favicon.svg',
    shortcut: '/images/favicon.svg',
    apple: '/images/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://voai.com',
    title: 'Vo AI - Run Your Whole Travel Agency With 1 Tool',
    description:
      'All-in-one travel agency management platform. Streamline operations, manage clients, and grow your business.',
    siteName: 'Vo AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vo AI - Run Your Whole Travel Agency With 1 Tool',
    description:
      'All-in-one travel agency management platform. Streamline operations, manage clients, and grow your business.',
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-foreground antialiased`}>
        {children}
      </body>
    </html>
  )
}

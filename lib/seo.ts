import type { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
}

export function generateSEO({ title, description, canonical, ogImage = "/og-image.jpg" }: SEOProps): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: canonical || "https://voai.com",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || "https://voai.com",
      title,
      description,
      siteName: "Vo AI",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

# Vo AI Landing Page

One-page landing page for Vo AI travel agency management platform.

## Tech Stack

- **Framework:** Next.js 14.2.x (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (body), Fugi (headings)

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── AnimatedGradient.tsx
│       ├── LogosStrip.tsx
│       ├── PainPoints.tsx
│       ├── WhyChooseUs.tsx
│       ├── FeaturesGrid.tsx
│       ├── Testimonials.tsx
│       ├── Pricing.tsx
│       ├── CTAUpgrade.tsx
│       └── Footer.tsx
├── components/
│   ├── Header.tsx
│   └── ui/
│       ├── Container.tsx
│       ├── Button.tsx
│       └── Card.tsx
├── data/
│   └── content.ts
├── lib/
│   └── seo.ts
└── public/
    ├── images/
    ├── robots.txt
    └── sitemap.xml
\`\`\`

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Build

\`\`\`bash
npm run build
npm start
\`\`\`

## Requirements

- Node.js 18+
- All images must be in `/public/images/` (referenced as `/images/` in code)
- Fugi font files loaded via @font-face in globals.css

## Quality Gates

- ✅ TypeScript strict mode
- ✅ ESLint with next/core-web-vitals
- ✅ Lighthouse: Performance ≥90, Accessibility ≥95, SEO ≥95
- ✅ Responsive (mobile-first)
- ✅ Semantic HTML
- ✅ AOS animations with reduced-motion support

# MorpheCMS Landing Page

A marketing landing page for **MorpheCMS** — a headless content management system built for developers and designed for editors.

Built with Next.js 14 (App Router), Tailwind CSS, and TypeScript.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- **Colors & theme**: Edit `tailwind.config.ts` — all brand tokens are in the `colors` extension.
- **Copy**: All marketing text lives in individual components under `app/components/`.
- **Fonts**: Inter (UI) and JetBrains Mono (code) are imported via Google Fonts in `app/layout.tsx`.

## Project Structure

```
app/
├── layout.tsx          # Root layout — fonts, metadata, body wrapper
├── page.tsx            # Assembles all sections in order
├── globals.css         # Tailwind directives + base styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── LogoStrip.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── ContentTypes.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── CTABanner.tsx
│   └── Footer.tsx
├── tailwind.config.ts  # Custom colors, fonts, animations
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── package.json
└── .env.example
```

## License

MIT

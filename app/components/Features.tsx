import AnimatedSection from "./AnimatedSection";

const features = [
  {
    title: "Headless by default",
    description:
      "REST & GraphQL APIs out of the box. Connect any frontend — React, Vue, Swift, or your grandma's jQuery site.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3L3 9v10l11 6 11-6V9L14 3z" />
        <path d="M9 12l3 3 5-5" />
      </svg>
    ),
  },
  {
    title: "Visual editor",
    description:
      "Non-technical editors get a Notion-like writing experience. Blocks, embeds, and rich media — no training required.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="20" height="20" rx="3" />
        <path d="M8 10h12M8 14h8M8 18h10" />
      </svg>
    ),
  },
  {
    title: "Role-based access",
    description:
      "Admins, editors, viewers. Granular permissions down to the field level — zero friction to set up.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11a4 4 0 100-8 4 4 0 000 8z" />
        <path d="M17 11a4 4 0 100-8 4 4 0 000 8z" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M17 17a4 4 0 014 2" />
      </svg>
    ),
  },
  {
    title: "Media management",
    description:
      "Drag-and-drop uploads, auto-compression, CDN delivery with image transformations out of the box.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="22" height="18" rx="3" />
        <circle cx="10" cy="12" r="2.5" />
        <path d="M3 18l5-4 3 2 4-3 4 3 6-4v6" />
      </svg>
    ),
  },
  {
    title: "Schema builder",
    description:
      "Define content types visually with drag-and-drop fields. No migrations to write or debug. Ever.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="22" height="22" rx="3" />
        <path d="M9 3v22" />
        <path d="M3 9h22" />
        <path d="M3 14h22" />
        <path d="M3 19h22" />
      </svg>
    ),
  },
  {
    title: "Webhooks & Events",
    description:
      "Trigger builds, sync data to Algolia, post to Slack — automate your publishing workflow end to end.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 17l4-4-4-4" />
        <path d="M14 21l8-8-8-8" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Everything you need to ship content fast
        </h2>
        <p className="mt-3 text-base text-text-muted">
          Built for developers, designed for editors. No compromises.
        </p>
      </AnimatedSection>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 100} className="h-full">
            <div className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(233,69,96,0.08)] hover:-translate-y-1">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent-dim transition-all duration-300 group-hover:bg-accent-dim group-hover:scale-110">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {f.icon}
                </div>
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-text">
                {f.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-text-muted">
                {f.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

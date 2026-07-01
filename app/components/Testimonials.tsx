import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "We migrated from Contentful to MorpheCMS and cut our API response times by 60%. The developer experience is incredible — zero friction, great DX, and the schema builder is a dream.",
    name: "Elena Voss",
    role: "Lead Engineer",
    company: "BuildStack",
    initials: "EV",
  },
  {
    quote:
      "Our editors were up and running in under an hour. The visual editor is genuinely a pleasure to use — it's what Notion wishes its CMS mode could be. Our publishing cadence has tripled.",
    name: "David Okonkwo",
    role: "Head of Content",
    company: "Nexus Health",
    initials: "DO",
  },
  {
    quote:
      "Finally, a headless CMS that treats APIs as a first-class citizen. The GraphQL playground, webhook system, and TypeScript SDK are best-in-class. This is the CMS we've been waiting for.",
    name: "Priya Mehta",
    role: "Staff Engineer",
    company: "Aperture Labs",
    initials: "PM",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F0B429" aria-hidden="true">
          <path d="M7 1l1.545 3.13 3.455.505-2.5 2.435.59 3.44L7 9.125 3.91 10.51l.59-3.44L2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 transition-colors duration-300 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Loved by dev teams
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 150} className="h-full">
              <div className="group flex h-full flex-col rounded-xl border border-border bg-surface-2 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(233,69,96,0.06)] hover:-translate-y-0.5">
                <StarRating />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-muted transition-colors group-hover:text-text">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-dim text-xs font-semibold text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">
                      {t.name}
                    </div>
                    <div className="text-xs text-text-muted">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

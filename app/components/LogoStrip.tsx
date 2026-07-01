const companies = [
  "Aperture Labs",
  "Nexus Health",
  "BuildStack",
  "Pulse CRM",
  "Quantum Dev",
  "Orbit Systems",
];

export default function LogoStrip() {
  return (
    <section className="border-y border-border py-8 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <span className="whitespace-nowrap text-sm font-medium text-text-muted">
          Powering content for teams at —
        </span>

        <div className="relative flex-1 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-primary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-primary to-transparent" />

          <div className="flex animate-scroll-logos gap-12">
            {[...companies, ...companies].map((name, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-semibold text-text-faint transition-colors hover:text-text-muted"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

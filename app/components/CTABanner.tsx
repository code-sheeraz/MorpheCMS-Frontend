import AnimatedSection from "./AnimatedSection";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-accent py-20 transition-colors duration-300 lg:py-28">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      {/* Radial depth */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)",
        }}
      />

      <AnimatedSection className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to take control of your content?
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/80">
          Join 200+ teams already using MorpheCMS. No credit card required.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-accent transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
          >
            Start for free
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            Talk to sales
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}

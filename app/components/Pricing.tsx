import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Perfect for side projects and small teams getting started.",
    badge: null,
    features: [
      "2 team members",
      "1 project",
      "10,000 API calls / mo",
      "Community support",
      "REST & GraphQL APIs",
      "Visual editor",
    ],
    cta: "Get started",
    ctaStyle: "border border-border text-text hover:border-text-muted hover:bg-surface-2/50",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing teams that need more power and flexibility.",
    badge: "Most popular",
    features: [
      "10 team members",
      "5 projects",
      "500,000 API calls / mo",
      "Priority support",
      "Role-based access",
      "Webhooks & automations",
      "Media CDN",
    ],
    cta: "Start free trial",
    ctaStyle: "bg-accent text-white hover:shadow-[0_0_30px_rgba(233,69,96,0.4)] hover:scale-105 active:scale-95",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need scale, security, and control.",
    badge: null,
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Unlimited API calls",
      "Dedicated support",
      "SSO / SAML",
      "SLA guarantee",
      "Custom integrations",
      "On-premise option",
    ],
    cta: "Talk to sales",
    ctaStyle: "border border-border text-text hover:border-text-muted hover:bg-surface-2/50",
    featured: false,
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="6" fill="rgba(39, 201, 63, 0.15)" />
      <path d="M5 8l2 2 4-4" stroke="#27C93F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <AnimatedSection className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Pricing that makes sense
        </h2>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {plans.map((plan, i) => (
          <AnimatedSection key={plan.name} delay={i * 150} className="h-full">
            <div
              className={`group relative flex h-full flex-col rounded-xl border bg-surface p-6 transition-all duration-300 sm:p-8 hover:-translate-y-1 ${
                plan.featured
                  ? "border-accent shadow-[0_0_40px_rgba(233,69,96,0.12)] hover:shadow-[0_0_60px_rgba(233,69,96,0.2)]"
                  : "border-border hover:border-text-faint hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-[11px] font-semibold text-gold backdrop-blur-sm">
                  {plan.badge}
                </span>
              )}

              <div className="mb-1 text-lg font-semibold text-text">
                {plan.name}
              </div>
              <div className="mb-1 flex items-baseline gap-0.5">
                <span className="text-4xl font-extrabold text-text transition-transform duration-300 group-hover:scale-105 inline-block">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-text-muted">{plan.period}</span>
                )}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-text-muted">
                {plan.description}
              </p>

              <ul className="mb-8 flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-text-muted transition-colors group-hover:text-text">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-auto inline-flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-semibold transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Define your schema",
    description:
      "Use the visual schema builder or define content types as code. Fields, relations, validations — all configurable in minutes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="20" height="20" rx="3" />
        <path d="M4 10h20" />
        <circle cx="9" cy="7" r="1" fill="#E94560" />
        <circle cx="14" cy="7" r="1" fill="#E94560" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Create & manage content",
    description:
      "Your editors get a clean visual interface. Rich text blocks, media embeds, scheduling, and version history out of the box.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4v20M4 14h20" />
        <circle cx="14" cy="14" r="10" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fetch via API",
    description:
      "Query your content with REST or GraphQL. Deliver it anywhere — website, mobile app, smart fridge. We don't judge.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 8l12 12M20 8L8 20" />
        <circle cx="20" cy="8" r="3" />
        <circle cx="8" cy="8" r="3" />
        <circle cx="20" cy="20" r="3" />
        <circle cx="8" cy="20" r="3" />
      </svg>
    ),
  },
];

const codeExample = `const res = await fetch('https://api.morphecms.com/v1/posts', {
  headers: {
    'X-API-Key': 'mcp_live_abc123...'
  }
});

const { data } = await res.json();

data.posts.map(post => ({
  title: post.title,
  slug: post.slug,
  publishedAt: post.publishedAt,
  excerpt: post.body.substring(0, 120),
  author: post.author.name
}));`;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
          Simple by design
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          From zero to live content in minutes
        </h2>
      </AnimatedSection>

      {/* Steps */}
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <AnimatedSection
            key={step.number}
            delay={i * 150}
            className="relative flex flex-col items-center text-center"
          >
            {i < steps.length - 1 && (
              <div className="absolute left-[60%] top-10 hidden h-px w-[80%] border-t border-dashed border-border md:block" />
            )}

            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-2 border border-border transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(233,69,96,0.12)]">
              <div className="transition-transform duration-300 hover:scale-110">
                {step.icon}
              </div>
            </div>
            <span className="mt-4 text-sm font-medium text-accent">
              Step {step.number}
            </span>
            <h3 className="mt-1 text-lg font-semibold text-text">
              {step.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
              {step.description}
            </p>
          </AnimatedSection>
        ))}
      </div>

      {/* Code block */}
      <AnimatedSection className="mt-14" delay={300}>
        <div className="group overflow-hidden rounded-xl border border-border bg-surface shadow-lg transition-all duration-300 hover:shadow-xl hover:border-accent/30">
          {/* Tab bar */}
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="flex items-center gap-2 text-xs font-medium text-text-muted">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect width="14" height="14" rx="2" fill="#E94560" opacity="0.3" />
                <path d="M4 5l3 2.5L10 5" stroke="#E94560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              JavaScript
            </span>
            <button
              type="button"
              className="rounded px-2 py-1 text-xs text-text-faint transition-all hover:text-text-muted hover:bg-surface-2"
              aria-label="Copy code"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="5" width="8" height="8" rx="1.5" />
                <path d="M9 5V3a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h2" />
              </svg>
            </button>
          </div>

          {/* Code */}
          <div className="overflow-x-auto p-3 sm:p-5">
            <pre className="font-mono text-[11px] leading-relaxed sm:text-[13px]">
              <code>
                {codeExample.split("\n").map((line, i) => (
                  <div key={i} className="whitespace-nowrap transition-opacity hover:opacity-90">
                    <span className="mr-4 inline-block w-8 text-right text-text-faint/50 select-none">
                      {i + 1}
                    </span>
                    {renderCodeLine(line)}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

function renderCodeLine(line: string) {
  const segments: { text: string; className: string }[] = [];
  let remaining = line;

  const rules: [RegExp, string][] = [
    [/^(\s+)/, "text-text-faint"],
    [/\/\/.*$/, "text-text-faint"],
    [/('(?:[^'\\]|\\.)*')/g, "text-[var(--code-green)]"],
    [/("(?:[^"\\]|\\.)*")/g, "text-[var(--code-green)]"],
    [/\b(const|let|var|return|map|async|await|function|import|from|export)\b/g, "text-[var(--code-red)]"],
    [/\b(fetch|res|data|json|posts|post)\b(?=\s*[\.\(])/g, "text-[var(--code-purple)]"],
    [/\b(title|slug|publishedAt|excerpt|body|substring|author|name|map|log)\b/g, "text-[var(--code-blue)]"],
    [/\b(true|false|null|undefined)\b/g, "text-gold"],
    [/=>/g, "text-accent"],
    [/(https?:\/\/[^\s,')]+)/g, "text-[var(--code-blue)]"],
    [/({|}|\(|\)|\[|\])/g, "text-text"],
  ];

  for (const [regex, className] of rules) {
    const match = remaining.match(regex);
    if (match && match.index === 0) {
      segments.push({ text: match[0], className });
      remaining = remaining.slice(match[0].length);
    }
  }

  if (remaining) {
    segments.push({ text: remaining, className: "text-text-muted" });
  }

  return segments.map((seg, i) => (
    <span key={i} className={seg.className}>
      {seg.text}
    </span>
  ));
}

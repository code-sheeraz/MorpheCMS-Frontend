const codeLines = [
  "{",
  '  "title":        "Building a Headless CMS",',
  '  "slug":         "building-headless-cms",',
  '  "publishedAt":  "2026-06-28T10:00:00Z",',
  '  "author": {',
  '    "name": "Aisha Khan",',
  '    "avatar": "https://...",',
  '    "role": "Engineering Lead"',
  "  },",
  '  "body": "MorpheCMS simplifies content...",',
  '  "tags": ["nextjs", "cms", "headless"]',
  "}",
];

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-32 lg:pt-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-20 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(233,69,96,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-12 lg:flex-row">
        {/* Left column — text */}
        <div className="flex-1 lg:max-w-[58%]">
          {/* Pill badge */}
          <div className="mb-6 animate-fade-in-down">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-accent-dim/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur-sm">
              <span className="inline-block animate-pulse text-[10px]">⚡</span>
              Now in public beta
            </div>
          </div>

          <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
            The CMS your
            <br />
            developers{" "}
            <span className="text-gradient inline-block">won&apos;t hate</span>
          </h1>

          <p
            className="mt-5 max-w-xl animate-fade-in-up text-base leading-relaxed text-text-muted sm:text-lg"
            style={{ animationDelay: "0.15s" }}
          >
            MorpheCMS gives your team a headless content platform with a visual
            editor, blazing-fast APIs, and zero vendor lock-in. Ship content at
            the speed of code.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex animate-fade-in-up flex-wrap items-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(233,69,96,0.5)] hover:scale-105 active:scale-95"
            >
              Start for free
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="M6 12l4-4-4-4" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-text transition-all hover:border-text-muted hover:bg-surface-2/50 hover:scale-[1.02] active:scale-95"
            >
              View docs
            </a>
          </div>

          {/* Social proof */}
          <p
            className="mt-6 animate-fade-in text-xs text-text-faint"
            style={{ animationDelay: "0.45s" }}
          >
            Trusted by 200+ teams &middot; Free forever for small projects
          </p>
        </div>

        {/* Right column — terminal */}
        <div
          className="flex-1 animate-slide-right lg:max-w-[42%]"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="glow-red animate-float overflow-hidden rounded-xl border border-border bg-surface shadow-2xl transition-all duration-300 hover:shadow-[0_0_100px_rgba(233,69,96,0.2)]">
            {/* Title bar */}
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 text-xs text-text-faint font-mono">
                GET /api/posts/hello-world
              </span>
              <span className="ml-auto text-[10px] text-text-faint font-mono tracking-wider">
                bash
              </span>
            </div>

            {/* Code area */}
            <div className="overflow-x-auto p-4 sm:p-5">
              <pre className="font-mono text-[13px] leading-relaxed">
                <code>
                  {codeLines.map((line, i) => {
                    const segments = splitHighlight(line);
                    return (
                      <div key={i} className="whitespace-nowrap transition-opacity hover:opacity-90">
                        <span className="mr-4 inline-block w-8 text-right text-text-faint/50 select-none">
                          {String(i + 1).padStart(2, " ")}
                        </span>
                        {segments.map((seg, j) => (
                          <span key={j} className={seg.className}>
                            {seg.text}
                          </span>
                        ))}
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Segment {
  text: string;
  className: string;
}

function splitHighlight(line: string): Segment[] {
  const segments: Segment[] = [];
  let remaining = line;

  const patterns: [RegExp, string][] = [
    [/^(\s+)/, "text-text-faint"],
    [/(true|false|null)/g, "text-gold"],
    [/"([^"]+)":/g, "text-accent"],
    [/"([^"]+)"/g, "text-[var(--code-green)]"],
    [/(\d{4}-\d{2}-\d{2})/g, "text-[var(--code-blue)]"],
    [/(https?:\/\/[^"]*)/g, "text-[var(--code-blue)]"],
    [/({|}|\[|\]|,)/g, "text-text"],
  ];

  for (const [regex, className] of patterns) {
    const match = remaining.match(regex);
    if (match && match.index === 0) {
      segments.push({ text: match[0], className });
      remaining = remaining.slice(match[0].length);
    }
  }

  if (remaining) {
    segments.push({ text: remaining, className: "text-text-muted" });
  }

  return segments;
}

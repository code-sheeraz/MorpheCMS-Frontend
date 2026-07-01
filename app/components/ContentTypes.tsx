"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const tabs = [
  { id: "blog", label: "Blog" },
  { id: "services", label: "Services" },
  { id: "careers", label: "Careers" },
];

const blogData = [
  { title: "Building a Headless CMS with Next.js", status: "Published", author: "Aisha Khan", updated: "Jun 28, 2026" },
  { title: "Why Your Team Needs Structured Content", status: "Draft", author: "Marcus Chen", updated: "Jun 25, 2026" },
  { title: "The Future of Digital Experiences", status: "Published", author: "Priya Patel", updated: "Jun 22, 2026" },
  { title: "A Guide to Content Modeling", status: "Draft", author: "Aisha Khan", updated: "Jun 18, 2026" },
  { title: "API Design Best Practices", status: "Published", author: "Jordan Lee", updated: "Jun 14, 2026" },
  { title: "Scaling Content Operations", status: "Scheduled", author: "Sam Rivera", updated: "Jun 10, 2026" },
];

const servicesData = [
  { title: "Enterprise API Gateway", status: "Published", author: "Dev Team", updated: "Jun 27, 2026" },
  { title: "Media Transformation Service", status: "Published", author: "Dev Team", updated: "Jun 24, 2026" },
  { title: "Webhook Relay Service", status: "Draft", author: "Dev Team", updated: "Jun 20, 2026" },
  { title: "Cache Invalidation Service", status: "Published", author: "Dev Team", updated: "Jun 15, 2026" },
  { title: "Search Indexing Pipeline", status: "Scheduled", author: "Dev Team", updated: "Jun 11, 2026" },
];

const careersData = [
  { title: "Senior Frontend Engineer", status: "Published", author: "HR Team", updated: "Jun 26, 2026" },
  { title: "Technical Writer", status: "Published", author: "HR Team", updated: "Jun 23, 2026" },
  { title: "Developer Relations Lead", status: "Draft", author: "HR Team", updated: "Jun 19, 2026" },
  { title: "Site Reliability Engineer", status: "Published", author: "HR Team", updated: "Jun 16, 2026" },
  { title: "Product Designer", status: "Scheduled", author: "HR Team", updated: "Jun 12, 2026" },
];

const tabData: Record<string, { title: string; status: string; author: string; updated: string }[]> = {
  blog: blogData,
  services: servicesData,
  careers: careersData,
};

function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    Published: "bg-[#27C93F]/10 text-[#27C93F] border-[#27C93F]/30",
    Draft: "bg-text-faint/10 text-text-muted border-text-faint/30",
    Scheduled: "bg-gold/10 text-gold border-gold/30",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${colorMap[status] || ""}`}
    >
      <span
        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
          status === "Published"
            ? "bg-[#27C93F]"
            : status === "Draft"
              ? "bg-text-muted"
              : "bg-gold"
        }`}
      />
      {status}
    </span>
  );
}

export default function ContentTypes() {
  const [activeTab, setActiveTab] = useState("blog");
  const rows = tabData[activeTab] || [];

  return (
    <section id="content-types" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <AnimatedSection className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Built for every content type
        </h2>
      </AnimatedSection>

      {/* Tabs */}
      <AnimatedSection className="mt-10 flex justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all active:scale-95 ${
              activeTab === tab.id
                ? "bg-accent text-white shadow-[0_0_20px_rgba(233,69,96,0.3)]"
                : "bg-surface-2 text-text-muted border border-border hover:text-text hover:border-text-faint"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </AnimatedSection>

      {/* Browser chrome mockup */}
      <AnimatedSection className="mt-8" delay={200}>
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl transition-all duration-300 hover:shadow-3xl">
          {/* Chrome top bar */}
          <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="mx-auto flex max-w-md flex-1 items-center justify-center rounded-md bg-primary px-3 py-1">
              <span className="text-xs text-text-faint font-mono truncate">
                app.morphecms.com/admin/content/{activeTab}
              </span>
            </div>
            <div className="w-14" />
          </div>

          {/* Admin panel content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-muted sm:px-6">
                    Title
                  </th>
                  <th className="hidden px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-muted sm:table-cell sm:px-6">
                    Author
                  </th>
                  <th className="hidden px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-muted md:table-cell md:px-6">
                    Updated
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-text-muted sm:px-6">
                    Status
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-text-muted sm:px-6">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="ml-auto">
                      <circle cx="8" cy="8" r="1.5" />
                      <circle cx="14" cy="8" r="1.5" />
                      <circle cx="2" cy="8" r="1.5" />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border/50 transition-all duration-200 hover:bg-surface-2/80"
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${i * 50}ms both`,
                    }}
                  >
                    <td className="px-4 py-3.5 text-sm font-medium text-text sm:px-6">
                      {row.title}
                    </td>
                    <td className="hidden px-4 py-3.5 text-sm text-text-muted sm:table-cell sm:px-6">
                      {row.author}
                    </td>
                    <td className="hidden px-4 py-3.5 text-sm text-text-muted md:table-cell md:px-6">
                      {row.updated}
                    </td>
                    <td className="px-4 py-3.5 sm:px-6">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="px-4 py-3.5 text-right text-text-faint sm:px-6">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="ml-auto transition-opacity hover:opacity-100 opacity-50">
                        <path d="M8 4v8M4 8h8" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

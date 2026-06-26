import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap — Titanium Security" },
      { name: "description", content: "What we are building next. The Titanium Security public roadmap, refreshed every quarter." },
      { property: "og:title", content: "Roadmap — Titanium Security" },
      { property: "og:description", content: "Now, next, and later — the public Titanium Security roadmap refreshed every quarter." },
      { property: "og:url", content: "/roadmap" },
    ],
    links: [{ rel: "canonical", href: "/roadmap" }],
  }),
  component: RoadmapPage,
});

const columns = [
  {
    h: "Shipping now",
    tone: "from-brand to-brand-glow",
    items: [
      "Webhook signature verification across all custom integrations.",
      "Hourly backup snapshots for Premium guilds.",
      "Cohort retention in the analytics module.",
    ],
  },
  {
    h: "Up next",
    tone: "from-amber-400 to-orange-500",
    items: [
      "Per-region runtime selection (EU / US / APAC).",
      "Native Slack mirror for severe-incident channels.",
      "Typed rule import / export with semantic diffs.",
    ],
  },
  {
    h: "Later",
    tone: "from-zinc-500 to-zinc-700",
    items: [
      "Public detection-rule marketplace.",
      "Custom-model evaluation for automod.",
      "Self-hosted runtime for compliance customers.",
    ],
  },
];

function RoadmapPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Roadmap"
        title="Where Titanium Security is going next."
        sub="We share a public roadmap because predictability is a feature. Dates are intentionally omitted — outcomes are not."
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-28 md:grid-cols-3">
        {columns.map((c) => (
          <div key={c.h} className="glass rounded-2xl p-6">
            <div className={`mb-4 inline-block rounded-full bg-gradient-to-r ${c.tone} px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand-foreground`}>
              {c.h}
            </div>
            <ul className="space-y-3">
              {c.items.map((i) => (
                <li key={i} className="rounded-xl border border-border/60 bg-surface/40 p-3 text-sm text-foreground/90">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
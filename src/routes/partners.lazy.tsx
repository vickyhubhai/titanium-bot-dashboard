import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createLazyFileRoute('/partners')({
  component: PartnersPage,
});

const tiers = [
  {
    n: "Referrer",
    p: "20% revshare",
    d: "For consultants and creators who introduce communities to Sentinel.",
    perks: ["Unique referral link", "Quarterly payouts", "Co-marketing on request"],
  },
  {
    n: "Implementation",
    p: "Listed in directory",
    d: "For agencies who configure and operate Sentinel on behalf of large guilds.",
    perks: ["Multi-guild dashboard", "Priority engineering review", "Joint case studies"],
    featured: true,
  },
  {
    n: "Technology",
    p: "API + design partnership",
    d: "For platforms that want to embed Sentinel data inside their own surfaces.",
    perks: ["Early API access", "Design-partner roadmap input", "Shared incident response"],
  },
];

function PartnersPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Partners"
        title="Build with us, for the communities that matter."
        sub="A small, curated partner program for the people who already do the work. No badges, no leaderboards — just leverage."
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-16 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.n}
            className={`glass relative rounded-2xl p-6 ${t.featured ? "ring-1 ring-brand/60" : ""}`}
          >
            {t.featured && (
              <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-brand to-brand-glow px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand-foreground">
                Most active
              </div>
            )}
            <h2 className="font-display text-xl font-bold">{t.n}</h2>
            <div className="mt-1 font-mono text-xs uppercase tracking-widest text-brand">{t.p}</div>
            <p className="mt-3 text-sm text-muted-foreground">{t.d}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {t.perks.map((p) => (
                <li key={p} className="flex items-center gap-2 text-foreground/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-xl border border-border/60 bg-surface/40 px-4 text-sm font-semibold transition-colors hover:bg-surface/70"
            >
              Apply
            </Link>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
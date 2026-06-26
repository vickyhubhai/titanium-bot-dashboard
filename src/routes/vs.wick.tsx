import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/vs/wick")({
  head: () => ({
    meta: [
      { title: "Titanium Security vs Wick — Discord Security Compared (2026)" },
      {
        name: "description",
        content:
          "Titanium Security vs Wick: a side-by-side comparison of antinuke, automod, forensic logging, dashboard UX and pricing. The modern Wick alternative for serious Discord servers.",
      },
      { property: "og:title", content: "Titanium Security vs Wick — The Modern Discord Security Alternative" },
      {
        property: "og:description",
        content:
          "Sub-20ms decisioning, forensic logging, and a unified dashboard. See how Titanium Security compares to Wick on features, performance and price.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://astral-dashboard-73.lovable.app/vs/wick" },
    ],
    links: [{ rel: "canonical", href: "https://astral-dashboard-73.lovable.app/vs/wick" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is Titanium Security a good Wick alternative?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Titanium Security covers the same antinuke surface as Wick — webhook spam, mass bans, role escalation, channel deletion — with sub-20ms decisioning and a unified dashboard that Wick does not ship.",
              },
            },
            {
              "@type": "Question",
              name: "What does Titanium Security do that Wick does not?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Titanium Security ships a forensic audit timeline, typed automod policy, integrated tickets, multi-server analytics and SSO — features that require external bots or are unavailable on Wick.",
              },
            },
            {
              "@type": "Question",
              name: "How much does Titanium Security cost compared to Wick?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Titanium Security is free for up to 3 servers. Premium is $9.99/month for unlimited servers, advanced analytics and 90-day audit retention.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: VsWickPage,
});

const rows: { feature: string; titanium: string | boolean; wick: string | boolean }[] = [
  { feature: "Antinuke (webhook, role, channel, ban)", titanium: true, wick: true },
  { feature: "Sub-20ms decisioning", titanium: true, wick: false },
  { feature: "Forensic audit timeline", titanium: true, wick: false },
  { feature: "Typed declarative automod policy", titanium: true, wick: false },
  { feature: "Unified web dashboard", titanium: true, wick: "Limited" },
  { feature: "Integrated ticket system", titanium: true, wick: false },
  { feature: "Multi-server analytics", titanium: true, wick: false },
  { feature: "SSO / SAML (Enterprise)", titanium: true, wick: false },
  { feature: "Free tier", titanium: "Up to 3 servers", wick: "Limited" },
  { feature: "Premium pricing", titanium: "$9.99 / mo", wick: "$5 – $15 / mo" },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="mx-auto size-5 text-brand" aria-label="Yes" />;
  if (value === false) return <X className="mx-auto size-5 text-muted-foreground/50" aria-label="No" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

function VsWickPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Comparison"
        title="Titanium Security vs Wick"
        sub="The modern Wick alternative — faster decisioning, deeper forensic logging, and a unified dashboard built for serious Discord servers."
      />
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="glass overflow-hidden rounded-3xl">
          <table className="w-full text-left">
            <thead className="border-b border-border/40 bg-white/[0.02]">
              <tr className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4 text-center text-brand">Titanium</th>
                <th className="px-6 py-4 text-center">Wick</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-b border-border/20 last:border-0">
                  <td className="px-6 py-4 text-sm">{r.feature}</td>
                  <td className="px-6 py-4 text-center"><Cell value={r.titanium} /></td>
                  <td className="px-6 py-4 text-center"><Cell value={r.wick} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-28">
        <h2 className="font-display text-3xl font-bold tracking-tight">Why teams switch from Wick to Titanium Security</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { t: "Sub-20ms decisioning", d: "Titanium Security's hot path runs in-region with no cold starts. Raids are stopped before the first webhook clears." },
            { t: "Forensic logging", d: "Every action — automated or human — is captured on a timeline you can replay and export for incident review." },
            { t: "Unified dashboard", d: "Antinuke, automod, tickets, verification and analytics in one surface. No bot-per-feature sprawl." },
          ].map((c) => (
            <div key={c.t} className="glass rounded-2xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-brand">{c.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=1456212834189971537&permissions=8&scope=bot%20applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-brand to-brand-glow px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30"
          >
            Add Titanium Security to your server
          </a>
          <Link to="/premium" className="rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-semibold hover:bg-white/5">
            See premium details
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Check, X } from "lucide-react";

export const Route = createLazyFileRoute('/vs/wick')({
  component: VsWickPage,
});

const rows: { feature: string; sentinel: string | boolean; wick: string | boolean }[] = [
  { feature: "Antinuke (webhook, role, channel, ban)", sentinel: true, wick: true },
  { feature: "Sub-20ms decisioning", sentinel: true, wick: false },
  { feature: "Forensic audit timeline", sentinel: true, wick: false },
  { feature: "Typed declarative automod policy", sentinel: true, wick: false },
  { feature: "Unified web dashboard", sentinel: true, wick: "Limited" },
  { feature: "Integrated ticket system", sentinel: true, wick: false },
  { feature: "Multi-server analytics", sentinel: true, wick: false },
  { feature: "SSO / SAML (Enterprise)", sentinel: true, wick: false },
  { feature: "Free tier", sentinel: "Up to 3 servers", wick: "Limited" },
  { feature: "Premium pricing", sentinel: "$9.99 / mo", wick: "$5 – $15 / mo" },
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
        title="Sentinel vs Wick"
        sub="The modern Wick alternative — faster decisioning, deeper forensic logging, and a unified dashboard built for serious Discord servers."
      />
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="glass overflow-hidden rounded-3xl">
          <table className="w-full text-left">
            <thead className="border-b border-border/40 bg-white/[0.02]">
              <tr className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <th className="px-6 py-4">Feature</th>
                <th className="px-6 py-4 text-center text-brand">Sentinel</th>
                <th className="px-6 py-4 text-center">Wick</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-b border-border/20 last:border-0">
                  <td className="px-6 py-4 text-sm">{r.feature}</td>
                  <td className="px-6 py-4 text-center"><Cell value={r.sentinel} /></td>
                  <td className="px-6 py-4 text-center"><Cell value={r.wick} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-28">
        <h2 className="font-display text-3xl font-bold tracking-tight">Why teams switch from Wick to Sentinel</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { t: "Sub-20ms decisioning", d: "Sentinel's hot path runs in-region with no cold starts. Raids are stopped before the first webhook clears." },
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
          <Link
            to="/login"
            className="rounded-full bg-gradient-to-r from-brand to-brand-glow px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30"
          >
            Add Sentinel to your server
          </Link>
          <Link to="/pricing" className="rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-semibold hover:bg-white/5">
            See pricing
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
import { createLazyFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createLazyFileRoute('/status')({
  component: StatusPage,
});

const systems = [
  { k: "Gateway", s: "Operational", up: 99.99 },
  { k: "API", s: "Operational", up: 99.98 },
  { k: "Dashboard", s: "Operational", up: 99.99 },
  { k: "Automod Engine", s: "Operational", up: 100 },
  { k: "Antinuke Sentinel", s: "Operational", up: 100 },
  { k: "Analytics", s: "Operational", up: 99.95 },
  { k: "Webhooks", s: "Degraded", up: 99.61 },
];

// Deterministic per-system bar pattern (no SSR/CSR drift).
function bars(seed: number) {
  return Array.from({ length: 60 }, (_, i) => ((i * 7 + seed * 13) % 97) > 92 ? "warn" : "ok");
}

function StatusPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Status" title="All systems, in one glance." />
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <div className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <span className="relative flex size-3">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex size-3 rounded-full bg-emerald-400" />
            </span>
            <div>
              <div className="font-display text-lg font-bold">All systems operational</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Updated just now</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-3xl font-bold">99.98%</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">90-day uptime</div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-3 px-6 pb-28">
        {systems.map((sys, idx) => {
          const b = bars(idx + 1);
          return (
            <div key={sys.k} className="glass rounded-2xl p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="font-semibold">{sys.k}</div>
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-[10px] uppercase tracking-widest ${sys.s === "Operational" ? "text-emerald-400" : "text-amber-400"}`}>{sys.s}</span>
                  <span className="font-mono text-xs text-muted-foreground">{sys.up}%</span>
                </div>
              </div>
              <div className="flex gap-[2px]">
                {b.map((c, i) => (
                  <div key={i} className={`h-6 flex-1 rounded-[2px] ${c === "ok" ? "bg-emerald-400/40" : "bg-amber-400/60"}`} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </SiteShell>
  );
}
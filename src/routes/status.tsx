import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "Status — Titanium Security" },
      { name: "description", content: "Live operational status for every Titanium Security subsystem." },
      { property: "og:title", content: "Status — Titanium Security" },
      { property: "og:url", content: "/status" },
    ],
    links: [{ rel: "canonical", href: "/status" }],
  }),
  component: StatusPage,
});

interface SystemStatus {
  k: string;
  s: string;
  up: number;
}

const systems: SystemStatus[] = [
  { k: "Bot Status", s: "Operational", up: 99.99 },
  { k: "API Status", s: "Operational", up: 99.98 },
  { k: "Website Status", s: "Operational", up: 99.99 },
  { k: "Database Status", s: "Operational", up: 100 },
];

function bars(seed: number) {
  return Array.from({ length: 60 }, (_, i) => ((i * 7 + seed * 13) % 97) > 94 ? "warn" : "ok");
}

function StatusPage() {
  const overallUptime = (systems.reduce((acc, sys) => acc + sys.up, 0) / systems.length).toFixed(2);
  const hasIssues = systems.some(sys => sys.s !== "Operational");

  return (
    <SiteShell>
      <PageHeader eyebrow="Status" title="All systems, in one glance." sub="Live uptime metrics and incident reports." />
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <div className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <span className="relative flex size-3">
              <span className={`absolute inset-0 animate-ping rounded-full opacity-60 bg-emerald-400`} />
              <span className={`relative inline-flex size-3 rounded-full bg-emerald-400`} />
            </span>
            <div>
              <div className="font-display text-lg font-bold">
                {hasIssues ? "Degraded system performance" : "All systems operational"}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Updated just now</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-3xl font-bold">{overallUptime}%</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">90-day uptime</div>
          </div>
        </div>
      </section>
      
      <section className="mx-auto max-w-4xl space-y-4 px-6 pb-28">
        {systems.map((sys, idx) => {
          const b = bars(idx + 1);
          return (
            <div key={sys.k} className="glass rounded-2xl p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="font-semibold text-sm">{sys.k}</div>
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-[10px] uppercase tracking-widest text-emerald-400`}>{sys.s}</span>
                  <span className="font-mono text-xs text-muted-foreground">{sys.up}%</span>
                </div>
              </div>
              <div className="flex gap-[2px]">
                {b.map((c, i) => (
                  <div key={i} className={`h-6 flex-1 rounded-[2px] ${sys.s === "Operational" && c === "ok" ? "bg-emerald-400/40" : "bg-amber-400/60"}`} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </SiteShell>
  );
}
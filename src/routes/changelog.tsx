import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — Titanium Security" },
      { name: "description", content: "Every shipped change, ordered by date. Transparency is a feature." },
      { property: "og:title", content: "Changelog — Titanium Security" },
      { property: "og:description", content: "Every shipped change to Titanium Security, ordered by date — releases, fixes, and improvements with full transparency." },
      { property: "og:url", content: "/changelog" },
    ],
    links: [{ rel: "canonical", href: "/changelog" }],
  }),
  component: ChangelogPage,
});

interface Release {
  v: string;
  d: string;
  k: "Major" | "Minor" | "Patch";
  notes: string[];
}

const kindStyle: Record<string, string> = {
  Major: "bg-brand/15 text-brand",
  Minor: "bg-emerald-500/15 text-emerald-300",
  Patch: "bg-white/5 text-muted-foreground",
};

const releases: Release[] = [
  { v: "2.14.0", d: "Jun 18, 2026", k: "Major", notes: ["SuperAntinuke now supports webhook signature verification.", "New analytics module with cohort retention.", "Backup snapshots can be scheduled hourly on Premium."] },
  { v: "2.13.2", d: "Jun 04, 2026", k: "Patch", notes: ["Fixed a race in ticket assignment when staff was offline.", "Reduced verification cold-start latency by 38%."] },
  { v: "2.13.0", d: "May 22, 2026", k: "Minor", notes: ["Wall Roles GA.", "Embed Builder gets keyboard shortcuts.", "New audit log export to CSV / JSON."] },
  { v: "2.12.0", d: "May 08, 2026", k: "Minor", notes: ["Join2Create now supports per-template permission overrides.", "Reaction Roles supports up to 25 per message."] },
];

function ChangelogPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Changelog" title="Every release, every fix." sub="Follow Titanium Security updates as they happen." />
      <section className="mx-auto max-w-3xl px-6 pb-28">
        <ol className="relative border-l border-border/60 pl-6">
          {releases.map((r) => (
            <li key={r.v} className="mb-10">
              <div className="absolute -left-[7px] mt-1 size-3 rounded-full bg-brand ring-4 ring-background" />
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span className="font-display text-2xl font-bold">v{r.v}</span>
                <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold ${kindStyle[r.k]}`}>{r.k}</span>
                <span className="font-mono text-xs text-muted-foreground">{r.d}</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {r.notes.map((n, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand">•</span>
                    {n}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </SiteShell>
  );
}
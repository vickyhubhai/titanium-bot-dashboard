import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { Sparkles, Check, Zap } from "lucide-react";

export const Route = createLazyFileRoute('/dashboard/premium')({
  component: PremiumPage,
});

const perks = [
  "Unlimited servers",
  "SuperAntinuke cryptographic signing",
  "Custom branded bot",
  "Hourly backup snapshots",
  "90-day audit log retention",
  "Priority 4-hour SLA support",
  "Vanity roles and reaction-role pro",
  "Advanced security analytics",
];

function PremiumPage() {
  return (
    <>
      <Topbar title="Premium" subtitle="Upgrade your guilds with the full Titanium Security feature set." />
      <div className="grid gap-6 p-6 lg:p-10">
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-brand/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand">
              <Sparkles className="size-3" />
              Premium
            </div>
            <h2 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Unlock everything Titanium Security can do.
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Premium turns Titanium Security from a defensive baseline into a complete community operating system.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/pricing" className="rounded-xl bg-gradient-to-r from-brand to-brand-glow px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30">
                Upgrade now
              </Link>
              <Link to="/contact" className="glass-subtle rounded-xl px-6 py-3 text-sm font-semibold hover:bg-white/10">
                Talk to sales
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-5 font-display text-lg font-bold">What's included</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-5 font-display text-lg font-bold">Current usage</h3>
            <div className="space-y-5">
              {[
                { k: "Servers", v: "4 / 12", pct: 33 },
                { k: "API calls (24h)", v: "84K / 500K", pct: 17 },
                { k: "Backup storage", v: "1.4 / 10 GB", pct: 14 },
              ].map((u) => (
                <div key={u.k}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>{u.k}</span>
                    <span className="font-mono text-muted-foreground">{u.v}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand to-brand-glow" style={{ width: `${u.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-brand/10 p-3 text-xs text-brand">
              <Zap className="size-4" />
              You're using 22% of your premium quota.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
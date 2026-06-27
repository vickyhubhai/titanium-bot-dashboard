import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Topbar } from "@/components/dashboard/Topbar";
import { ArrowUpRight, Users, MessageSquare, Shield, Activity } from "lucide-react";

export const Route = createLazyFileRoute('/dashboard/analytics')({
  component: AnalyticsPage,
});

const kpis = [
  { icon: Users, k: "Active members", v: "12,431", d: "+8.2%" },
  { icon: MessageSquare, k: "Messages / day", v: "84.2K", d: "+3.1%" },
  { icon: Shield, k: "Threats blocked", v: "428", d: "+18%" },
  { icon: Activity, k: "Avg latency", v: "11ms", d: "-2ms" },
];

// Deterministic line chart points.
const points = Array.from({ length: 48 }, (_, i) => {
  const v = 50 + Math.sin(i / 3) * 18 + Math.cos(i / 7) * 12 + (i / 48) * 20;
  return Math.max(10, Math.min(95, v));
});

const distribution = [
  { k: "Antinuke", pct: 42, color: "bg-brand" },
  { k: "Automod", pct: 28, color: "bg-brand-glow" },
  { k: "Verification", pct: 18, color: "bg-emerald-400" },
  { k: "Other", pct: 12, color: "bg-white/30" },
];

function AnalyticsPage() {
  const w = 600;
  const h = 180;
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * w} ${h - (p / 100) * h}`).join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <>
      <Topbar title="Analytics" subtitle="Activity, threats and engagement across all your servers." />
      <div className="grid gap-6 p-6 lg:p-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k, i) => (
            <motion.div
              key={k.k}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center justify-between">
                <k.icon className="size-4 text-muted-foreground" />
                <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                  <ArrowUpRight className="size-3" />
                  {k.d}
                </span>
              </div>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{k.k}</div>
              <div className="font-display text-3xl font-bold tabular-nums">{k.v}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold">Engagement</h3>
                <p className="text-xs text-muted-foreground">Hourly active members, last 48h</p>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand">Trending up</span>
            </div>
            <svg viewBox={`0 0 ${w} ${h}`} className="h-44 w-full">
              <defs>
                <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.66 0.21 265)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="oklch(0.66 0.21 265)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path d={area} fill="url(#grad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
              <motion.path
                d={path}
                fill="none"
                stroke="oklch(0.74 0.19 285)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </svg>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="mb-4 font-display text-lg font-bold">Threat distribution</h3>
            <div className="space-y-4">
              {distribution.map((d) => (
                <div key={d.k}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>{d.k}</span>
                    <span className="font-mono text-muted-foreground">{d.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${d.pct}%` }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className={`h-full rounded-full ${d.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
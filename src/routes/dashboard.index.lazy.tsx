import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Topbar } from "@/components/dashboard/Topbar";
import { Shield, Users, Zap, Crown, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const Route = createLazyFileRoute('/dashboard/')({
  component: DashboardOverview,
});

const stats = [
  { icon: Shield, label: "Servers", value: "12", delta: "+2", up: true },
  { icon: Users, label: "Total Members", value: "84,219", delta: "+3.4%", up: true },
  { icon: Zap, label: "Commands / 24h", value: "14.2K", delta: "stable", up: true },
  { icon: Crown, label: "Premium Status", value: "Active", delta: "renews Apr 14", up: true },
];

const activity = [
  { time: "14:02", e: "Antinuke trigger prevented", who: "Apex Guild", tone: "rose" },
  { time: "13:58", e: "Automod deleted 4 messages", who: "Stormhold", tone: "amber" },
  { time: "13:51", e: "New verification approved", who: "Citadel", tone: "emerald" },
  { time: "13:40", e: "Ticket #284 closed", who: "Apex Guild", tone: "brand" },
  { time: "13:21", e: "Backup snapshot saved", who: "Apex Guild", tone: "muted" },
];

const toneMap: Record<string, string> = {
  rose: "bg-rose-500/15 text-rose-300",
  amber: "bg-amber-500/15 text-amber-300",
  emerald: "bg-emerald-500/15 text-emerald-300",
  brand: "bg-brand/15 text-brand",
  muted: "bg-white/5 text-muted-foreground",
};

const bars = [38, 52, 41, 60, 78, 64, 70, 58, 82, 90, 72, 86];

function DashboardOverview() {
  return (
    <>
      <Topbar title="System Overview" subtitle="Welcome back. All systems operational." />
      <div className="grid gap-6 p-6 lg:p-10">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass relative overflow-hidden rounded-2xl p-5"
            >
              <div className="flex items-center justify-between">
                <s.icon className="size-4 text-muted-foreground" />
                <span className={`flex items-center gap-1 font-mono text-[10px] ${s.up ? "text-emerald-400" : "text-rose-400"}`}>
                  {s.up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                  {s.delta}
                </span>
              </div>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
              <div className="font-display text-3xl font-bold tracking-tight">{s.value}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Chart */}
          <div className="glass relative overflow-hidden rounded-2xl p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold">Security pulse</h3>
                <p className="text-xs text-muted-foreground">Threats blocked over last 12 weeks</p>
              </div>
              <div className="flex gap-3 font-mono text-[10px]">
                <span className="text-brand">● Allowed</span>
                <span className="text-rose-400">● Blocked</span>
              </div>
            </div>
            <div className="flex h-56 items-end gap-2">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: i * 0.03, ease: "easeOut" }}
                  className={`flex-1 rounded-t-md ${h > 80 ? "bg-rose-400/60" : "bg-brand/50"}`}
                />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 animate-scan bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
          </div>

          {/* Activity */}
          <div className="glass rounded-2xl p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold">Recent activity</h3>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                LIVE
              </span>
            </div>
            <ul className="space-y-4">
              {activity.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg ${toneMap[a.tone]}`}>
                    <span className="size-1.5 rounded-full bg-current" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm">{a.e}</p>
                    <p className="font-mono text-[10px] text-muted-foreground">{a.who} · {a.time}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
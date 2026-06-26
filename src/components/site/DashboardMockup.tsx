import { motion } from "framer-motion";
import { Shield, Zap, Activity, ChevronRight } from "lucide-react";

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-5xl"
    >
      <div className="absolute -inset-x-20 -top-20 h-[60%] rounded-full bg-brand/20 blur-[100px]" aria-hidden />
      <div className="glass relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
        <div className="flex h-9 items-center gap-2 border-b border-border/60 bg-surface/50 px-4">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-white/10" />
            <div className="size-2.5 rounded-full bg-white/10" />
            <div className="size-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 text-center">
            <span className="rounded bg-black/30 px-3 py-0.5 font-mono text-[10px] text-muted-foreground">
              titanium.security/dashboard/security
            </span>
          </div>
        </div>
        <div className="grid grid-cols-[180px_1fr] bg-background">
          <div className="border-r border-border/60 p-4">
            <div className="mb-4 flex items-center gap-2 rounded-md bg-brand/10 px-2.5 py-2 ring-1 ring-brand/30">
              <div className="size-5 rounded bg-gradient-to-br from-brand to-brand-glow" />
              <span className="text-xs font-semibold">TITANIUM SECURITY</span>
            </div>
            <div className="mb-2 px-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Protection</div>
            {[
              { label: "Security Console", active: true },
              { label: "Antinuke Config", active: false },
              { label: "Automod Rules", active: false },
              { label: "Verification Gate", active: false },
              { label: "Tickets & Logs", active: false },
              { label: "Reaction Roles", active: false },
              { label: "Backup & Sync", active: false },
              { label: "Booster Perks", active: false },
            ].map((i) => (
              <div
                key={i.label}
                className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs ${i.active ? "bg-white/5 text-foreground" : "text-muted-foreground"
                  }`}
              >
                <div className={`size-1.5 rounded-full ${i.active ? "bg-brand" : "bg-white/15"}`} />
                {i.label}
              </div>
            ))}
          </div>
          <div className="space-y-4 p-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Shield, label: "THREATS BLOCKED", value: "1,242", trend: "+12%", color: "text-emerald-400" },
                { icon: Activity, label: "MEMBERS", value: "84.2K", trend: "+3.4%", color: "text-brand" },
                { icon: Zap, label: "RESPONSE", value: "14ms", trend: "stable", color: "text-muted-foreground" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="glass-subtle rounded-lg p-3"
                >
                  <s.icon className="mb-2 size-3.5 text-muted-foreground" />
                  <div className="font-mono text-[9px] tracking-wider text-muted-foreground">{s.label}</div>
                  <div className="font-display text-xl font-bold">{s.value}</div>
                  <div className={`font-mono text-[9px] ${s.color}`}>{s.trend}</div>
                </motion.div>
              ))}
            </div>
            <div className="glass-subtle relative overflow-hidden rounded-lg p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground">LIVE SECURITY LOG</span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                  LIVE
                </span>
              </div>
              <div className="space-y-2 font-mono text-[10px]">
                {[
                  { t: "14:02:11", e: "Antinuke: Trigger prevented (User: Cipher#001)", c: "text-rose-300" },
                  { t: "14:02:08", e: "Automod: Deleted 4 messages (Mass Mention)", c: "text-amber-300" },
                  { t: "14:01:55", e: "Verification: New user approved via OAuth", c: "text-emerald-300" },
                  { t: "14:01:21", e: "Backup: Snapshot saved (12.4MB)", c: "text-muted-foreground" },
                ].map((l, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-brand/60">[{l.t}]</span>
                    <span className={l.c}>{l.e}</span>
                    <ChevronRight className="ml-auto size-3 text-muted-foreground/40" />
                  </motion.div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 animate-scan bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
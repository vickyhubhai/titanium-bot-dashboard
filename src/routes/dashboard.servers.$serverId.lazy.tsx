import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Topbar } from "@/components/dashboard/Topbar";
import {
  ShieldAlert, Bot, UserCheck, Ticket, ScrollText, Gift,
  Mic2, Crown, ScanLine, Archive, ChevronLeft, Settings2,
} from "lucide-react";

export const Route = createLazyFileRoute('/dashboard/servers/$serverId')({
  component: ServerSettings,
});

const modules = [
  { id: "antinuke", icon: ShieldAlert, label: "Antinuke", desc: "Real-time threat containment", tone: "rose", on: true },
  { id: "automod", icon: Bot, label: "Automod", desc: "Context-aware message filter", tone: "brand", on: true },
  { id: "verification", icon: UserCheck, label: "Verification", desc: "CAPTCHA & VPN gates", tone: "emerald", on: true },
  { id: "tickets", icon: Ticket, label: "Tickets", desc: "Support ticket system", tone: "amber", on: false },
  { id: "logging", icon: ScrollText, label: "Logging", desc: "Forensic audit trail", tone: "brand", on: true },
  { id: "giveaways", icon: Gift, label: "Giveaways", desc: "Weighted sweepstakes", tone: "rose", on: false },
  { id: "vc", icon: Mic2, label: "VC Manager", desc: "Temp channels & roles", tone: "emerald", on: true },
  { id: "vanity", icon: Crown, label: "Vanity Roles", desc: "Booster perks", tone: "amber", on: false, pro: true },
  { id: "analytics", icon: ScanLine, label: "Analytics", desc: "ML threat scoring", tone: "brand", on: true, pro: true },
  { id: "backup", icon: Archive, label: "Backup", desc: "Server snapshots", tone: "emerald", on: true, pro: true },
];

const tones: Record<string, string> = {
  brand: "bg-brand/10 text-brand ring-brand/30",
  rose: "bg-rose-500/10 text-rose-300 ring-rose-500/30",
  emerald: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
  amber: "bg-amber-500/10 text-amber-300 ring-amber-500/30",
};

function ServerSettings() {
  const { serverId } = Route.useParams();
  return (
    <>
      <Topbar title={`${serverId[0].toUpperCase()}${serverId.slice(1)} Guild`} subtitle="Configure modules and monitor security in real time." />
      <div className="p-6 lg:p-10">
        <Link
          to="/dashboard/servers"
          className="mb-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-3.5" />
          All servers
        </Link>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((m, i) => (
            <ModuleCard key={m.id} module={m} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}

function ModuleCard({ module: m, index }: { module: typeof modules[number]; index: number }) {
  const [on, setOn] = useState(m.on);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between">
        <div className={`grid size-11 place-items-center rounded-xl ring-1 ${tones[m.tone]}`}>
          <m.icon className="size-5" />
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          aria-label={`Toggle ${m.label}`}
          onClick={() => setOn(!on)}
          className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-brand" : "bg-white/10"}`}
        >
          <span
            className={`absolute top-0.5 size-5 rounded-full bg-white shadow-md transition-all ${on ? "left-[22px]" : "left-0.5"}`}
          />
        </button>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <h3 className="font-display text-base font-bold">{m.label}</h3>
        {m.pro && (
          <span className="rounded-full bg-brand/15 px-1.5 py-0.5 font-mono text-[9px] font-bold text-brand">PRO</span>
        )}
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
      <button
        type="button"
        className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      >
        <Settings2 className="size-3" />
        Configure
      </button>
    </motion.div>
  );
}
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Topbar } from "@/components/dashboard/Topbar";
import { useState } from "react";
import {
  ShieldAlert, Bot, UserCheck, Ticket, ScrollText, Gift, Mic2, ScanLine,
  Crown, Sparkles, Zap, Lock, MessagesSquare, KeyRound, Database, Activity,
  Wand2, BellRing, Hash, Users, Radio, type LucideIcon,
} from "lucide-react";

export const Route = createLazyFileRoute('/dashboard/modules')({
  component: ModulesPage,
});

type Module = { name: string; group: string; desc: string; icon: LucideIcon; premium?: boolean; defaultOn?: boolean };

const modules: Module[] = [
  { name: "Antinuke", group: "Security", desc: "Detect & punish malicious moderator actions in real-time.", icon: ShieldAlert, defaultOn: true },
  { name: "SuperAntinuke", group: "Security", desc: "Advanced cryptographic signing of trusted actions.", icon: Lock, premium: true },
  { name: "Raidmode", group: "Security", desc: "Slow joins and lock sensitive channels during attacks.", icon: Activity, defaultOn: true },
  { name: "Automod", group: "Moderation", desc: "Typed declarative rules with regex and context.", icon: Bot, defaultOn: true },
  { name: "Trustables", group: "Security", desc: "Tier of trusted users, roles and bots.", icon: KeyRound },
  { name: "Strip Whitelist", group: "Security", desc: "Auto-strip dangerous permissions on join.", icon: Zap },
  { name: "Logging", group: "Observability", desc: "Forensic-grade event log with rich diff views.", icon: ScrollText, defaultOn: true },
  { name: "Beast Mode", group: "Security", desc: "Maximum lockdown profile, one click to enable.", icon: ShieldAlert, premium: true },
  { name: "Nightmode", group: "Community", desc: "Schedule channel slowmode and message limits.", icon: Activity },
  { name: "Wall Roles", group: "Roles", desc: "Force-assign role pairs to maintain hierarchy.", icon: Users },
  { name: "Moderation", group: "Moderation", desc: "Ban, kick, mute, warn with full audit trail.", icon: Bot, defaultOn: true },
  { name: "Utility", group: "Tools", desc: "Server tools, info commands, and lookups.", icon: Wand2 },
  { name: "Premium", group: "Billing", desc: "Manage premium guild assignments.", icon: Sparkles, premium: true },
  { name: "Autorole", group: "Roles", desc: "Automatic role grants on join.", icon: UserCheck, defaultOn: true },
  { name: "VC Roles", group: "Voice", desc: "Grant roles based on voice channel presence.", icon: Mic2 },
  { name: "VC Manager", group: "Voice", desc: "Temporary voice channels with owner controls.", icon: Mic2 },
  { name: "Vanity Roles", group: "Roles", desc: "Reward members based on custom status.", icon: Crown, premium: true },
  { name: "Ticket System", group: "Support", desc: "Threaded tickets with queues and SLAs.", icon: Ticket, defaultOn: true },
  { name: "Join2Create", group: "Voice", desc: "Auto-spawn private voice channels.", icon: Mic2 },
  { name: "Custom Bot", group: "Branding", desc: "White-label Sentinel under your own bot.", icon: Bot, premium: true },
  { name: "Reaction Roles", group: "Roles", desc: "Self-assignable roles via reactions.", icon: Hash, defaultOn: true },
  { name: "Verification", group: "Security", desc: "Friction-tuned member verification flows.", icon: UserCheck, defaultOn: true },
  { name: "Backup System", group: "Operations", desc: "Snapshots of roles, channels and permissions.", icon: Database, premium: true },
  { name: "Giveaways", group: "Community", desc: "Native giveaways with role gating.", icon: Gift, defaultOn: true },
  { name: "Server Tools", group: "Tools", desc: "Bulk operations across categories.", icon: Wand2 },
  { name: "Embed Builder", group: "Tools", desc: "Visual builder for rich embeds.", icon: MessagesSquare, defaultOn: true },
  { name: "Invite Tracker", group: "Analytics", desc: "Track who invited whom, with retention.", icon: ScanLine, premium: true },
  { name: "Welcome & Goodbye", group: "Community", desc: "Custom join/leave cards and DMs.", icon: BellRing, defaultOn: true },
  { name: "Application System", group: "Support", desc: "Multi-step staff or community applications.", icon: ScrollText },
  { name: "Appeal System", group: "Support", desc: "Structured ban appeals with reviewer rotation.", icon: ScrollText },
  { name: "Security Analytics", group: "Analytics", desc: "Threat intelligence dashboards.", icon: Radio, premium: true },
];

const groups = ["All", ...Array.from(new Set(modules.map((m) => m.group)))];

function Toggle({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${on ? "bg-gradient-to-r from-brand to-brand-glow" : "bg-white/10"}`}
    >
      <span className={`absolute top-0.5 size-5 rounded-full bg-white shadow-md transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
    </button>
  );
}

function ModulesPage() {
  const [group, setGroup] = useState("All");
  const [q, setQ] = useState("");
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(modules.map((m) => [m.name, !!m.defaultOn]))
  );

  const filtered = modules.filter(
    (m) => (group === "All" || m.group === group) && m.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <Topbar title="Modules" subtitle="Configure protection, automation and community features." />
      <div className="p-6 lg:p-10">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <input
            placeholder="Search modules..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="glass-subtle min-w-[200px] flex-1 rounded-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
          />
          <div className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={`rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                  group === g ? "bg-brand text-white" : "glass-subtle text-muted-foreground hover:text-foreground"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i, 8) * 0.03 }}
              className="glass relative overflow-hidden rounded-2xl p-5"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="grid size-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <m.icon className="size-4 text-brand" />
                </div>
                <Toggle on={!!enabled[m.name]} onChange={() => setEnabled((p) => ({ ...p, [m.name]: !p[m.name] }))} />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold">{m.name}</h3>
                {m.premium && <span className="rounded-full bg-brand/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-brand">PRO</span>}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
              <div className="mt-4 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{m.group}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
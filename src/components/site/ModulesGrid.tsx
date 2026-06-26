import {
  ShieldAlert,
  ShieldX,
  MessageSquareOff,
  Link2Off,
  AlertOctagon,
  Bot,
  Cpu,
  UserCheck,
  ScrollText,
  Handshake,
  UserPlus,
  MousePointerClick,
  Gift,
  Ticket,
  Terminal,
  Hammer,
  Database,
  Activity,
  Crown,
  Boxes,
} from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  { icon: ShieldAlert, label: "Anti Nuke", desc: "Instantly halt rogue admin activities. Contain bulk kicks, channel deletions, and role edits.", tone: "rose" },
  { icon: ShieldX, label: "Anti Raid", desc: "Block rapid join flows. Automatically trigger lockouts or apply verification gates during raids.", tone: "rose" },
  { icon: MessageSquareOff, label: "Anti Spam", desc: "Detect and suppress rapid message floods, duplicate posts, and spam patterns.", tone: "brand" },
  { icon: Link2Off, label: "Anti Link", desc: "Manage URL sharing. Block unauthorized invitations, phishy URLs, and domain patterns.", tone: "brand" },
  { icon: AlertOctagon, label: "Anti Scam", desc: "Machine-learning pattern matching to identify and purge crypto scams and phishing attempts.", tone: "rose" },
  { icon: Bot, label: "Anti Bot", desc: "Block automated malicious accounts. Stop bot accounts from joining and inflating memberships.", tone: "emerald" },
  { icon: Cpu, label: "Auto Moderation", desc: "Automate chat rules. Silence slurs, filter toxic phrases, and clean chats in under 200ms.", tone: "brand" },
  { icon: UserCheck, label: "Verification", desc: "Multi-layered CAPTCHA, VPN detection, and age checks to vet users before they chat.", tone: "emerald" },
  { icon: ScrollText, label: "Logging", desc: "Maintain full transparency. Deep audits of commands, edits, bans, and actions.", tone: "brand" },
  { icon: Handshake, label: "Welcome System", desc: "Greet new users with beautiful embed welcome graphics, guides, and server directions.", tone: "emerald" },
  { icon: UserPlus, label: "Autorole", desc: "Assign base roles automatically to newcomers, separating verified members from guests.", tone: "emerald" },
  { icon: MousePointerClick, label: "Reaction Roles", desc: "Self-service roles. Let members choose channels and notifications via button clicks.", tone: "amber" },
  { icon: Gift, label: "Giveaways", desc: "Scale community rewards. Set role and invite thresholds to qualify for clean sweeps.", tone: "rose" },
  { icon: Ticket, label: "Tickets", desc: "Seamless private support channel management with transcript exports and agent logs.", tone: "amber" },
  { icon: Terminal, label: "Utility Commands", desc: "Essential utilities like polls, server stats, weather lookup, and embed creators.", tone: "brand" },
  { icon: Hammer, label: "Moderation", desc: "Robust commands: ban, kick, timeout, warn, mute, purge. Instant and audited actioning.", tone: "brand" },
  { icon: Database, label: "Backup System", desc: "Clone and secure settings, templates, role permissions, and channel structures.", tone: "amber" },
  { icon: Activity, label: "Security Monitoring", desc: "Track server threat level in real-time. Detect spikes in bad events or bans.", tone: "brand" },
  { icon: Crown, label: "Premium Features", desc: "Unlock custom bot branding, hourly backups, API Webhooks, and SLA support.", tone: "amber" },
];

const tones: Record<string, string> = {
  brand: "bg-brand/10 text-brand ring-brand/30",
  rose: "bg-rose-500/10 text-rose-300 ring-rose-500/30",
  emerald: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
  amber: "bg-amber-500/10 text-amber-300 ring-amber-500/30",
};

export function ModulesGrid() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-brand">── Modules</div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Hardware-grade modules,
              <br />
              <span className="text-muted-foreground">one unified console.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every module is independently toggleable, deeply configurable, and built for high-velocity servers without configuration friction.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className={`mb-5 inline-grid size-11 place-items-center rounded-xl ring-1 ${tones[m.tone]}`}>
                <m.icon className="size-5" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">{m.label}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Active / Protected
              </div>
              <Boxes className="absolute -right-4 -top-4 size-24 text-foreground/[0.02] transition-transform group-hover:rotate-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
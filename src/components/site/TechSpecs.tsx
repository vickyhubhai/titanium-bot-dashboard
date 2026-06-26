import { motion } from "framer-motion";
import { Zap, RotateCcw, ShieldCheck, TrendingUp, Key, ListFilter } from "lucide-react";

const specs = [
  {
    icon: Zap,
    title: "Zero-Latency Containment",
    desc: "Uses event queues to intercept rogue administrative actions in under 15ms, faster than Discord's API rate limits."
  },
  {
    icon: RotateCcw,
    title: "Fail-Safe Entity Recovery",
    desc: "Instantly re-creates channels, roles, and permission templates deleted by hijackers, maintaining operational continuity."
  },
  {
    icon: ShieldCheck,
    title: "VPN & Proxy Intelligence",
    desc: "Vets joining members against active VPN and residential proxy databases, preventing secondary spam accounts."
  },
  {
    icon: TrendingUp,
    title: "Auto-Scaling Slowmode",
    desc: "Monitors chat velocity metrics. If message rate spikes past safe parameters, slowmode scales up automatically."
  },
  {
    icon: Key,
    title: "Append-Only Audit Vaults",
    desc: "Duplicates moderation streams directly to off-guild webhooks, ensuring logs remain readable even if server logs are purged."
  },
  {
    icon: ListFilter,
    title: "Dynamic Ticket Routing",
    desc: "Supports multiple support channels, automated assignment rules, and offline HTML archive compiles for record-keeping."
  }
];

export function TechSpecs() {
  return (
    <section className="relative px-6 py-28 border-t border-border/40">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-brand">── Core Engine Specs</div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Built for high velocity.
            <br />
            <span className="text-muted-foreground">Architected for security.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
            Explore the engineering details that make Titanium Security the choice for professional servers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specs.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="glass p-6 rounded-2xl transition hover:bg-white/[0.04]"
            >
              <div className="mb-4 inline-grid size-9 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20">
                <s.icon className="size-4.5" />
              </div>
              <h3 className="mb-2 font-display text-base font-bold">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

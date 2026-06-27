import { createLazyFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute('/about')({
  component: AboutPage,
});

const principles = [
  { k: "Sovereignty first", d: "Your community, your data, your rules. We never train models on guild content." },
  { k: "Predictable trust", d: "Every action is logged, signed, and reversible. No magic, no surprises." },
  { k: "Performance is a feature", d: "Sub-20ms decisioning across regions. Latency isn't a luxury — it's protection." },
  { k: "Defence in depth", d: "Layered controls so a single failure can never compromise an entire server." },
];

const team = [
  { n: "Aanya Verma", r: "Founder · Security" },
  { n: "Kiran Mehra", r: "Engineering" },
  { n: "Rohan Iyer", r: "Platform" },
  { n: "Naomi Park", r: "Design" },
];

function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About"
        title="Built for the few who take community seriously."
        sub="Titanium Security started as a defensive tool for a single 200k-member server under sustained attack. Today it protects thousands of communities with the same engineering discipline."
      />
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-16 md:grid-cols-2">
        {principles.map((p, i) => (
          <motion.div
            key={p.k}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-brand">Principle 0{i + 1}</div>
            <div className="font-display text-xl font-bold">{p.k}</div>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
          </motion.div>
        ))}
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <h2 className="mb-6 font-display text-2xl font-bold">The team</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div key={t.n} className="glass rounded-2xl p-5">
              <div className="mb-3 size-12 rounded-xl bg-gradient-to-br from-brand to-brand-glow" />
              <div className="font-semibold">{t.n}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t.r}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
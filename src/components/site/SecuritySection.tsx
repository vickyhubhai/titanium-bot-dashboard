import { motion } from "framer-motion";

const bars = [40, 60, 30, 85, 55, 70, 45, 62, 78, 50, 88, 42];

export function SecuritySection() {
  return (
    <section className="relative bg-surface/20 px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-brand">── Analytics</div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Actionable intelligence.
            <br />
            <span className="text-muted-foreground">No more guessing.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Our analytics engine turns server growth, retention and security events into high-fidelity data points your staff can actually use.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Heatmaps of peak activity periods",
              "Forensic logs of every moderation action",
              "Predictive threat assessment via ML models",
              "Exportable audit trails (CSV, JSON, Webhook)",
            ].map((t, i) => (
              <li key={t} className="flex items-center gap-4 text-sm font-medium">
                <span className="glass-subtle grid size-7 place-items-center rounded-md font-mono text-[10px] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass relative overflow-hidden rounded-3xl p-7">
          <div className="mb-6 flex items-center justify-between">
            <div className="font-mono text-xs uppercase tracking-widest">Security Pulse · 12W</div>
            <div className="flex gap-4 font-mono text-[10px]">
              <span className="text-brand">● Allowed</span>
              <span className="text-rose-400">● Blocked</span>
            </div>
          </div>
          <div className="flex h-64 items-end gap-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.04, ease: "easeOut" }}
                className={`flex-1 rounded-t-md ${h > 80 ? "bg-rose-400/60" : "bg-brand/40"}`}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 animate-scan bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        </div>
      </div>
    </section>
  );
}
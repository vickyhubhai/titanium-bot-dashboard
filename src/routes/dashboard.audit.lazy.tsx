import { createLazyFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute('/dashboard/audit')({
  component: AuditPage,
});

const entries = [
  { t: "Today · 14:02", who: "Aanya", action: "Updated automod policy", target: "policy:invite-block", diff: "+ allowlist: youtube.com\n- threshold: 3\n+ threshold: 5" },
  { t: "Today · 12:18", who: "Sentinel Bot", action: "Auto-engaged Raidmode", target: "guild:apex", diff: "engaged_for: 600s\nreason: 12 joins in 8s" },
  { t: "Today · 10:44", who: "Rohan", action: "Granted role", target: "user:9931 → role:trusted", diff: "+ role: trusted\nby: manual approval" },
  { t: "Yesterday · 22:01", who: "Naomi", action: "Created ticket category", target: "category:appeals", diff: "+ category: appeals\nstaff_role: 8821" },
  { t: "Yesterday · 20:30", who: "Kiran", action: "Revoked premium", target: "guild:stormhold", diff: "- premium: true" },
];

function AuditPage() {
  return (
    <>
      <Topbar title="Audit log" subtitle="Every administrative action, signed and reversible." />
      <div className="grid gap-6 p-6 lg:p-10">
        <div className="space-y-3">
          {entries.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="glass overflow-hidden rounded-2xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-glow text-xs font-bold text-white">
                    {e.who.slice(0, 1)}
                  </div>
                  <div>
                    <div className="text-sm"><span className="font-semibold">{e.who}</span> <span className="text-muted-foreground">— {e.action}</span></div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{e.target}</div>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{e.t}</span>
              </div>
              <pre className="overflow-x-auto bg-black/40 px-5 py-3 font-mono text-xs leading-relaxed">
                {e.diff.split("\n").map((line, j) => (
                  <span key={j} className={line.startsWith("+") ? "text-emerald-300" : line.startsWith("-") ? "text-rose-300" : "text-muted-foreground"}>
                    {line}
                    {"\n"}
                  </span>
                ))}
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
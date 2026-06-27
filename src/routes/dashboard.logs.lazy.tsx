import { createLazyFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { useMemo, useState } from "react";
import { Search, Download } from "lucide-react";

export const Route = createLazyFileRoute('/dashboard/logs')({
  component: LogsPage,
});

type Log = { t: string; level: "info" | "warn" | "error"; module: string; msg: string };

const log: Log[] = [
  { t: "14:02:11", level: "warn", module: "antinuke", msg: "Mass channel delete blocked from user 8421" },
  { t: "14:01:55", level: "info", module: "automod", msg: "Filtered 3 invite links in #general" },
  { t: "14:01:30", level: "info", module: "tickets", msg: "Ticket #284 closed by moderator Aanya" },
  { t: "14:01:02", level: "error", module: "webhooks", msg: "Outbound webhook timeout (3000ms)" },
  { t: "14:00:48", level: "info", module: "verify", msg: "User 9931 passed captcha verification" },
  { t: "14:00:22", level: "warn", module: "raidmode", msg: "Auto-engaged: 12 joins in 8s" },
  { t: "13:59:51", level: "info", module: "logging", msg: "Daily snapshot complete (842 events)" },
  { t: "13:59:30", level: "info", module: "automod", msg: "Updated ruleset v32 applied" },
  { t: "13:58:14", level: "warn", module: "antinuke", msg: "Bulk role grant attempt detected" },
  { t: "13:57:02", level: "info", module: "giveaway", msg: "Giveaway #44 ended, winner picked" },
];

const levelStyle: Record<Log["level"], string> = {
  info: "text-muted-foreground bg-white/5",
  warn: "text-amber-300 bg-amber-500/10",
  error: "text-rose-300 bg-rose-500/10",
};

function LogsPage() {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState<"all" | Log["level"]>("all");
  const rows = useMemo(
    () =>
      log.filter(
        (l) => (level === "all" || l.level === level) && (l.msg + l.module).toLowerCase().includes(q.toLowerCase())
      ),
    [q, level]
  );

  return (
    <>
      <Topbar title="Live logs" subtitle="Streaming events across every Titanium Security subsystem." />
      <div className="p-6 lg:p-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <div className="glass-subtle flex flex-1 items-center gap-2 rounded-full px-4 py-2">
            <Search className="size-3.5 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter messages..." className="flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground" />
          </div>
          {(["all", "info", "warn", "error"] as const).map((l) => (
            <button key={l} onClick={() => setLevel(l)} className={`rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${level === l ? "bg-brand text-white" : "glass-subtle text-muted-foreground hover:text-foreground"}`}>
              {l}
            </button>
          ))}
          <button className="glass-subtle flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs hover:bg-white/10">
            <Download className="size-3.5" /> Export
          </button>
        </div>

        <div className="glass overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">Live · {rows.length} events</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Auto-refresh 2s</span>
          </div>
          <ul className="divide-y divide-border/60 font-mono text-xs">
            {rows.map((l, i) => (
              <li key={i} className="grid grid-cols-[80px_70px_120px_1fr] items-center gap-4 px-5 py-3 hover:bg-white/[0.02]">
                <span className="text-muted-foreground">{l.t}</span>
                <span className={`rounded px-2 py-0.5 text-center uppercase tracking-widest ${levelStyle[l.level]}`}>{l.level}</span>
                <span className="text-brand">{l.module}</span>
                <span className="truncate text-foreground/90">{l.msg}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
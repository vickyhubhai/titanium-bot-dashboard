import { useEffect, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";

type Stat = {
  k: string;
  target: number;
  format: (n: number) => string;
  live?: boolean;
};

function Counter({ stat }: { stat: Stat }) {
  const [value, ref] = useCountUp(stat.target * 100, 1600);
  const [jitter, setJitter] = useState(0);

  useEffect(() => {
    if (!stat.live) return;
    const id = setInterval(() => setJitter(Math.floor(Math.random() * 5) - 2), 1800);
    return () => clearInterval(id);
  }, [stat.live]);

  const display = stat.format((value / 100) + (stat.live ? jitter : 0));

  return (
    <div ref={ref} className="text-center">
      <div className="mb-1 flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {stat.live && <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />}
        {stat.k}
      </div>
      <div className="font-display text-3xl font-bold tracking-tight tabular-nums">{display}</div>
    </div>
  );
}

export function StatsStrip() {
  const stats: Stat[] = [
    { k: "Servers Protected", target: 15284, format: (n) => n.toLocaleString() },
    { k: "Threats Blocked", target: 3294845, format: (n) => n.toLocaleString() },
    { k: "Avg Response", target: 14, format: (n) => `${n}ms`, live: true },
    { k: "Uptime SLA", target: 99.99, format: (n) => `${n.toFixed(2)}%` },
  ];

  return (
    <section className="relative border-y border-border/60 bg-surface/30 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <Counter key={s.k} stat={s} />
        ))}
      </div>
    </section>
  );
}
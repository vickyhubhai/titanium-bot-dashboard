import { createLazyFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { BookOpen, Zap, Shield, Activity } from "lucide-react";

export const Route = createLazyFileRoute('/docs')({
  component: DocsPage,
});

const sections = [
  { icon: Zap, title: "Quick Start", desc: "Invite Sentinel and enable your first module in under 90 seconds." },
  { icon: Shield, title: "Antinuke", desc: "Configure whitelists, action thresholds and trigger responses." },
  { icon: Activity, title: "Analytics", desc: "Read security pulse data and export forensic audit trails." },
  { icon: BookOpen, title: "Command Reference", desc: "Every slash command, argument and permission scope documented." },
];

function DocsPage() {
  return (
    <SiteShell>
      <section className="px-6 pb-16 pt-10 text-center">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-brand">── Documentation</div>
        <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
          Everything you need.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Onboarding guides, command reference, integration recipes and security best practices.
        </p>
      </section>
      <section className="mx-auto grid max-w-5xl gap-5 px-6 pb-28 md:grid-cols-2">
        {sections.map((s) => (
          <div key={s.title} className="glass rounded-2xl p-7 transition hover:bg-white/[0.06]">
            <s.icon className="mb-4 size-5 text-brand" />
            <h2 className="font-display text-xl font-bold">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
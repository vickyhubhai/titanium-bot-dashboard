import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — Titanium Security" },
      { name: "description", content: "Connect Titanium Security to the tools your team already runs — Discord, GitHub, Notion, Linear, PagerDuty, Datadog and more." },
      { property: "og:title", content: "Integrations — Titanium Security" },
      { property: "og:description", content: "Stream events, sync rules, and route alerts across the tools your operations team already lives in." },
      { property: "og:url", content: "/integrations" },
    ],
    links: [{ rel: "canonical", href: "/integrations" }],
  }),
  component: IntegrationsPage,
});

const groups = [
  {
    title: "Communication",
    items: [
      { n: "Discord", d: "Core platform — guilds, roles, audit, channels." },
      { n: "Slack", d: "Mirror critical alerts to your operations channel." },
      { n: "Telegram", d: "Receive raid pings on mobile without opening Discord." },
    ],
  },
  {
    title: "Developer",
    items: [
      { n: "GitHub", d: "Stream releases, CI status, and review pings to your guild." },
      { n: "Linear", d: "Open tickets from messages with a single context menu action." },
      { n: "Sentry", d: "Surface runtime errors in a dedicated incident channel." },
    ],
  },
  {
    title: "Operations",
    items: [
      { n: "PagerDuty", d: "Escalate severe nuke attempts to your on-call rotation." },
      { n: "Datadog", d: "Forward metrics for dashboards and SLO tracking." },
      { n: "Statuspage", d: "Publish guild incidents to a public status page automatically." },
    ],
  },
  {
    title: "Knowledge",
    items: [
      { n: "Notion", d: "Sync moderation runbooks and reference docs into help threads." },
      { n: "Linear Docs", d: "Surface design specs in product channels on request." },
      { n: "Google Drive", d: "Pin sourced documents to verified channels only." },
    ],
  },
];

function IntegrationsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Integrations"
        title="One platform, every surface your team already uses."
        sub="Titanium Security speaks the protocols your stack already speaks. Stream events, sync rules, route alerts — without leaving the dashboard."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-28 md:grid-cols-2">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold">{g.title}</h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {g.items.length} apps
              </span>
            </div>
            <ul className="divide-y divide-border/60">
              {g.items.map((i) => (
                <li key={i.n} className="flex items-start gap-4 py-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/30 via-brand-glow/20 to-transparent font-display text-sm font-bold">
                    {i.n.slice(0, 1)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium">{i.n}</div>
                    <p className="text-sm text-muted-foreground">{i.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
    </SiteShell>
  );
}
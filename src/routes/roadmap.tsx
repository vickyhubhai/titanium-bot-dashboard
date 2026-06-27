import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/roadmap')({
  head: () => ({
    meta: [
      { title: "Roadmap — Titanium Security" },
      { name: "description", content: "What we are building next. The Titanium Security public roadmap, refreshed every quarter." },
      { property: "og:title", content: "Roadmap — Titanium Security" },
      { property: "og:description", content: "Now, next, and later — the public Titanium Security roadmap refreshed every quarter." },
      { property: "og:url", content: "/roadmap" },
    ],
    links: [{ rel: "canonical", href: "/roadmap" }],
  }),
});

const columns = [
  {
    h: "Shipping now",
    tone: "from-brand to-brand-glow",
    items: [
      "Webhook signature verification across all custom integrations.",
      "Hourly backup snapshots for Premium guilds.",
      "Cohort retention in the analytics module.",
    ],
  },
  {
    h: "Up next",
    tone: "from-amber-400 to-orange-500",
    items: [
      "Per-region runtime selection (EU / US / APAC).",
      "Native Slack mirror for severe-incident channels.",
      "Typed rule import / export with semantic diffs.",
    ],
  },
  {
    h: "Later",
    tone: "from-zinc-500 to-zinc-700",
    items: [
      "Public detection-rule marketplace.",
      "Custom-model evaluation for automod.",
      "Self-hosted runtime for compliance customers.",
    ],
  },
];


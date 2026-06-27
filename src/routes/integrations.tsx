import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";

export const Route = createFileRoute('/integrations')({
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


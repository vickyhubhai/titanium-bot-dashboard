import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/cookies')({
  head: () => ({
    meta: [
      { title: "Cookie policy — Sentinel" },
      { name: "description", content: "What Sentinel stores in your browser, why, and how to opt out." },
      { property: "og:title", content: "Cookie policy — Sentinel" },
      { property: "og:description", content: "Plain-language description of the cookies and local storage Sentinel uses." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  });

const rows = [
  { n: "sentinel_session", purpose: "Keeps you signed in to the dashboard between visits.", retention: "30 days", optional: false },
  { n: "sentinel_theme", purpose: "Remembers your theme preference (system / dark / light).", retention: "1 year", optional: true },
  { n: "sentinel_prefs", purpose: "Stores dashboard layout choices such as collapsed sidebars.", retention: "1 year", optional: true },
];


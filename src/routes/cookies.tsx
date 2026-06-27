import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/cookies')({
  head: () => ({
    meta: [
      { title: "Cookie policy — Titanium Security" },
      { name: "description", content: "What Titanium Security stores in your browser, why, and how to opt out." },
      { property: "og:title", content: "Cookie policy — Titanium Security" },
      { property: "og:description", content: "Plain-language description of the cookies and local storage Titanium Security uses." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
});

const rows = [
  { n: "Titanium Security_session", purpose: "Keeps you signed in to the dashboard between visits.", retention: "30 days", optional: false },
  { n: "Titanium Security_theme", purpose: "Remembers your theme preference (system / dark / light).", retention: "1 year", optional: true },
  { n: "Titanium Security_prefs", purpose: "Stores dashboard layout choices such as collapsed sidebars.", retention: "1 year", optional: true },
];


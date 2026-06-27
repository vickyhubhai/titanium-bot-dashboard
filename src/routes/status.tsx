import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/status')({
  head: () => ({
    meta: [
      { title: "Status — Titanium Security" },
      { name: "description", content: "Live operational status for every Titanium Security subsystem." },
      { property: "og:title", content: "Status — Titanium Security" },
      { property: "og:url", content: "/status" },
    ],
    links: [{ rel: "canonical", href: "/status" }],
  }),
});

const systems = [
  { k: "Gateway", s: "Operational", up: 99.99 },
  { k: "API", s: "Operational", up: 99.98 },
  { k: "Dashboard", s: "Operational", up: 99.99 },
  { k: "Automod Engine", s: "Operational", up: 100 },
  { k: "Antinuke Titanium Security", s: "Operational", up: 100 },
  { k: "Analytics", s: "Operational", up: 99.95 },
  { k: "Webhooks", s: "Degraded", up: 99.61 },
];

// Deterministic per-system bar pattern (no SSR/CSR drift).
function bars(seed: number) {
  return Array.from({ length: 60 }, (_, i) => ((i * 7 + seed * 13) % 97) > 92 ? "warn" : "ok");
}


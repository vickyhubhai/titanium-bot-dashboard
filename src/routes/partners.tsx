import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/partners')({
  head: () => ({
    meta: [
      { title: "Partners — Sentinel" },
      { name: "description", content: "Agencies, integrators, and creator collectives building on Sentinel. Refer, resell, or build on the platform." },
      { property: "og:title", content: "Partners — Sentinel" },
      { property: "og:description", content: "Refer, resell, or build on Sentinel — partnership tiers, benefits, and the application path." },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  });

const tiers = [
  {
    n: "Referrer",
    p: "20% revshare",
    d: "For consultants and creators who introduce communities to Sentinel.",
    perks: ["Unique referral link", "Quarterly payouts", "Co-marketing on request"],
  },
  {
    n: "Implementation",
    p: "Listed in directory",
    d: "For agencies who configure and operate Sentinel on behalf of large guilds.",
    perks: ["Multi-guild dashboard", "Priority engineering review", "Joint case studies"],
    featured: true,
  },
  {
    n: "Technology",
    p: "API + design partnership",
    d: "For platforms that want to embed Sentinel data inside their own surfaces.",
    perks: ["Early API access", "Design-partner roadmap input", "Shared incident response"],
  },
];


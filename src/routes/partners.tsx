import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/partners')({
  head: () => ({
    meta: [
      { title: "Partners — Titanium Security" },
      { name: "description", content: "Agencies, integrators, and creator collectives building on Titanium Security. Refer, resell, or build on the platform." },
      { property: "og:title", content: "Partners — Titanium Security" },
      { property: "og:description", content: "Refer, resell, or build on Titanium Security — partnership tiers, benefits, and the application path." },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
});

const tiers = [
  {
    n: "Referrer",
    p: "20% revshare",
    d: "For consultants and creators who introduce communities to Titanium Security.",
    perks: ["Unique referral link", "Quarterly payouts", "Co-marketing on request"],
  },
  {
    n: "Implementation",
    p: "Listed in directory",
    d: "For agencies who configure and operate Titanium Security on behalf of large guilds.",
    perks: ["Multi-guild dashboard", "Priority engineering review", "Joint case studies"],
    featured: true,
  },
  {
    n: "Technology",
    p: "API + design partnership",
    d: "For platforms that want to embed Titanium Security data inside their own surfaces.",
    perks: ["Early API access", "Design-partner roadmap input", "Shared incident response"],
  },
];


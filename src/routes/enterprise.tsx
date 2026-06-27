import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Check } from "lucide-react";

export const Route = createFileRoute('/enterprise')({
  head: () => ({
    meta: [
      { title: "Enterprise — Titanium Security" },
      { name: "description", content: "Dedicated capacity, named support, and contractual SLAs for communities that cannot afford downtime." },
      { property: "og:title", content: "Enterprise — Titanium Security" },
      { property: "og:description", content: "Dedicated capacity, named support, and contractual SLAs for the world's largest Discord communities." },
      { property: "og:url", content: "/enterprise" },
    ],
    links: [{ rel: "canonical", href: "/enterprise" }],
  }),
});

const pillars = [
  { t: "Dedicated capacity", d: "Isolated shards sized to your community's peak — never queued behind a noisy neighbour." },
  { t: "Named support", d: "A two-engineer pod assigned to your account with shared incident channels." },
  { t: "Operational SLAs", d: "99.99% module availability, 15-minute response targets for severity-one incidents." },
  { t: "Custom modules", d: "Bespoke moderation logic written and maintained by the Titanium Security platform team." },
  { t: "Data residency", d: "Choose between EU, US, and Asia-Pacific operational regions for the runtime." },
  { t: "Procurement ready", d: "MSA, DPA, security questionnaires, and yearly billing on net-60 terms." },
];


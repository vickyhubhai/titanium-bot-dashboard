import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute('/careers')({
  head: () => ({
    meta: [
      { title: "Careers — Titanium Security" },
      { name: "description", content: "Join a small, senior team building defensive infrastructure for the world's largest Discord communities." },
      { property: "og:title", content: "Careers — Titanium Security" },
      { property: "og:description", content: "Open roles at Titanium Security — remote-first, senior-only, and obsessed with the craft of community defence." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

const roles = [
  { t: "Senior Platform Engineer", loc: "Remote · EU/IN", dept: "Engineering" },
  { t: "Security Engineer, Detection", loc: "Remote · Worldwide", dept: "Engineering" },
  { t: "Product Designer", loc: "Remote · EU/UK", dept: "Design" },
  { t: "Developer Advocate", loc: "Remote · Americas", dept: "Growth" },
];

const values = [
  { t: "Senior by default", d: "Small team, broad surface. We hire people we trust to make calls without a committee." },
  { t: "Boring infrastructure", d: "We optimise for predictability over novelty. Excitement belongs to the customer, not the runtime." },
  { t: "Written first", d: "Every meaningful decision lives in a document. Anyone can read the history of the system at any time." },
];


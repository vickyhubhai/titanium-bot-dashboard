import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: "Terms of Service — Sentinel" },
      { name: "description", content: "The terms that govern your use of Sentinel." },
      { property: "og:title", content: "Terms — Sentinel" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  });


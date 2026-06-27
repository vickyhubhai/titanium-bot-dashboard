import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ModulesGrid } from "@/components/site/ModulesGrid";
import { SecuritySection } from "@/components/site/SecuritySection";

export const Route = createFileRoute('/features')({
  head: () => ({
    meta: [
      { title: "Features — Sentinel" },
      { name: "description", content: "Antinuke, automod, tickets, verification, giveaways, analytics — explore every Sentinel module." },
      { property: "og:title", content: "Features — Sentinel" },
      { property: "og:description", content: "Explore every Sentinel security and moderation module." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  });


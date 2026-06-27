import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { ModulesGrid } from "@/components/site/ModulesGrid";
import { SecuritySection } from "@/components/site/SecuritySection";
import { PricingTeaser } from "@/components/site/PricingTeaser";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Titanium Security — Enterprise Discord Security & Moderation" },
      { name: "description", content: "Automate sovereignty over your Discord server. Real-time antinuke, intelligent automod, forensic logging, tickets and analytics in one refined dashboard." },
      { property: "og:title", content: "Titanium Security — Enterprise Discord Security" },
      { property: "og:description", content: "The command center for Discord — antinuke, automod, verification, tickets and analytics." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <StatsStrip />
      <ModulesGrid />
      <SecuritySection />
      <PricingTeaser />
    </SiteShell>
  );
}

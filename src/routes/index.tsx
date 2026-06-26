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
      { name: "description", content: "Fortify your Discord server with Titanium Security. Instant antinuke containment, zero-latency automod, forensic log streams, and custom role gatekeeping." },
      { property: "og:title", content: "Titanium Security — Enterprise Discord Security & Moderation" },
      { property: "og:description", content: "Automate security over your Discord community. Real-time antinuke, intelligent automod, forensic logging, tickets and verification in one unified bot." },
      { property: "og:url", content: "https://titaniumsecurity.dpdns.org/" },
    ],
    links: [{ rel: "canonical", href: "https://titaniumsecurity.dpdns.org/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Titanium Security",
          "operatingSystem": "Discord",
          "applicationCategory": "SecurityApplication",
          "description": "Enterprise-grade security, moderation, antinuke, and automod bot for Discord servers.",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1284"
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Titanium Security - Discord Security Bot",
          "description": "Enterprise-grade Discord security, moderation and antinuke protection."
        })
      }
    ]
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

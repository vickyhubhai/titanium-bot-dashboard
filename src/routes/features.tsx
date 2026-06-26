import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ModulesGrid } from "@/components/site/ModulesGrid";
import { SecuritySection } from "@/components/site/SecuritySection";
import { TechSpecs } from "@/components/site/TechSpecs";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Titanium Security Discord Bot" },
      { name: "description", content: "Antinuke protection, zero-latency automod, integrated ticket workflows, custom oauth verification and logs — explore Titanium Security capabilities." },
      { property: "og:title", content: "Features — Titanium Security Discord Bot" },
      { property: "og:description", content: "Antinuke, automod, tickets, verification, giveaways, analytics — explore every Titanium Security module." },
      { property: "og:url", content: "https://titaniumsecurity.dpdns.org/features" },
    ],
    links: [{ rel: "canonical", href: "https://titaniumsecurity.dpdns.org/features" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Titanium Security Bot Features",
          "image": "https://titaniumsecurity.dpdns.org/og-image.png",
          "description": "Antinuke protection, automod, ticketing, custom role configuration, and verification tools for Discord.",
          "brand": {
            "@type": "Brand",
            "name": "Titanium Security"
          },
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://titaniumsecurity.dpdns.org/features"
          }
        })
      }
    ]
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <SiteShell>
      <section className="px-6 pb-10 pt-10 text-center">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-brand">── Capabilities</div>
        <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
          Every layer of your server,
          <br />
          <span className="text-muted-foreground">built for the worst day.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          From real-time antinuke triggers to ML-driven analytics, Titanium Security covers every surface of community operations.
        </p>
      </section>
      <ModulesGrid />
      <SecuritySection />
      <TechSpecs />
    </SiteShell>
  );
}
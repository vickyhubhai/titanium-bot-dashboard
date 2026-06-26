import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ModulesGrid } from "@/components/site/ModulesGrid";
import { SecuritySection } from "@/components/site/SecuritySection";
import { TechSpecs } from "@/components/site/TechSpecs";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Titanium Security" },
      { name: "description", content: "Antinuke, automod, tickets, verification, giveaways, analytics — explore every Titanium Security module." },
      { property: "og:title", content: "Features — Titanium Security" },
      { property: "og:description", content: "Explore every Titanium Security security and moderation module." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
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
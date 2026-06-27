import { createLazyFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ModulesGrid } from "@/components/site/ModulesGrid";
import { SecuritySection } from "@/components/site/SecuritySection";

export const Route = createLazyFileRoute('/features')({
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
          From real-time antinuke triggers to ML-driven analytics, Sentinel covers every surface of community operations.
        </p>
      </section>
      <ModulesGrid />
      <SecuritySection />
    </SiteShell>
  );
}
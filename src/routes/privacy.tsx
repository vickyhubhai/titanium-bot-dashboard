import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Titanium Security" },
      { name: "description", content: "Privacy policy describing how Titanium Security Discord bot collects, processes, and protects server configuration data and audit logs." },
      { property: "og:title", content: "Privacy Policy — Titanium Security" },
      { property: "og:description", content: "Understand how Titanium Security protects and processes server data and configurations." },
      { property: "og:url", content: "https://titaniumsecurity.dpdns.org/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://titaniumsecurity.dpdns.org/privacy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Titanium Security Privacy Policy",
          "description": "Details on user data collection, telemetry logs, and privacy protections for the Titanium Security platform."
        })
      }
    ]
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Privacy" title="Privacy policy" sub="Last updated June 1, 2026. This page is maintained by Titanium Security and describes how the service handles your data." />
      <article className="mx-auto max-w-3xl space-y-8 px-6 pb-28 text-sm leading-7 text-muted-foreground">
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-foreground">Data we collect</h2>
          <p>To deliver the service, Titanium Security processes account identifiers from Discord (user ID, guild ID, role IDs), bot configuration you set up, and operational telemetry such as command counts and error rates.</p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-foreground">Data we do not collect</h2>
          <p>Titanium Security does not store the contents of user messages unless they are explicitly logged by a moderation action you configure. We do not train models on community content.</p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-foreground">Subprocessors</h2>
          <p>Titanium Security relies on a small set of infrastructure providers for hosting, database, and edge delivery. A current list is available on request.</p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-foreground">Your rights</h2>
          <p>You may request export or deletion of your guild's configuration and logs at any time by writing to privacy@Titanium Security.app.</p>
        </section>
      </article>
    </SiteShell>
  );
}
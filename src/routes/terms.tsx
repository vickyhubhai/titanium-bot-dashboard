import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Titanium Security" },
      { name: "description", content: "The terms that govern your use of Titanium Security." },
      { property: "og:title", content: "Terms — Titanium Security" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Legal" title="Terms of service" sub="Last updated June 1, 2026." />
      <article className="mx-auto max-w-3xl space-y-8 px-6 pb-28 text-sm leading-7 text-muted-foreground">
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-foreground">Acceptable use</h2>
          <p>You agree to use Titanium Security only for lawful purposes and in accordance with Discord's Terms of Service and Community Guidelines.</p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-foreground">Service availability</h2>
          <p>We strive for high availability but do not guarantee uninterrupted service on the Free plan. Premium and Enterprise plans include service-level commitments.</p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-foreground">Billing</h2>
          <p>Premium subscriptions renew monthly unless cancelled. Refunds for unused time on annual plans are issued on request, prorated to the day.</p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-bold text-foreground">Termination</h2>
          <p>We may suspend or terminate access for violation of these terms or for abuse that endangers other users.</p>
        </section>
      </article>
    </SiteShell>
  );
}
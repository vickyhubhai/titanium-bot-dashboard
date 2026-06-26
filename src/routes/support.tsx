import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Book, MessageSquare, LifeBuoy, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Hub — Titanium Security Discord Bot" },
      { name: "description", content: "Get technical support for Titanium Security bot configuration, permissions, and features. Search our knowledge base or join the support server." },
      { property: "og:title", content: "Support Hub — Titanium Security Discord Bot" },
      { property: "og:description", content: "Get setup help, view documentation, or join our community server for priority developer assistance." },
      { property: "og:url", content: "https://titaniumsecurity.dpdns.org/support" },
    ],
    links: [{ rel: "canonical", href: "https://titaniumsecurity.dpdns.org/support" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Is Titanium Security free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — core protection is free for up to 3 servers." } },
          { "@type": "Question", "name": "How do I add Titanium Security?", "acceptedAnswer": { "@type": "Answer", "text": "Click Invite Bot on the header, sign in with Discord, and authorise on your server." } },
        ],
      }),
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Titanium Security Contact & Help Support Hub",
        "description": "Technical support resources and direct lines for help.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "technical support",
          "email": "thegreatlordvicky185@gmail.com",
          "url": "https://discord.gg/UXKWfgWgth",
          "availableLanguage": "en"
        }
      })
    }],
  }),
  component: SupportPage,
});

const faqs = [
  { q: "Is Titanium Security free?", a: "Yes. The Free plan covers up to 3 servers with core antinuke, automod, verification and tickets." },
  { q: "How do I add Titanium Security to my server?", a: "Click Invite Bot on the navigation bar, sign in with Discord, and select the server you want to protect." },
  { q: "Will Titanium Security work alongside other bots?", a: "Yes. Titanium Security respects role hierarchy and can be configured to ignore actions taken by other trusted bots." },
  { q: "How is my data handled?", a: "Configuration and logs are encrypted at rest. We never train models on community content." },
  { q: "Can I export my settings?", a: "Premium servers get import/export capabilities and on-demand backups via direct bot commands." },
  { q: "How fast is incident response?", a: "Premium customers route to a priority queue with a 4-hour business-day SLA." },
];

function SupportPage() {
  const [q, setQ] = useState("");

  const filtered = faqs.filter((f) => f.q.toLowerCase().includes(q.toLowerCase()) || f.a.toLowerCase().includes(q.toLowerCase()));

  return (
    <SiteShell>
      <PageHeader eyebrow="Support" title="Get unstuck, fast." sub="Search the knowledge base or jump straight to a real human." />
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
          <Search className="size-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search topics, errors, configuration..."
            aria-label="Search support"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-12 md:grid-cols-3">
        {[
          { icon: Book, t: "Documentation", d: "Guides, references and tutorials.", to: "/docs" },
          { icon: MessageSquare, t: "Community", d: "Talk to other operators on Discord.", to: "https://discord.gg/UXKWfgWgth" },
          { icon: LifeBuoy, t: "Contact us", d: "Open a ticket with our team.", to: "/contact" },
        ].map((c) => {
          const isExternal = c.to.startsWith("http");
          const cardContent = (
            <>
              <c.icon className="mb-3 size-5 text-brand" />
              <div className="font-display text-lg font-bold">{c.t}</div>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </>
          );

          if (isExternal) {
            return (
              <a
                key={c.t}
                href={c.to}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 transition-transform hover:scale-[1.01]"
              >
                {cardContent}
              </a>
            );
          }

          return (
            <Link
              key={c.t}
              to={c.to as any}
              className="glass rounded-2xl p-5 transition-transform hover:scale-[1.01]"
            >
              {cardContent}
            </Link>
          );
        })}
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-28">
        <h2 className="mb-4 font-display text-xl font-bold">Frequently asked</h2>
        <div className="space-y-3">
          {filtered.map((f) => (
            <details key={f.q} className="glass group rounded-2xl px-5 py-4">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold">
                {f.q}
                <span className="font-mono text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
          {filtered.length === 0 && (
            <div className="glass rounded-2xl p-6 text-center text-sm text-muted-foreground">No results. Try different keywords.</div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
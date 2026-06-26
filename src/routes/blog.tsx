import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Field Notes — Titanium Security" },
      { name: "description", content: "Guides, tutorials, release notes, and field reports on Discord security, moderation strategy, and anti-nuke platform engineering." },
      { property: "og:title", content: "Blog & Field Notes — Titanium Security" },
      { property: "og:description", content: "Field notes on Discord security, moderation strategy, and the engineering behind Titanium Security — fresh writing from the team." },
      { property: "og:url", content: "https://titaniumsecurity.dpdns.org/blog" },
    ],
    links: [{ rel: "canonical", href: "https://titaniumsecurity.dpdns.org/blog" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Titanium Security Blog",
        "description": "Writing on Discord security, moderation strategy, and platform engineering.",
        "url": "https://titaniumsecurity.dpdns.org/blog",
        "blogPost": [
          { "@type": "BlogPosting", "headline": "Anatomy of a Discord nuke", "datePublished": "2026-06-12", "url": "https://titaniumsecurity.dpdns.org/blog/anatomy-of-a-nuke" },
          { "@type": "BlogPosting", "headline": "Automod, but make it readable", "datePublished": "2026-05-28", "url": "https://titaniumsecurity.dpdns.org/blog/automod-philosophy" },
          { "@type": "BlogPosting", "headline": "Tickets, redesigned from first principles", "datePublished": "2026-05-04", "url": "https://titaniumsecurity.dpdns.org/blog/tickets-redesigned" },
          { "@type": "BlogPosting", "headline": "A performance budget for moderation bots", "datePublished": "2026-04-17", "url": "https://titaniumsecurity.dpdns.org/blog/perf-budget" }
        ]
      }),
    }],
  }),
  component: BlogPage,
});

export const posts = [
  { slug: "anatomy-of-a-nuke", t: "Anatomy of a Discord nuke", d: "How attackers chain webhooks, role edits and bulk deletes — and how Titanium Security breaks the chain in under 200ms.", tag: "Discord Security", date: "Jun 12, 2026" },
  { slug: "automod-philosophy", t: "Automod, but make it readable", d: "Why we replaced regex rule lists with a typed declarative policy language.", tag: "Guides", date: "May 28, 2026" },
  { slug: "tickets-redesigned", t: "Tickets, redesigned from first principles", d: "Threaded, queued, auditable. The model behind Titanium Security's new ticket pipeline.", tag: "Bot Updates", date: "May 04, 2026" },
  { slug: "perf-budget", t: "A performance budget for moderation bots", d: "Why p99 latency under 50ms is the only target that matters during a raid.", tag: "Discord Moderation", date: "Apr 17, 2026" },
  { slug: "captcha-setup", t: "How to configure CAPTCHA verification", d: "A step-by-step guide to setting up VPN blocking and CAPTCHA gates for new joins.", tag: "Tutorials", date: "Jun 24, 2026" },
  { slug: "version-2-release", t: "Titanium Security v2.4.0 Release Notes", d: "Performance upgrades, custom branding tokens, and detailed audit exports are now live.", tag: "Release Notes", date: "Jun 20, 2026" },
  { slug: "community-standards", t: "Building healthy Discord community guidelines", d: "Best practices for training moderators, handling appeals, and setting channel scopes.", tag: "Community", date: "May 15, 2026" }
];

const categories = ["All", "Discord Security", "Discord Moderation", "Bot Updates", "Tutorials", "Guides", "Community", "Release Notes"];

function BlogPage() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredPosts = useMemo(() => {
    if (selectedCat === "All") return posts;
    return posts.filter(p => p.tag === selectedCat);
  }, [selectedCat]);

  return (
    <SiteShell>
      <PageHeader eyebrow="Blog" title="Field notes from the security front line." />

      {/* Category selector */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${selectedCat === c ? "bg-brand text-white" : "glass-subtle text-muted-foreground hover:text-foreground"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-28 md:grid-cols-2">
        {filteredPosts.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="glass group flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-brand/30 via-brand-glow/20 to-transparent" />
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="text-brand">{p.tag}</span>
              <span>·</span>
              <span>{p.date}</span>
            </div>
            <h2 className="font-display text-xl font-bold leading-tight group-hover:text-brand">{p.t}</h2>
            <p className="text-sm text-muted-foreground">{p.d}</p>
          </Link>
        ))}
        {filteredPosts.length === 0 && (
          <div className="col-span-2 glass rounded-2xl p-10 text-center text-sm text-muted-foreground">
            No articles published under this category yet. Stay tuned!
          </div>
        )}
      </section>
    </SiteShell>
  );
}
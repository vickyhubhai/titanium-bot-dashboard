import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/blog')({
  head: () => ({
    meta: [
      { title: "Blog — Sentinel" },
      { name: "description", content: "Writing on Discord security, moderation strategy, and platform engineering." },
      { property: "og:title", content: "Blog — Sentinel" },
      { property: "og:description", content: "Field notes on Discord security, moderation strategy, and the engineering behind Sentinel — fresh writing from the team." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Sentinel Blog",
        description: "Writing on Discord security, moderation strategy, and platform engineering.",
        url: "https://astral-dashboard-73.lovable.app/blog",
        blogPost: [
          { "@type": "BlogPosting", headline: "Anatomy of a Discord nuke", datePublished: "2026-06-12", url: "https://astral-dashboard-73.lovable.app/blog" },
          { "@type": "BlogPosting", headline: "Automod, but make it readable", datePublished: "2026-05-28", url: "https://astral-dashboard-73.lovable.app/blog" },
          { "@type": "BlogPosting", headline: "Tickets, redesigned from first principles", datePublished: "2026-05-04", url: "https://astral-dashboard-73.lovable.app/blog" },
          { "@type": "BlogPosting", headline: "A performance budget for moderation bots", datePublished: "2026-04-17", url: "https://astral-dashboard-73.lovable.app/blog" },
        ],
      }),
    }],
  }),
  });

const posts = [
  { slug: "anatomy-of-a-nuke", t: "Anatomy of a Discord nuke", d: "How attackers chain webhooks, role edits and bulk deletes — and how Sentinel breaks the chain in under 200ms.", tag: "Security", date: "Jun 12, 2026" },
  { slug: "automod-philosophy", t: "Automod, but make it readable", d: "Why we replaced regex rule lists with a typed declarative policy language.", tag: "Engineering", date: "May 28, 2026" },
  { slug: "tickets-redesigned", t: "Tickets, redesigned from first principles", d: "Threaded, queued, auditable. The model behind Sentinel's new ticket pipeline.", tag: "Product", date: "May 04, 2026" },
  { slug: "perf-budget", t: "A performance budget for moderation bots", d: "Why p99 latency under 50ms is the only target that matters during a raid.", tag: "Engineering", date: "Apr 17, 2026" },
];


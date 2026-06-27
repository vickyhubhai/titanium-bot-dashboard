import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ArrowLeft } from "lucide-react";

const posts: Record<string, { t: string; d: string; tag: string; date: string; body: string[] }> = {
  "anatomy-of-a-nuke": {
    t: "Anatomy of a Discord nuke",
    d: "How attackers chain webhooks, role edits and bulk deletes — and how Sentinel breaks the chain in under 200ms.",
    tag: "Security",
    date: "Jun 12, 2026",
    body: [
      "A nuke is rarely a single action. It is a choreography: a compromised role, a webhook spray, a wave of channel deletes, and a final round of bans before staff notice.",
      "We break the chain by treating role escalation as the precondition for everything else. The moment a role gains administrative permissions outside an approved change window, every downstream destructive action enters a 200ms hold.",
      "That hold is the difference between a recoverable incident and a public obituary. In practice, fewer than two percent of holds turn out to be legitimate — and every one of those is auditable.",
    ],
  },
  "automod-philosophy": {
    t: "Automod, but make it readable",
    d: "Why we replaced regex rule lists with a typed declarative policy language.",
    tag: "Engineering",
    date: "May 28, 2026",
    body: [
      "Regex rule lists fail the same way every time: they grow, they overlap, and eventually the only person who can read them leaves the team.",
      "We replaced ours with a typed declarative language. Rules read like English, compile to a single decision graph, and ship with semantic diffs in the audit log.",
      "The win is not faster matching — it is faster onboarding. New operators ship their first rule on day one because they can read the existing ones without asking.",
    ],
  },
  "tickets-redesigned": {
    t: "Tickets, redesigned from first principles",
    d: "Threaded, queued, auditable. The model behind Sentinel's new ticket pipeline.",
    tag: "Product",
    date: "May 04, 2026",
    body: [
      "The old ticket model assumed one channel per ticket. That worked at fifty tickets a week. It collapsed at five hundred.",
      "The new model uses Discord threads as the primary surface, a queue for unassigned work, and an explicit handoff event between staff. Every state transition is logged.",
      "Net result: median time-to-first-response down 62%, and the moderation team stopped needing a separate spreadsheet.",
    ],
  },
  "perf-budget": {
    t: "A performance budget for moderation bots",
    d: "Why p99 latency under 50ms is the only target that matters during a raid.",
    tag: "Engineering",
    date: "Apr 17, 2026",
    body: [
      "Average latency lies. During a raid, the average reflects the calm 99% of seconds and hides the burst that actually decided the outcome.",
      "We set our budget at p99 under 50ms across all decisioning paths — antinuke, automod, verification, anti-raid. Anything that would push that number is rejected at design review.",
      "It is an unglamorous discipline. It is also the only one that matters when the queue is full.",
    ],
  },
};

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = posts[params.slug];
    if (!post) throw notFound();
    return { post, slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.t} — Sentinel Blog` : "Post — Sentinel Blog";
    const desc = post?.d ?? "An article from the Sentinel blog.";
    const url = `https://titaniumsecurity.dpdns.org//blog/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: post
        ? [{
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.t,
            description: post.d,
            datePublished: post.date,
            articleSection: post.tag,
            url,
          }),
        }]
        : undefined,
    };
  },
});


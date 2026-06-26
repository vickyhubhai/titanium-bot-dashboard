import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ArrowLeft, User, Calendar, Clock, BookOpen } from "lucide-react";
import { posts as postsList } from "./blog";

interface Section {
  id: string;
  title: string;
  text: string;
}

interface PostDetail {
  t: string;
  d: string;
  tag: string;
  date: string;
  updatedDate?: string;
  author: string;
  readingTime: string;
  sections: Section[];
}

const posts: Record<string, PostDetail> = {
  "anatomy-of-a-nuke": {
    t: "Anatomy of a Discord nuke",
    d: "How attackers chain webhooks, role edits and bulk deletes — and how Titanium Security breaks the chain in under 200ms.",
    tag: "Discord Security",
    date: "2026-06-12",
    updatedDate: "2026-06-13",
    author: "Titanium Security Team",
    readingTime: "4 min read",
    sections: [
      { id: "mechanics", title: "The Nuke Mechanics", text: "A nuke is rarely a single action. It is a choreography: a compromised role, a webhook spray, a wave of channel deletes, and a final round of bans before staff notice." },
      { id: "breaking-chain", title: "Breaking the Chain", text: "We break the chain by treating role escalation as the precondition for everything else. The moment a role gains administrative permissions outside an approved change window, every downstream destructive action enters a 200ms hold." },
      { id: "containment", title: "Containment hold results", text: "That hold is the difference between a recoverable incident and a public obituary. In practice, fewer than two percent of holds turn out to be legitimate — and every one of those is auditable." }
    ]
  },
  "automod-philosophy": {
    t: "Automod, but make it readable",
    d: "Why we replaced regex rule lists with a typed declarative policy language.",
    tag: "Guides",
    date: "2026-05-28",
    author: "Security Analyst",
    readingTime: "3 min read",
    sections: [
      { id: "regex-limits", title: "Limitations of Regex Lists", text: "Regex rule lists fail the same way every time: they grow, they overlap, and eventually the only person who can read them leaves the team." },
      { id: "declarative-rules", title: "Declarative Rule Engine", text: "We replaced ours with a typed declarative language. Rules read like English, compile to a single decision graph, and ship with semantic diffs in the audit log." },
      { id: "efficiency-wins", title: "Efficiency Wins", text: "The win is not faster matching — it is faster onboarding. New operators ship their first rule on day one because they can read the existing ones without asking." }
    ]
  },
  "tickets-redesigned": {
    t: "Tickets, redesigned from first principles",
    d: "Threaded, queued, auditable. The model behind Titanium Security's new ticket pipeline.",
    tag: "Bot Updates",
    date: "2026-05-04",
    author: "Product Lead",
    readingTime: "3 min read",
    sections: [
      { id: "tickets-scaling", title: "Scaling Ticket Channels", text: "The old ticket model assumed one channel per ticket. That worked at fifty tickets a week. It collapsed at five hundred." },
      { id: "thread-architecture", title: "Thread-based Architecture", text: "The new model uses Discord threads as the primary surface, a queue for unassigned work, and an explicit handoff event between staff. Every state transition is logged." },
      { id: "performance-metrics", title: "Performance Metrics", text: "Net result: median time-to-first-response down 62%, and the moderation team stopped needing a separate spreadsheet." }
    ]
  },
  "perf-budget": {
    t: "A performance budget for moderation bots",
    d: "Why p99 latency under 50ms is the only target that matters during a raid.",
    tag: "Discord Moderation",
    date: "2026-04-17",
    author: "Systems Architect",
    readingTime: "5 min read",
    sections: [
      { id: "latency-lies", title: "Why Average Latency Lies", text: "Average latency lies. During a raid, the average reflects the calm 99% of seconds and hides the burst that actually decided the outcome." },
      { id: "ms-budget", title: "Setting a 50ms Budget", text: "We set our budget at p99 under 50ms across all decisioning paths — antinuke, automod, verification, anti-raid. Anything that would push that number is rejected at design review." },
      { id: "discipline", title: "Engineering Discipline", text: "It is an unglamorous discipline. It is also the only one that matters when the queue is full." }
    ]
  },
  "captcha-setup": {
    t: "How to configure CAPTCHA verification",
    d: "A step-by-step guide to setting up VPN blocking and CAPTCHA gates for new joins.",
    tag: "Tutorials",
    date: "2026-06-24",
    author: "Integration Specialist",
    readingTime: "4 min read",
    sections: [
      { id: "captcha-intro", title: "Why CAPTCHA matters", text: "Automated user accounts and self-bots can join servers by the thousands. Without a gate, your lobby will be flooded within seconds." },
      { id: "activation", title: "Enabling CAPTCHA commands", text: "Run `/verification setup` inside Discord. Specify the unverified role and the channel where the verification button panel will be posted." },
      { id: "advanced-rules", title: "Advanced proxy blocking", text: "Configure proxy security limits with `/verification config block_vpn:true`. Titanium will check incoming IP pools and reject server joins from active hosting proxy networks." }
    ]
  },
  "version-2-release": {
    t: "Titanium Security v2.4.0 Release Notes",
    d: "Performance upgrades, custom branding tokens, and detailed audit exports are now live.",
    tag: "Release Notes",
    date: "2026-06-20",
    author: "Engineering Team",
    readingTime: "3 min read",
    sections: [
      { id: "release-overview", title: "Release Overview", text: "Version 2.4.0 introduces performance improvements to our Antinuke detection clusters, decreasing the detection window down to sub-15ms." },
      { id: "custom-tokens", title: "Custom Branding Tokens", text: "Premium subscribers can now upload their custom Discord tokens directly. The bot will compile and route commands under your own application ID." },
      { id: "audit-exports", title: "Audit Log CSV Exports", text: "Export server logs directly with `/logs export`. Generate offline spreadsheet summaries containing timestamped moderation activities." }
    ]
  },
  "community-standards": {
    t: "Building healthy Discord community guidelines",
    d: "Best practices for training moderators, handling appeals, and setting channel scopes.",
    tag: "Community",
    date: "2026-05-15",
    author: "Community Liaison",
    readingTime: "4 min read",
    sections: [
      { id: "moderator-training", title: "Moderator Training & Rules", text: "Set clear guidelines for what constitutes a warning, a timeout, or a ban. Unclear rules lead to moderator bias and user frustration." },
      { id: "appeal-process", title: "Handling Appeals fairly", text: "Set up a ticket category for user appeals. Direct unverified or banned users to appeals forms so moderators can review cases in private queues." },
      { id: "channel-safety", title: "Securing channel permissions", text: "Limit admin permissions. Only absolute owners should have roles with administrator permissions. Use Titanium Antinuke to monitor regular roles." }
    ]
  }
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts[params.slug];
    if (!post) throw notFound();
    return { post, slug: params.slug };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.t} — Titanium Security Blog` : "Post — Titanium Security Blog";
    const desc = post?.d ?? "An article from the Titanium Security blog.";
    const url = `https://titaniumsecurity.dpdns.org/blog/${params.slug}`;
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
            "@type": "BlogPosting",
            "headline": post.t,
            "description": post.d,
            "datePublished": post.date,
            "dateModified": post.updatedDate ?? post.date,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Titanium Security",
              "logo": {
                "@type": "ImageObject",
                "url": "https://titaniumsecurity.dpdns.org/favicon.svg"
              }
            },
            "articleSection": post.tag,
            "url": url,
          }),
        }]
        : undefined,
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, slug } = Route.useLoaderData();

  // Find related posts (exclude current post and limit to 2)
  const relatedPosts = Object.entries(posts)
    .filter(([key]) => key !== slug)
    .slice(0, 2);

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" aria-hidden /> All posts
        </Link>

        {/* Post header */}
        <div className="mb-6 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="text-brand font-bold">{post.tag}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><User className="size-3" /> {post.author}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Calendar className="size-3" /> {post.date}</span>
          {post.updatedDate && (
            <>
              <span>·</span>
              <span>Updated: {post.updatedDate}</span>
            </>
          )}
          <span>·</span>
          <span className="flex items-center gap-1"><Clock className="size-3" /> {post.readingTime}</span>
        </div>

        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-foreground">
          {post.t}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          {post.d}
        </p>

        {/* Content Layout: Article + TOC Sidebar */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_240px]">
          {/* Main Article Content */}
          <article className="space-y-10 text-base leading-relaxed text-foreground/90">
            {post.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground border-b border-border/20 pb-2">
                  {sec.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{sec.text}</p>
              </section>
            ))}
          </article>

          {/* Table of Contents Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 glass rounded-2xl p-5 border border-white/5">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold mb-4 flex items-center gap-1.5">
                <BookOpen className="size-3 text-brand" /> Table of Contents
              </h3>
              <nav className="space-y-3">
                {post.sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-xs text-muted-foreground hover:text-brand transition-colors truncate"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        {/* Related Posts Section */}
        <section className="mt-20 border-t border-border/40 pt-16">
          <h3 className="font-display text-2xl font-bold mb-8">Related posts</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map(([key, p]) => (
              <Link
                key={key}
                to="/blog/$slug"
                params={{ slug: key }}
                className="glass group flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-brand/30 via-brand-glow/20 to-transparent" />
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span className="text-brand">{p.tag}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h4 className="font-display text-lg font-bold leading-tight group-hover:text-brand">{p.t}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{p.d}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createLazyFileRoute('/blog')({
  component: BlogPage,
});

const posts = [
  { slug: "anatomy-of-a-nuke", t: "Anatomy of a Discord nuke", d: "How attackers chain webhooks, role edits and bulk deletes — and how Titanium Security breaks the chain in under 200ms.", tag: "Security", date: "Jun 12, 2026" },
  { slug: "automod-philosophy", t: "Automod, but make it readable", d: "Why we replaced regex rule lists with a typed declarative policy language.", tag: "Engineering", date: "May 28, 2026" },
  { slug: "tickets-redesigned", t: "Tickets, redesigned from first principles", d: "Threaded, queued, auditable. The model behind Titanium Security's new ticket pipeline.", tag: "Product", date: "May 04, 2026" },
  { slug: "perf-budget", t: "A performance budget for moderation bots", d: "Why p99 latency under 50ms is the only target that matters during a raid.", tag: "Engineering", date: "Apr 17, 2026" },
];

function BlogPage() {
  return (
    <SiteShell>
      <PageHeader eyebrow="Blog" title="Field notes from the security front line." />
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-28 md:grid-cols-2">
        {posts.map((p) => (
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
      </section>
    </SiteShell>
  );
}
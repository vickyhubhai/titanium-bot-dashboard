import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Book, MessageSquare, LifeBuoy, Search } from "lucide-react";
import { useState } from "react";

export const Route = createLazyFileRoute('/support')({
  component: SupportPage,
});

const faqs = [
  { q: "Is Sentinel free?", a: "Yes. The Free plan covers up to 3 servers with core antinuke, automod, verification and tickets." },
  { q: "How do I add Sentinel to my server?", a: "Open the dashboard, sign in with Discord, and authorise the bot on the server you want to protect." },
  { q: "Will Sentinel work alongside other bots?", a: "Yes. Sentinel respects role hierarchy and can be configured to ignore actions taken by trusted bots." },
  { q: "How is my data handled?", a: "Configuration and logs are encrypted at rest. We never train models on community content." },
  { q: "Can I export my settings?", a: "Premium servers get import/export and on-demand backups from the dashboard." },
  { q: "How fast is incident response?", a: "Premium customers route to a priority queue with a 4-hour business-day SLA." },
];

function SupportPage() {
  const [q, setQ] = useState("");
  const filtered = faqs.filter((f) => f.q.toLowerCase().includes(q.toLowerCase()));

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
          { icon: Book, t: "Documentation", d: "Guides, references and tutorials.", to: "/docs" as const },
          { icon: MessageSquare, t: "Community", d: "Talk to other operators on Discord.", to: "/contact" as const },
          { icon: LifeBuoy, t: "Contact us", d: "Open a ticket with our team.", to: "/contact" as const },
        ].map((c) => (
          <Link key={c.t} to={c.to} className="glass rounded-2xl p-5 transition-transform hover:scale-[1.01]">
            <c.icon className="mb-3 size-5 text-brand" />
            <div className="font-display text-lg font-bold">{c.t}</div>
            <p className="text-sm text-muted-foreground">{c.d}</p>
          </Link>
        ))}
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
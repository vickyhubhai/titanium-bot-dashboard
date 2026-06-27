import { createLazyFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createLazyFileRoute('/commands')({
  component: CommandsPage,
});

type Cmd = { name: string; category: string; usage: string; desc: string; premium?: boolean };

const commands: Cmd[] = [
  { name: "/antinuke enable", category: "Security", usage: "/antinuke enable", desc: "Activates core antinuke protection on the current server." },
  { name: "/antinuke whitelist", category: "Security", usage: "/antinuke whitelist <user>", desc: "Whitelist a trusted user from antinuke punishments." },
  { name: "/raidmode on", category: "Security", usage: "/raidmode on [duration]", desc: "Force a temporary raid lockdown. Slows joins and DMs." },
  { name: "/automod test", category: "Moderation", usage: "/automod test <text>", desc: "Run a string against the active automod ruleset.", premium: true },
  { name: "/ban", category: "Moderation", usage: "/ban <user> [reason]", desc: "Ban a user with full audit logging." },
  { name: "/timeout", category: "Moderation", usage: "/timeout <user> <duration>", desc: "Apply a Discord timeout with a reason." },
  { name: "/ticket open", category: "Tickets", usage: "/ticket open [category]", desc: "Open a new ticket in the configured panel." },
  { name: "/verify", category: "Verification", usage: "/verify", desc: "Trigger the verification flow for the calling user." },
  { name: "/giveaway start", category: "Community", usage: "/giveaway start <prize> <duration>", desc: "Start a giveaway with optional role requirements." },
  { name: "/embed", category: "Utility", usage: "/embed [json|builder]", desc: "Open the embed builder or post a raw JSON embed." },
  { name: "/backup create", category: "Premium", usage: "/backup create", desc: "Snapshot roles, channels and permissions.", premium: true },
  { name: "/analytics summary", category: "Analytics", usage: "/analytics summary", desc: "Post a quick activity summary to the channel.", premium: true },
];

const categories = ["All", ...Array.from(new Set(commands.map((c) => c.category)))];

function CommandsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(
    () => commands.filter((c) =>
      (cat === "All" || c.category === cat) &&
      (c.name.toLowerCase().includes(q.toLowerCase()) || c.desc.toLowerCase().includes(q.toLowerCase()))
    ),
    [q, cat]
  );

  return (
    <SiteShell>
      <PageHeader eyebrow="Commands" title="Every command, indexed." sub="Slash commands with rich autocomplete. Most have a dashboard equivalent." />
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="glass flex items-center gap-3 rounded-2xl px-5 py-3">
          <Search className="size-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search commands..."
            aria-label="Search commands"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                cat === c ? "bg-brand text-white" : "glass-subtle text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl space-y-2 px-6 pb-28">
        {filtered.map((c) => (
          <div key={c.name} className="glass flex flex-wrap items-center gap-4 rounded-2xl p-5">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <code className="font-mono text-sm font-semibold text-brand">{c.name}</code>
                {c.premium && <span className="rounded-full bg-brand/15 px-2 py-0.5 font-mono text-[9px] font-semibold text-brand">PRO</span>}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </div>
            <code className="rounded-lg bg-black/40 px-3 py-1.5 font-mono text-xs text-muted-foreground">{c.usage}</code>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.category}</span>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="glass rounded-2xl p-10 text-center text-sm text-muted-foreground">No commands match your filter.</div>
        )}
      </section>
    </SiteShell>
  );
}
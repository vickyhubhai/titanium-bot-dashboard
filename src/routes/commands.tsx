import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/commands")({
  head: () => ({
    meta: [
      { title: "Commands — Titanium Security" },
      { name: "description", content: "Every Titanium Security command, searchable. Slash commands, prefix commands and context menus." },
      { property: "og:title", content: "Commands — Titanium Security" },
      { property: "og:url", content: "/commands" },
    ],
    links: [{ rel: "canonical", href: "/commands" }],
  }),
  component: CommandsPage,
});

type Cmd = { name: string; category: string; usage: string; desc: string; premium?: boolean };

const commands: Cmd[] = [
  // Moderation
  { name: "/ban", category: "Moderation", usage: "/ban <user> [reason]", desc: "Bans a user from the server and logs the action." },
  { name: "/kick", category: "Moderation", usage: "/kick <user> [reason]", desc: "Kicks a user from the server." },
  { name: "/timeout", category: "Moderation", usage: "/timeout <user> <duration> [reason]", desc: "Times out a user for a set duration." },
  { name: "/warn", category: "Moderation", usage: "/warn <user> <reason>", desc: "Issues a formal warning to a user." },
  { name: "/purge", category: "Moderation", usage: "/purge <amount>", desc: "Bulk deletes up to 100 messages from the channel." },

  // Security
  { name: "/antinuke enable", category: "Security", usage: "/antinuke enable", desc: "Enables core antinuke protection limits." },
  { name: "/antinuke whitelist", category: "Security", usage: "/antinuke whitelist <user>", desc: "Whitelists a trusted admin from antinuke constraints." },
  { name: "/raidmode on", category: "Security", usage: "/raidmode on [duration]", desc: "Enforces raid mode, applying gate restrictions to incoming joins." },
  { name: "/verification setup", category: "Security", usage: "/verification setup", desc: "Initializes the verification setup and links visual CAPTCHA gates." },
  { name: "/lockdown", category: "Security", usage: "/lockdown [channel]", desc: "Locks down text channels to prevent chat floods." },

  // Utility
  { name: "/embed create", category: "Utility", usage: "/embed create", desc: "Opens the modal builder to construct rich custom embeds." },
  { name: "/giveaway start", category: "Utility", usage: "/giveaway start <prize> <duration>", desc: "Launches a giveaway draw with requirements." },
  { name: "/poll", category: "Utility", usage: "/poll <question> [options]", desc: "Initiates a voting poll in the current channel." },

  // Configuration
  { name: "/setup", category: "Configuration", usage: "/setup", desc: "Run the interactive guided setup utility for the bot." },
  { name: "/autorole", category: "Configuration", usage: "/autorole <role>", desc: "Configure roles to be automatically granted to new members." },
  { name: "/welcome set", category: "Configuration", usage: "/welcome set <channel>", desc: "Sets the welcome card destination channel." },

  // Logging
  { name: "/logs config", category: "Logging", usage: "/logs config <category>", desc: "Toggles logging categories on or off." },
  { name: "/logs channel", category: "Logging", usage: "/logs channel <channel>", desc: "Configures where bot audit logs should be written." },

  // Tickets
  { name: "/ticket setup", category: "Tickets", usage: "/ticket setup <channel>", desc: "Deploys the button-triggered ticket panels." },
  { name: "/ticket close", category: "Tickets", usage: "/ticket close [reason]", desc: "Closes the active support ticket and compiles transcripts." },

  // Fun
  { name: "/meme", category: "Fun", usage: "/meme", desc: "Fetches and posts a hot meme from community channels." },
  { name: "/coinflip", category: "Fun", usage: "/coinflip", desc: "Tosses a coin to return Heads or Tails." },

  // Information
  { name: "/help", category: "Information", usage: "/help [command]", desc: "Displays the dynamic command helper cards." },
  { name: "/botinfo", category: "Information", usage: "/botinfo", desc: "Renders server statistics and latency logs for the bot." },
  { name: "/ping", category: "Information", usage: "/ping", desc: "Checks API response latency and bot heartbeat." },
];

const categories = ["All", "Moderation", "Security", "Utility", "Configuration", "Logging", "Tickets", "Fun", "Information"];

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
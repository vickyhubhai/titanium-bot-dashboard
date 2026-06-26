import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { BookOpen, Zap, Shield, Key, Terminal, Settings, HelpCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation & Onboarding Guides — Titanium Security" },
      { name: "description", content: "Detailed setup tutorials, permission settings, slash command syntaxes, and troubleshooting guides for the Titanium Security bot." },
      { property: "og:title", content: "Documentation & Onboarding Guides — Titanium Security" },
      { property: "og:description", content: "Full configuration guides, permissions hierarchies, commands lists, and setup tutorials for Titanium Security." },
      { property: "og:url", content: "https://titaniumsecurity.dpdns.org/docs" },
    ],
    links: [{ rel: "canonical", href: "https://titaniumsecurity.dpdns.org/docs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to set up Titanium Security Bot",
          "description": "Step-by-step guide to installing and configuring the Titanium Security bot for Discord.",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Invite the Bot",
              "text": "Click the Invite Bot button to add the Titanium bot to your Discord server.",
              "url": "https://titaniumsecurity.dpdns.org/docs#getting-started"
            },
            {
              "@type": "HowToStep",
              "name": "Correct Role Position",
              "text": "Drag the Titanium Security bot role to the very top of your server's role list in Server Settings.",
              "url": "https://titaniumsecurity.dpdns.org/docs#permissions"
            },
            {
              "@type": "HowToStep",
              "name": "Configure Logging and Antinuke",
              "text": "Run /setup inside a chat channel to link logging channels and activate automod filters.",
              "url": "https://titaniumsecurity.dpdns.org/docs#bot-setup"
            }
          ]
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Titanium Security Technical Documentation",
          "description": "Comprehensive reference for Titanium Security bot commands, automation configurations, and anti-nuke triggers.",
          "articleSection": "Documentation"
        })
      }
    ]
  }),
  component: DocsPage,
});

interface DocSection {
  id: string;
  title: string;
  icon: any;
  content: React.ReactNode;
}

const docSections: DocSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Zap,
    content: (
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-bold">Getting Started</h3>
        <p className="text-sm leading-relaxed">Welcome to Titanium Security! Secure your server in just a few clicks. Follow this quick startup sequence:</p>
        <ol className="list-decimal list-inside space-y-2 text-sm pl-2">
          <li>Click the <a href="https://discord.com/api/oauth2/authorize?client_id=1456212834189971537&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">Invite Bot</a> link to add Titanium Security.</li>
          <li>Select the guild you want to secure from the dropdown list.</li>
          <li>Ensure the bot is granted the required permissions (especially <strong>Administrator</strong> or raw permission equivalents like Manage Roles, Manage Channels).</li>
          <li>Join the <a href="https://discord.gg/UXKWfgWgth" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">Support Server</a> to receive real-time notices.</li>
        </ol>
      </div>
    )
  },
  {
    id: "bot-setup",
    title: "Bot Setup",
    icon: Settings,
    content: (
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-bold">Bot Setup</h3>
        <p className="text-sm leading-relaxed">Once added to your server, initialize settings using the configuration commands:</p>
        <ul className="list-disc list-inside space-y-2 text-sm pl-2">
          <li><strong>Step 1:</strong> Type <code className="text-brand bg-black/35 px-1.5 py-0.5 rounded">/setup</code> to run the interactive setup wizard.</li>
          <li><strong>Step 2:</strong> Bind logging destinations via <code className="text-brand bg-black/35 px-1.5 py-0.5 rounded">/logs channel #logs</code>.</li>
          <li><strong>Step 3:</strong> Configure your base automated roles with <code className="text-brand bg-black/35 px-1.5 py-0.5 rounded">/autorole</code>.</li>
          <li><strong>Step 4:</strong> Deploy a verification gate by running <code className="text-brand bg-black/35 px-1.5 py-0.5 rounded">/verification setup</code>.</li>
        </ul>
      </div>
    )
  },
  {
    id: "permissions",
    title: "Permissions",
    icon: Key,
    content: (
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-bold">Permissions Required</h3>
        <p className="text-sm leading-relaxed">For Titanium Security to intercept attacks and nuke attempts, the Discord role hierarchy must be set correctly:</p>
        <div className="glass rounded-xl p-4 space-y-3 border-l-4 border-l-brand">
          <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground">Critical Rule: Role Position</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            The <strong>Titanium Security</strong> bot role MUST be dragged to the very top of your server's role list (above other moderators and admin roles). If Titanium is positioned below an attacker's role, Discord's permission system prevents Titanium from demoting them or stripping their permissions.
          </p>
        </div>
        <p className="text-sm leading-relaxed">Core permissions used by the bot:</p>
        <ul className="list-disc list-inside space-y-1 text-sm pl-2">
          <li><strong>Manage Roles:</strong> Required to demote attackers and assign verified roles.</li>
          <li><strong>Manage Channels:</strong> Required to restore deleted channels and apply lockdowns.</li>
          <li><strong>Kick/Ban Members:</strong> Required to remove spammers and bot accounts.</li>
        </ul>
      </div>
    )
  },
  {
    id: "commands",
    title: "Commands",
    icon: Terminal,
    content: (
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-bold">Commands Usage</h3>
        <p className="text-sm leading-relaxed">Titanium Security supports native Discord Slash commands. All parameters are verified in real-time with rich input autocomplete.</p>
        <p className="text-sm leading-relaxed">To view all commands inside Discord:</p>
        <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
          <li>Type <code className="text-brand bg-black/35 px-1.5 py-0.5 rounded">/help or ^help</code> and click the Titanium Security logo in the application sidebar.</li>
          <li>Browse categories or type terms directly.</li>
          <li>Refer to the website's <a href="/commands" className="text-brand font-semibold hover:underline">Commands Directory</a> for a complete list of syntaxes and arguments.</li>
        </ul>
      </div>
    )
  },
  {
    id: "configuration",
    title: "Configuration",
    icon: Shield,
    content: (
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-bold">Module Configuration</h3>
        <p className="text-sm leading-relaxed">Configuration is managed statically via bot commands. Toggle modules on or off with simple flags:</p>
        <div className="space-y-3">
          <div className="glass-subtle p-3 rounded-lg text-xs">
            <span className="font-mono text-brand font-semibold">/antinuke enable</span>
            <p className="text-muted-foreground mt-1">Activates real-time tracking of administrative events.</p>
          </div>
          <div className="glass-subtle p-3 rounded-lg text-xs">
            <span className="font-mono text-brand font-semibold">/automod config spam:true links:true</span>
            <p className="text-muted-foreground mt-1">Turns on specific chat protection filters instantly.</p>
          </div>
          <div className="glass-subtle p-3 rounded-lg text-xs">
            <span className="font-mono text-brand font-semibold">/ticket setup #support-channel</span>
            <p className="text-muted-foreground mt-1">Deploys ticket open panel buttons in the support channel.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: AlertCircle,
    content: (
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-bold">Troubleshooting</h3>
        <p className="text-sm leading-relaxed">Got stuck? Check these common problems and their solutions:</p>
        <div className="space-y-3.5">
          <div>
            <h4 className="font-semibold text-sm">Bot does not respond to command triggers</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Ensure the bot is online and has permission to view the channel you're typing in. Check Discord's status or reload your client.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm">Error: "Missing Permissions" when executing action</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Ensure the bot has administrator permissions and that the bot's role is drag-moved above the role of the target user you are moderation-actioning.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm">Automod is not blocking scam links</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Verify that automod links filter is active via <code className="text-brand bg-black/35 px-1 py-0.5 rounded">/automod config</code> and that staff members aren't whitelisted (admins bypass automod scans by design).</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "faq",
    title: "FAQ",
    icon: HelpCircle,
    content: (
      <div className="space-y-4">
        <h3 className="font-display text-2xl font-bold">Frequently Asked Questions</h3>
        <p className="text-sm leading-relaxed">Some quick answers to common questions:</p>
        <div className="space-y-3">
          <div>
            <span className="font-semibold text-sm text-foreground block">Is Titanium Security free to use?</span>
            <span className="text-xs text-muted-foreground block mt-0.5">Yes, core features (basic Antinuke, Automod, Verification, Tickets) are free for up to 3 servers. Advanced capabilities require Premium.</span>
          </div>
          <div>
            <span className="font-semibold text-sm text-foreground block">How do I whitelist users from Antinuke punishments?</span>
            <span className="text-xs text-muted-foreground block mt-0.5">Execute <code className="text-brand bg-black/35 px-1 py-0.5 rounded">/antinuke whitelist @user</code> to add trusted admins who can edit channels.</span>
          </div>
          <div>
            <span className="font-semibold text-sm text-foreground block">Does this bot store chat logs?</span>
            <span className="text-xs text-muted-foreground block mt-0.5">No, we value privacy. We do not store chat logs. Moderation logs are output immediately to your server's logs channel.</span>
          </div>
        </div>
      </div>
    )
  }
];

function DocsPage() {
  const [selectedId, setSelectedId] = useState("getting-started");
  const activeSection = docSections.find((s) => s.id === selectedId) || docSections[0];

  return (
    <SiteShell>
      <PageHeader eyebrow="Documentation" title="How to operate defense." sub="Full configuration guides, permissions hierarchies, commands lists, and setup tutorials." />

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <div className="flex flex-col gap-1">
            {docSections.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedId(s.id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider transition-colors ${selectedId === s.id
                    ? "bg-brand text-white shadow-lg shadow-brand/20"
                    : "glass text-muted-foreground hover:text-foreground hover:bg-white/[0.05]"
                    }`}
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Document Content */}
          <div className="glass rounded-3xl p-8 lg:p-10 text-muted-foreground">
            {activeSection.content}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
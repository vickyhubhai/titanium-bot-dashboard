import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { ShieldAlert, ShieldX, Bot, UserCheck, Ticket, ScrollText, Heart, Crown, ChevronRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Modules — Titanium Security" },
      { name: "description", content: "Explore the deep capabilities of Titanium Security. Anti Nuke, Intelligent Automod, Verification, Tickets and Logging." },
      { property: "og:title", content: "Modules — Titanium Security" },
      { property: "og:url", content: "/modules" },
    ],
    links: [{ rel: "canonical", href: "/modules" }],
  }),
  component: ModulesPage,
});

interface ModuleDetail {
  id: string;
  name: string;
  icon: any;
  tagline: string;
  desc: string;
  features: string[];
  benefits: string[];
  mockup: {
    title: string;
    lines: string[];
  };
}

const moduleDetails: ModuleDetail[] = [
  {
    id: "antinuke",
    name: "Anti Nuke & Anti Raid",
    icon: ShieldAlert,
    tagline: "Autonomous containment of hostiles.",
    desc: "Titanium's Anti Nuke triggers immediately when an administrator performs bulk operations (kicking members, deleting channels, creating webhook endpoints). Within milliseconds, the offending admin's roles are stripped and channels are locked down.",
    features: [
      "Bulk action limits (bans, kicks, role/channel creation & deletion)",
      "Strict Whitelist-only permissions override",
      "Auto-demotion: Strips roles from rogue admins instantly",
      "Auto-restore: Restores deleted channels and roles dynamically",
      "Raid mode joins buffer & auto-lockdown toggle"
    ],
    benefits: [
      "Zero-latency execution: Runs in under 20ms",
      "Absolute control: Whitelist overrides cannot be bypassed",
      "Fail-safe protection: Restores server state without data loss"
    ],
    mockup: {
      title: "titanium-antinuke-console",
      lines: [
        "[03:45:12] [ANTINUKE] Triggered: Admin 'Viper' deleted channel #general-chat",
        "[03:45:12] [ANTINUKE] Action: Auto-demoting admin 'Viper' (Strips 3 roles)",
        "[03:45:12] [ANTINUKE] Action: Re-creating channel #general-chat (Restoring permissions)",
        "[03:45:13] [ANTINUKE] Success: Sever state restored. Notification posted in logs."
      ]
    }
  },
  {
    id: "automod",
    name: "Intelligent Automod",
    icon: Bot,
    tagline: "Context-aware chat scanning.",
    desc: "Maintains a clean and safe chat environment. Scans text dynamically for malicious links, spam triggers, toxicity, and unauthorized Discord guild invites, taking action (deleting, warning, or muting) instantly.",
    features: [
      "Mass-mention and message-frequency limits (Anti Spam)",
      "Domain and link blacklisting & whitelisting (Anti Link)",
      "Banned terms and phrase wildcard matches",
      "Toxicity scanning using AI keyword mapping",
      "Spam raid pattern detection (Anti Scam)"
    ],
    benefits: [
      "Reduces manual moderation workload by 90%",
      "Protects community from malicious phishing sites",
      "Promotes constructive conversations automatically"
    ],
    mockup: {
      title: "titanium-automod-scanner",
      lines: [
        "[03:46:01] [AUTOMOD] Scan: Message from 'User129' in #chat contains blacklisted word",
        "[03:46:01] [AUTOMOD] Action: Message deleted (Spam Filter)",
        "[03:46:01] [AUTOMOD] Warned: User129 (Reason: Spam, warning count: 1/3)",
        "[03:46:05] [AUTOMOD] Scan: Message from 'Scammer' contains gift link. Purged."
      ]
    }
  },
  {
    id: "verification",
    name: "Verification Gates",
    icon: UserCheck,
    tagline: "Vetting members at the border.",
    desc: "Keeps bots and alt accounts out of your server. Enforces new joins to solve a CAPTCHA or authenticate via Discord OAuth before gaining access to talk.",
    features: [
      "Image CAPTCHA and text verification gates",
      "Discord OAuth account verification (checks account age)",
      "VPN and Proxy detection (auto-kick proxy joins)",
      "Unverified member auto-purge after customizable grace periods",
      "Verification logging and logs export"
    ],
    benefits: [
      "Completely blocks mass-join bot raids",
      "Restricts multi-boxing and alt account abuse",
      "Clean server stats representing real human members"
    ],
    mockup: {
      title: "titanium-gate-verification",
      lines: [
        "[03:47:20] [VERIFY] Join: Account 'ZetaBot' matched known VPN profile",
        "[03:47:20] [VERIFY] Action: Auto-kick 'ZetaBot' (Reason: Proxy / VPN forbidden)",
        "[03:47:22] [VERIFY] Join: Account 'HumanUser' requested verification",
        "[03:47:28] [VERIFY] Success: HumanUser solved CAPTCHA. Assigned role: Verified."
      ]
    }
  },
  {
    id: "tickets",
    name: "Enterprise Tickets",
    icon: Ticket,
    tagline: "Structured customer support on Discord.",
    desc: "No bot sprawl. Enable button panels so members can open private channels to message staff. Includes automatic transcript exports and staff logs.",
    features: [
      "Interactive button-triggered ticket panels",
      "Custom ticket categories (Support, Billing, Appeals)",
      "Transcript compiler: Generates beautiful offline HTML reports",
      "Staff response logs and ticket claiming features",
      "Auto-close timers for inactive tickets"
    ],
    benefits: [
      "Provides premium, private ticketing workflow",
      "Organized ticket claiming avoids duplicate responses",
      "Immutable HTML records kept for compliance audits"
    ],
    mockup: {
      title: "titanium-tickets-dashboard",
      lines: [
        "[03:48:02] [TICKETS] Ticket #ticket-0412 opened by 'MemberX'",
        "[03:48:05] [TICKETS] Staff 'AgentGrey' claimed ticket #ticket-0412",
        "[03:48:50] [TICKETS] Ticket closed by 'AgentGrey' (Reason: Resolved)",
        "[03:48:51] [TICKETS] Compiled HTML transcript (12 messages) exported to logs."
      ]
    }
  },
  {
    id: "logging",
    name: "Forensic Logging",
    icon: ScrollText,
    tagline: "Your server's flight data recorder.",
    desc: "Tracks every single configuration change, moderation trigger, and command execution across the server. Append-only logging ensures transparency.",
    features: [
      "Channel updates, role updates, and member edits logging",
      "Deleted messages and edited message history tracking",
      "Moderator actions and command telemetry streams",
      "Filterable logging channels (e.g. separate mod logs and join logs)",
      "Export logs to JSON/CSV for audits"
    ],
    benefits: [
      "Pinpoint exactly who changed what setting",
      "Track staff activity and command latency metrics",
      "Maintain a secure backup log stream"
    ],
    mockup: {
      title: "titanium-audit-logs",
      lines: [
        "[03:49:10] [LOG] Role 'Moderator' updated by Owner: Added permissions: Ban Members",
        "[03:49:15] [LOG] Command: 'AgentGrey' executed /warn on 'Troll'",
        "[03:49:22] [LOG] Message edit: User 'Alice' in #lobby edited message: 'hey' -> 'hello'",
        "[03:49:28] [LOG] Telemetry: Latency response verified: 12ms. Status: Fortified."
      ]
    }
  }
];

function ModulesPage() {
  const [activeTab, setActiveTab] = useState("antinuke");
  const activeModule = moduleDetails.find((m) => m.id === activeTab) || moduleDetails[0];

  return (
    <SiteShell>
      <PageHeader eyebrow="Modules" title="Inside the core engine." sub="Independently configurable, highly optimized modules to run your community secure and clean." />
      
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
          {/* Vertical Tabs Sidebar */}
          <div className="flex flex-col gap-2">
            {moduleDetails.map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveTab(m.id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all ${
                    activeTab === m.id
                      ? "bg-brand text-white shadow-lg shadow-brand/20"
                      : "glass hover:bg-white/[0.06] text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  <span className="flex-1">{m.name}</span>
                  <ChevronRight className={`size-3.5 opacity-50 transition-transform ${activeTab === m.id ? "translate-x-0.5" : ""}`} />
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <div className="glass rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <div className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/30">
                <activeModule.icon className="size-6" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold">{activeModule.name}</h2>
                <p className="font-mono text-[10px] uppercase tracking-widest text-brand">{activeModule.tagline}</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{activeModule.desc}</p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold">Features Include</h3>
                <ul className="space-y-3">
                  {activeModule.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold">Core Benefits</h3>
                <ul className="space-y-3">
                  {activeModule.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual/Console mockup */}
            <div className="mt-8">
              <h3 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold">Console Output Preview</h3>
              <div className="rounded-xl border border-border/60 bg-black/45 p-5 font-mono text-[11px] leading-relaxed text-emerald-300 shadow-inner">
                <div className="mb-2.5 border-b border-border/30 pb-2 text-[10px] text-muted-foreground flex justify-between">
                  <span>console :: {activeModule.mockup.title}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE
                  </span>
                </div>
                <div className="space-y-1.5">
                  {activeModule.mockup.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

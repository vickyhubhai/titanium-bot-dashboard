import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute('/commands')({
  head: () => ({
    meta: [
      { title: "Commands — Titanium Security" },
      { name: "description", content: "Every Titanium Security command, searchable. Slash commands, prefix commands and context menus." },
      { property: "og:title", content: "Commands — Titanium Security" },
      { property: "og:url", content: "/commands" },
    ],
    links: [{ rel: "canonical", href: "/commands" }],
  }),
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


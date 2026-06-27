import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { BookOpen, Zap, Shield, Activity } from "lucide-react";

export const Route = createFileRoute('/docs')({
  head: () => ({
    meta: [
      { title: "Documentation — Sentinel" },
      { name: "description", content: "Guides, command reference and API docs for the Sentinel Discord platform." },
      { property: "og:title", content: "Documentation — Sentinel" },
      { property: "og:description", content: "Guides and reference for Sentinel." },
      { property: "og:url", content: "/docs" },
    ],
    links: [{ rel: "canonical", href: "/docs" }],
  }),
  });

const sections = [
  { icon: Zap, title: "Quick Start", desc: "Invite Sentinel and enable your first module in under 90 seconds." },
  { icon: Shield, title: "Antinuke", desc: "Configure whitelists, action thresholds and trigger responses." },
  { icon: Activity, title: "Analytics", desc: "Read security pulse data and export forensic audit trails." },
  { icon: BookOpen, title: "Command Reference", desc: "Every slash command, argument and permission scope documented." },
];


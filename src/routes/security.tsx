import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Shield, Lock, Eye, KeyRound, FileLock2, Mail } from "lucide-react";

export const Route = createFileRoute('/security')({
  head: () => ({
    meta: [
      { title: "Security overview — Sentinel" },
      { name: "description", content: "How Sentinel approaches access control, transport security, logging, and responsible disclosure." },
      { property: "og:title", content: "Security overview — Sentinel" },
      { property: "og:description", content: "App-owner statements about the security controls Sentinel exposes to operators." },
      { property: "og:url", content: "/security" },
    ],
    links: [{ rel: "canonical", href: "/security" }],
  }),
  });

const controls = [
  { i: Lock, t: "Transport", d: "All traffic between your browser and the Sentinel dashboard is served over HTTPS. Discord API traffic is initiated over TLS by the bot runtime." },
  { i: KeyRound, t: "Authentication", d: "Operators sign in with Discord OAuth. Sentinel never sees a Discord password and only requests the scopes documented at install time." },
  { i: Shield, t: "Authorisation", d: "Role-based access inside the dashboard mirrors your guild's Discord permissions. Server-scoped actions require server-scoped roles." },
  { i: Eye, t: "Audit logging", d: "Every operator action — module toggles, rule edits, role assignments — is written to an append-only audit log accessible from the dashboard." },
  { i: FileLock2, t: "Data handling", d: "We store the minimum data needed to run the modules you enable: guild IDs, configuration, and operational logs. We do not train models on guild content." },
  { i: Mail, t: "Disclosure", d: "Suspected vulnerabilities can be reported to security@sentinel.example. We acknowledge reports within two business days." },
];


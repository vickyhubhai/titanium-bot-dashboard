import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, MessageSquare, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: "Contact — Titanium Security" },
      { name: "description", content: "Talk to sales, ask for help, or report a security issue. We respond fast." },
      { property: "og:title", content: "Contact — Titanium Security" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const channels = [
  { icon: MessageSquare, k: "Sales", d: "Enterprise, custom branding, partnerships.", v: "sales@Titanium Security.app" },
  { icon: Mail, k: "Support", d: "Premium customers get priority routing.", v: "support@Titanium Security.app" },
  { icon: ShieldAlert, k: "Security", d: "Responsible disclosure, PGP available.", v: "security@Titanium Security.app" },
];

const schema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});


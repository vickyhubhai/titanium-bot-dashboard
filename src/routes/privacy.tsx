import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sentinel" },
      { name: "description", content: "How Sentinel collects, uses and protects your data." },
      { property: "og:title", content: "Privacy — Sentinel" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  });


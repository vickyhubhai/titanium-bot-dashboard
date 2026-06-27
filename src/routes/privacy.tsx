import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Titanium Security" },
      { name: "description", content: "How Titanium Security collects, uses and protects your data." },
      { property: "og:title", content: "Privacy — Titanium Security" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});


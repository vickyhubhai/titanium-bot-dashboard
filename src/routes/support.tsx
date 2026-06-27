import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Book, MessageSquare, LifeBuoy, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute('/support')({
  head: () => ({
    meta: [
      { title: "Support — Titanium Security" },
      { name: "description", content: "Find answers fast. Search the knowledge base, browse common topics, or open a ticket." },
      { property: "og:title", content: "Support — Titanium Security" },
      { property: "og:description", content: "Get help with Titanium Security — search the knowledge base, browse common topics, or open a ticket with our team." },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Is Titanium Security free?", acceptedAnswer: { "@type": "Answer", text: "Yes — core protection is free for up to 3 servers." } },
          { "@type": "Question", name: "How do I add Titanium Security?", acceptedAnswer: { "@type": "Answer", text: "Click Open Dashboard, sign in with Discord, and authorise on your server." } },
        ],
      }),
    }],
  }),
});

const faqs = [
  { q: "Is Titanium Security free?", a: "Yes. The Free plan covers up to 3 servers with core antinuke, automod, verification and tickets." },
  { q: "How do I add Titanium Security to my server?", a: "Open the dashboard, sign in with Discord, and authorise the bot on the server you want to protect." },
  { q: "Will Titanium Security work alongside other bots?", a: "Yes. Titanium Security respects role hierarchy and can be configured to ignore actions taken by trusted bots." },
  { q: "How is my data handled?", a: "Configuration and logs are encrypted at rest. We never train models on community content." },
  { q: "Can I export my settings?", a: "Premium servers get import/export and on-demand backups from the dashboard." },
  { q: "How fast is incident response?", a: "Premium customers route to a priority queue with a 4-hour business-day SLA." },
];


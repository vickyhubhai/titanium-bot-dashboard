import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Check, X } from "lucide-react";

export const Route = createFileRoute('/vs/wick')({
  head: () => ({
    meta: [
      { title: "Sentinel vs Wick — Discord Security Compared (2026)" },
      {
        name: "description",
        content:
          "Sentinel vs Wick: a side-by-side comparison of antinuke, automod, forensic logging, dashboard UX and pricing. The modern Wick alternative for serious Discord servers.",
      },
      { property: "og:title", content: "Sentinel vs Wick — The Modern Discord Security Alternative" },
      {
        property: "og:description",
        content:
          "Sub-20ms decisioning, forensic logging, and a unified dashboard. See how Sentinel compares to Wick on features, performance and price.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://titaniumsecurity.dpdns.org//vs/wick" },
    ],
    links: [{ rel: "canonical", href: "https://titaniumsecurity.dpdns.org//vs/wick" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is Sentinel a good Wick alternative?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Sentinel covers the same antinuke surface as Wick — webhook spam, mass bans, role escalation, channel deletion — with sub-20ms decisioning and a unified dashboard that Wick does not ship.",
              },
            },
            {
              "@type": "Question",
              name: "What does Sentinel do that Wick does not?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sentinel ships a forensic audit timeline, typed automod policy, integrated tickets, multi-server analytics and SSO — features that require external bots or are unavailable on Wick.",
              },
            },
            {
              "@type": "Question",
              name: "How much does Sentinel cost compared to Wick?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sentinel is free for up to 3 servers. Premium is $9.99/month for unlimited servers, advanced analytics and 90-day audit retention.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

const rows: { feature: string; sentinel: string | boolean; wick: string | boolean }[] = [
  { feature: "Antinuke (webhook, role, channel, ban)", sentinel: true, wick: true },
  { feature: "Sub-20ms decisioning", sentinel: true, wick: false },
  { feature: "Forensic audit timeline", sentinel: true, wick: false },
  { feature: "Typed declarative automod policy", sentinel: true, wick: false },
  { feature: "Unified web dashboard", sentinel: true, wick: "Limited" },
  { feature: "Integrated ticket system", sentinel: true, wick: false },
  { feature: "Multi-server analytics", sentinel: true, wick: false },
  { feature: "SSO / SAML (Enterprise)", sentinel: true, wick: false },
  { feature: "Free tier", sentinel: "Up to 3 servers", wick: "Limited" },
  { feature: "Premium pricing", sentinel: "$9.99 / mo", wick: "$5 – $15 / mo" },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="mx-auto size-5 text-brand" aria-label="Yes" />;
  if (value === false) return <X className="mx-auto size-5 text-muted-foreground/50" aria-label="No" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
}


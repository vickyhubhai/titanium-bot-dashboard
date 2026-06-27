import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Check } from "lucide-react";

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: "Pricing — Sentinel" },
      { name: "description", content: "Simple, transparent pricing. Free for growing communities. Premium for serious servers." },
      { property: "og:title", content: "Pricing — Sentinel" },
      { property: "og:description", content: "Free for growing communities. Premium for serious servers." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Sentinel",
          description: "Enterprise Discord security, moderation and analytics platform with antinuke, automod, verification, tickets and audit intelligence.",
          brand: { "@type": "Brand", name: "Sentinel" },
          url: "https://astral-dashboard-73.lovable.app/pricing",
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: "0",
            highPrice: "9.99",
            offerCount: 3,
            offers: [
              {
                "@type": "Offer",
                name: "Free",
                price: "0",
                priceCurrency: "USD",
                description: "Up to 3 servers, core antinuke & automod, verification & tickets, 7-day audit retention.",
                url: "https://astral-dashboard-73.lovable.app/pricing",
              },
              {
                "@type": "Offer",
                name: "Premium",
                price: "9.99",
                priceCurrency: "USD",
                description: "Unlimited servers, SuperAntinuke, custom branding, 90-day audit retention, priority hosting & SLA, advanced analytics.",
                url: "https://astral-dashboard-73.lovable.app/pricing",
              },
              {
                "@type": "Offer",
                name: "Enterprise",
                price: "0",
                priceCurrency: "USD",
                description: "Dedicated infrastructure, SSO/SAML, custom integrations, 24/7 incident response, compliance reports. Custom pricing.",
                url: "https://astral-dashboard-73.lovable.app/pricing",
              },
            ],
          },
        }),
      },
    ],
  }),
  });

const tiers = [
  {
    name: "Free",
    price: "$0",
    desc: "For developing communities getting started.",
    features: ["Up to 3 servers", "Core antinuke & automod", "Verification & tickets", "7-day audit retention", "Community support"],
  },
  {
    name: "Premium",
    price: "$9.99",
    desc: "For high-value servers that demand more.",
    features: ["Unlimited servers", "SuperAntinuke suite", "Custom bot branding", "90-day audit retention", "Priority hosting & SLA", "Advanced analytics"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For networks, partnerships and white-label.",
    features: ["Everything in Premium", "Dedicated infrastructure", "SSO & SAML", "Custom integrations", "24/7 incident response", "Compliance reports"],
  },
];


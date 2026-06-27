import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Check, Star } from "lucide-react";

export const Route = createFileRoute('/premium')({
  head: () => ({
    meta: [
      { title: "Premium Pricing & Tiers — Titanium Security" },
      { name: "description", content: "Compare Free, Premium, and Enterprise subscription packages for Titanium Security. Host custom bot tokens and access advanced anti-nuke options." },
      { property: "og:title", content: "Premium Pricing & Tiers — Titanium Security" },
      { property: "og:description", content: "Granular comparison of security features, latency guarantees, and customization options for Titanium Security plans." },
      { property: "og:url", content: "https://titaniumsecurity.dpdns.org/premium" },
      { property: "og:image", content: "https://titaniumsecurity.dpdns.org/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://titaniumsecurity.dpdns.org/premium" }],
  }),
  });

interface Tier {
  name: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    desc: "Essential moderation and basic security for growing groups.",
    features: [
      "Up to 3 servers",
      "Standard Anti Nuke limits",
      "Core Automod filter",
      "Standard Verification panels",
      "7-day audit logs retention",
      "Community support"
    ],
    cta: "Invite Free Bot"
  },
  {
    name: "Premium",
    price: "$9.99",
    desc: "Unleash the full power of advanced protection and analytics.",
    features: [
      "Unlimited protected servers",
      "SuperAntinuke signature checks",
      "Zero-latency custom bot branding",
      "90-day forensic log history",
      "Dedicated hosting slots",
      "Advanced spam pattern matching",
      "Priority SLA developer support"
    ],
    highlight: true,
    cta: "Get Premium"
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large networks, corporations, and white-label bots.",
    features: [
      "Everything in Premium",
      "Dedicated bot infrastructure",
      "Custom integrations & Webhooks",
      "Automated compliance reports",
      "24/7 dedicated incidents hotline",
      "SAML / SSO dashboard configurations"
    ],
    cta: "Contact Sales"
  }
];

interface ComparisonRow {
  feature: string;
  free: string;
  premium: string;
  enterprise: string;
}

const comparisonMatrix: ComparisonRow[] = [
  {
    feature: "Latency response",
    free: "Standard (<150ms)",
    premium: "Ultra-low (<15ms)",
    enterprise: "Dedicated (<15ms)"
  },
  {
    feature: "Anti Nuke sensitivity",
    free: "Standard limits",
    premium: "SuperAntinuke signatures",
    enterprise: "Custom thresholds"
  },
  {
    feature: "Verification mechanisms",
    free: "CAPTCHA, Age gate",
    premium: "OAuth, VPN blocks, CAPTCHA",
    enterprise: "Custom auth flows"
  },
  {
    feature: "Logging retention",
    free: "7 Days",
    premium: "90 Days",
    enterprise: "Unlimited / S3 backup"
  },
  {
    feature: "Uptime SLA",
    free: "Best effort",
    premium: "99.9% uptime",
    enterprise: "99.99% dedicated"
  },
  {
    feature: "Tickets management",
    free: "1 active queue",
    premium: "Unlimited queues",
    enterprise: "Custom pipelines"
  }
];


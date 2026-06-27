import { createLazyFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Check, Star } from "lucide-react";

export const Route = createLazyFileRoute('/premium')({
  component: PremiumPage,
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

function PremiumPage() {
  return (
    <SiteShell>
      <section className="px-6 pb-16 pt-10 text-center">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-brand">── Titanium Premium</div>
        <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
          Secure your community<br />
          <span className="text-muted-foreground">with premium protection.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground">
          Choose the level of defense your community deserves. All premium plans include support for the developers.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`glass relative rounded-3xl p-8 flex flex-col justify-between \${t.highlight ? "ring-2 ring-brand/60 bg-surface/20" : "bg-surface/10"}`}>
            {t.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-glow px-4 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-white flex items-center gap-1 shadow-lg">
                <Star className="size-3 fill-white" /> Recommended
              </div>
            )}
            <div>
              <div className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">{t.name}</div>
              <div className="font-display text-5xl font-extrabold flex items-baseline">
                {t.price}
                {t.price !== "Custom" && <span className="text-sm font-normal text-muted-foreground ml-1">/mo</span>}
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
              <ul className="mt-8 space-y-3.5 text-xs text-muted-foreground border-t border-border/40 pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="size-4 shrink-0 text-brand mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://discord.gg/UXKWfgWgth"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 block w-full rounded-xl py-3 text-center text-xs font-semibold transition-transform hover:scale-[1.02] \${t.highlight ? "bg-gradient-to-r from-brand to-brand-glow text-white shadow-lg shadow-brand/30" : "glass-subtle hover:bg-white/10"}`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="mb-8 text-center md:text-left">
          <h2 className="font-display text-2xl font-bold">Compare details</h2>
          <p className="text-xs text-muted-foreground mt-1">A granular look at the feature sets of each protection class.</p>
        </div>
        <div className="glass overflow-hidden rounded-2xl border border-border/60">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-border/60 bg-surface/35 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  <th className="p-4 md:p-5 font-semibold">Security Spec</th>
                  <th className="p-4 md:p-5 font-semibold">Free</th>
                  <th className="p-4 md:p-5 font-semibold text-brand">Premium</th>
                  <th className="p-4 md:p-5 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {comparisonMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 md:p-5 font-medium text-foreground">{item.feature}</td>
                    <td className="p-4 md:p-5 text-muted-foreground">{item.free}</td>
                    <td className="p-4 md:p-5 text-brand font-medium">{item.premium}</td>
                    <td className="p-4 md:p-5 text-muted-foreground">{item.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

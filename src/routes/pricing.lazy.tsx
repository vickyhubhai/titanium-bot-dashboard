import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Check } from "lucide-react";

export const Route = createLazyFileRoute('/pricing')({
  component: PricingPage,
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

function PricingPage() {
  return (
    <SiteShell>
      <section className="px-6 pb-16 pt-10 text-center">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-brand">── Pricing</div>
        <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
          Pay for protection,
          <br />
          <span className="text-muted-foreground">not bloat.</span>
        </h1>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-28 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`glass relative rounded-3xl p-8 ${t.highlight ? "ring-2 ring-brand/60" : ""}`}
          >
            {t.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-glow px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                Recommended
              </div>
            )}
            <div className="mb-1 font-mono text-xs uppercase tracking-widest text-brand">{t.name}</div>
            <div className="font-display text-5xl font-extrabold">
              {t.price}
              {t.price !== "Custom" && <span className="text-base font-normal text-muted-foreground">/mo</span>}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/login"
              className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                t.highlight
                  ? "bg-gradient-to-r from-brand to-brand-glow text-white shadow-lg shadow-brand/30"
                  : "glass-subtle hover:bg-white/10"
              }`}
            >
              {t.price === "Custom" ? "Contact sales" : "Get started"}
            </Link>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
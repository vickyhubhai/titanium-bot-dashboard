import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export function PricingTeaser() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-brand">── Pricing</div>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Ready to fortify your server?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Free for developing communities. Premium for high-value targets that demand more.
        </p>

        <div className="glass relative mt-10 overflow-hidden rounded-3xl p-8 text-left">
          <div className="absolute -right-12 -top-12 size-48 rounded-full bg-brand/20 blur-3xl" aria-hidden />
          <div className="relative">
            <div className="mb-1 font-mono text-xs text-brand">PREMIUM</div>
            <div className="font-display text-5xl font-extrabold">
              $9.99
              <span className="text-lg font-normal text-muted-foreground">/mo</span>
            </div>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Unlimited servers & members",
                "Full antinuke & SuperAntinuke suite",
                "Custom branding & vanity",
                "Priority hosting & SLA",
                "Advanced backup & analytics",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="size-4 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/premium"
              className="mt-8 block w-full rounded-xl bg-gradient-to-r from-brand to-brand-glow py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-[1.02]"
            >
              View all plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
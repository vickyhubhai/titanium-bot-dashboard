import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowUpRight } from "lucide-react";

export const Route = createLazyFileRoute('/careers')({
  component: CareersPage,
});

const roles = [
  { t: "Senior Platform Engineer", loc: "Remote · EU/IN", dept: "Engineering" },
  { t: "Security Engineer, Detection", loc: "Remote · Worldwide", dept: "Engineering" },
  { t: "Product Designer", loc: "Remote · EU/UK", dept: "Design" },
  { t: "Developer Advocate", loc: "Remote · Americas", dept: "Growth" },
];

const values = [
  { t: "Senior by default", d: "Small team, broad surface. We hire people we trust to make calls without a committee." },
  { t: "Boring infrastructure", d: "We optimise for predictability over novelty. Excitement belongs to the customer, not the runtime." },
  { t: "Written first", d: "Every meaningful decision lives in a document. Anyone can read the history of the system at any time." },
];

function CareersPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Careers"
        title="Senior engineering, defensive mindset, remote-first."
        sub="We are 11 people protecting thousands of communities. We hire rarely and slowly — and pay for the privilege."
      />
      <section className="mx-auto grid max-w-5xl gap-5 px-6 pb-16 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.t} className="glass rounded-2xl p-6">
            <h2 className="mb-2 font-display text-base font-bold">{v.t}</h2>
            <p className="text-sm text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-28">
        <h2 className="mb-6 font-display text-xl font-bold">Open roles</h2>
        <ul className="glass divide-y divide-border/60 rounded-2xl">
          {roles.map((r) => (
            <li key={r.t}>
              <Link
                to="/contact"
                className="flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-surface/50"
              >
                <div>
                  <div className="font-display text-base font-bold">{r.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    <span className="font-mono uppercase tracking-widest">{r.dept}</span>
                    <span className="mx-2">·</span>
                    <span>{r.loc}</span>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-brand" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
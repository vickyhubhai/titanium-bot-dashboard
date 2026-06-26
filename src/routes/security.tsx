import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Shield, Lock, Eye, KeyRound, FileLock2, Mail } from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security Controls & Responsible Disclosure — Titanium Security" },
      { name: "description", content: "How Titanium Security approaches encryption, authentication, authorization, audit logging, and responsible vulnerability disclosure." },
      { property: "og:title", content: "Security Controls — Titanium Security" },
      { property: "og:description", content: "Statements about the security controls and data handling practices Titanium Security exposes to server operators." },
      { property: "og:url", content: "https://titaniumsecurity.dpdns.org/security" },
    ],
    links: [{ rel: "canonical", href: "https://titaniumsecurity.dpdns.org/security" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Titanium Security Controls Overview",
          "description": "Vulnerability reporting procedures, encryption details, and privacy controls enforced by Titanium Security."
        })
      }
    ]
  }),
  component: SecurityPage,
});

const controls = [
  { i: Lock, t: "Transport", d: "All traffic between your browser and the Titanium Security website is served over HTTPS. Discord API traffic is initiated over TLS by the bot runtime." },
  { i: KeyRound, t: "Authentication", d: "Commands are authenticated natively inside Discord using Slash commands. Titanium Security never requests or sees Discord passwords." },
  { i: Shield, t: "Authorisation", d: "Role-based permission validations mirror your guild's Discord configuration. Destructive actions require appropriate administrator roles." },
  { i: Eye, t: "Audit logging", d: "Every admin action — configuration edits, whitelists, rulesets — is written to a designated, append-only logs channel in your server." },
  { i: FileLock2, t: "Data handling", d: "We store only configurations needed to run active modules: guild IDs, whitelist roles, and temporary buffers. We never store message content databases." },
  { i: Mail, t: "Disclosure", d: "Suspected security issues can be reported to security@titanium.security or directly to development. We respond within two business days." },
];

function SecurityPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Security"
        title="How Titanium Security protects its operators and their communities."
        sub="This page is maintained by the Titanium Security team and describes the security controls exposed to operators today."
      />
      <section className="mx-auto grid max-w-5xl gap-5 px-6 pb-16 md:grid-cols-2">
        {controls.map((c) => (
          <div key={c.t} className="glass flex gap-4 rounded-2xl p-6">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/30 via-brand-glow/20 to-transparent">
              <c.i className="h-5 w-5 text-brand" aria-hidden />
            </div>
            <div>
              <h2 className="mb-1 font-display text-lg font-bold">{c.t}</h2>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-28">
        <div className="glass rounded-2xl p-8">
          <h2 className="mb-2 font-display text-xl font-bold">Shared responsibility</h2>
          <p className="text-sm text-muted-foreground">
            Titanium Security provides the platform controls listed above. Guild owners remain responsible for the Discord permissions
            they grant to operators, the rules they configure inside each module, and the channels they expose to the bot. The
            strongest protection comes from combining Titanium Security's defaults with disciplined operator practices.
          </p>
          <h3 className="mb-2 mt-6 font-display text-base font-bold">Responsible disclosure</h3>
          <p className="text-sm text-muted-foreground">
            If you believe you have found a vulnerability, please email{" "}
            <a className="text-brand hover:underline" href="mailto:thegreatlordvicky185@gmail.com">thegreatlordvicky185@gmail.com</a>{" "}
            with reproduction steps. Do not test against guilds you do not control.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

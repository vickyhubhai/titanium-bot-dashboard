import { createLazyFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Shield, Lock, Eye, KeyRound, FileLock2, Mail } from "lucide-react";

export const Route = createLazyFileRoute('/security')({
  component: SecurityPage,
});

const controls = [
  { i: Lock, t: "Transport", d: "All traffic between your browser and the Sentinel dashboard is served over HTTPS. Discord API traffic is initiated over TLS by the bot runtime." },
  { i: KeyRound, t: "Authentication", d: "Operators sign in with Discord OAuth. Sentinel never sees a Discord password and only requests the scopes documented at install time." },
  { i: Shield, t: "Authorisation", d: "Role-based access inside the dashboard mirrors your guild's Discord permissions. Server-scoped actions require server-scoped roles." },
  { i: Eye, t: "Audit logging", d: "Every operator action — module toggles, rule edits, role assignments — is written to an append-only audit log accessible from the dashboard." },
  { i: FileLock2, t: "Data handling", d: "We store the minimum data needed to run the modules you enable: guild IDs, configuration, and operational logs. We do not train models on guild content." },
  { i: Mail, t: "Disclosure", d: "Suspected vulnerabilities can be reported to security@sentinel.example. We acknowledge reports within two business days." },
];

function SecurityPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Security"
        title="How Sentinel protects its operators and their communities."
        sub="This page is maintained by the Sentinel team and describes the security controls exposed to operators today. It is not a certification or an independent audit."
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
            Sentinel provides the platform controls listed above. Guild owners remain responsible for the Discord permissions
            they grant to operators, the rules they configure inside each module, and the channels they expose to the bot. The
            strongest protection comes from combining Sentinel's defaults with disciplined operator practices.
          </p>
          <h3 className="mb-2 mt-6 font-display text-base font-bold">Responsible disclosure</h3>
          <p className="text-sm text-muted-foreground">
            If you believe you have found a vulnerability, please email{" "}
            <a className="text-brand hover:underline" href="mailto:security@sentinel.example">security@sentinel.example</a>{" "}
            with reproduction steps. Do not test against guilds you do not control.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
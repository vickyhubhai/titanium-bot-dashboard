import { createLazyFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, MessageSquare, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createLazyFileRoute('/contact')({
  component: ContactPage,
});

const channels = [
  { icon: MessageSquare, k: "Sales", d: "Enterprise, custom branding, partnerships.", v: "sales@sentinel.app" },
  { icon: Mail, k: "Support", d: "Premium customers get priority routing.", v: "support@sentinel.app" },
  { icon: ShieldAlert, k: "Security", d: "Responsible disclosure, PGP available.", v: "security@sentinel.app" },
];

const schema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [err, setErr] = useState<string | null>(null);

  return (
    <SiteShell>
      <PageHeader eyebrow="Contact" title="Talk to a human." sub="Most messages get a response within 4 hours during business days." />
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-28 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          {channels.map((c) => (
            <div key={c.k} className="glass rounded-2xl p-5">
              <c.icon className="mb-3 size-5 text-brand" />
              <div className="font-display text-lg font-bold">{c.k}</div>
              <p className="text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-3 font-mono text-xs text-brand">{c.v}</div>
            </div>
          ))}
        </div>
        <form
          className="glass rounded-2xl p-6"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const fd = new FormData(form);
            const parsed = schema.safeParse({
              name: fd.get("name"),
              email: fd.get("email"),
              message: fd.get("message"),
            });
            if (!parsed.success) {
              setStatus("err");
              setErr(parsed.error.issues[0]?.message ?? "Invalid input");
              return;
            }
            setStatus("ok");
            setErr(null);
            form.reset();
          }}
        >
          <h2 className="mb-4 font-display text-xl font-bold">Send a message</h2>
          <div className="grid gap-3">
            <label className="text-sm">
              <span className="mb-1 block text-xs text-muted-foreground">Name</span>
              <input name="name" required maxLength={80} className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:border-brand" />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-xs text-muted-foreground">Email</span>
              <input name="email" type="email" required maxLength={255} className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:border-brand" />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-xs text-muted-foreground">Message</span>
              <textarea name="message" required rows={5} maxLength={2000} className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:border-brand" />
            </label>
            <button type="submit" className="mt-2 rounded-xl bg-gradient-to-r from-brand to-brand-glow py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01]">
              Send message
            </button>
            {status === "ok" && <p className="text-xs text-emerald-400">Sent. We'll get back to you shortly.</p>}
            {status === "err" && err && <p className="text-xs text-rose-400">{err}</p>}
          </div>
        </form>
      </section>
    </SiteShell>
  );
}
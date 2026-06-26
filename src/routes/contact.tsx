import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, MessageSquare, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Titanium Security" },
      { name: "description", content: "Talk to sales, ask for help, or report a security issue. We respond fast." },
      { property: "og:title", content: "Contact — Titanium Security" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  { icon: MessageSquare, k: "Sales", d: "Enterprise, custom branding, partnerships.", v: "thegreatlordvicky185@gmail.com" },
  { icon: Mail, k: "Support", d: "Premium customers get priority routing.", v: "thegreatlordvicky185@gmail.com" },
  { icon: ShieldAlert, k: "Security", d: "Responsible disclosure, PGP available.", v: "thegreatlordvicky185@gmail.com" },
];

const schema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "err">("idle");
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
            setStatus("submitting");
            setErr(null);

            fetch("https://discord.com/api/webhooks/1520100138029285597/fC8lD7HDhlezRW3zSDQJtDXkPBiQgs82IMuxxu0qHSLrW2mvS-IND4zqq8sHgRrsiDEx", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                embeds: [
                  {
                    title: "📩 Contact Form Submission",
                    color: 0x4f46e5,
                    fields: [
                      { name: "Name", value: parsed.data.name, inline: true },
                      { name: "Email", value: parsed.data.email, inline: true },
                      { name: "Message", value: parsed.data.message },
                    ],
                    timestamp: new Date().toISOString(),
                  },
                ],
              }),
            })
              .then((res) => {
                if (res.ok) {
                  setStatus("ok");
                  form.reset();
                } else {
                  throw new Error("Failed to send message. Please try again.");
                }
              })
              .catch((err) => {
                setStatus("err");
                setErr(err instanceof Error ? err.message : "Failed to send message.");
              });
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
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 rounded-xl bg-gradient-to-r from-brand to-brand-glow py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-50 disabled:pointer-events-none"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
            {status === "ok" && <p className="text-xs text-emerald-400">Sent. We'll get back to you shortly.</p>}
            {status === "err" && err && <p className="text-xs text-rose-400">{err}</p>}
          </div>
        </form>
      </section>
    </SiteShell>
  );
}
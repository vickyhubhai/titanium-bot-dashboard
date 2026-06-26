import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie policy — Titanium Security" },
      { name: "description", content: "What Titanium Security stores in your browser, why, and how to opt out." },
      { property: "og:title", content: "Cookie policy — Titanium Security" },
      { property: "og:description", content: "Plain-language description of the cookies and local storage Titanium Security uses." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

const rows = [
  { n: "Titanium Security_session", purpose: "Keeps you signed in to the dashboard between visits.", retention: "30 days", optional: false },
  { n: "Titanium Security_theme", purpose: "Remembers your theme preference (system / dark / light).", retention: "1 year", optional: true },
  { n: "Titanium Security_prefs", purpose: "Stores dashboard layout choices such as collapsed sidebars.", retention: "1 year", optional: true },
];

function CookiesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Cookies"
        title="What Titanium Security stores in your browser."
        sub="This page is maintained by the Titanium Security team and lists only the cookies and local-storage entries written by the dashboard today."
      />
      <section className="mx-auto max-w-4xl px-6 pb-28">
        <div className="glass overflow-hidden rounded-2xl">
          <table className="w-full text-sm">
            <thead className="bg-surface/40 text-left font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Purpose</th>
                <th className="px-5 py-3">Retention</th>
                <th className="px-5 py-3">Optional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {rows.map((r) => (
                <tr key={r.n}>
                  <td className="px-5 py-4 font-mono text-xs">{r.n}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.purpose}</td>
                  <td className="px-5 py-4">{r.retention}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
                        r.optional ? "bg-brand/15 text-brand" : "bg-surface text-muted-foreground"
                      }`}
                    >
                      {r.optional ? "Optional" : "Required"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Optional entries can be cleared at any time from your browser's site-data panel. Clearing the required session entry
          will sign you out of the dashboard.
        </p>
      </section>
    </SiteShell>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Titanium Security" },
      { name: "description", content: "What Titanium Security stores in your browser, why, and how to manage caching and local storage." },
      { property: "og:title", content: "Cookie Policy — Titanium Security" },
      { property: "og:description", content: "Plain-language description of the local cache and storage Titanium Security uses." },
      { property: "og:url", content: "https://titaniumsecurity.dpdns.org/cookies" },
    ],
    links: [{ rel: "canonical", href: "https://titaniumsecurity.dpdns.org/cookies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Titanium Security Cookie & Storage Policy",
          "description": "Information on the browser storage mechanisms and offline service worker caches used by Titanium Security."
        })
      }
    ]
  }),
  component: CookiesPage,
});

const rows = [
  { n: "titanium-cache-v1", purpose: "Service Worker cache storing static app shell, icons and font styles for offline operation.", retention: "Until cleared", optional: false },
  { n: "titanium_theme", purpose: "Local storage option remembering your visual theme preferences (e.g. Dark Mode).", retention: "Persistent", optional: true }
];

function CookiesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Cookies"
        title="What Titanium Security stores in your browser."
        sub="This page is maintained by the Titanium Security team and lists local storage and service worker cache buckets used by the website today."
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
                      className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${r.optional ? "bg-brand/15 text-brand" : "bg-surface text-muted-foreground"
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
          Required cache items are necessary to support offline PWA reliability. Optional local storage entries can be cleared at any time from your browser's site settings dashboard.
        </p>
      </section>
    </SiteShell>
  );
}

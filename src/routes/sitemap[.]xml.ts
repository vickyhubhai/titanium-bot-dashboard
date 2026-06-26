import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://astral-dashboard-73.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/features", changefreq: "weekly", priority: "0.9" },
          { path: "/modules", changefreq: "weekly", priority: "0.9" },
          { path: "/premium", changefreq: "weekly", priority: "0.9" },
          { path: "/commands", changefreq: "weekly", priority: "0.8" },
          { path: "/docs", changefreq: "weekly", priority: "0.7" },
          { path: "/faq", changefreq: "weekly", priority: "0.7" },
          { path: "/changelog", changefreq: "weekly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/blog/anatomy-of-a-nuke", changefreq: "monthly", priority: "0.6" },
          { path: "/blog/automod-philosophy", changefreq: "monthly", priority: "0.6" },
          { path: "/blog/tickets-redesigned", changefreq: "monthly", priority: "0.6" },
          { path: "/blog/perf-budget", changefreq: "monthly", priority: "0.6" },
          { path: "/vs/wick", changefreq: "monthly", priority: "0.7" },
          { path: "/status", changefreq: "weekly", priority: "0.5" },
          { path: "/support", changefreq: "monthly", priority: "0.6" },
          { path: "/security", changefreq: "monthly", priority: "0.6" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/careers", changefreq: "monthly", priority: "0.5" },
          { path: "/partners", changefreq: "monthly", priority: "0.5" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/privacy", changefreq: "monthly", priority: "0.4" },
          { path: "/cookies", changefreq: "monthly", priority: "0.4" },
          { path: "/terms", changefreq: "monthly", priority: "0.4" },
        ];
        const urls = entries
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
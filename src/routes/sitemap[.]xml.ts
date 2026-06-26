import { createFileRoute } from "@tanstack/react-router";

const DEFAULT_BASE_URL = "https://titaniumsecurity.dpdns.org";
function escapeXml(str: string = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
  isBlog?: boolean;
  title?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }: { request?: Request }) => {
        let domain = DEFAULT_BASE_URL;
        if (request) {
          try {
            const url = new URL(request.url);
            // Ignore localhost port differences or use standard host
            domain = url.origin;
          } catch (e) {
            console.error("Failed to parse request URL for sitemap:", e);
          }
        }

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", title: "Enterprise Discord Security & Moderation" },
          { path: "/features", changefreq: "weekly", priority: "0.9", title: "Every layer of your server, built for the worst day" },
          { path: "/modules", changefreq: "weekly", priority: "0.9", title: "Advanced Modules Showcase" },
          { path: "/premium", changefreq: "weekly", priority: "0.9", title: "Premium Pricing & Tiers" },
          { path: "/commands", changefreq: "weekly", priority: "0.8", title: "Slash Commands Directory" },
          { path: "/docs", changefreq: "weekly", priority: "0.7", title: "Documentation & Setup Guides" },
          { path: "/faq", changefreq: "weekly", priority: "0.7", title: "Frequently Asked Questions" },
          { path: "/changelog", changefreq: "weekly", priority: "0.7", title: "Releases Timeline" },
          { path: "/blog", changefreq: "weekly", priority: "0.7", title: "Field notes from the security front line" },
          { path: "/blog/anatomy-of-a-nuke", changefreq: "monthly", priority: "0.6", isBlog: true, title: "Anatomy of a Discord nuke" },
          { path: "/blog/automod-philosophy", changefreq: "monthly", priority: "0.6", isBlog: true, title: "Automod, but make it readable" },
          { path: "/blog/tickets-redesigned", changefreq: "monthly", priority: "0.6", isBlog: true, title: "Tickets, redesigned from first principles" },
          { path: "/blog/perf-budget", changefreq: "monthly", priority: "0.6", isBlog: true, title: "A performance budget for moderation bots" },
          { path: "/vs/wick", changefreq: "monthly", priority: "0.7", title: "Titanium Security vs Wick bot comparison" },
          { path: "/status", changefreq: "weekly", priority: "0.5", title: "Live Uptime SLA Status" },
          { path: "/support", changefreq: "monthly", priority: "0.6", title: "Technical Support Server Hub" },
          { path: "/security", changefreq: "monthly", priority: "0.6", title: "Responsible Security Disclosure & Controls" },
          { path: "/about", changefreq: "monthly", priority: "0.6", title: "Our Story and Engineering Principles" },
          { path: "/careers", changefreq: "monthly", priority: "0.5", title: "Careers at Titanium Security" },
          { path: "/partners", changefreq: "monthly", priority: "0.5", title: "Partner program" },
          { path: "/contact", changefreq: "monthly", priority: "0.6", title: "Contact Sales and Security" },
          { path: "/privacy", changefreq: "monthly", priority: "0.4", title: "Privacy Policy" },
          { path: "/cookies", changefreq: "monthly", priority: "0.4", title: "Cookies Policy" },
          { path: "/terms", changefreq: "monthly", priority: "0.4", title: "Terms of Service" },
        ];

        const urls = entries
          .map((e) => {
            let urlXml = `  <url>\n    <loc>${domain}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n`;
            
            // Image Sitemap data
            urlXml += `    <image:image>\n      <image:loc>${domain}/og-image.png</image:loc>\n      <image:title>${e.title}</image:title>\n    </image:image>\n`;

            // Future ready News Sitemap tags for blogs
            if (e.isBlog) {
              const today = new Date().toISOString().split("T")[0];
              urlXml += `    <news:news>\n      <news:publication>\n        <news:name>Titanium Security</news:name>\n        <news:language>en</news:language>\n      </news:publication>\n      <news:publication_date>${today}</news:publication_date>\n      <news:title>${e.title}</news:title>\n    </news:news>\n`;
            }

            urlXml += `  </url>`;
            return urlXml;
          })
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
>
${urls}
</urlset>`;

        return new Response(xml, {
          headers: { 
            "Content-Type": "application/xml", 
            "Cache-Control": "public, max-age=3600" 
          },
        });
      },
    },
  },
});

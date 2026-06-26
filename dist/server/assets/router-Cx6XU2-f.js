import { t as Route$25 } from "./blog._slug-DN9kXgm_.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-1QeFX9Vl.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4 ambient-bg",
		children: [/* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 grid-bg opacity-60",
			"aria-hidden": true
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 max-w-md text-center",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand",
					children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-brand" }), "Error 404 · Route not found"]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-8xl font-extrabold tracking-tight",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-2 font-display text-2xl font-bold",
					children: "This route doesn't exist."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page may have been moved, renamed, or was never here to begin with."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "rounded-full bg-gradient-to-r from-brand to-brand-glow px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-brand/30",
						children: "Go home"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/docs",
						className: "rounded-full border border-border bg-background/40 px-5 py-2 text-xs font-semibold backdrop-blur transition-colors hover:bg-white/5",
						children: "Browse docs"
					})]
				})
			]
		})]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$24 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#0a0a14"
			},
			{ title: "Titanium Security — Discord Security & Moderation Bot" },
			{
				name: "description",
				content: "Fortify your Discord server with Titanium Security. Instant antinuke containment, zero-latency automod, forensic log streams, and custom role gatekeeping."
			},
			{
				name: "author",
				content: "Titanium Security"
			},
			{
				property: "og:title",
				content: "Titanium Security — Discord Security & Moderation Bot"
			},
			{
				property: "og:description",
				content: "Fortify your Discord server with Titanium Security. Instant antinuke containment, zero-latency automod, forensic log streams, and custom role gatekeeping."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Titanium Security"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Titanium Security",
				url: "https://astral-dashboard-73.lovable.app",
				description: "Enterprise-grade security, moderation and analytics platform for Discord servers."
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", {
			className: "bg-background text-foreground antialiased",
			children: [children, /* @__PURE__ */ jsx(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$24.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
//#endregion
//#region src/routes/terms.tsx
var $$splitComponentImporter$22 = () => import("./terms-CH1TfXT2.js");
var Route$23 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms of Service — Titanium Security" },
			{
				name: "description",
				content: "The terms that govern your use of Titanium Security."
			},
			{
				property: "og:title",
				content: "Terms — Titanium Security"
			},
			{
				property: "og:url",
				content: "/terms"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
//#endregion
//#region src/routes/support.tsx
var $$splitComponentImporter$21 = () => import("./support-VToUOpfd.js");
var Route$22 = createFileRoute("/support")({
	head: () => ({
		meta: [
			{ title: "Support — Titanium Security" },
			{
				name: "description",
				content: "Get support for Titanium Security bot setup, permissions, and features."
			},
			{
				property: "og:title",
				content: "Support — Titanium Security"
			},
			{
				property: "og:url",
				content: "/support"
			}
		],
		links: [{
			rel: "canonical",
			href: "/support"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: [{
					"@type": "Question",
					name: "Is Titanium Security free?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Yes — core protection is free for up to 3 servers."
					}
				}, {
					"@type": "Question",
					name: "How do I add Titanium Security?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Click Invite Bot on the header, sign in with Discord, and authorise on your server."
					}
				}]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
//#endregion
//#region src/routes/status.tsx
var $$splitComponentImporter$20 = () => import("./status-Dqhu0JsQ.js");
var Route$21 = createFileRoute("/status")({
	head: () => ({
		meta: [
			{ title: "Status — Titanium Security" },
			{
				name: "description",
				content: "Live operational status for every Titanium Security subsystem."
			},
			{
				property: "og:title",
				content: "Status — Titanium Security"
			},
			{
				property: "og:url",
				content: "/status"
			}
		],
		links: [{
			rel: "canonical",
			href: "/status"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "https://astral-dashboard-73.lovable.app";
var Route$20 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/features",
			changefreq: "weekly",
			priority: "0.9"
		},
		{
			path: "/modules",
			changefreq: "weekly",
			priority: "0.9"
		},
		{
			path: "/premium",
			changefreq: "weekly",
			priority: "0.9"
		},
		{
			path: "/commands",
			changefreq: "weekly",
			priority: "0.8"
		},
		{
			path: "/docs",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/faq",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/changelog",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/blog",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/blog/anatomy-of-a-nuke",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/blog/automod-philosophy",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/blog/tickets-redesigned",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/blog/perf-budget",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/vs/wick",
			changefreq: "monthly",
			priority: "0.7"
		},
		{
			path: "/status",
			changefreq: "weekly",
			priority: "0.5"
		},
		{
			path: "/support",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/security",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/careers",
			changefreq: "monthly",
			priority: "0.5"
		},
		{
			path: "/partners",
			changefreq: "monthly",
			priority: "0.5"
		},
		{
			path: "/contact",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/privacy",
			changefreq: "monthly",
			priority: "0.4"
		},
		{
			path: "/cookies",
			changefreq: "monthly",
			priority: "0.4"
		},
		{
			path: "/terms",
			changefreq: "monthly",
			priority: "0.4"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/security.tsx
var $$splitComponentImporter$19 = () => import("./security-QAJwsXRo.js");
var Route$19 = createFileRoute("/security")({
	head: () => ({
		meta: [
			{ title: "Security overview — Titanium Security" },
			{
				name: "description",
				content: "How Titanium Security approaches access control, transport security, logging, and responsible disclosure."
			},
			{
				property: "og:title",
				content: "Security overview — Titanium Security"
			},
			{
				property: "og:description",
				content: "App-owner statements about the security controls Titanium Security exposes to operators."
			},
			{
				property: "og:url",
				content: "/security"
			}
		],
		links: [{
			rel: "canonical",
			href: "/security"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
//#endregion
//#region src/routes/roadmap.tsx
var $$splitComponentImporter$18 = () => import("./roadmap-C7K0Ur6T.js");
var Route$18 = createFileRoute("/roadmap")({
	head: () => ({
		meta: [
			{ title: "Roadmap — Titanium Security" },
			{
				name: "description",
				content: "What we are building next. The Titanium Security public roadmap, refreshed every quarter."
			},
			{
				property: "og:title",
				content: "Roadmap — Titanium Security"
			},
			{
				property: "og:description",
				content: "Now, next, and later — the public Titanium Security roadmap refreshed every quarter."
			},
			{
				property: "og:url",
				content: "/roadmap"
			}
		],
		links: [{
			rel: "canonical",
			href: "/roadmap"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
//#endregion
//#region src/routes/privacy.tsx
var $$splitComponentImporter$17 = () => import("./privacy-DIVaRzoa.js");
var Route$17 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy — Titanium Security" },
			{
				name: "description",
				content: "How Titanium Security collects, uses and protects your data."
			},
			{
				property: "og:title",
				content: "Privacy — Titanium Security"
			},
			{
				property: "og:url",
				content: "/privacy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
//#endregion
//#region src/routes/premium.tsx
var $$splitComponentImporter$16 = () => import("./premium-BTwavAEe.js");
var Route$16 = createFileRoute("/premium")({
	head: () => ({
		meta: [
			{ title: "Premium — Titanium Security" },
			{
				name: "description",
				content: "Supercharge your community safety. Compare Free, Premium and Enterprise protection for Discord."
			},
			{
				property: "og:title",
				content: "Premium — Titanium Security"
			},
			{
				property: "og:url",
				content: "/premium"
			}
		],
		links: [{
			rel: "canonical",
			href: "/premium"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
//#endregion
//#region src/routes/partners.tsx
var $$splitComponentImporter$15 = () => import("./partners-ByGNnNyY.js");
var Route$15 = createFileRoute("/partners")({
	head: () => ({
		meta: [
			{ title: "Partners — Titanium Security" },
			{
				name: "description",
				content: "Agencies, integrators, and creator collectives building on Titanium Security. Refer, resell, or build on the platform."
			},
			{
				property: "og:title",
				content: "Partners — Titanium Security"
			},
			{
				property: "og:description",
				content: "Refer, resell, or build on Titanium Security — partnership tiers, benefits, and the application path."
			},
			{
				property: "og:url",
				content: "/partners"
			}
		],
		links: [{
			rel: "canonical",
			href: "/partners"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
//#endregion
//#region src/routes/modules.tsx
var $$splitComponentImporter$14 = () => import("./modules-BAsvIGcQ.js");
var Route$14 = createFileRoute("/modules")({
	head: () => ({
		meta: [
			{ title: "Modules — Titanium Security" },
			{
				name: "description",
				content: "Explore the deep capabilities of Titanium Security. Anti Nuke, Intelligent Automod, Verification, Tickets and Logging."
			},
			{
				property: "og:title",
				content: "Modules — Titanium Security"
			},
			{
				property: "og:url",
				content: "/modules"
			}
		],
		links: [{
			rel: "canonical",
			href: "/modules"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
//#endregion
//#region src/routes/integrations.tsx
var $$splitComponentImporter$13 = () => import("./integrations-BXaOYegl.js");
var Route$13 = createFileRoute("/integrations")({
	head: () => ({
		meta: [
			{ title: "Integrations — Titanium Security" },
			{
				name: "description",
				content: "Connect Titanium Security to the tools your team already runs — Discord, GitHub, Notion, Linear, PagerDuty, Datadog and more."
			},
			{
				property: "og:title",
				content: "Integrations — Titanium Security"
			},
			{
				property: "og:description",
				content: "Stream events, sync rules, and route alerts across the tools your operations team already lives in."
			},
			{
				property: "og:url",
				content: "/integrations"
			}
		],
		links: [{
			rel: "canonical",
			href: "/integrations"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
//#endregion
//#region src/routes/features.tsx
var $$splitComponentImporter$12 = () => import("./features-DWhLVBz5.js");
var Route$12 = createFileRoute("/features")({
	head: () => ({
		meta: [
			{ title: "Features — Titanium Security" },
			{
				name: "description",
				content: "Antinuke, automod, tickets, verification, giveaways, analytics — explore every Titanium Security module."
			},
			{
				property: "og:title",
				content: "Features — Titanium Security"
			},
			{
				property: "og:description",
				content: "Explore every Titanium Security security and moderation module."
			},
			{
				property: "og:url",
				content: "/features"
			}
		],
		links: [{
			rel: "canonical",
			href: "/features"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
//#endregion
//#region src/routes/faq.tsx
var $$splitComponentImporter$11 = () => import("./faq-CN8ozgbu.js");
var Route$11 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "FAQ — Titanium Security" },
			{
				name: "description",
				content: "Frequently asked questions about Titanium Security bot setups, limits, whitelists and billing."
			},
			{
				property: "og:title",
				content: "FAQ — Titanium Security"
			},
			{
				property: "og:url",
				content: "/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/enterprise.tsx
var $$splitComponentImporter$10 = () => import("./enterprise-BCRtPhIs.js");
var Route$10 = createFileRoute("/enterprise")({
	head: () => ({
		meta: [
			{ title: "Enterprise — Titanium Security" },
			{
				name: "description",
				content: "Dedicated capacity, named support, and contractual SLAs for communities that cannot afford downtime."
			},
			{
				property: "og:title",
				content: "Enterprise — Titanium Security"
			},
			{
				property: "og:description",
				content: "Dedicated capacity, named support, and contractual SLAs for the world's largest Discord communities."
			},
			{
				property: "og:url",
				content: "/enterprise"
			}
		],
		links: [{
			rel: "canonical",
			href: "/enterprise"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/docs.tsx
var $$splitComponentImporter$9 = () => import("./docs-CWIo64iE.js");
var Route$9 = createFileRoute("/docs")({
	head: () => ({
		meta: [
			{ title: "Documentation — Titanium Security" },
			{
				name: "description",
				content: "Guides, command reference and setups for the Titanium Security Discord platform."
			},
			{
				property: "og:title",
				content: "Documentation — Titanium Security"
			},
			{
				property: "og:url",
				content: "/docs"
			}
		],
		links: [{
			rel: "canonical",
			href: "/docs"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/cookies.tsx
var $$splitComponentImporter$8 = () => import("./cookies-B9EDwev4.js");
var Route$8 = createFileRoute("/cookies")({
	head: () => ({
		meta: [
			{ title: "Cookie policy — Titanium Security" },
			{
				name: "description",
				content: "What Titanium Security stores in your browser, why, and how to opt out."
			},
			{
				property: "og:title",
				content: "Cookie policy — Titanium Security"
			},
			{
				property: "og:description",
				content: "Plain-language description of the cookies and local storage Titanium Security uses."
			},
			{
				property: "og:url",
				content: "/cookies"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cookies"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$7 = () => import("./contact-BSRW0TbX.js");
var Route$7 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Titanium Security" },
			{
				name: "description",
				content: "Talk to sales, ask for help, or report a security issue. We respond fast."
			},
			{
				property: "og:title",
				content: "Contact — Titanium Security"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/commands.tsx
var $$splitComponentImporter$6 = () => import("./commands-Bj2VA1IT.js");
var Route$6 = createFileRoute("/commands")({
	head: () => ({
		meta: [
			{ title: "Commands — Titanium Security" },
			{
				name: "description",
				content: "Every Titanium Security command, searchable. Slash commands, prefix commands and context menus."
			},
			{
				property: "og:title",
				content: "Commands — Titanium Security"
			},
			{
				property: "og:url",
				content: "/commands"
			}
		],
		links: [{
			rel: "canonical",
			href: "/commands"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/changelog.tsx
var $$splitComponentImporter$5 = () => import("./changelog-DzIG6cAm.js");
var Route$5 = createFileRoute("/changelog")({
	head: () => ({
		meta: [
			{ title: "Changelog — Titanium Security" },
			{
				name: "description",
				content: "Every shipped change, ordered by date. Transparency is a feature."
			},
			{
				property: "og:title",
				content: "Changelog — Titanium Security"
			},
			{
				property: "og:description",
				content: "Every shipped change to Titanium Security, ordered by date — releases, fixes, and improvements with full transparency."
			},
			{
				property: "og:url",
				content: "/changelog"
			}
		],
		links: [{
			rel: "canonical",
			href: "/changelog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/careers.tsx
var $$splitComponentImporter$4 = () => import("./careers-CXNhSK7z.js");
var Route$4 = createFileRoute("/careers")({
	head: () => ({
		meta: [
			{ title: "Careers — Titanium Security" },
			{
				name: "description",
				content: "Join a small, senior team building defensive infrastructure for the world's largest Discord communities."
			},
			{
				property: "og:title",
				content: "Careers — Titanium Security"
			},
			{
				property: "og:description",
				content: "Open roles at Titanium Security — remote-first, senior-only, and obsessed with the craft of community defence."
			},
			{
				property: "og:url",
				content: "/careers"
			}
		],
		links: [{
			rel: "canonical",
			href: "/careers"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/blog.tsx
var $$splitComponentImporter$3 = () => import("./blog-Cwx_DNyd.js");
var Route$3 = createFileRoute("/blog")({
	head: () => ({
		meta: [
			{ title: "Blog — Titanium Security" },
			{
				name: "description",
				content: "Writing on Discord security, moderation strategy, and platform engineering."
			},
			{
				property: "og:title",
				content: "Blog — Titanium Security"
			},
			{
				property: "og:description",
				content: "Field notes on Discord security, moderation strategy, and the engineering behind Titanium Security — fresh writing from the team."
			},
			{
				property: "og:url",
				content: "/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Blog",
				name: "Titanium Security Blog",
				description: "Writing on Discord security, moderation strategy, and platform engineering.",
				url: "https://astral-dashboard-73.lovable.app/blog",
				blogPost: [
					{
						"@type": "BlogPosting",
						headline: "Anatomy of a Discord nuke",
						datePublished: "2026-06-12",
						url: "https://astral-dashboard-73.lovable.app/blog"
					},
					{
						"@type": "BlogPosting",
						headline: "Automod, but make it readable",
						datePublished: "2026-05-28",
						url: "https://astral-dashboard-73.lovable.app/blog"
					},
					{
						"@type": "BlogPosting",
						headline: "Tickets, redesigned from first principles",
						datePublished: "2026-05-04",
						url: "https://astral-dashboard-73.lovable.app/blog"
					},
					{
						"@type": "BlogPosting",
						headline: "A performance budget for moderation bots",
						datePublished: "2026-04-17",
						url: "https://astral-dashboard-73.lovable.app/blog"
					}
				]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$2 = () => import("./about-E3u1gCt6.js");
var Route$2 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Titanium Security" },
			{
				name: "description",
				content: "Titanium Security is built by a small team obsessed with digital safety. Learn the story, the principles, and the people."
			},
			{
				property: "og:title",
				content: "About — Titanium Security"
			},
			{
				property: "og:description",
				content: "The story, principles, and team behind Titanium Security."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "AboutPage",
				name: "About Titanium Security",
				url: "https://astral-dashboard-73.lovable.app/about",
				description: "The story, principles, and team behind Titanium Security — a small team obsessed with digital safety.",
				mainEntity: {
					"@type": "Organization",
					name: "Titanium Security",
					url: "https://astral-dashboard-73.lovable.app",
					description: "Titanium Security protects Discord communities with sub-20ms decisioning and defence-in-depth security.",
					member: [
						{
							"@type": "Person",
							name: "Aanya Verma",
							jobTitle: "Founder · Security"
						},
						{
							"@type": "Person",
							name: "Kiran Mehra",
							jobTitle: "Engineering"
						},
						{
							"@type": "Person",
							name: "Rohan Iyer",
							jobTitle: "Platform"
						},
						{
							"@type": "Person",
							name: "Naomi Park",
							jobTitle: "Design"
						}
					],
					knowsAbout: [
						"Sovereignty first — your community, your data, your rules.",
						"Predictable trust — every action logged, signed, reversible.",
						"Performance is a feature — sub-20ms decisioning across regions.",
						"Defence in depth — layered controls against single points of failure."
					]
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$1 = () => import("./routes-CH1dbH0I.js");
var Route$1 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Titanium Security — Enterprise Discord Security & Moderation" },
			{
				name: "description",
				content: "Automate sovereignty over your Discord server. Real-time antinuke, intelligent automod, forensic logging, tickets and analytics in one refined dashboard."
			},
			{
				property: "og:title",
				content: "Titanium Security — Enterprise Discord Security"
			},
			{
				property: "og:description",
				content: "The command center for Discord — antinuke, automod, verification, tickets and analytics."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/vs.wick.tsx
var $$splitComponentImporter = () => import("./vs.wick-BM6B-y3y.js");
var Route = createFileRoute("/vs/wick")({
	head: () => ({
		meta: [
			{ title: "Titanium Security vs Wick — Discord Security Compared (2026)" },
			{
				name: "description",
				content: "Titanium Security vs Wick: a side-by-side comparison of antinuke, automod, forensic logging, dashboard UX and pricing. The modern Wick alternative for serious Discord servers."
			},
			{
				property: "og:title",
				content: "Titanium Security vs Wick — The Modern Discord Security Alternative"
			},
			{
				property: "og:description",
				content: "Sub-20ms decisioning, forensic logging, and a unified dashboard. See how Titanium Security compares to Wick on features, performance and price."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://astral-dashboard-73.lovable.app/vs/wick"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://astral-dashboard-73.lovable.app/vs/wick"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: [
					{
						"@type": "Question",
						name: "Is Titanium Security a good Wick alternative?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Yes. Titanium Security covers the same antinuke surface as Wick — webhook spam, mass bans, role escalation, channel deletion — with sub-20ms decisioning and a unified dashboard that Wick does not ship."
						}
					},
					{
						"@type": "Question",
						name: "What does Titanium Security do that Wick does not?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Titanium Security ships a forensic audit timeline, typed automod policy, integrated tickets, multi-server analytics and SSO — features that require external bots or are unavailable on Wick."
						}
					},
					{
						"@type": "Question",
						name: "How much does Titanium Security cost compared to Wick?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Titanium Security is free for up to 3 servers. Premium is $9.99/month for unlimited servers, advanced analytics and 90-day audit retention."
						}
					}
				]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var TermsRoute = Route$23.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$24
});
var SupportRoute = Route$22.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => Route$24
});
var StatusRoute = Route$21.update({
	id: "/status",
	path: "/status",
	getParentRoute: () => Route$24
});
var SitemapDotxmlRoute = Route$20.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$24
});
var SecurityRoute = Route$19.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => Route$24
});
var RoadmapRoute = Route$18.update({
	id: "/roadmap",
	path: "/roadmap",
	getParentRoute: () => Route$24
});
var PrivacyRoute = Route$17.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$24
});
var PremiumRoute = Route$16.update({
	id: "/premium",
	path: "/premium",
	getParentRoute: () => Route$24
});
var PartnersRoute = Route$15.update({
	id: "/partners",
	path: "/partners",
	getParentRoute: () => Route$24
});
var ModulesRoute = Route$14.update({
	id: "/modules",
	path: "/modules",
	getParentRoute: () => Route$24
});
var IntegrationsRoute = Route$13.update({
	id: "/integrations",
	path: "/integrations",
	getParentRoute: () => Route$24
});
var FeaturesRoute = Route$12.update({
	id: "/features",
	path: "/features",
	getParentRoute: () => Route$24
});
var FaqRoute = Route$11.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$24
});
var EnterpriseRoute = Route$10.update({
	id: "/enterprise",
	path: "/enterprise",
	getParentRoute: () => Route$24
});
var DocsRoute = Route$9.update({
	id: "/docs",
	path: "/docs",
	getParentRoute: () => Route$24
});
var CookiesRoute = Route$8.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => Route$24
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$24
});
var CommandsRoute = Route$6.update({
	id: "/commands",
	path: "/commands",
	getParentRoute: () => Route$24
});
var ChangelogRoute = Route$5.update({
	id: "/changelog",
	path: "/changelog",
	getParentRoute: () => Route$24
});
var CareersRoute = Route$4.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$24
});
var BlogRoute = Route$3.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$24
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$24
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$24
});
var VsWickRoute = Route.update({
	id: "/vs/wick",
	path: "/vs/wick",
	getParentRoute: () => Route$24
});
var BlogRouteChildren = { BlogSlugRoute: Route$25.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute: BlogRoute._addFileChildren(BlogRouteChildren),
	CareersRoute,
	ChangelogRoute,
	CommandsRoute,
	ContactRoute,
	CookiesRoute,
	DocsRoute,
	EnterpriseRoute,
	FaqRoute,
	FeaturesRoute,
	IntegrationsRoute,
	ModulesRoute,
	PartnersRoute,
	PremiumRoute,
	PrivacyRoute,
	RoadmapRoute,
	SecurityRoute,
	SitemapDotxmlRoute,
	StatusRoute,
	SupportRoute,
	TermsRoute,
	VsWickRoute
};
var routeTree = Route$24._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

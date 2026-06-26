import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/blog.tsx?tsr-split=component
var posts = [
	{
		slug: "anatomy-of-a-nuke",
		t: "Anatomy of a Discord nuke",
		d: "How attackers chain webhooks, role edits and bulk deletes — and how Titanium Security breaks the chain in under 200ms.",
		tag: "Security",
		date: "Jun 12, 2026"
	},
	{
		slug: "automod-philosophy",
		t: "Automod, but make it readable",
		d: "Why we replaced regex rule lists with a typed declarative policy language.",
		tag: "Engineering",
		date: "May 28, 2026"
	},
	{
		slug: "tickets-redesigned",
		t: "Tickets, redesigned from first principles",
		d: "Threaded, queued, auditable. The model behind Titanium Security's new ticket pipeline.",
		tag: "Product",
		date: "May 04, 2026"
	},
	{
		slug: "perf-budget",
		t: "A performance budget for moderation bots",
		d: "Why p99 latency under 50ms is the only target that matters during a raid.",
		tag: "Engineering",
		date: "Apr 17, 2026"
	}
];
function BlogPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Blog",
		title: "Field notes from the security front line."
	}), /* @__PURE__ */ jsx("section", {
		className: "mx-auto grid max-w-5xl gap-4 px-6 pb-28 md:grid-cols-2",
		children: posts.map((p) => /* @__PURE__ */ jsxs(Link, {
			to: "/blog/$slug",
			params: { slug: p.slug },
			className: "glass group flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1",
			children: [
				/* @__PURE__ */ jsx("div", { className: "aspect-[16/9] rounded-xl bg-gradient-to-br from-brand/30 via-brand-glow/20 to-transparent" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-brand",
							children: p.tag
						}),
						/* @__PURE__ */ jsx("span", { children: "·" }),
						/* @__PURE__ */ jsx("span", { children: p.date })
					]
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-xl font-bold leading-tight group-hover:text-brand",
					children: p.t
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: p.d
				})
			]
		}, p.slug))
	})] });
}
//#endregion
export { BlogPage as component };

import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Check, X } from "lucide-react";
//#region src/routes/vs.wick.tsx?tsr-split=component
var rows = [
	{
		feature: "Antinuke (webhook, role, channel, ban)",
		titanium: true,
		wick: true
	},
	{
		feature: "Sub-20ms decisioning",
		titanium: true,
		wick: false
	},
	{
		feature: "Forensic audit timeline",
		titanium: true,
		wick: false
	},
	{
		feature: "Typed declarative automod policy",
		titanium: true,
		wick: false
	},
	{
		feature: "Unified web dashboard",
		titanium: true,
		wick: "Limited"
	},
	{
		feature: "Integrated ticket system",
		titanium: true,
		wick: false
	},
	{
		feature: "Multi-server analytics",
		titanium: true,
		wick: false
	},
	{
		feature: "SSO / SAML (Enterprise)",
		titanium: true,
		wick: false
	},
	{
		feature: "Free tier",
		titanium: "Up to 3 servers",
		wick: "Limited"
	},
	{
		feature: "Premium pricing",
		titanium: "$9.99 / mo",
		wick: "$5 – $15 / mo"
	}
];
function Cell({ value }) {
	if (value === true) return /* @__PURE__ */ jsx(Check, {
		className: "mx-auto size-5 text-brand",
		"aria-label": "Yes"
	});
	if (value === false) return /* @__PURE__ */ jsx(X, {
		className: "mx-auto size-5 text-muted-foreground/50",
		"aria-label": "No"
	});
	return /* @__PURE__ */ jsx("span", {
		className: "text-sm text-muted-foreground",
		children: value
	});
}
function VsWickPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			eyebrow: "Comparison",
			title: "Titanium Security vs Wick",
			sub: "The modern Wick alternative — faster decisioning, deeper forensic logging, and a unified dashboard built for serious Discord servers."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-5xl px-6 pb-16",
			children: /* @__PURE__ */ jsx("div", {
				className: "glass overflow-hidden rounded-3xl",
				children: /* @__PURE__ */ jsxs("table", {
					className: "w-full text-left",
					children: [/* @__PURE__ */ jsx("thead", {
						className: "border-b border-border/40 bg-white/[0.02]",
						children: /* @__PURE__ */ jsxs("tr", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4",
									children: "Feature"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4 text-center text-brand",
									children: "Titanium"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-6 py-4 text-center",
									children: "Wick"
								})
							]
						})
					}), /* @__PURE__ */ jsx("tbody", { children: rows.map((r) => /* @__PURE__ */ jsxs("tr", {
						className: "border-b border-border/20 last:border-0",
						children: [
							/* @__PURE__ */ jsx("td", {
								className: "px-6 py-4 text-sm",
								children: r.feature
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-6 py-4 text-center",
								children: /* @__PURE__ */ jsx(Cell, { value: r.titanium })
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-6 py-4 text-center",
								children: /* @__PURE__ */ jsx(Cell, { value: r.wick })
							})
						]
					}, r.feature)) })]
				})
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-4xl px-6 pb-28",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-bold tracking-tight",
					children: "Why teams switch from Wick to Titanium Security"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 grid gap-4 md:grid-cols-3",
					children: [
						{
							t: "Sub-20ms decisioning",
							d: "Titanium Security's hot path runs in-region with no cold starts. Raids are stopped before the first webhook clears."
						},
						{
							t: "Forensic logging",
							d: "Every action — automated or human — is captured on a timeline you can replay and export for incident review."
						},
						{
							t: "Unified dashboard",
							d: "Antinuke, automod, tickets, verification and analytics in one surface. No bot-per-feature sprawl."
						}
					].map((c) => /* @__PURE__ */ jsxs("div", {
						className: "glass rounded-2xl p-6",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-brand",
							children: c.t
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: c.d
						})]
					}, c.t))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ jsx("a", {
						href: "https://discord.com/api/oauth2/authorize?client_id=1456212834189971537&permissions=8&scope=bot%20applications.commands",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "rounded-full bg-gradient-to-r from-brand to-brand-glow px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30",
						children: "Add Titanium Security to your server"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/premium",
						className: "rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-semibold hover:bg-white/5",
						children: "See premium details"
					})]
				})
			]
		})
	] });
}
//#endregion
export { VsWickPage as component };

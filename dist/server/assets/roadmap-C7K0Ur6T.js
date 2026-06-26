import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/roadmap.tsx?tsr-split=component
var columns = [
	{
		h: "Shipping now",
		tone: "from-brand to-brand-glow",
		items: [
			"Webhook signature verification across all custom integrations.",
			"Hourly backup snapshots for Premium guilds.",
			"Cohort retention in the analytics module."
		]
	},
	{
		h: "Up next",
		tone: "from-amber-400 to-orange-500",
		items: [
			"Per-region runtime selection (EU / US / APAC).",
			"Native Slack mirror for severe-incident channels.",
			"Typed rule import / export with semantic diffs."
		]
	},
	{
		h: "Later",
		tone: "from-zinc-500 to-zinc-700",
		items: [
			"Public detection-rule marketplace.",
			"Custom-model evaluation for automod.",
			"Self-hosted runtime for compliance customers."
		]
	}
];
function RoadmapPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Roadmap",
		title: "Where Titanium Security is going next.",
		sub: "We share a public roadmap because predictability is a feature. Dates are intentionally omitted — outcomes are not."
	}), /* @__PURE__ */ jsx("section", {
		className: "mx-auto grid max-w-6xl gap-5 px-6 pb-28 md:grid-cols-3",
		children: columns.map((c) => /* @__PURE__ */ jsxs("div", {
			className: "glass rounded-2xl p-6",
			children: [/* @__PURE__ */ jsx("div", {
				className: `mb-4 inline-block rounded-full bg-gradient-to-r ${c.tone} px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand-foreground`,
				children: c.h
			}), /* @__PURE__ */ jsx("ul", {
				className: "space-y-3",
				children: c.items.map((i) => /* @__PURE__ */ jsx("li", {
					className: "rounded-xl border border-border/60 bg-surface/40 p-3 text-sm text-foreground/90",
					children: i
				}, i))
			})]
		}, c.h))
	})] });
}
//#endregion
export { RoadmapPage as component };

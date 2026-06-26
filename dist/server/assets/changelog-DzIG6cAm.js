import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/changelog.tsx?tsr-split=component
var kindStyle = {
	Major: "bg-brand/15 text-brand",
	Minor: "bg-emerald-500/15 text-emerald-300",
	Patch: "bg-white/5 text-muted-foreground"
};
var releases = [
	{
		v: "2.14.0",
		d: "Jun 18, 2026",
		k: "Major",
		notes: [
			"SuperAntinuke now supports webhook signature verification.",
			"New analytics module with cohort retention.",
			"Backup snapshots can be scheduled hourly on Premium."
		]
	},
	{
		v: "2.13.2",
		d: "Jun 04, 2026",
		k: "Patch",
		notes: ["Fixed a race in ticket assignment when staff was offline.", "Reduced verification cold-start latency by 38%."]
	},
	{
		v: "2.13.0",
		d: "May 22, 2026",
		k: "Minor",
		notes: [
			"Wall Roles GA.",
			"Embed Builder gets keyboard shortcuts.",
			"New audit log export to CSV / JSON."
		]
	},
	{
		v: "2.12.0",
		d: "May 08, 2026",
		k: "Minor",
		notes: ["Join2Create now supports per-template permission overrides.", "Reaction Roles supports up to 25 per message."]
	}
];
function ChangelogPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Changelog",
		title: "Every release, every fix.",
		sub: "Follow Titanium Security updates as they happen."
	}), /* @__PURE__ */ jsx("section", {
		className: "mx-auto max-w-3xl px-6 pb-28",
		children: /* @__PURE__ */ jsx("ol", {
			className: "relative border-l border-border/60 pl-6",
			children: releases.map((r) => /* @__PURE__ */ jsxs("li", {
				className: "mb-10",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -left-[7px] mt-1 size-3 rounded-full bg-brand ring-4 ring-background" }),
					/* @__PURE__ */ jsxs("div", {
						className: "mb-2 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "font-display text-2xl font-bold",
								children: ["v", r.v]
							}),
							/* @__PURE__ */ jsx("span", {
								className: `rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold ${kindStyle[r.k]}`,
								children: r.k
							}),
							/* @__PURE__ */ jsx("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: r.d
							})
						]
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "space-y-2 text-sm text-muted-foreground",
						children: r.notes.map((n, i) => /* @__PURE__ */ jsxs("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-brand",
								children: "•"
							}), n]
						}, i))
					})
				]
			}, r.v))
		})
	})] });
}
//#endregion
export { ChangelogPage as component };

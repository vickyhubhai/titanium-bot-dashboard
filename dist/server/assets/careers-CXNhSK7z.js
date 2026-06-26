import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
//#region src/routes/careers.tsx?tsr-split=component
var roles = [
	{
		t: "Senior Platform Engineer",
		loc: "Remote · EU/IN",
		dept: "Engineering"
	},
	{
		t: "Security Engineer, Detection",
		loc: "Remote · Worldwide",
		dept: "Engineering"
	},
	{
		t: "Product Designer",
		loc: "Remote · EU/UK",
		dept: "Design"
	},
	{
		t: "Developer Advocate",
		loc: "Remote · Americas",
		dept: "Growth"
	}
];
var values = [
	{
		t: "Senior by default",
		d: "Small team, broad surface. We hire people we trust to make calls without a committee."
	},
	{
		t: "Boring infrastructure",
		d: "We optimise for predictability over novelty. Excitement belongs to the customer, not the runtime."
	},
	{
		t: "Written first",
		d: "Every meaningful decision lives in a document. Anyone can read the history of the system at any time."
	}
];
function CareersPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			eyebrow: "Careers",
			title: "Senior engineering, defensive mindset, remote-first.",
			sub: "We are 11 people protecting thousands of communities. We hire rarely and slowly — and pay for the privilege."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto grid max-w-5xl gap-5 px-6 pb-16 md:grid-cols-3",
			children: values.map((v) => /* @__PURE__ */ jsxs("div", {
				className: "glass rounded-2xl p-6",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-2 font-display text-base font-bold",
					children: v.t
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: v.d
				})]
			}, v.t))
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-4xl px-6 pb-28",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-6 font-display text-xl font-bold",
				children: "Open roles"
			}), /* @__PURE__ */ jsx("ul", {
				className: "glass divide-y divide-border/60 rounded-2xl",
				children: roles.map((r) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
					to: "/contact",
					className: "flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-surface/50",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-display text-base font-bold",
						children: r.t
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-1 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-mono uppercase tracking-widest",
								children: r.dept
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mx-2",
								children: "·"
							}),
							/* @__PURE__ */ jsx("span", { children: r.loc })
						]
					})] }), /* @__PURE__ */ jsx(ArrowUpRight, {
						className: "h-5 w-5 text-brand",
						"aria-hidden": true
					})]
				}) }, r.t))
			})]
		})
	] });
}
//#endregion
export { CareersPage as component };

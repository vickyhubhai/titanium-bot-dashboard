import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/cookies.tsx?tsr-split=component
var rows = [
	{
		n: "Titanium Security_session",
		purpose: "Keeps you signed in to the dashboard between visits.",
		retention: "30 days",
		optional: false
	},
	{
		n: "Titanium Security_theme",
		purpose: "Remembers your theme preference (system / dark / light).",
		retention: "1 year",
		optional: true
	},
	{
		n: "Titanium Security_prefs",
		purpose: "Stores dashboard layout choices such as collapsed sidebars.",
		retention: "1 year",
		optional: true
	}
];
function CookiesPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Cookies",
		title: "What Titanium Security stores in your browser.",
		sub: "This page is maintained by the Titanium Security team and lists only the cookies and local-storage entries written by the dashboard today."
	}), /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-4xl px-6 pb-28",
		children: [/* @__PURE__ */ jsx("div", {
			className: "glass overflow-hidden rounded-2xl",
			children: /* @__PURE__ */ jsxs("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ jsx("thead", {
					className: "bg-surface/40 text-left font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
					children: /* @__PURE__ */ jsxs("tr", { children: [
						/* @__PURE__ */ jsx("th", {
							className: "px-5 py-3",
							children: "Name"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-5 py-3",
							children: "Purpose"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-5 py-3",
							children: "Retention"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-5 py-3",
							children: "Optional"
						})
					] })
				}), /* @__PURE__ */ jsx("tbody", {
					className: "divide-y divide-border/60",
					children: rows.map((r) => /* @__PURE__ */ jsxs("tr", { children: [
						/* @__PURE__ */ jsx("td", {
							className: "px-5 py-4 font-mono text-xs",
							children: r.n
						}),
						/* @__PURE__ */ jsx("td", {
							className: "px-5 py-4 text-muted-foreground",
							children: r.purpose
						}),
						/* @__PURE__ */ jsx("td", {
							className: "px-5 py-4",
							children: r.retention
						}),
						/* @__PURE__ */ jsx("td", {
							className: "px-5 py-4",
							children: /* @__PURE__ */ jsx("span", {
								className: `rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${r.optional ? "bg-brand/15 text-brand" : "bg-surface text-muted-foreground"}`,
								children: r.optional ? "Optional" : "Required"
							})
						})
					] }, r.n))
				})]
			})
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-6 text-sm text-muted-foreground",
			children: "Optional entries can be cleared at any time from your browser's site-data panel. Clearing the required session entry will sign you out of the dashboard."
		})]
	})] });
}
//#endregion
export { CookiesPage as component };

import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/status.tsx?tsr-split=component
var systems = [
	{
		k: "Bot Status",
		s: "Operational",
		up: 99.99
	},
	{
		k: "API Status",
		s: "Operational",
		up: 99.98
	},
	{
		k: "Website Status",
		s: "Operational",
		up: 99.99
	},
	{
		k: "Database Status",
		s: "Operational",
		up: 100
	}
];
function bars(seed) {
	return Array.from({ length: 60 }, (_, i) => (i * 7 + seed * 13) % 97 > 94 ? "warn" : "ok");
}
function StatusPage() {
	const overallUptime = (systems.reduce((acc, sys) => acc + sys.up, 0) / systems.length).toFixed(2);
	const hasIssues = systems.some((sys) => sys.s !== "Operational");
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			eyebrow: "Status",
			title: "All systems, in one glance.",
			sub: "Live uptime metrics and incident reports."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-4xl px-6 pb-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsxs("span", {
						className: "relative flex size-3",
						children: [/* @__PURE__ */ jsx("span", { className: `absolute inset-0 animate-ping rounded-full opacity-60 bg-emerald-400` }), /* @__PURE__ */ jsx("span", { className: `relative inline-flex size-3 rounded-full bg-emerald-400` })]
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "font-display text-lg font-bold",
						children: hasIssues ? "Degraded system performance" : "All systems operational"
					}), /* @__PURE__ */ jsx("div", {
						className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: "Updated just now"
					})] })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "text-right",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "font-display text-3xl font-bold",
						children: [overallUptime, "%"]
					}), /* @__PURE__ */ jsx("div", {
						className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: "90-day uptime"
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-4xl space-y-4 px-6 pb-28",
			children: systems.map((sys, idx) => {
				const b = bars(idx + 1);
				return /* @__PURE__ */ jsxs("div", {
					className: "glass rounded-2xl p-5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-semibold text-sm",
							children: sys.k
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: `font-mono text-[10px] uppercase tracking-widest text-emerald-400`,
								children: sys.s
							}), /* @__PURE__ */ jsxs("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: [sys.up, "%"]
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex gap-[2px]",
						children: b.map((c, i) => /* @__PURE__ */ jsx("div", { className: `h-6 flex-1 rounded-[2px] ${sys.s === "Operational" && c === "ok" ? "bg-emerald-400/40" : "bg-amber-400/60"}` }, i))
					})]
				}, sys.k);
			})
		})
	] });
}
//#endregion
export { StatusPage as component };

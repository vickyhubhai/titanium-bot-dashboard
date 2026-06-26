import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/integrations.tsx?tsr-split=component
var groups = [
	{
		title: "Communication",
		items: [
			{
				n: "Discord",
				d: "Core platform — guilds, roles, audit, channels."
			},
			{
				n: "Slack",
				d: "Mirror critical alerts to your operations channel."
			},
			{
				n: "Telegram",
				d: "Receive raid pings on mobile without opening Discord."
			}
		]
	},
	{
		title: "Developer",
		items: [
			{
				n: "GitHub",
				d: "Stream releases, CI status, and review pings to your guild."
			},
			{
				n: "Linear",
				d: "Open tickets from messages with a single context menu action."
			},
			{
				n: "Sentry",
				d: "Surface runtime errors in a dedicated incident channel."
			}
		]
	},
	{
		title: "Operations",
		items: [
			{
				n: "PagerDuty",
				d: "Escalate severe nuke attempts to your on-call rotation."
			},
			{
				n: "Datadog",
				d: "Forward metrics for dashboards and SLO tracking."
			},
			{
				n: "Statuspage",
				d: "Publish guild incidents to a public status page automatically."
			}
		]
	},
	{
		title: "Knowledge",
		items: [
			{
				n: "Notion",
				d: "Sync moderation runbooks and reference docs into help threads."
			},
			{
				n: "Linear Docs",
				d: "Surface design specs in product channels on request."
			},
			{
				n: "Google Drive",
				d: "Pin sourced documents to verified channels only."
			}
		]
	}
];
function IntegrationsPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Integrations",
		title: "One platform, every surface your team already uses.",
		sub: "Titanium Security speaks the protocols your stack already speaks. Stream events, sync rules, route alerts — without leaving the dashboard."
	}), /* @__PURE__ */ jsx("section", {
		className: "mx-auto grid max-w-6xl gap-6 px-6 pb-28 md:grid-cols-2",
		children: groups.map((g, gi) => /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 16
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: {
				duration: .5,
				delay: gi * .05
			},
			className: "glass rounded-2xl p-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-5 flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-xl font-bold",
					children: g.title
				}), /* @__PURE__ */ jsxs("span", {
					className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
					children: [g.items.length, " apps"]
				})]
			}), /* @__PURE__ */ jsx("ul", {
				className: "divide-y divide-border/60",
				children: g.items.map((i) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-start gap-4 py-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/30 via-brand-glow/20 to-transparent font-display text-sm font-bold",
						children: i.n.slice(0, 1)
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-medium",
							children: i.n
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: i.d
						})]
					})]
				}, i.n))
			})]
		}, g.title))
	})] });
}
//#endregion
export { IntegrationsPage as component };

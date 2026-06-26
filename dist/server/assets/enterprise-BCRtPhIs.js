import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Check } from "lucide-react";
//#region src/routes/enterprise.tsx?tsr-split=component
var pillars = [
	{
		t: "Dedicated capacity",
		d: "Isolated shards sized to your community's peak — never queued behind a noisy neighbour."
	},
	{
		t: "Named support",
		d: "A two-engineer pod assigned to your account with shared incident channels."
	},
	{
		t: "Operational SLAs",
		d: "99.99% module availability, 15-minute response targets for severity-one incidents."
	},
	{
		t: "Custom modules",
		d: "Bespoke moderation logic written and maintained by the Titanium Security platform team."
	},
	{
		t: "Data residency",
		d: "Choose between EU, US, and Asia-Pacific operational regions for the runtime."
	},
	{
		t: "Procurement ready",
		d: "MSA, DPA, security questionnaires, and yearly billing on net-60 terms."
	}
];
function EnterprisePage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			eyebrow: "Enterprise",
			title: "For communities that cannot afford a bad night.",
			sub: "When a single raid costs more than a year of tooling, off-the-shelf isn't enough. Enterprise gives you the engineering relationship to match."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto grid max-w-6xl gap-5 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3",
			children: pillars.map((p) => /* @__PURE__ */ jsxs("div", {
				className: "glass rounded-2xl p-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-3 flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand/30 via-brand-glow/20 to-transparent",
						children: /* @__PURE__ */ jsx(Check, {
							className: "h-4 w-4 text-brand",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ jsx("h2", {
						className: "font-display text-lg font-bold",
						children: p.t
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: p.d
				})]
			}, p.t))
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-3xl px-6 pb-28",
			children: /* @__PURE__ */ jsxs("div", {
				className: "glass overflow-hidden rounded-3xl p-10 text-center",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl font-extrabold tracking-tight",
						children: "Talk to a platform engineer, not a sales rep."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-3 max-w-xl text-sm text-muted-foreground",
						children: "Send us your peak concurrency, current attack surface, and SLA targets. We'll come back with a sized architecture in 48 hours."
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-brand to-brand-glow px-6 font-semibold text-brand-foreground shadow-soft transition-transform hover:-translate-y-0.5",
						children: "Start the conversation"
					})
				]
			})
		})
	] });
}
//#endregion
export { EnterprisePage as component };

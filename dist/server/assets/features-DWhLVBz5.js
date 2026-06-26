import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { n as ModulesGrid, t as SecuritySection } from "./SecuritySection-78DizJtq.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Key, ListFilter, RotateCcw, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";
//#region src/components/site/TechSpecs.tsx
var specs = [
	{
		icon: Zap,
		title: "Zero-Latency Containment",
		desc: "Uses event queues to intercept rogue administrative actions in under 15ms, faster than Discord's API rate limits."
	},
	{
		icon: RotateCcw,
		title: "Fail-Safe Entity Recovery",
		desc: "Instantly re-creates channels, roles, and permission templates deleted by hijackers, maintaining operational continuity."
	},
	{
		icon: ShieldCheck,
		title: "VPN & Proxy Intelligence",
		desc: "Vets joining members against active VPN and residential proxy databases, preventing secondary spam accounts."
	},
	{
		icon: TrendingUp,
		title: "Auto-Scaling Slowmode",
		desc: "Monitors chat velocity metrics. If message rate spikes past safe parameters, slowmode scales up automatically."
	},
	{
		icon: Key,
		title: "Append-Only Audit Vaults",
		desc: "Duplicates moderation streams directly to off-guild webhooks, ensuring logs remain readable even if server logs are purged."
	},
	{
		icon: ListFilter,
		title: "Dynamic Ticket Routing",
		desc: "Supports multiple support channels, automated assignment rules, and offline HTML archive compiles for record-keeping."
	}
];
function TechSpecs() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative px-6 py-28 border-t border-border/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-3 font-mono text-[10px] uppercase tracking-widest text-brand",
						children: "── Core Engine Specs"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "font-display text-4xl font-bold tracking-tight md:text-5xl",
						children: [
							"Built for high velocity.",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: "Architected for security."
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-6 max-w-xl text-sm text-muted-foreground",
						children: "Explore the engineering details that make Titanium Security the choice for professional servers."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: specs.map((s, idx) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 15
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: idx * .06 },
					className: "glass p-6 rounded-2xl transition hover:bg-white/[0.04]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-4 inline-grid size-9 place-items-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20",
							children: /* @__PURE__ */ jsx(s.icon, { className: "size-4.5" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mb-2 font-display text-base font-bold",
							children: s.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: s.desc
						})
					]
				}, s.title))
			})]
		})
	});
}
//#endregion
//#region src/routes/features.tsx?tsr-split=component
function FeaturesPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "px-6 pb-10 pt-10 text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mb-3 font-mono text-[10px] uppercase tracking-widest text-brand",
					children: "── Capabilities"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "font-display text-5xl font-extrabold tracking-tight md:text-6xl",
					children: [
						"Every layer of your server,",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: "built for the worst day."
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-6 max-w-2xl text-muted-foreground",
					children: "From real-time antinuke triggers to ML-driven analytics, Titanium Security covers every surface of community operations."
				})
			]
		}),
		/* @__PURE__ */ jsx(ModulesGrid, {}),
		/* @__PURE__ */ jsx(SecuritySection, {}),
		/* @__PURE__ */ jsx(TechSpecs, {})
	] });
}
//#endregion
export { FeaturesPage as component };

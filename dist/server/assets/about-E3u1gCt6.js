import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/routes/about.tsx?tsr-split=component
var principles = [
	{
		k: "Sovereignty first",
		d: "Your community, your data, your rules. We never train models on guild content."
	},
	{
		k: "Predictable trust",
		d: "Every action is logged, signed, and reversible. No magic, no surprises."
	},
	{
		k: "Performance is a feature",
		d: "Sub-20ms decisioning across regions. Latency isn't a luxury — it's protection."
	},
	{
		k: "Defence in depth",
		d: "Layered controls so a single failure can never compromise an entire server."
	}
];
var team = [
	{
		n: "Aanya Verma",
		r: "Founder · Security"
	},
	{
		n: "Kiran Mehra",
		r: "Engineering"
	},
	{
		n: "Rohan Iyer",
		r: "Platform"
	},
	{
		n: "Naomi Park",
		r: "Design"
	}
];
function AboutPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			eyebrow: "About",
			title: "Built for the few who take community seriously.",
			sub: "Titanium Security started as a defensive tool for a single 200k-member server under sustained attack. Today it protects thousands of communities with the same engineering discipline."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto grid max-w-5xl gap-4 px-6 pb-16 md:grid-cols-2",
			children: principles.map((p, i) => /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .05 },
				className: "glass rounded-2xl p-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-2 font-mono text-[10px] uppercase tracking-widest text-brand",
						children: ["Principle 0", i + 1]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "font-display text-xl font-bold",
						children: p.k
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: p.d
					})
				]
			}, p.k))
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-5xl px-6 pb-28",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-6 font-display text-2xl font-bold",
				children: "The team"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: team.map((t) => /* @__PURE__ */ jsxs("div", {
					className: "glass rounded-2xl p-5",
					children: [
						/* @__PURE__ */ jsx("div", { className: "mb-3 size-12 rounded-xl bg-gradient-to-br from-brand to-brand-glow" }),
						/* @__PURE__ */ jsx("div", {
							className: "font-semibold",
							children: t.n
						}),
						/* @__PURE__ */ jsx("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: t.r
						})
					]
				}, t.n))
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };

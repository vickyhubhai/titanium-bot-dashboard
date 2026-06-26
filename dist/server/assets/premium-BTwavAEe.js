import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Check, Star } from "lucide-react";
//#region src/routes/premium.tsx?tsr-split=component
var tiers = [
	{
		name: "Free",
		price: "$0",
		desc: "Essential moderation and basic security for growing groups.",
		features: [
			"Up to 3 servers",
			"Standard Anti Nuke limits",
			"Core Automod filter",
			"Standard Verification panels",
			"7-day audit logs retention",
			"Community support"
		],
		cta: "Invite Free Bot"
	},
	{
		name: "Premium",
		price: "$9.99",
		desc: "Unleash the full power of advanced protection and analytics.",
		features: [
			"Unlimited protected servers",
			"SuperAntinuke signature checks",
			"Zero-latency custom bot branding",
			"90-day forensic log history",
			"Dedicated hosting slots",
			"Advanced spam pattern matching",
			"Priority SLA developer support"
		],
		highlight: true,
		cta: "Get Premium"
	},
	{
		name: "Enterprise",
		price: "Custom",
		desc: "For large networks, corporations, and white-label bots.",
		features: [
			"Everything in Premium",
			"Dedicated bot infrastructure",
			"Custom integrations & Webhooks",
			"Automated compliance reports",
			"24/7 dedicated incidents hotline",
			"SAML / SSO dashboard configurations"
		],
		cta: "Contact Sales"
	}
];
var comparisonMatrix = [
	{
		feature: "Latency response",
		free: "Standard (<150ms)",
		premium: "Ultra-low (<15ms)",
		enterprise: "Dedicated (<15ms)"
	},
	{
		feature: "Anti Nuke sensitivity",
		free: "Standard limits",
		premium: "SuperAntinuke signatures",
		enterprise: "Custom thresholds"
	},
	{
		feature: "Verification mechanisms",
		free: "CAPTCHA, Age gate",
		premium: "OAuth, VPN blocks, CAPTCHA",
		enterprise: "Custom auth flows"
	},
	{
		feature: "Logging retention",
		free: "7 Days",
		premium: "90 Days",
		enterprise: "Unlimited / S3 backup"
	},
	{
		feature: "Uptime SLA",
		free: "Best effort",
		premium: "99.9% uptime",
		enterprise: "99.99% dedicated"
	},
	{
		feature: "Tickets management",
		free: "1 active queue",
		premium: "Unlimited queues",
		enterprise: "Custom pipelines"
	}
];
function PremiumPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "px-6 pb-16 pt-10 text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mb-3 font-mono text-[10px] uppercase tracking-widest text-brand",
					children: "── Titanium Premium"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "font-display text-5xl font-extrabold tracking-tight md:text-6xl",
					children: [
						"Secure your community",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: "with premium protection."
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-6 max-w-2xl text-sm text-muted-foreground",
					children: "Choose the level of defense your community deserves. All premium plans include support for the developers."
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3",
			children: tiers.map((t) => /* @__PURE__ */ jsxs("div", {
				className: `glass relative rounded-3xl p-8 flex flex-col justify-between ${t.highlight ? "ring-2 ring-brand/60 bg-surface/20" : "bg-surface/10"}`,
				children: [
					t.highlight && /* @__PURE__ */ jsxs("div", {
						className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-glow px-4 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-white flex items-center gap-1 shadow-lg",
						children: [/* @__PURE__ */ jsx(Star, { className: "size-3 fill-white" }), " Recommended"]
					}),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: "mb-2 font-mono text-xs uppercase tracking-widest text-brand",
							children: t.name
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "font-display text-5xl font-extrabold flex items-baseline",
							children: [t.price, t.price !== "Custom" && /* @__PURE__ */ jsx("span", {
								className: "text-sm font-normal text-muted-foreground ml-1",
								children: "/mo"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-xs text-muted-foreground leading-relaxed",
							children: t.desc
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-8 space-y-3.5 text-xs text-muted-foreground border-t border-border/40 pt-6",
							children: t.features.map((f) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx(Check, { className: "size-4 shrink-0 text-brand mt-0.5" }), /* @__PURE__ */ jsx("span", { children: f })]
							}, f))
						})
					] }),
					/* @__PURE__ */ jsx("a", {
						href: "https://discord.gg/UXKWfgWgth",
						target: "_blank",
						rel: "noopener noreferrer",
						className: `mt-10 block w-full rounded-xl py-3 text-center text-xs font-semibold transition-transform hover:scale-[1.02] ${t.highlight ? "bg-gradient-to-r from-brand to-brand-glow text-white shadow-lg shadow-brand/30" : "glass-subtle hover:bg-white/10"}`,
						children: t.cta
					})
				]
			}, t.name))
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-5xl px-6 pb-28",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-8 text-center md:text-left",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-2xl font-bold",
					children: "Compare details"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "A granular look at the feature sets of each protection class."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "glass overflow-hidden rounded-2xl border border-border/60",
				children: /* @__PURE__ */ jsx("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ jsxs("table", {
						className: "w-full text-left border-collapse text-xs",
						children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
							className: "border-b border-border/60 bg-surface/35 font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("th", {
									className: "p-4 md:p-5 font-semibold",
									children: "Security Spec"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "p-4 md:p-5 font-semibold",
									children: "Free"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "p-4 md:p-5 font-semibold text-brand",
									children: "Premium"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "p-4 md:p-5 font-semibold",
									children: "Enterprise"
								})
							]
						}) }), /* @__PURE__ */ jsx("tbody", {
							className: "divide-y divide-border/40",
							children: comparisonMatrix.map((item, idx) => /* @__PURE__ */ jsxs("tr", {
								className: "hover:bg-white/[0.02] transition-colors",
								children: [
									/* @__PURE__ */ jsx("td", {
										className: "p-4 md:p-5 font-medium text-foreground",
										children: item.feature
									}),
									/* @__PURE__ */ jsx("td", {
										className: "p-4 md:p-5 text-muted-foreground",
										children: item.free
									}),
									/* @__PURE__ */ jsx("td", {
										className: "p-4 md:p-5 text-brand font-medium",
										children: item.premium
									}),
									/* @__PURE__ */ jsx("td", {
										className: "p-4 md:p-5 text-muted-foreground",
										children: item.enterprise
									})
								]
							}, idx))
						})]
					})
				})
			})]
		})
	] });
}
//#endregion
export { PremiumPage as component };

import { jsx, jsxs } from "react/jsx-runtime";
import { Activity, AlertOctagon, Bot, Boxes, Cpu, Crown, Database, Gift, Hammer, Handshake, Link2Off, MessageSquareOff, MousePointerClick, ScrollText, ShieldAlert, ShieldX, Terminal, Ticket, UserCheck, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
//#region src/components/site/ModulesGrid.tsx
var modules = [
	{
		icon: ShieldAlert,
		label: "Anti Nuke",
		desc: "Instantly halt rogue admin activities. Contain bulk kicks, channel deletions, and role edits.",
		tone: "rose"
	},
	{
		icon: ShieldX,
		label: "Anti Raid",
		desc: "Block rapid join flows. Automatically trigger lockouts or apply verification gates during raids.",
		tone: "rose"
	},
	{
		icon: MessageSquareOff,
		label: "Anti Spam",
		desc: "Detect and suppress rapid message floods, duplicate posts, and spam patterns.",
		tone: "brand"
	},
	{
		icon: Link2Off,
		label: "Anti Link",
		desc: "Manage URL sharing. Block unauthorized invitations, phishy URLs, and domain patterns.",
		tone: "brand"
	},
	{
		icon: AlertOctagon,
		label: "Anti Scam",
		desc: "Machine-learning pattern matching to identify and purge crypto scams and phishing attempts.",
		tone: "rose"
	},
	{
		icon: Bot,
		label: "Anti Bot",
		desc: "Block automated malicious accounts. Stop bot accounts from joining and inflating memberships.",
		tone: "emerald"
	},
	{
		icon: Cpu,
		label: "Auto Moderation",
		desc: "Automate chat rules. Silence slurs, filter toxic phrases, and clean chats in under 200ms.",
		tone: "brand"
	},
	{
		icon: UserCheck,
		label: "Verification",
		desc: "Multi-layered CAPTCHA, VPN detection, and age checks to vet users before they chat.",
		tone: "emerald"
	},
	{
		icon: ScrollText,
		label: "Logging",
		desc: "Maintain full transparency. Deep audits of commands, edits, bans, and actions.",
		tone: "brand"
	},
	{
		icon: Handshake,
		label: "Welcome System",
		desc: "Greet new users with beautiful embed welcome graphics, guides, and server directions.",
		tone: "emerald"
	},
	{
		icon: UserPlus,
		label: "Autorole",
		desc: "Assign base roles automatically to newcomers, separating verified members from guests.",
		tone: "emerald"
	},
	{
		icon: MousePointerClick,
		label: "Reaction Roles",
		desc: "Self-service roles. Let members choose channels and notifications via button clicks.",
		tone: "amber"
	},
	{
		icon: Gift,
		label: "Giveaways",
		desc: "Scale community rewards. Set role and invite thresholds to qualify for clean sweeps.",
		tone: "rose"
	},
	{
		icon: Ticket,
		label: "Tickets",
		desc: "Seamless private support channel management with transcript exports and agent logs.",
		tone: "amber"
	},
	{
		icon: Terminal,
		label: "Utility Commands",
		desc: "Essential utilities like polls, server stats, weather lookup, and embed creators.",
		tone: "brand"
	},
	{
		icon: Hammer,
		label: "Moderation",
		desc: "Robust commands: ban, kick, timeout, warn, mute, purge. Instant and audited actioning.",
		tone: "brand"
	},
	{
		icon: Database,
		label: "Backup System",
		desc: "Clone and secure settings, templates, role permissions, and channel structures.",
		tone: "amber"
	},
	{
		icon: Activity,
		label: "Security Monitoring",
		desc: "Track server threat level in real-time. Detect spikes in bad events or bans.",
		tone: "brand"
	},
	{
		icon: Crown,
		label: "Premium Features",
		desc: "Unlock custom bot branding, hourly backups, API Webhooks, and SLA support.",
		tone: "amber"
	}
];
var tones = {
	brand: "bg-brand/10 text-brand ring-brand/30",
	rose: "bg-rose-500/10 text-rose-300 ring-rose-500/30",
	emerald: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
	amber: "bg-amber-500/10 text-amber-300 ring-amber-500/30"
};
function ModulesGrid() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative px-6 py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ jsx("div", {
						className: "mb-3 font-mono text-[10px] uppercase tracking-widest text-brand",
						children: "── Modules"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "font-display text-4xl font-bold tracking-tight md:text-5xl",
						children: [
							"Hardware-grade modules,",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: "one unified console."
							})
						]
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "max-w-sm text-sm text-muted-foreground",
					children: "Every module is independently toggleable, deeply configurable, and built for high-velocity servers without configuration friction."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: modules.map((m, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .5,
						delay: i % 3 * .08
					},
					className: "glass group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1 hover:bg-white/[0.06]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: `mb-5 inline-grid size-11 place-items-center rounded-xl ring-1 ${tones[m.tone]}`,
							children: /* @__PURE__ */ jsx(m.icon, { className: "size-5" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mb-2 font-display text-lg font-bold",
							children: m.label
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: m.desc
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-emerald-400" }), "Active / Protected"]
						}),
						/* @__PURE__ */ jsx(Boxes, { className: "absolute -right-4 -top-4 size-24 text-foreground/[0.02] transition-transform group-hover:rotate-6" })
					]
				}, m.label))
			})]
		})
	});
}
//#endregion
//#region src/components/site/SecuritySection.tsx
var bars = [
	40,
	60,
	30,
	85,
	55,
	70,
	45,
	62,
	78,
	50,
	88,
	42
];
function SecuritySection() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative bg-surface/20 px-6 py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("div", {
					className: "mb-3 font-mono text-[10px] uppercase tracking-widest text-brand",
					children: "── Analytics"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-4xl font-bold tracking-tight md:text-5xl",
					children: [
						"Actionable intelligence.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: "No more guessing."
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-md text-muted-foreground",
					children: "Our analytics engine turns server growth, retention and security events into high-fidelity data points your staff can actually use."
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-8 space-y-4",
					children: [
						"Heatmaps of peak activity periods",
						"Forensic logs of every moderation action",
						"Predictive threat assessment via ML models",
						"Exportable audit trails (CSV, JSON, Webhook)"
					].map((t, i) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-center gap-4 text-sm font-medium",
						children: [/* @__PURE__ */ jsx("span", {
							className: "glass-subtle grid size-7 place-items-center rounded-md font-mono text-[10px] text-brand",
							children: String(i + 1).padStart(2, "0")
						}), t]
					}, t))
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "glass relative overflow-hidden rounded-3xl p-7",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-6 flex items-center justify-between",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-mono text-xs uppercase tracking-widest",
							children: "Security Pulse · 12W"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-4 font-mono text-[10px]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-brand",
								children: "● Allowed"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-rose-400",
								children: "● Blocked"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex h-64 items-end gap-2",
						children: bars.map((h, i) => /* @__PURE__ */ jsx(motion.div, {
							initial: { height: 0 },
							whileInView: { height: `${h}%` },
							viewport: { once: true },
							transition: {
								duration: .8,
								delay: i * .04,
								ease: "easeOut"
							},
							className: `flex-1 rounded-t-md ${h > 80 ? "bg-rose-400/60" : "bg-brand/40"}`
						}, i))
					}),
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 animate-scan bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" })
				]
			})]
		})
	});
}
//#endregion
export { ModulesGrid as n, SecuritySection as t };

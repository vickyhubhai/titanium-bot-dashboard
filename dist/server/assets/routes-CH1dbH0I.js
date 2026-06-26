import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { n as ModulesGrid, t as SecuritySection } from "./SecuritySection-78DizJtq.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Activity, ArrowRight, Check, ChevronRight, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
//#region src/components/site/DashboardMockup.tsx
function DashboardMockup() {
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: 1,
			delay: .4,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "relative mx-auto w-full max-w-5xl",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute -inset-x-20 -top-20 h-[60%] rounded-full bg-brand/20 blur-[100px]",
			"aria-hidden": true
		}), /* @__PURE__ */ jsxs("div", {
			className: "glass relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex h-9 items-center gap-2 border-b border-border/60 bg-surface/50 px-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex gap-1.5",
					children: [
						/* @__PURE__ */ jsx("div", { className: "size-2.5 rounded-full bg-white/10" }),
						/* @__PURE__ */ jsx("div", { className: "size-2.5 rounded-full bg-white/10" }),
						/* @__PURE__ */ jsx("div", { className: "size-2.5 rounded-full bg-white/10" })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex-1 text-center",
					children: /* @__PURE__ */ jsx("span", {
						className: "rounded bg-black/30 px-3 py-0.5 font-mono text-[10px] text-muted-foreground",
						children: "titanium.security/dashboard/security"
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-[180px_1fr] bg-background",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "border-r border-border/60 p-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-4 flex items-center gap-2 rounded-md bg-brand/10 px-2.5 py-2 ring-1 ring-brand/30",
							children: [/* @__PURE__ */ jsx("div", { className: "size-5 rounded bg-gradient-to-br from-brand to-brand-glow" }), /* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold",
								children: "TITANIUM SECURITY"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mb-2 px-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
							children: "Protection"
						}),
						[
							{
								label: "Security Console",
								active: true
							},
							{
								label: "Antinuke Config",
								active: false
							},
							{
								label: "Automod Rules",
								active: false
							},
							{
								label: "Verification Gate",
								active: false
							},
							{
								label: "Tickets & Logs",
								active: false
							},
							{
								label: "Reaction Roles",
								active: false
							},
							{
								label: "Backup & Sync",
								active: false
							},
							{
								label: "Booster Perks",
								active: false
							}
						].map((i) => /* @__PURE__ */ jsxs("div", {
							className: `flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs ${i.active ? "bg-white/5 text-foreground" : "text-muted-foreground"}`,
							children: [/* @__PURE__ */ jsx("div", { className: `size-1.5 rounded-full ${i.active ? "bg-brand" : "bg-white/15"}` }), i.label]
						}, i.label))
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-4 p-5",
					children: [/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-3 gap-3",
						children: [
							{
								icon: Shield,
								label: "THREATS BLOCKED",
								value: "1,242",
								trend: "+12%",
								color: "text-emerald-400"
							},
							{
								icon: Activity,
								label: "MEMBERS",
								value: "84.2K",
								trend: "+3.4%",
								color: "text-brand"
							},
							{
								icon: Zap,
								label: "RESPONSE",
								value: "14ms",
								trend: "stable",
								color: "text-muted-foreground"
							}
						].map((s, i) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .8 + i * .1 },
							className: "glass-subtle rounded-lg p-3",
							children: [
								/* @__PURE__ */ jsx(s.icon, { className: "mb-2 size-3.5 text-muted-foreground" }),
								/* @__PURE__ */ jsx("div", {
									className: "font-mono text-[9px] tracking-wider text-muted-foreground",
									children: s.label
								}),
								/* @__PURE__ */ jsx("div", {
									className: "font-display text-xl font-bold",
									children: s.value
								}),
								/* @__PURE__ */ jsx("div", {
									className: `font-mono text-[9px] ${s.color}`,
									children: s.trend
								})
							]
						}, s.label))
					}), /* @__PURE__ */ jsxs("div", {
						className: "glass-subtle relative overflow-hidden rounded-lg p-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-3 flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono text-[10px] tracking-wider text-muted-foreground",
									children: "LIVE SECURITY LOG"
								}), /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-1.5 font-mono text-[9px] text-emerald-400",
									children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 animate-pulse-dot rounded-full bg-emerald-400" }), "LIVE"]
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "space-y-2 font-mono text-[10px]",
								children: [
									{
										t: "14:02:11",
										e: "Antinuke: Trigger prevented (User: Cipher#001)",
										c: "text-rose-300"
									},
									{
										t: "14:02:08",
										e: "Automod: Deleted 4 messages (Mass Mention)",
										c: "text-amber-300"
									},
									{
										t: "14:01:55",
										e: "Verification: New user approved via OAuth",
										c: "text-emerald-300"
									},
									{
										t: "14:01:21",
										e: "Backup: Snapshot saved (12.4MB)",
										c: "text-muted-foreground"
									}
								].map((l, i) => /* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										x: -10
									},
									animate: {
										opacity: 1,
										x: 0
									},
									transition: { delay: 1 + i * .08 },
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ jsxs("span", {
											className: "text-brand/60",
											children: [
												"[",
												l.t,
												"]"
											]
										}),
										/* @__PURE__ */ jsx("span", {
											className: l.c,
											children: l.e
										}),
										/* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto size-3 text-muted-foreground/40" })
									]
								}, i))
							}),
							/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 animate-scan bg-gradient-to-r from-transparent via-white/5 to-transparent" })
						]
					})]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/site/ParticleField.tsx
/**
* Lightweight canvas particle field. GPU-friendly, ~60 particles,
* pauses when offscreen or when prefers-reduced-motion.
*/
function ParticleField({ className = "" }) {
	const ref = useRef(null);
	useEffect(() => {
		const canvas = ref.current;
		if (!canvas) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let w = 0;
		let h = 0;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			w = rect.width;
			h = rect.height;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx.scale(dpr, dpr);
		};
		resize();
		const count = Math.min(70, Math.floor(w * h / 18e3));
		const particles = Array.from({ length: count }, () => ({
			x: Math.random() * w,
			y: Math.random() * h,
			vx: (Math.random() - .5) * .15,
			vy: (Math.random() - .5) * .15,
			r: Math.random() * 1.4 + .4,
			a: Math.random() * .5 + .2
		}));
		let raf = 0;
		let running = true;
		const io = new IntersectionObserver(([e]) => {
			running = e.isIntersecting;
			if (running) raf = requestAnimationFrame(loop);
		});
		io.observe(canvas);
		const loop = () => {
			if (!running) return;
			ctx.clearRect(0, 0, w, h);
			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > w) p.vx *= -1;
				if (p.y < 0 || p.y > h) p.vy *= -1;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(160, 180, 255, ${p.a})`;
				ctx.fill();
			}
			for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
				const a = particles[i];
				const b = particles[j];
				const dx = a.x - b.x;
				const dy = a.y - b.y;
				const d2 = dx * dx + dy * dy;
				if (d2 < 11e3) {
					ctx.strokeStyle = `rgba(140, 160, 255, ${.08 * (1 - d2 / 11e3)})`;
					ctx.lineWidth = .6;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
				}
			}
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		const onResize = () => {
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			resize();
		};
		window.addEventListener("resize", onResize);
		return () => {
			cancelAnimationFrame(raf);
			io.disconnect();
			window.removeEventListener("resize", onResize);
		};
	}, []);
	return /* @__PURE__ */ jsx("canvas", {
		ref,
		"aria-hidden": true,
		className: `pointer-events-none size-full ${className}`
	});
}
//#endregion
//#region src/components/site/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative px-6 pb-20 pt-16",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 -z-0 opacity-70",
				children: /* @__PURE__ */ jsx(ParticleField, {})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 mx-auto max-w-6xl text-center",
				children: [
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "relative flex size-2",
							children: [/* @__PURE__ */ jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-brand opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex size-2 rounded-full bg-brand" })]
						}), "System status · fortified"]
					}),
					/* @__PURE__ */ jsx(motion.h1, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .1
						},
						className: "font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-7xl",
						children: "Fortress-Grade Discord Security & Moderation"
					}),
					/* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .2
						},
						className: "mx-auto mt-7 max-w-2xl text-lg text-muted-foreground text-pretty",
						children: "The ultimate security bot for professional Discord communities. Real-time antinuke protection, zero-latency automod, verified gates, and customizable incident logging to secure your guild."
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .3
						},
						className: "mt-10 flex flex-wrap items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ jsxs("a", {
								href: "https://discord.com/api/oauth2/authorize?client_id=1456212834189971537&permissions=8&scope=bot%20applications.commands",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]",
								children: ["Invite Bot", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })]
							}),
							/* @__PURE__ */ jsx("a", {
								href: "https://discord.gg/UXKWfgWgth",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "glass rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10",
								children: "Support Server"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/docs",
								className: "glass rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10",
								children: "Read Docs"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 mt-20",
				children: /* @__PURE__ */ jsx(DashboardMockup, {})
			})
		]
	});
}
//#endregion
//#region src/hooks/use-count-up.ts
/**
* Count up to `target` once the element scrolls into view.
* Returns [value, ref].
*/
function useCountUp(target, duration = 1600) {
	const [value, setValue] = useState(0);
	const ref = useRef(null);
	const started = useRef(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (!e.isIntersecting || started.current) return;
			started.current = true;
			const start = performance.now();
			const tick = (now) => {
				const t = Math.min(1, (now - start) / duration);
				const eased = 1 - Math.pow(1 - t, 3);
				setValue(Math.round(target * eased));
				if (t < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		}, { threshold: .3 });
		io.observe(el);
		return () => io.disconnect();
	}, [target, duration]);
	return [value, ref];
}
//#endregion
//#region src/components/site/StatsStrip.tsx
function Counter({ stat }) {
	const [value, ref] = useCountUp(stat.target * 100, 1600);
	const [jitter, setJitter] = useState(0);
	useEffect(() => {
		if (!stat.live) return;
		const id = setInterval(() => setJitter(Math.floor(Math.random() * 5) - 2), 1800);
		return () => clearInterval(id);
	}, [stat.live]);
	const display = stat.format(value / 100 + (stat.live ? jitter : 0));
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: "text-center",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-1 flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
			children: [stat.live && /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-emerald-400 animate-pulse-dot" }), stat.k]
		}), /* @__PURE__ */ jsx("div", {
			className: "font-display text-3xl font-bold tracking-tight tabular-nums",
			children: display
		})]
	});
}
function StatsStrip() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative border-y border-border/60 bg-surface/30 py-10",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4",
			children: [
				{
					k: "Servers Protected",
					target: 15284,
					format: (n) => n.toLocaleString()
				},
				{
					k: "Threats Blocked",
					target: 3294845,
					format: (n) => n.toLocaleString()
				},
				{
					k: "Avg Response",
					target: 14,
					format: (n) => `${n}ms`,
					live: true
				},
				{
					k: "Uptime SLA",
					target: 99.99,
					format: (n) => `${n.toFixed(2)}%`
				}
			].map((s) => /* @__PURE__ */ jsx(Counter, { stat: s }, s.k))
		})
	});
}
//#endregion
//#region src/components/site/PricingTeaser.tsx
function PricingTeaser() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "mb-3 font-mono text-[10px] uppercase tracking-widest text-brand",
					children: "── Pricing"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl font-bold tracking-tight md:text-5xl",
					children: "Ready to fortify your server?"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-muted-foreground",
					children: "Free for developing communities. Premium for high-value targets that demand more."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "glass relative mt-10 overflow-hidden rounded-3xl p-8 text-left",
					children: [/* @__PURE__ */ jsx("div", {
						className: "absolute -right-12 -top-12 size-48 rounded-full bg-brand/20 blur-3xl",
						"aria-hidden": true
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-1 font-mono text-xs text-brand",
								children: "PREMIUM"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "font-display text-5xl font-extrabold",
								children: ["$9.99", /* @__PURE__ */ jsx("span", {
									className: "text-lg font-normal text-muted-foreground",
									children: "/mo"
								})]
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-8 space-y-3 text-sm",
								children: [
									"Unlimited servers & members",
									"Full antinuke & SuperAntinuke suite",
									"Custom branding & vanity",
									"Priority hosting & SLA",
									"Advanced backup & analytics"
								].map((f) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx(Check, { className: "size-4 text-brand" }), f]
								}, f))
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/premium",
								className: "mt-8 block w-full rounded-xl bg-gradient-to-r from-brand to-brand-glow py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-[1.02]",
								children: "View all plans"
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(StatsStrip, {}),
		/* @__PURE__ */ jsx(ModulesGrid, {}),
		/* @__PURE__ */ jsx(SecuritySection, {}),
		/* @__PURE__ */ jsx(PricingTeaser, {})
	] });
}
//#endregion
export { Index as component };

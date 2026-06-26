import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Shield } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//#region src/components/site/Logo.tsx
function Logo({ className = "" }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/",
		className: `group flex items-center gap-2.5 ${className}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow shadow-lg shadow-brand/30",
			children: [/* @__PURE__ */ jsx(Shield, {
				className: "size-4 text-white",
				strokeWidth: 2.5
			}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-lg bg-brand/40 opacity-0 blur-md transition-opacity group-hover:opacity-100" })]
		}), /* @__PURE__ */ jsx("span", {
			className: "font-display text-lg font-bold tracking-tight",
			children: "TITANIUM"
		})]
	});
}
//#endregion
//#region src/components/site/Nav.tsx
var navLinks = [
	{
		to: "/features",
		label: "Features"
	},
	{
		to: "/commands",
		label: "Commands"
	},
	{
		to: "/modules",
		label: "Modules"
	},
	{
		to: "/premium",
		label: "Premium"
	},
	{
		to: "/docs",
		label: "Docs"
	},
	{
		to: "/faq",
		label: "FAQ"
	}
];
function Nav() {
	return /* @__PURE__ */ jsx("header", {
		className: "fixed inset-x-0 top-0 z-50 px-4 pt-4",
		children: /* @__PURE__ */ jsxs("nav", {
			className: "glass mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-4 pr-2",
			children: [
				/* @__PURE__ */ jsx(Logo, {}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden items-center gap-7 md:flex",
					children: navLinks.map((l) => /* @__PURE__ */ jsx(Link, {
						to: l.to,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ jsx("a", {
					href: "https://discord.com/api/oauth2/authorize?client_id=1456212834189971537&permissions=8&scope=bot%20applications.commands",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "rounded-full bg-gradient-to-r from-brand to-brand-glow px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:scale-[1.03] hover:shadow-brand/50",
					children: "Invite Bot"
				})
			]
		})
	});
}
//#endregion
//#region src/components/site/Footer.tsx
var cols = [
	{
		title: "Product",
		links: [
			{
				label: "Features",
				to: "/features"
			},
			{
				label: "Commands",
				to: "/commands"
			},
			{
				label: "Modules",
				to: "/modules"
			},
			{
				label: "Premium",
				to: "/premium"
			},
			{
				label: "Changelog",
				to: "/changelog"
			},
			{
				label: "Status",
				to: "/status"
			}
		]
	},
	{
		title: "Resources",
		links: [
			{
				label: "Documentation",
				to: "/docs"
			},
			{
				label: "FAQ",
				to: "/faq"
			},
			{
				label: "Support Server",
				to: "https://discord.gg/UXKWfgWgth"
			},
			{
				label: "Invite Bot",
				to: "https://discord.com/api/oauth2/authorize?client_id=1456212834189971537&permissions=8&scope=bot%20applications.commands"
			}
		]
	},
	{
		title: "Legal & Support",
		links: [
			{
				label: "Contact Us",
				to: "/contact"
			},
			{
				label: "Privacy Policy",
				to: "/privacy"
			},
			{
				label: "Terms of Service",
				to: "/terms"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative border-t border-border/60 bg-surface/30 px-6 py-16",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Logo, {}), /* @__PURE__ */ jsx("p", {
				className: "mt-4 max-w-xs text-sm text-muted-foreground",
				children: "Architected for digital safety and community resilience. Titanium Security is built for servers that take security seriously."
			})] }), cols.map((col) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
				className: "mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground",
				children: col.title
			}), /* @__PURE__ */ jsx("ul", {
				className: "space-y-3",
				children: col.links.map((l) => /* @__PURE__ */ jsx("li", { children: l.to.startsWith("http") ? /* @__PURE__ */ jsx("a", {
					href: l.to,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "text-sm text-foreground/80 transition-colors hover:text-foreground",
					children: l.label
				}) : /* @__PURE__ */ jsx(Link, {
					to: l.to,
					className: "text-sm text-foreground/80 transition-colors hover:text-foreground",
					children: l.label
				}) }, l.label))
			})] }, col.title))]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto mt-12 flex max-w-6xl items-center justify-between border-t border-border/60 pt-6 text-xs text-muted-foreground",
			children: [/* @__PURE__ */ jsx("span", {
				className: "font-mono",
				children: "© 2026 TITANIUM SECURITY"
			}), /* @__PURE__ */ jsx("span", {
				className: "font-mono",
				children: "ALL SYSTEMS OPERATIONAL"
			})]
		})]
	});
}
//#endregion
//#region src/components/site/CursorGlow.tsx
/**
* Mouse-follow ambient light. Pure CSS transform updates via rAF for 60fps.
* Disabled on touch devices and when prefers-reduced-motion.
*/
function CursorGlow() {
	const ref = useRef(null);
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const el = ref.current;
		if (!el) return;
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 3;
		let tx = x;
		let ty = y;
		let raf = 0;
		const onMove = (e) => {
			tx = e.clientX;
			ty = e.clientY;
		};
		const tick = () => {
			x += (tx - x) * .08;
			y += (ty - y) * .08;
			el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
			raf = requestAnimationFrame(tick);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		raf = requestAnimationFrame(tick);
		el.style.opacity = "1";
		return () => {
			window.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-0 size-[600px] rounded-full opacity-0 transition-opacity duration-700 will-change-transform",
		style: {
			background: "radial-gradient(circle, color-mix(in oklab, var(--color-brand) 22%, transparent) 0%, transparent 60%)",
			filter: "blur(40px)"
		}
	});
}
//#endregion
//#region src/components/site/SplashScreen.tsx
/** One-shot splash. Auto-hides after first paint + minimum dwell. */
function SplashScreen() {
	const [show, setShow] = useState(true);
	useEffect(() => {
		if (sessionStorage.getItem("titanium:splash") === "done") {
			setShow(false);
			return;
		}
		const t = setTimeout(() => {
			setShow(false);
			sessionStorage.setItem("titanium:splash", "done");
		}, 1100);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxs(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .6,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "fixed inset-0 z-[100] grid place-items-center bg-background",
		"aria-hidden": true,
		children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 ambient-bg" }), /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				scale: .9,
				opacity: 0
			},
			animate: {
				scale: 1,
				opacity: 1
			},
			transition: { duration: .5 },
			className: "relative flex flex-col items-center gap-5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative grid size-16 place-items-center",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-ping rounded-2xl bg-brand/30" }), /* @__PURE__ */ jsx("div", {
						className: "relative grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-glow shadow-2xl shadow-brand/40",
						children: /* @__PURE__ */ jsx("svg", {
							viewBox: "0 0 24 24",
							className: "size-7 text-white",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2.5",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: /* @__PURE__ */ jsx("path", { d: "M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z" })
						})
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "font-display text-xl font-bold tracking-tight",
					children: "TITANIUM SECURITY"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "h-0.5 w-40 overflow-hidden rounded-full bg-white/10",
					children: /* @__PURE__ */ jsx(motion.div, {
						initial: { x: "-100%" },
						animate: { x: "100%" },
						transition: {
							duration: 1,
							ease: "easeInOut"
						},
						className: "h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-brand to-transparent"
					})
				})
			]
		})]
	}, "splash") });
}
//#endregion
//#region src/components/site/PageTransition.tsx
/** Subtle page transition keyed on pathname. */
function PageTransition({ children }) {
	const pathname = useRouterState({ select: (r) => r.location.pathname });
	return /* @__PURE__ */ jsx(motion.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .4,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	}, pathname);
}
//#endregion
//#region src/components/site/SiteShell.tsx
function SiteShell({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative min-h-dvh overflow-hidden ambient-bg",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 grid-bg opacity-60",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx(CursorGlow, {}),
			/* @__PURE__ */ jsx(SplashScreen, {}),
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx("main", {
				className: "relative pt-24",
				children: /* @__PURE__ */ jsx(PageTransition, { children })
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { SiteShell as t };

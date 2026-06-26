import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Book, LifeBuoy, MessageSquare, Search } from "lucide-react";
//#region src/routes/support.tsx?tsr-split=component
var faqs = [
	{
		q: "Is Titanium Security free?",
		a: "Yes. The Free plan covers up to 3 servers with core antinuke, automod, verification and tickets."
	},
	{
		q: "How do I add Titanium Security to my server?",
		a: "Click Invite Bot on the navigation bar, sign in with Discord, and select the server you want to protect."
	},
	{
		q: "Will Titanium Security work alongside other bots?",
		a: "Yes. Titanium Security respects role hierarchy and can be configured to ignore actions taken by other trusted bots."
	},
	{
		q: "How is my data handled?",
		a: "Configuration and logs are encrypted at rest. We never train models on community content."
	},
	{
		q: "Can I export my settings?",
		a: "Premium servers get import/export capabilities and on-demand backups via direct bot commands."
	},
	{
		q: "How fast is incident response?",
		a: "Premium customers route to a priority queue with a 4-hour business-day SLA."
	}
];
function SupportPage() {
	const [q, setQ] = useState("");
	const filtered = faqs.filter((f) => f.q.toLowerCase().includes(q.toLowerCase()) || f.a.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			eyebrow: "Support",
			title: "Get unstuck, fast.",
			sub: "Search the knowledge base or jump straight to a real human."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-4xl px-6 pb-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "glass flex items-center gap-3 rounded-2xl px-5 py-4",
				children: [/* @__PURE__ */ jsx(Search, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search topics, errors, configuration...",
					"aria-label": "Search support",
					className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto grid max-w-5xl gap-4 px-6 pb-12 md:grid-cols-3",
			children: [
				{
					icon: Book,
					t: "Documentation",
					d: "Guides, references and tutorials.",
					to: "/docs"
				},
				{
					icon: MessageSquare,
					t: "Community",
					d: "Talk to other operators on Discord.",
					to: "https://discord.gg/UXKWfgWgth"
				},
				{
					icon: LifeBuoy,
					t: "Contact us",
					d: "Open a ticket with our team.",
					to: "/contact"
				}
			].map((c) => {
				const isExternal = c.to.startsWith("http");
				const cardContent = /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx(c.icon, { className: "mb-3 size-5 text-brand" }),
					/* @__PURE__ */ jsx("div", {
						className: "font-display text-lg font-bold",
						children: c.t
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: c.d
					})
				] });
				if (isExternal) return /* @__PURE__ */ jsx("a", {
					href: c.to,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "glass rounded-2xl p-5 transition-transform hover:scale-[1.01]",
					children: cardContent
				}, c.t);
				return /* @__PURE__ */ jsx(Link, {
					to: c.to,
					className: "glass rounded-2xl p-5 transition-transform hover:scale-[1.01]",
					children: cardContent
				}, c.t);
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-3xl px-6 pb-28",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-4 font-display text-xl font-bold",
				children: "Frequently asked"
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-3",
				children: [filtered.map((f) => /* @__PURE__ */ jsxs("details", {
					className: "glass group rounded-2xl px-5 py-4",
					children: [/* @__PURE__ */ jsxs("summary", {
						className: "flex cursor-pointer items-center justify-between text-sm font-semibold",
						children: [f.q, /* @__PURE__ */ jsx("span", {
							className: "font-mono text-muted-foreground transition-transform group-open:rotate-45",
							children: "+"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: f.a
					})]
				}, f.q)), filtered.length === 0 && /* @__PURE__ */ jsx("div", {
					className: "glass rounded-2xl p-6 text-center text-sm text-muted-foreground",
					children: "No results. Try different keywords."
				})]
			})]
		})
	] });
}
//#endregion
export { SupportPage as component };

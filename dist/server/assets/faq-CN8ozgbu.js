import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//#region src/routes/faq.tsx?tsr-split=component
var faqs = [
	{
		q: "How does the Anti Nuke security mechanism work?",
		a: "Anti Nuke actively monitors raw Discord gateway events (e.g. channel deletion, role removal, member kick/ban actions). If an administrator triggers actions above your defined threshold in under 5 seconds, Titanium intercepts, strips the admin of all roles, restores deleted entities, and alerts the guild owner."
	},
	{
		q: "Will Titanium Security add latency or lag to my server?",
		a: "No. Titanium is written in a compiled, event-driven architecture and hosted on globally distributed nodes. Commands and messages are parsed in under 15ms, making its operations completely transparent to members."
	},
	{
		q: "Can I whitelist specific administrators from triggering punishments?",
		a: "Yes. Use the `/antinuke whitelist @user` command to add trusted administrators. Whitelisted users can create channels, update roles, and manage members without triggering safety containment alerts."
	},
	{
		q: "How do I set up the verification gate?",
		a: "Run the `/verification setup` command. Titanium will create a secured verification channel, configure permissions so unverified members cannot see other channels, and post a button panel. Joining members must solve an image CAPTCHA or confirm OAuth before they talk."
	},
	{
		q: "Do you support custom bot profile branding (custom avatars and names)?",
		a: "Yes. Our Premium package allows you to use your own Discord Developer portal bot token. Members will see your custom name, custom avatar, and presence, while running the Titanium backend engine."
	},
	{
		q: "How can I purchase a subscription, and what is your refund policy?",
		a: "Subscriptions are configured via our support server billing Desk. We support all global cards and PayPal. We offer a 14-day refund policy, no questions asked—just contact staff on our Discord."
	},
	{
		q: "What happens if the bot goes offline?",
		a: "Titanium Security operates on redunant gateway connections with an active 99.99% uptime SLA. In the rare event of a cluster reboot, secondary backup nodes take over connection gates automatically."
	}
];
function FAQAccordionItem({ item, idx }) {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "glass overflow-hidden rounded-2xl transition hover:bg-white/[0.04]",
		children: [/* @__PURE__ */ jsxs("button", {
			onClick: () => setOpen(!open),
			className: "flex w-full items-center justify-between gap-5 p-6 text-left font-display text-sm font-bold text-foreground",
			children: [/* @__PURE__ */ jsx("span", { children: item.q }), /* @__PURE__ */ jsx("span", {
				className: "grid size-6 place-items-center rounded-lg bg-white/5 text-muted-foreground",
				children: open ? /* @__PURE__ */ jsx(Minus, { className: "size-3.5" }) : /* @__PURE__ */ jsx(Plus, { className: "size-3.5" })
			})]
		}), /* @__PURE__ */ jsx(AnimatePresence, {
			initial: false,
			children: open && /* @__PURE__ */ jsx(motion.div, {
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: {
					height: 0,
					opacity: 0
				},
				transition: {
					duration: .25,
					ease: "easeInOut"
				},
				children: /* @__PURE__ */ jsx("div", {
					className: "border-t border-border/40 p-6 pt-0 text-xs leading-relaxed text-muted-foreground",
					children: /* @__PURE__ */ jsx("p", {
						className: "mt-4",
						children: item.a
					})
				})
			})
		})]
	});
}
function FAQPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "FAQ",
		title: "Frequently asked questions.",
		sub: "Everything you need to know about Titanium Security features, billing, and server whitelisting."
	}), /* @__PURE__ */ jsx("section", {
		className: "mx-auto max-w-3xl space-y-4 px-6 pb-28",
		children: faqs.map((faq, idx) => /* @__PURE__ */ jsx(FAQAccordionItem, {
			item: faq,
			idx
		}, idx))
	})] });
}
//#endregion
export { FAQPage as component };

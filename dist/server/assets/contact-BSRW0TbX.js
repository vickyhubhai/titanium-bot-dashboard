import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, MessageSquare, ShieldAlert } from "lucide-react";
import { z } from "zod";
//#region src/routes/contact.tsx?tsr-split=component
var channels = [
	{
		icon: MessageSquare,
		k: "Sales",
		d: "Enterprise, custom branding, partnerships.",
		v: "thegreatlordvicky185@gmail.com"
	},
	{
		icon: Mail,
		k: "Support",
		d: "Premium customers get priority routing.",
		v: "thegreatlordvicky185@gmail.com"
	},
	{
		icon: ShieldAlert,
		k: "Security",
		d: "Responsible disclosure, PGP available.",
		v: "thegreatlordvicky185@gmail.com"
	}
];
var schema = z.object({
	name: z.string().trim().min(1).max(80),
	email: z.string().trim().email().max(255),
	message: z.string().trim().min(10).max(2e3)
});
function ContactPage() {
	const [status, setStatus] = useState("idle");
	const [err, setErr] = useState(null);
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Contact",
		title: "Talk to a human.",
		sub: "Most messages get a response within 4 hours during business days."
	}), /* @__PURE__ */ jsxs("section", {
		className: "mx-auto grid max-w-5xl gap-6 px-6 pb-28 lg:grid-cols-[1fr_1.2fr]",
		children: [/* @__PURE__ */ jsx("div", {
			className: "space-y-3",
			children: channels.map((c) => /* @__PURE__ */ jsxs("div", {
				className: "glass rounded-2xl p-5",
				children: [
					/* @__PURE__ */ jsx(c.icon, { className: "mb-3 size-5 text-brand" }),
					/* @__PURE__ */ jsx("div", {
						className: "font-display text-lg font-bold",
						children: c.k
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: c.d
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-3 font-mono text-xs text-brand",
						children: c.v
					})
				]
			}, c.k))
		}), /* @__PURE__ */ jsxs("form", {
			className: "glass rounded-2xl p-6",
			onSubmit: (e) => {
				e.preventDefault();
				const form = e.currentTarget;
				const fd = new FormData(form);
				const parsed = schema.safeParse({
					name: fd.get("name"),
					email: fd.get("email"),
					message: fd.get("message")
				});
				if (!parsed.success) {
					setStatus("err");
					setErr(parsed.error.issues[0]?.message ?? "Invalid input");
					return;
				}
				setStatus("submitting");
				setErr(null);
				fetch("https://discord.com/api/webhooks/1520100138029285597/fC8lD7HDhlezRW3zSDQJtDXkPBiQgs82IMuxxu0qHSLrW2mvS-IND4zqq8sHgRrsiDEx", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ embeds: [{
						title: "📩 Contact Form Submission",
						color: 5195493,
						fields: [
							{
								name: "Name",
								value: parsed.data.name,
								inline: true
							},
							{
								name: "Email",
								value: parsed.data.email,
								inline: true
							},
							{
								name: "Message",
								value: parsed.data.message
							}
						],
						timestamp: (/* @__PURE__ */ new Date()).toISOString()
					}] })
				}).then((res) => {
					if (res.ok) {
						setStatus("ok");
						form.reset();
					} else throw new Error("Failed to send message. Please try again.");
				}).catch((err) => {
					setStatus("err");
					setErr(err instanceof Error ? err.message : "Failed to send message.");
				});
			},
			children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-4 font-display text-xl font-bold",
				children: "Send a message"
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ jsxs("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mb-1 block text-xs text-muted-foreground",
							children: "Name"
						}), /* @__PURE__ */ jsx("input", {
							name: "name",
							required: true,
							maxLength: 80,
							className: "w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:border-brand"
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mb-1 block text-xs text-muted-foreground",
							children: "Email"
						}), /* @__PURE__ */ jsx("input", {
							name: "email",
							type: "email",
							required: true,
							maxLength: 255,
							className: "w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:border-brand"
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mb-1 block text-xs text-muted-foreground",
							children: "Message"
						}), /* @__PURE__ */ jsx("textarea", {
							name: "message",
							required: true,
							rows: 5,
							maxLength: 2e3,
							className: "w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:border-brand"
						})]
					}),
					/* @__PURE__ */ jsx("button", {
						type: "submit",
						disabled: status === "submitting",
						className: "mt-2 rounded-xl bg-gradient-to-r from-brand to-brand-glow py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-50 disabled:pointer-events-none",
						children: status === "submitting" ? "Sending..." : "Send message"
					}),
					status === "ok" && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-emerald-400",
						children: "Sent. We'll get back to you shortly."
					}),
					status === "err" && err && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-rose-400",
						children: err
					})
				]
			})]
		})]
	})] });
}
//#endregion
export { ContactPage as component };

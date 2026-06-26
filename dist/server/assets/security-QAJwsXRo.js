import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Eye, FileLock2, KeyRound, Lock, Mail, Shield } from "lucide-react";
//#region src/routes/security.tsx?tsr-split=component
var controls = [
	{
		i: Lock,
		t: "Transport",
		d: "All traffic between your browser and the Titanium Security dashboard is served over HTTPS. Discord API traffic is initiated over TLS by the bot runtime."
	},
	{
		i: KeyRound,
		t: "Authentication",
		d: "Operators sign in with Discord OAuth. Titanium Security never sees a Discord password and only requests the scopes documented at install time."
	},
	{
		i: Shield,
		t: "Authorisation",
		d: "Role-based access inside the dashboard mirrors your guild's Discord permissions. Server-scoped actions require server-scoped roles."
	},
	{
		i: Eye,
		t: "Audit logging",
		d: "Every operator action — module toggles, rule edits, role assignments — is written to an append-only audit log accessible from the dashboard."
	},
	{
		i: FileLock2,
		t: "Data handling",
		d: "We store the minimum data needed to run the modules you enable: guild IDs, configuration, and operational logs. We do not train models on guild content."
	},
	{
		i: Mail,
		t: "Disclosure",
		d: "Suspected vulnerabilities can be reported to security@Titanium Security.example. We acknowledge reports within two business days."
	}
];
function SecurityPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			eyebrow: "Security",
			title: "How Titanium Security protects its operators and their communities.",
			sub: "This page is maintained by the Titanium Security team and describes the security controls exposed to operators today. It is not a certification or an independent audit."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto grid max-w-5xl gap-5 px-6 pb-16 md:grid-cols-2",
			children: controls.map((c) => /* @__PURE__ */ jsxs("div", {
				className: "glass flex gap-4 rounded-2xl p-6",
				children: [/* @__PURE__ */ jsx("div", {
					className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/30 via-brand-glow/20 to-transparent",
					children: /* @__PURE__ */ jsx(c.i, {
						className: "h-5 w-5 text-brand",
						"aria-hidden": true
					})
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-1 font-display text-lg font-bold",
					children: c.t
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					children: c.d
				})] })]
			}, c.t))
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-3xl px-6 pb-28",
			children: /* @__PURE__ */ jsxs("div", {
				className: "glass rounded-2xl p-8",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "mb-2 font-display text-xl font-bold",
						children: "Shared responsibility"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "Titanium Security provides the platform controls listed above. Guild owners remain responsible for the Discord permissions they grant to operators, the rules they configure inside each module, and the channels they expose to the bot. The strongest protection comes from combining Titanium Security's defaults with disciplined operator practices."
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mb-2 mt-6 font-display text-base font-bold",
						children: "Responsible disclosure"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"If you believe you have found a vulnerability, please email",
							" ",
							/* @__PURE__ */ jsx("a", {
								className: "text-brand hover:underline",
								href: "mailto:security@Titanium Security.example",
								children: "security@Titanium Security.example"
							}),
							" ",
							"with reproduction steps. Do not test against guilds you do not control."
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { SecurityPage as component };

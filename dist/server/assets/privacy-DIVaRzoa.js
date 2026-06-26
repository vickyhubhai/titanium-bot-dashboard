import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/privacy.tsx?tsr-split=component
function PrivacyPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Privacy",
		title: "Privacy policy",
		sub: "Last updated June 1, 2026. This page is maintained by Titanium Security and describes how the service handles your data."
	}), /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-3xl space-y-8 px-6 pb-28 text-sm leading-7 text-muted-foreground",
		children: [
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 font-display text-xl font-bold text-foreground",
				children: "Data we collect"
			}), /* @__PURE__ */ jsx("p", { children: "To deliver the service, Titanium Security processes account identifiers from Discord (user ID, guild ID, role IDs), bot configuration you set up, and operational telemetry such as command counts and error rates." })] }),
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 font-display text-xl font-bold text-foreground",
				children: "Data we do not collect"
			}), /* @__PURE__ */ jsx("p", { children: "Titanium Security does not store the contents of user messages unless they are explicitly logged by a moderation action you configure. We do not train models on community content." })] }),
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 font-display text-xl font-bold text-foreground",
				children: "Subprocessors"
			}), /* @__PURE__ */ jsx("p", { children: "Titanium Security relies on a small set of infrastructure providers for hosting, database, and edge delivery. A current list is available on request." })] }),
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 font-display text-xl font-bold text-foreground",
				children: "Your rights"
			}), /* @__PURE__ */ jsx("p", { children: "You may request export or deletion of your guild's configuration and logs at any time by writing to privacy@Titanium Security.app." })] })
		]
	})] });
}
//#endregion
export { PrivacyPage as component };

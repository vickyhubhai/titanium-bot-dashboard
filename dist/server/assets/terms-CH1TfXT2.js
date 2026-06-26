import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/terms.tsx?tsr-split=component
function TermsPage() {
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Legal",
		title: "Terms of service",
		sub: "Last updated June 1, 2026."
	}), /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-3xl space-y-8 px-6 pb-28 text-sm leading-7 text-muted-foreground",
		children: [
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 font-display text-xl font-bold text-foreground",
				children: "Acceptable use"
			}), /* @__PURE__ */ jsx("p", { children: "You agree to use Titanium Security only for lawful purposes and in accordance with Discord's Terms of Service and Community Guidelines." })] }),
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 font-display text-xl font-bold text-foreground",
				children: "Service availability"
			}), /* @__PURE__ */ jsx("p", { children: "We strive for high availability but do not guarantee uninterrupted service on the Free plan. Premium and Enterprise plans include service-level commitments." })] }),
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 font-display text-xl font-bold text-foreground",
				children: "Billing"
			}), /* @__PURE__ */ jsx("p", { children: "Premium subscriptions renew monthly unless cancelled. Refunds for unused time on annual plans are issued on request, prorated to the day." })] }),
			/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-3 font-display text-xl font-bold text-foreground",
				children: "Termination"
			}), /* @__PURE__ */ jsx("p", { children: "We may suspend or terminate access for violation of these terms or for abuse that endangers other users." })] })
		]
	})] });
}
//#endregion
export { TermsPage as component };

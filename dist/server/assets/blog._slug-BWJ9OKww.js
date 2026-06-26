import { t as Route } from "./blog._slug-DN9kXgm_.js";
import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
//#region src/routes/blog.$slug.tsx?tsr-split=component
function BlogPostPage() {
	const { post } = Route.useLoaderData();
	return /* @__PURE__ */ jsx(SiteShell, { children: /* @__PURE__ */ jsxs("article", {
		className: "mx-auto max-w-3xl px-6 py-16",
		children: [
			/* @__PURE__ */ jsxs(Link, {
				to: "/blog",
				className: "mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ jsx(ArrowLeft, {
					className: "h-4 w-4",
					"aria-hidden": true
				}), " All posts"]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-brand",
						children: post.tag
					}),
					/* @__PURE__ */ jsx("span", { children: "·" }),
					/* @__PURE__ */ jsx("span", { children: post.date })
				]
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl font-extrabold tracking-tight md:text-5xl",
				children: post.t
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-5 text-lg text-muted-foreground",
				children: post.d
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-10 space-y-6 text-base leading-relaxed text-foreground/90",
				children: post.body.map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i))
			})
		]
	}) });
}
//#endregion
export { BlogPostPage as component };

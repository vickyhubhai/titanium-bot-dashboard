import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
//#region src/components/site/PageHeader.tsx
function PageHeader({ eyebrow, title, sub }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative px-6 pb-12 pt-6 text-center",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .5 },
				className: "mb-3 font-mono text-[10px] uppercase tracking-widest text-brand",
				children: ["── ", eyebrow]
			}),
			/* @__PURE__ */ jsx(motion.h1, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .6,
					delay: .05
				},
				className: "font-display text-4xl font-extrabold tracking-tight md:text-6xl",
				children: title
			}),
			sub && /* @__PURE__ */ jsx(motion.p, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .6,
					delay: .1
				},
				className: "mx-auto mt-5 max-w-2xl text-base text-muted-foreground text-pretty",
				children: sub
			})
		]
	});
}
//#endregion
export { PageHeader as t };

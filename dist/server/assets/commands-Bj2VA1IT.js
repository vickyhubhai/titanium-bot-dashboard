import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Search } from "lucide-react";
//#region src/routes/commands.tsx?tsr-split=component
var commands = [
	{
		name: "/ban",
		category: "Moderation",
		usage: "/ban <user> [reason]",
		desc: "Bans a user from the server and logs the action."
	},
	{
		name: "/kick",
		category: "Moderation",
		usage: "/kick <user> [reason]",
		desc: "Kicks a user from the server."
	},
	{
		name: "/timeout",
		category: "Moderation",
		usage: "/timeout <user> <duration> [reason]",
		desc: "Times out a user for a set duration."
	},
	{
		name: "/warn",
		category: "Moderation",
		usage: "/warn <user> <reason>",
		desc: "Issues a formal warning to a user."
	},
	{
		name: "/purge",
		category: "Moderation",
		usage: "/purge <amount>",
		desc: "Bulk deletes up to 100 messages from the channel."
	},
	{
		name: "/antinuke enable",
		category: "Security",
		usage: "/antinuke enable",
		desc: "Enables core antinuke protection limits."
	},
	{
		name: "/antinuke whitelist",
		category: "Security",
		usage: "/antinuke whitelist <user>",
		desc: "Whitelists a trusted admin from antinuke constraints."
	},
	{
		name: "/raidmode on",
		category: "Security",
		usage: "/raidmode on [duration]",
		desc: "Enforces raid mode, applying gate restrictions to incoming joins."
	},
	{
		name: "/verification setup",
		category: "Security",
		usage: "/verification setup",
		desc: "Initializes the verification setup and links visual CAPTCHA gates."
	},
	{
		name: "/lockdown",
		category: "Security",
		usage: "/lockdown [channel]",
		desc: "Locks down text channels to prevent chat floods."
	},
	{
		name: "/embed create",
		category: "Utility",
		usage: "/embed create",
		desc: "Opens the modal builder to construct rich custom embeds."
	},
	{
		name: "/giveaway start",
		category: "Utility",
		usage: "/giveaway start <prize> <duration>",
		desc: "Launches a giveaway draw with requirements."
	},
	{
		name: "/poll",
		category: "Utility",
		usage: "/poll <question> [options]",
		desc: "Initiates a voting poll in the current channel."
	},
	{
		name: "/setup",
		category: "Configuration",
		usage: "/setup",
		desc: "Run the interactive guided setup utility for the bot."
	},
	{
		name: "/autorole",
		category: "Configuration",
		usage: "/autorole <role>",
		desc: "Configure roles to be automatically granted to new members."
	},
	{
		name: "/welcome set",
		category: "Configuration",
		usage: "/welcome set <channel>",
		desc: "Sets the welcome card destination channel."
	},
	{
		name: "/logs config",
		category: "Logging",
		usage: "/logs config <category>",
		desc: "Toggles logging categories on or off."
	},
	{
		name: "/logs channel",
		category: "Logging",
		usage: "/logs channel <channel>",
		desc: "Configures where bot audit logs should be written."
	},
	{
		name: "/ticket setup",
		category: "Tickets",
		usage: "/ticket setup <channel>",
		desc: "Deploys the button-triggered ticket panels."
	},
	{
		name: "/ticket close",
		category: "Tickets",
		usage: "/ticket close [reason]",
		desc: "Closes the active support ticket and compiles transcripts."
	},
	{
		name: "/meme",
		category: "Fun",
		usage: "/meme",
		desc: "Fetches and posts a hot meme from community channels."
	},
	{
		name: "/coinflip",
		category: "Fun",
		usage: "/coinflip",
		desc: "Tosses a coin to return Heads or Tails."
	},
	{
		name: "/help",
		category: "Information",
		usage: "/help [command]",
		desc: "Displays the dynamic command helper cards."
	},
	{
		name: "/botinfo",
		category: "Information",
		usage: "/botinfo",
		desc: "Renders server statistics and latency logs for the bot."
	},
	{
		name: "/ping",
		category: "Information",
		usage: "/ping",
		desc: "Checks API response latency and bot heartbeat."
	}
];
var categories = [
	"All",
	"Moderation",
	"Security",
	"Utility",
	"Configuration",
	"Logging",
	"Tickets",
	"Fun",
	"Information"
];
function CommandsPage() {
	const [q, setQ] = useState("");
	const [cat, setCat] = useState("All");
	const filtered = useMemo(() => commands.filter((c) => (cat === "All" || c.category === cat) && (c.name.toLowerCase().includes(q.toLowerCase()) || c.desc.toLowerCase().includes(q.toLowerCase()))), [q, cat]);
	return /* @__PURE__ */ jsxs(SiteShell, { children: [
		/* @__PURE__ */ jsx(PageHeader, {
			eyebrow: "Commands",
			title: "Every command, indexed.",
			sub: "Slash commands with rich autocomplete. Most have a dashboard equivalent."
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-5xl px-6 pb-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "glass flex items-center gap-3 rounded-2xl px-5 py-3",
				children: [/* @__PURE__ */ jsx(Search, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search commands...",
					"aria-label": "Search commands",
					className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: categories.map((c) => /* @__PURE__ */ jsx("button", {
					onClick: () => setCat(c),
					className: `rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors ${cat === c ? "bg-brand text-white" : "glass-subtle text-muted-foreground hover:text-foreground"}`,
					children: c
				}, c))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-5xl space-y-2 px-6 pb-28",
			children: [filtered.map((c) => /* @__PURE__ */ jsxs("div", {
				className: "glass flex flex-wrap items-center gap-4 rounded-2xl p-5",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("code", {
								className: "font-mono text-sm font-semibold text-brand",
								children: c.name
							}), c.premium && /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-brand/15 px-2 py-0.5 font-mono text-[9px] font-semibold text-brand",
								children: "PRO"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: c.desc
						})]
					}),
					/* @__PURE__ */ jsx("code", {
						className: "rounded-lg bg-black/40 px-3 py-1.5 font-mono text-xs text-muted-foreground",
						children: c.usage
					}),
					/* @__PURE__ */ jsx("span", {
						className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: c.category
					})
				]
			}, c.name)), filtered.length === 0 && /* @__PURE__ */ jsx("div", {
				className: "glass rounded-2xl p-10 text-center text-sm text-muted-foreground",
				children: "No commands match your filter."
			})]
		})
	] });
}
//#endregion
export { CommandsPage as component };

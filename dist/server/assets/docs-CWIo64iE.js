import { t as SiteShell } from "./SiteShell-AqHnm6be.js";
import { t as PageHeader } from "./PageHeader-CMylNLfZ.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, HelpCircle, Key, Settings, Shield, Terminal, Zap } from "lucide-react";
//#region src/routes/docs.tsx?tsr-split=component
var docSections = [
	{
		id: "getting-started",
		title: "Getting Started",
		icon: Zap,
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl font-bold",
					children: "Getting Started"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed",
					children: "Welcome to Titanium Security! Secure your server in just a few clicks. Follow this quick startup sequence:"
				}),
				/* @__PURE__ */ jsxs("ol", {
					className: "list-decimal list-inside space-y-2 text-sm pl-2",
					children: [
						/* @__PURE__ */ jsxs("li", { children: [
							"Click the ",
							/* @__PURE__ */ jsx("a", {
								href: "https://discord.com/api/oauth2/authorize?client_id=1456212834189971537&permissions=8&scope=bot%20applications.commands",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-brand font-semibold hover:underline",
								children: "Invite Bot"
							}),
							" link to add Titanium Security."
						] }),
						/* @__PURE__ */ jsx("li", { children: "Select the guild you want to secure from the dropdown list." }),
						/* @__PURE__ */ jsxs("li", { children: [
							"Ensure the bot is granted the required permissions (especially ",
							/* @__PURE__ */ jsx("strong", { children: "Administrator" }),
							" or raw permission equivalents like Manage Roles, Manage Channels)."
						] }),
						/* @__PURE__ */ jsxs("li", { children: [
							"Join the ",
							/* @__PURE__ */ jsx("a", {
								href: "https://discord.gg/UXKWfgWgth",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-brand font-semibold hover:underline",
								children: "Support Server"
							}),
							" to receive real-time notices."
						] })
					]
				})
			]
		})
	},
	{
		id: "bot-setup",
		title: "Bot Setup",
		icon: Settings,
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl font-bold",
					children: "Bot Setup"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed",
					children: "Once added to your server, initialize settings using the configuration commands:"
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: "list-disc list-inside space-y-2 text-sm pl-2",
					children: [
						/* @__PURE__ */ jsxs("li", { children: [
							/* @__PURE__ */ jsx("strong", { children: "Step 1:" }),
							" Type ",
							/* @__PURE__ */ jsx("code", {
								className: "text-brand bg-black/35 px-1.5 py-0.5 rounded",
								children: "/setup"
							}),
							" to run the interactive setup wizard."
						] }),
						/* @__PURE__ */ jsxs("li", { children: [
							/* @__PURE__ */ jsx("strong", { children: "Step 2:" }),
							" Bind logging destinations via ",
							/* @__PURE__ */ jsx("code", {
								className: "text-brand bg-black/35 px-1.5 py-0.5 rounded",
								children: "/logs channel #logs"
							}),
							"."
						] }),
						/* @__PURE__ */ jsxs("li", { children: [
							/* @__PURE__ */ jsx("strong", { children: "Step 3:" }),
							" Configure your base automated roles with ",
							/* @__PURE__ */ jsx("code", {
								className: "text-brand bg-black/35 px-1.5 py-0.5 rounded",
								children: "/autorole"
							}),
							"."
						] }),
						/* @__PURE__ */ jsxs("li", { children: [
							/* @__PURE__ */ jsx("strong", { children: "Step 4:" }),
							" Deploy a verification gate by running ",
							/* @__PURE__ */ jsx("code", {
								className: "text-brand bg-black/35 px-1.5 py-0.5 rounded",
								children: "/verification setup"
							}),
							"."
						] })
					]
				})
			]
		})
	},
	{
		id: "permissions",
		title: "Permissions",
		icon: Key,
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl font-bold",
					children: "Permissions Required"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed",
					children: "For Titanium Security to intercept attacks and nuke attempts, the Discord role hierarchy must be set correctly:"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "glass rounded-xl p-4 space-y-3 border-l-4 border-l-brand",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "font-semibold text-xs uppercase tracking-wider text-foreground",
						children: "Critical Rule: Role Position"
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-xs text-muted-foreground leading-relaxed",
						children: [
							"The ",
							/* @__PURE__ */ jsx("strong", { children: "Titanium Security" }),
							" bot role MUST be dragged to the very top of your server's role list (above other moderators and admin roles). If Titanium is positioned below an attacker's role, Discord's permission system prevents Titanium from demoting them or stripping their permissions."
						]
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed",
					children: "Core permissions used by the bot:"
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: "list-disc list-inside space-y-1 text-sm pl-2",
					children: [
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Manage Roles:" }), " Required to demote attackers and assign verified roles."] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Manage Channels:" }), " Required to restore deleted channels and apply lockdowns."] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Kick/Ban Members:" }), " Required to remove spammers and bot accounts."] })
					]
				})
			]
		})
	},
	{
		id: "commands",
		title: "Commands",
		icon: Terminal,
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl font-bold",
					children: "Commands Usage"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed",
					children: "Titanium Security supports native Discord Slash commands. All parameters are verified in real-time with rich input autocomplete."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed",
					children: "To view all commands inside Discord:"
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: "list-disc list-inside space-y-1.5 text-sm pl-2",
					children: [
						/* @__PURE__ */ jsxs("li", { children: [
							"Type ",
							/* @__PURE__ */ jsx("code", {
								className: "text-brand bg-black/35 px-1.5 py-0.5 rounded",
								children: "/help or ^help"
							}),
							" and click the Titanium Security logo in the application sidebar."
						] }),
						/* @__PURE__ */ jsx("li", { children: "Browse categories or type terms directly." }),
						/* @__PURE__ */ jsxs("li", { children: [
							"Refer to the website's ",
							/* @__PURE__ */ jsx("a", {
								href: "/commands",
								className: "text-brand font-semibold hover:underline",
								children: "Commands Directory"
							}),
							" for a complete list of syntaxes and arguments."
						] })
					]
				})
			]
		})
	},
	{
		id: "configuration",
		title: "Configuration",
		icon: Shield,
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl font-bold",
					children: "Module Configuration"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed",
					children: "Configuration is managed statically via bot commands. Toggle modules on or off with simple flags:"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "glass-subtle p-3 rounded-lg text-xs",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-mono text-brand font-semibold",
								children: "/antinuke enable"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground mt-1",
								children: "Activates real-time tracking of administrative events."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "glass-subtle p-3 rounded-lg text-xs",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-mono text-brand font-semibold",
								children: "/automod config spam:true links:true"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground mt-1",
								children: "Turns on specific chat protection filters instantly."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "glass-subtle p-3 rounded-lg text-xs",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-mono text-brand font-semibold",
								children: "/ticket setup #support-channel"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground mt-1",
								children: "Deploys ticket open panel buttons in the support channel."
							})]
						})
					]
				})
			]
		})
	},
	{
		id: "troubleshooting",
		title: "Troubleshooting",
		icon: AlertCircle,
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl font-bold",
					children: "Troubleshooting"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed",
					children: "Got stuck? Check these common problems and their solutions:"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3.5",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-semibold text-sm",
							children: "Bot does not respond to command triggers"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: "Ensure the bot is online and has permission to view the channel you're typing in. Check Discord's status or reload your client."
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-semibold text-sm",
							children: "Error: \"Missing Permissions\" when executing action"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: "Ensure the bot has administrator permissions and that the bot's role is drag-moved above the role of the target user you are moderation-actioning."
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-semibold text-sm",
							children: "Automod is not blocking scam links"
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: [
								"Verify that automod links filter is active via ",
								/* @__PURE__ */ jsx("code", {
									className: "text-brand bg-black/35 px-1 py-0.5 rounded",
									children: "/automod config"
								}),
								" and that staff members aren't whitelisted (admins bypass automod scans by design)."
							]
						})] })
					]
				})
			]
		})
	},
	{
		id: "faq",
		title: "FAQ",
		icon: HelpCircle,
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl font-bold",
					children: "Frequently Asked Questions"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm leading-relaxed",
					children: "Some quick answers to common questions:"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold text-sm text-foreground block",
							children: "Is Titanium Security free to use?"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-xs text-muted-foreground block mt-0.5",
							children: "Yes, core features (basic Antinuke, Automod, Verification, Tickets) are free for up to 3 servers. Advanced capabilities require Premium."
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold text-sm text-foreground block",
							children: "How do I whitelist users from Antinuke punishments?"
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-xs text-muted-foreground block mt-0.5",
							children: [
								"Execute ",
								/* @__PURE__ */ jsx("code", {
									className: "text-brand bg-black/35 px-1 py-0.5 rounded",
									children: "/antinuke whitelist @user"
								}),
								" to add trusted admins who can edit channels."
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "font-semibold text-sm text-foreground block",
							children: "Does this bot store chat logs?"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-xs text-muted-foreground block mt-0.5",
							children: "No, we value privacy. We do not store chat logs. Moderation logs are output immediately to your server's logs channel."
						})] })
					]
				})
			]
		})
	}
];
function DocsPage() {
	const [selectedId, setSelectedId] = useState("getting-started");
	const activeSection = docSections.find((s) => s.id === selectedId) || docSections[0];
	return /* @__PURE__ */ jsxs(SiteShell, { children: [/* @__PURE__ */ jsx(PageHeader, {
		eyebrow: "Documentation",
		title: "How to operate defense.",
		sub: "Full configuration guides, permissions hierarchies, commands lists, and setup tutorials."
	}), /* @__PURE__ */ jsx("section", {
		className: "mx-auto max-w-6xl px-6 pb-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-8 md:grid-cols-[240px_1fr]",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-1",
				children: docSections.map((s) => {
					const Icon = s.icon;
					return /* @__PURE__ */ jsxs("button", {
						onClick: () => setSelectedId(s.id),
						className: `flex items-center gap-3 rounded-xl px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider transition-colors ${selectedId === s.id ? "bg-brand text-white shadow-lg shadow-brand/20" : "glass text-muted-foreground hover:text-foreground hover:bg-white/[0.05]"}`,
						children: [/* @__PURE__ */ jsx(Icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ jsx("span", { children: s.title })]
					}, s.id);
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "glass rounded-3xl p-8 lg:p-10 text-muted-foreground",
				children: activeSection.content
			})]
		})
	})] });
}
//#endregion
export { DocsPage as component };

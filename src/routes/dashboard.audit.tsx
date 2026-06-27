import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { motion } from "framer-motion";

export const Route = createFileRoute('/dashboard/audit')({
  head: () => ({ meta: [{ title: "Audit Log — Titanium Security" }, { name: "robots", content: "noindex" }] }),
});

const entries = [
  { t: "Today · 14:02", who: "Aanya", action: "Updated automod policy", target: "policy:invite-block", diff: "+ allowlist: youtube.com\n- threshold: 3\n+ threshold: 5" },
  { t: "Today · 12:18", who: "Titanium Security Bot", action: "Auto-engaged Raidmode", target: "guild:apex", diff: "engaged_for: 600s\nreason: 12 joins in 8s" },
  { t: "Today · 10:44", who: "Rohan", action: "Granted role", target: "user:9931 → role:trusted", diff: "+ role: trusted\nby: manual approval" },
  { t: "Yesterday · 22:01", who: "Naomi", action: "Created ticket category", target: "category:appeals", diff: "+ category: appeals\nstaff_role: 8821" },
  { t: "Yesterday · 20:30", who: "Kiran", action: "Revoked premium", target: "guild:stormhold", diff: "- premium: true" },
];


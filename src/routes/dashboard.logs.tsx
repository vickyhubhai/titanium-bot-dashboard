import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { useMemo, useState } from "react";
import { Search, Download } from "lucide-react";

export const Route = createFileRoute('/dashboard/logs')({
  head: () => ({ meta: [{ title: "Logs — Sentinel" }, { name: "robots", content: "noindex" }] }),
  });

type Log = { t: string; level: "info" | "warn" | "error"; module: string; msg: string };

const log: Log[] = [
  { t: "14:02:11", level: "warn", module: "antinuke", msg: "Mass channel delete blocked from user 8421" },
  { t: "14:01:55", level: "info", module: "automod", msg: "Filtered 3 invite links in #general" },
  { t: "14:01:30", level: "info", module: "tickets", msg: "Ticket #284 closed by moderator Aanya" },
  { t: "14:01:02", level: "error", module: "webhooks", msg: "Outbound webhook timeout (3000ms)" },
  { t: "14:00:48", level: "info", module: "verify", msg: "User 9931 passed captcha verification" },
  { t: "14:00:22", level: "warn", module: "raidmode", msg: "Auto-engaged: 12 joins in 8s" },
  { t: "13:59:51", level: "info", module: "logging", msg: "Daily snapshot complete (842 events)" },
  { t: "13:59:30", level: "info", module: "automod", msg: "Updated ruleset v32 applied" },
  { t: "13:58:14", level: "warn", module: "antinuke", msg: "Bulk role grant attempt detected" },
  { t: "13:57:02", level: "info", module: "giveaway", msg: "Giveaway #44 ended, winner picked" },
];

const levelStyle: Record<Log["level"], string> = {
  info: "text-muted-foreground bg-white/5",
  warn: "text-amber-300 bg-amber-500/10",
  error: "text-rose-300 bg-rose-500/10",
};


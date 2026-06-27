import { createFileRoute, Link } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { Sparkles, Check, Zap } from "lucide-react";

export const Route = createFileRoute('/dashboard/premium')({
  head: () => ({ meta: [{ title: "Premium — Sentinel" }, { name: "robots", content: "noindex" }] }),
  });

const perks = [
  "Unlimited servers",
  "SuperAntinuke cryptographic signing",
  "Custom branded bot",
  "Hourly backup snapshots",
  "90-day audit log retention",
  "Priority 4-hour SLA support",
  "Vanity roles and reaction-role pro",
  "Advanced security analytics",
];


import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Topbar } from "@/components/dashboard/Topbar";
import { ArrowUpRight, Users, MessageSquare, Shield, Activity } from "lucide-react";

export const Route = createFileRoute('/dashboard/analytics')({
  head: () => ({
    meta: [
      { title: "Analytics — Sentinel" },
      { name: "robots", content: "noindex" },
    ],
  }),
  });

const kpis = [
  { icon: Users, k: "Active members", v: "12,431", d: "+8.2%" },
  { icon: MessageSquare, k: "Messages / day", v: "84.2K", d: "+3.1%" },
  { icon: Shield, k: "Threats blocked", v: "428", d: "+18%" },
  { icon: Activity, k: "Avg latency", v: "11ms", d: "-2ms" },
];

// Deterministic line chart points.
const points = Array.from({ length: 48 }, (_, i) => {
  const v = 50 + Math.sin(i / 3) * 18 + Math.cos(i / 7) * 12 + (i / 48) * 20;
  return Math.max(10, Math.min(95, v));
});

const distribution = [
  { k: "Antinuke", pct: 42, color: "bg-brand" },
  { k: "Automod", pct: 28, color: "bg-brand-glow" },
  { k: "Verification", pct: 18, color: "bg-emerald-400" },
  { k: "Other", pct: 12, color: "bg-white/30" },
];


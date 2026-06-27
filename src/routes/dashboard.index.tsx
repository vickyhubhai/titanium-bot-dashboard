import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Topbar } from "@/components/dashboard/Topbar";
import { Shield, Users, Zap, Crown, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const Route = createFileRoute('/dashboard/')({
  });

const stats = [
  { icon: Shield, label: "Servers", value: "12", delta: "+2", up: true },
  { icon: Users, label: "Total Members", value: "84,219", delta: "+3.4%", up: true },
  { icon: Zap, label: "Commands / 24h", value: "14.2K", delta: "stable", up: true },
  { icon: Crown, label: "Premium Status", value: "Active", delta: "renews Apr 14", up: true },
];

const activity = [
  { time: "14:02", e: "Antinuke trigger prevented", who: "Apex Guild", tone: "rose" },
  { time: "13:58", e: "Automod deleted 4 messages", who: "Stormhold", tone: "amber" },
  { time: "13:51", e: "New verification approved", who: "Citadel", tone: "emerald" },
  { time: "13:40", e: "Ticket #284 closed", who: "Apex Guild", tone: "brand" },
  { time: "13:21", e: "Backup snapshot saved", who: "Apex Guild", tone: "muted" },
];

const toneMap: Record<string, string> = {
  rose: "bg-rose-500/15 text-rose-300",
  amber: "bg-amber-500/15 text-amber-300",
  emerald: "bg-emerald-500/15 text-emerald-300",
  brand: "bg-brand/15 text-brand",
  muted: "bg-white/5 text-muted-foreground",
};

const bars = [38, 52, 41, 60, 78, 64, 70, 58, 82, 90, 72, 86];


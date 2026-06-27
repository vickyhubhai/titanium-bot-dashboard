import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Topbar } from "@/components/dashboard/Topbar";
import {
  ShieldAlert, Bot, UserCheck, Ticket, ScrollText, Gift,
  Mic2, Crown, ScanLine, Archive, ChevronLeft, Settings2,
} from "lucide-react";

export const Route = createFileRoute('/dashboard/servers/$serverId')({
  });

const modules = [
  { id: "antinuke", icon: ShieldAlert, label: "Antinuke", desc: "Real-time threat containment", tone: "rose", on: true },
  { id: "automod", icon: Bot, label: "Automod", desc: "Context-aware message filter", tone: "brand", on: true },
  { id: "verification", icon: UserCheck, label: "Verification", desc: "CAPTCHA & VPN gates", tone: "emerald", on: true },
  { id: "tickets", icon: Ticket, label: "Tickets", desc: "Support ticket system", tone: "amber", on: false },
  { id: "logging", icon: ScrollText, label: "Logging", desc: "Forensic audit trail", tone: "brand", on: true },
  { id: "giveaways", icon: Gift, label: "Giveaways", desc: "Weighted sweepstakes", tone: "rose", on: false },
  { id: "vc", icon: Mic2, label: "VC Manager", desc: "Temp channels & roles", tone: "emerald", on: true },
  { id: "vanity", icon: Crown, label: "Vanity Roles", desc: "Booster perks", tone: "amber", on: false, pro: true },
  { id: "analytics", icon: ScanLine, label: "Analytics", desc: "ML threat scoring", tone: "brand", on: true, pro: true },
  { id: "backup", icon: Archive, label: "Backup", desc: "Server snapshots", tone: "emerald", on: true, pro: true },
];

const tones: Record<string, string> = {
  brand: "bg-brand/10 text-brand ring-brand/30",
  rose: "bg-rose-500/10 text-rose-300 ring-rose-500/30",
  emerald: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
  amber: "bg-amber-500/10 text-amber-300 ring-amber-500/30",
};


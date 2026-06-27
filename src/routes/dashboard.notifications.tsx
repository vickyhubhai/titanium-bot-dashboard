import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { useState } from "react";
import { BellRing, ShieldAlert, Crown, Ticket } from "lucide-react";

export const Route = createFileRoute('/dashboard/notifications')({
  head: () => ({ meta: [{ title: "Notifications — Titanium Security" }, { name: "robots", content: "noindex" }] }),
});

type N = { id: number; icon: typeof BellRing; title: string; body: string; time: string; tone: string; read?: boolean };

const initial: N[] = [
  { id: 1, icon: ShieldAlert, title: "Antinuke blocked an attack", body: "Apex Guild — mass channel delete attempt by user 8421.", time: "2m", tone: "rose" },
  { id: 2, icon: Crown, title: "Premium renewed", body: "Your Premium plan renewed for Stormhold guild.", time: "1h", tone: "brand" },
  { id: 3, icon: Ticket, title: "Ticket SLA breached", body: "Ticket #284 has been open for over 12 hours.", time: "3h", tone: "amber" },
  { id: 4, icon: BellRing, title: "Weekly digest", body: "Your security digest for the week is ready.", time: "1d", tone: "muted", read: true },
];

const toneStyle: Record<string, string> = {
  rose: "bg-rose-500/15 text-rose-300",
  brand: "bg-brand/15 text-brand",
  amber: "bg-amber-500/15 text-amber-300",
  muted: "bg-white/5 text-muted-foreground",
};


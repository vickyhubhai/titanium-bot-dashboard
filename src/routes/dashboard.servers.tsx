import { createFileRoute, Link } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { Users, Shield, ChevronRight } from "lucide-react";

export const Route = createFileRoute('/dashboard/servers')({
});

const servers = [
  { id: "apex", name: "Apex Guild", members: 24910, threats: 482, premium: true },
  { id: "stormhold", name: "Stormhold", members: 18204, threats: 121, premium: true },
  { id: "citadel", name: "Citadel Network", members: 9842, threats: 64, premium: false },
  { id: "nightcity", name: "Night City Lounge", members: 7401, threats: 89, premium: false },
  { id: "valor", name: "Titanium Securitys of Valor", members: 5290, threats: 22, premium: true },
  { id: "obsidian", name: "Obsidian Order", members: 3120, threats: 14, premium: false },
];


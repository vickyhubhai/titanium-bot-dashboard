import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { PageTransition } from "@/components/site/PageTransition";
import { CursorGlow } from "@/components/site/CursorGlow";

export const Route = createFileRoute('/dashboard')({
  head: () => ({
    meta: [
      { title: "Dashboard — Sentinel" },
      { name: "description", content: "Manage your Discord servers, modules and security from the Sentinel dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
  });


import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { PageTransition } from "@/components/site/PageTransition";
import { CursorGlow } from "@/components/site/CursorGlow";

export const Route = createFileRoute('/dashboard')({
  head: () => ({
    meta: [
      { title: "Dashboard — Titanium Security" },
      { name: "description", content: "Manage your Discord servers, modules and security from the Titanium Security dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
});


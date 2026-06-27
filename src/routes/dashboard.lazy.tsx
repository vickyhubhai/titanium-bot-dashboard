import { createLazyFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { PageTransition } from "@/components/site/PageTransition";
import { CursorGlow } from "@/components/site/CursorGlow";

export const Route = createLazyFileRoute('/dashboard')({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="relative flex min-h-dvh bg-background">
      <div className="pointer-events-none fixed inset-0 ambient-bg opacity-40" aria-hidden />
      <CursorGlow />
      <DashboardSidebar />
      <div className="relative flex min-w-0 flex-1 flex-col">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
    </div>
  );
}
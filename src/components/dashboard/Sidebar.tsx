import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  ShieldAlert,
  Bot,
  UserCheck,
  Ticket,
  ScrollText,
  Gift,
  Mic2,
  ScanLine,
  Crown,
  Settings,
  BellRing,
  History,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";

const items = [
  { to: "/dashboard" as const, label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/servers" as const, label: "Servers", icon: Settings },
  { to: "/dashboard/modules" as const, label: "Modules", icon: SlidersHorizontal },
  { to: "/dashboard/analytics" as const, label: "Analytics", icon: ScanLine },
  { to: "/dashboard/logs" as const, label: "Logs", icon: ScrollText },
  { to: "/dashboard/audit" as const, label: "Audit", icon: History },
  { to: "/dashboard/notifications" as const, label: "Notifications", icon: BellRing },
  { to: "/dashboard/premium" as const, label: "Premium", icon: Sparkles, badge: "PRO" },
  { to: "/dashboard/settings" as const, label: "Settings", icon: Crown },
];

const modulesNav = [
  { label: "Antinuke", icon: ShieldAlert, badge: "PRO" },
  { label: "Automod", icon: Bot },
  { label: "Verification", icon: UserCheck },
  { label: "Tickets", icon: Ticket },
  { label: "Giveaways", icon: Gift },
  { label: "VC Manager", icon: Mic2 },
];

export function DashboardSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-border/60 bg-sidebar/60 backdrop-blur-xl lg:flex">
      <div className="p-6">
        <Logo />
      </div>
      <nav className="flex-1 overflow-y-auto px-4 pb-6">
        <div className="mb-2 px-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Main</div>
        {items.map((i) => {
          const active = pathname === i.to || (i.to !== "/dashboard" && pathname.startsWith(i.to));
          return (
            <Link
              key={i.to}
              to={i.to}
              className={`mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active ? "bg-white/5 text-foreground ring-1 ring-white/10" : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
              }`}
            >
              <i.icon className="size-4" />
              <span className="flex-1">{i.label}</span>
              {i.badge && (
                <span className="rounded-full bg-brand/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-brand">
                  {i.badge}
                </span>
              )}
              {active && !i.badge && <span className="ml-auto size-1.5 rounded-full bg-brand" />}
            </Link>
          );
        })}

        <div className="mb-2 mt-6 px-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Quick Modules</div>
        {modulesNav.map((m) => (
          <button
            key={m.label}
            type="button"
            className="mb-0.5 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
          >
            <m.icon className="size-4" />
            <span className="flex-1">{m.label}</span>
            {m.badge && (
              <span className="rounded-full bg-brand/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-brand">
                {m.badge}
              </span>
            )}
          </button>
        ))}
      </nav>
      <div className="border-t border-border/60 p-4">
        <div className="glass-subtle rounded-2xl p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Resource Usage</span>
            <span className="font-mono text-[10px] text-brand">68%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand to-brand-glow" />
          </div>
        </div>
      </div>
    </aside>
  );
}
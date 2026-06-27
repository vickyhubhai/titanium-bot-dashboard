import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { Users, Shield, ChevronRight } from "lucide-react";

export const Route = createLazyFileRoute('/dashboard/servers')({
  component: ServersPage,
});

const servers = [
  { id: "apex", name: "Apex Guild", members: 24910, threats: 482, premium: true },
  { id: "stormhold", name: "Stormhold", members: 18204, threats: 121, premium: true },
  { id: "citadel", name: "Citadel Network", members: 9842, threats: 64, premium: false },
  { id: "nightcity", name: "Night City Lounge", members: 7401, threats: 89, premium: false },
  { id: "valor", name: "Titanium Securitys of Valor", members: 5290, threats: 22, premium: true },
  { id: "obsidian", name: "Obsidian Order", members: 3120, threats: 14, premium: false },
];

function ServersPage() {
  return (
    <>
      <Topbar title="Servers" subtitle="Select a server to configure modules." />
      <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3 lg:p-10">
        {servers.map((s) => (
          <Link
            key={s.id}
            to="/dashboard/servers/$serverId"
            params={{ serverId: s.id }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <div className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-glow text-white font-display text-lg font-bold">
                {s.name[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate font-display text-base font-bold">{s.name}</h3>
                  {s.premium && (
                    <span className="rounded-full bg-brand/15 px-1.5 py-0.5 font-mono text-[9px] font-bold text-brand">PRO</span>
                  )}
                </div>
                <div className="mt-3 flex items-center gap-4 font-mono text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Users className="size-3" />{s.members.toLocaleString()}</span>
                  <span className="flex items-center gap-1.5"><Shield className="size-3" />{s.threats} blocked</span>
                </div>
              </div>
              <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
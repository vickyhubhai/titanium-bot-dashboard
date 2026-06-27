import { createLazyFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Topbar";
import { useState } from "react";
import { BellRing, ShieldAlert, Crown, Ticket } from "lucide-react";

export const Route = createLazyFileRoute('/dashboard/notifications')({
  component: NotificationsPage,
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

function NotificationsPage() {
  const [items, setItems] = useState(initial);
  const unread = items.filter((i) => !i.read).length;

  return (
    <>
      <Topbar title="Notifications" subtitle={`${unread} unread`} />
      <div className="p-6 lg:p-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-base font-semibold">Inbox</h2>
          <button
            onClick={() => setItems((p) => p.map((i) => ({ ...i, read: true })))}
            className="font-mono text-[10px] uppercase tracking-widest text-brand hover:underline"
          >
            Mark all read
          </button>
        </div>
        <ul className="space-y-2">
          {items.map((n) => (
            <li key={n.id} className={`glass flex items-start gap-4 rounded-2xl p-5 ${n.read ? "opacity-60" : ""}`}>
              <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${toneStyle[n.tone]}`}>
                <n.icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold">{n.title}</h3>
                  {!n.read && <span className="size-1.5 rounded-full bg-brand" />}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{n.body}</p>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">{n.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
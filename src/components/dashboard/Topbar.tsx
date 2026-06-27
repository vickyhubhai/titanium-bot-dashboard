import { Search, Bell, ChevronDown } from "lucide-react";

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="flex items-center gap-4 px-6 py-4 lg:px-10">
        <div className="flex-1">
          <h1 className="font-display text-xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="glass-subtle hidden items-center gap-2 rounded-full px-3 py-1.5 md:flex">
          <Search className="size-3.5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search…"
            aria-label="Search dashboard"
            className="w-48 bg-transparent text-xs outline-none placeholder:text-muted-foreground"
          />
          <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">⌘K</kbd>
        </div>
        <button type="button" aria-label="Notifications" className="glass-subtle grid size-9 place-items-center rounded-full transition-colors hover:bg-white/10">
          <Bell className="size-4" />
        </button>
        <button type="button" className="glass-subtle flex items-center gap-2 rounded-full py-1 pl-1 pr-3 transition-colors hover:bg-white/10">
          <div className="size-7 rounded-full bg-gradient-to-br from-brand to-brand-glow" />
          <span className="text-xs font-semibold">Apex</span>
          <ChevronDown className="size-3 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
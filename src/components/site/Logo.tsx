import { Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`}>
      <div className="relative grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow shadow-lg shadow-brand/30">
        <Shield className="size-4 text-white" strokeWidth={2.5} />
        <div className="absolute inset-0 rounded-lg bg-brand/40 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
      </div>
      <span className="font-display text-lg font-bold tracking-tight">
        TITANIUM
      </span>
    </Link>
  );
}
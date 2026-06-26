import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const navLinks = [
  { to: "/features" as const, label: "Features" },
  { to: "/commands" as const, label: "Commands" },
  { to: "/modules" as const, label: "Modules" },
  { to: "/premium" as const, label: "Premium" },
  { to: "/docs" as const, label: "Docs" },
  { to: "/faq" as const, label: "FAQ" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-4 pr-2">
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a
          href="https://discord.com/api/oauth2/authorize?client_id=1456212834189971537&permissions=8&scope=bot%20applications.commands"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-brand to-brand-glow px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:scale-[1.03] hover:shadow-brand/50"
        >
          Invite Bot
        </a>
      </nav>
    </header>
  );
}
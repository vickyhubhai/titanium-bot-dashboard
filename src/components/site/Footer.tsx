import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/features" as const },
      { label: "Commands", to: "/commands" as const },
      { label: "Modules", to: "/modules" as const },
      { label: "Premium", to: "/premium" as const },
      { label: "Changelog", to: "/changelog" as const },
      { label: "Status", to: "/status" as const },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", to: "/docs" as const },
      { label: "FAQ", to: "/faq" as const },
      { label: "Support Server", to: "https://discord.gg/UXKWfgWgth" },
      { label: "Invite Bot", to: "https://discord.com/api/oauth2/authorize?client_id=1456212834189971537&permissions=8&scope=bot%20applications.commands" },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      { label: "Contact Us", to: "/contact" as const },
      { label: "Privacy Policy", to: "/privacy" as const },
      { label: "Terms of Service", to: "/terms" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-surface/30 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Architected for digital safety and community resilience. Titanium Security is built for servers that take security seriously.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              {col.title}
            </div>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.to.startsWith("http") ? (
                    <a href={l.to} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to as any} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between border-t border-border/60 pt-6 text-xs text-muted-foreground">
        <span className="font-mono">© 2026 TITANIUM SECURITY</span>
        <span className="font-mono">ALL SYSTEMS OPERATIONAL</span>
      </div>
    </footer>
  );
}
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export const Route = createLazyFileRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="relative grid min-h-dvh place-items-center overflow-hidden ambient-bg px-6">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="glass relative w-full max-w-md rounded-3xl p-10 text-center">
        <div className="mx-auto mb-6 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-glow shadow-lg shadow-brand/40">
          <Shield className="size-7 text-white" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-3xl font-bold">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in with Discord to access your command center.
        </p>

        <Link
          to="/dashboard"
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#5865F2] py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#5865F2]/30 transition-transform hover:scale-[1.02]"
        >
          <svg className="size-5" viewBox="0 0 71 55" fill="currentColor" aria-hidden>
            <path d="M60.1 4.9A58.5 58.5 0 0 0 46 .5l-.6 1.2a54 54 0 0 0-15.9 0L29 .5a58.5 58.5 0 0 0-14 4.4C5.6 18.7 3.1 32.2 4.3 45.5a59 59 0 0 0 18 9.1l1.5-2.1a39 39 0 0 1-6-2.9l1.4-1.1a42 42 0 0 0 35.5 0l1.4 1.1c-1.9 1.1-3.9 2-6 2.9l1.5 2.1a59 59 0 0 0 18-9.1c1.4-15.5-2.2-28.9-9.5-40.6ZM23.7 37.3c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.3 6.4-7.3 6.5 3.3 6.4 7.3-2.9 7.2-6.4 7.2Zm23.6 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.3 6.4-7.3 6.5 3.3 6.4 7.3-2.9 7.2-6.4 7.2Z" />
          </svg>
          Continue with Discord
        </Link>

        <p className="mt-6 text-xs text-muted-foreground">
          Demo mode — click to explore the dashboard.
        </p>

        <Link to="/" className="mt-4 inline-block text-xs text-muted-foreground hover:text-foreground">
          ← back to home
        </Link>
      </div>
    </div>
  );
}
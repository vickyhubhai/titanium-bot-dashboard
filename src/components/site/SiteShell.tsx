import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";
import { SplashScreen } from "./SplashScreen";
import { PageTransition } from "./PageTransition";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh overflow-hidden ambient-bg">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
      <CursorGlow />
      <SplashScreen />
      <Nav />
      <main className="relative pt-24">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
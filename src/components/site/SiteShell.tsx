import { useState, useEffect, type ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";
import { SplashScreen } from "./SplashScreen";
import { PageTransition } from "./PageTransition";
import { SearchDialog } from "./SearchDialog";

export function SiteShell({ children }: { children: ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleGlobalK = (e: KeyboardEvent) => {
      // Intercept Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalK);
    return () => window.removeEventListener("keydown", handleGlobalK);
  }, []);

  return (
    <div className="relative min-h-dvh overflow-hidden ambient-bg">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
      <CursorGlow />
      <SplashScreen />
      <Nav onSearchClick={() => setIsSearchOpen(true)} />
      <main id="main-content" className="relative pt-24">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const GA_MEASUREMENT_ID = "G-9QRBSSZ668";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4 ambient-bg">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="relative z-10 max-w-md text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand">
          <span className="size-1.5 rounded-full bg-brand" />
          Error 404 · Route not found
        </div>
        <h1 className="font-display text-8xl font-extrabold tracking-tight">404</h1>
        <h2 className="mt-2 font-display text-2xl font-bold">This route doesn't exist.</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page may have been moved, renamed, or was never here to begin with.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link to="/" className="rounded-full bg-gradient-to-r from-brand to-brand-glow px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-brand/30">
            Go home
          </Link>
          <Link to="/docs" className="rounded-full border border-border bg-background/40 px-5 py-2 text-xs font-semibold backdrop-blur transition-colors hover:bg-white/5">
            Browse docs
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
      { name: "theme-color", content: "#0a0a14" },
      { title: "Titanium Security — Discord Security & Moderation Bot" },
      { name: "description", content: "Fortify your Discord server with Titanium Security. Instant antinuke containment, zero-latency automod, forensic log streams, and custom role gatekeeping." },
      { name: "author", content: "Titanium Security" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "googlebot", content: "index,follow" },
      // OpenGraph
      { property: "og:title", content: "Titanium Security — Discord Security & Moderation Bot" },
      { property: "og:description", content: "Fortify your Discord server with Titanium Security. Instant antinuke containment, zero-latency automod, forensic log streams, and custom role gatekeeping." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Titanium Security" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Titanium Security — Discord Security & Moderation" },
      { name: "twitter:description", content: "Fortify your Discord server with Titanium Security. Instant antinuke containment, zero-latency automod, forensic log streams, and custom role gatekeeping." },
      { name: "twitter:image", content: "/og-image.png" },
      // PWA & Apple Meta
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Titanium" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "application-name", content: "Titanium Security" },
      { name: "msapplication-TileColor", content: "#0a0a14" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
      { name: "google-site-verification", content: "eDC68pTh-rPXDSNL6Y0FnzJWLbyE2MrnFzGn9m7oIvM" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      { rel: "canonical", href: "https://titaniumsecurity.dpdns.org" },
      { rel: "alternate", hrefLang: "en", href: "https://titaniumsecurity.dpdns.org" },
      { rel: "alternate", hrefLang: "x-default", href: "https://titaniumsecurity.dpdns.org" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "apple-touch-icon", href: "/icon-192.png" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
  src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
  async: true,
},
{
  children: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `,
},
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Titanium Security",
          url: "https://titaniumsecurity.dpdns.org",
          logo: "https://titaniumsecurity.dpdns.org/favicon.svg",
          image: "https://titaniumsecurity.dpdns.org/og-image.png",
          description: "Enterprise-grade security, moderation and antinuke platform for Discord servers.",
          sameAs: [
            "https://discord.gg/UXKWfgWgth",
            "https://twitter.com/TitaniumSecurity"
          ]
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4 focus:text-brand focus:outline-none focus:ring-2 focus:ring-brand">
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {
            console.log("Service Worker registered successfully: ", registration.scope);
          },
          (err) => {
            console.error("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}


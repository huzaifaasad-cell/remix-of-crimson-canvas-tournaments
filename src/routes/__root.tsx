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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NEONCLASH — Elite Esports Tournaments" },
      { name: "description", content: "Compete, spectate, dominate. Global esports tournaments streamed live from the world's biggest arenas." },
      { name: "author", content: "NEONCLASH" },
      { property: "og:title", content: "NEONCLASH — Elite Esports Tournaments" },
      { property: "og:description", content: "Compete, spectate, dominate. Global esports tournaments streamed live." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@neonclash" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap",
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
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteChrome />
    </QueryClientProvider>
  );
}

function SiteChrome() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient cinematic background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--color-neon-red)_30%,transparent),transparent_55%),radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--color-neon-blue)_28%,transparent),transparent_55%),radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-neon-pink)_18%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid animate-grid opacity-40" />
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-neon-pink)] to-transparent animate-scan" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0,transparent_2px,rgba(255,255,255,0.02)_3px)] bg-[length:100%_3px] mix-blend-overlay" />
      </div>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/tournaments", label: "Tournaments" },
    { to: "/teams", label: "Teams" },
    { to: "/about", label: "About" },
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-black tracking-widest">
          <span className="inline-block h-3 w-3 rotate-45 bg-[var(--color-neon-red)] glow-red" />
          <span className="text-shimmer">NEONCLASH</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground transition hover:text-foreground hover:bg-white/5"
              activeProps={{ className: "text-foreground bg-white/5" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/tournaments"
          className="clip-arrow relative inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-neon-red)] via-[var(--color-neon-pink)] to-[var(--color-neon-blue)] px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white transition hover:brightness-125"
        >
          Enter Arena
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2 font-display text-xl font-black tracking-widest">
            <span className="inline-block h-3 w-3 rotate-45 bg-[var(--color-neon-pink)] glow-pink" />
            <span className="text-shimmer">NEONCLASH</span>
          </div>
          <p className="text-sm text-muted-foreground">The global stage for competitive gaming. Built for players, made for legends.</p>
        </div>
        {[
          { title: "Compete", links: ["Tournaments", "Rankings", "Schedule", "Rules"] },
          { title: "Community", links: ["Teams", "Players", "Forums", "Discord"] },
          { title: "Company", links: ["About", "Press", "Careers", "Contact"] },
        ].map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[var(--color-neon-pink)]">{c.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l}><a className="hover:text-foreground transition" href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
        © 2026 NEONCLASH · All rights reserved
      </div>
    </footer>
  );
}

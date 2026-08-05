import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nail Lab by Nina — Nokti u Puli" },
      { name: "description", content: "Nail Lab by Nina — salon za nokte u Puli. Gel, gel lak i manikura." },
      { name: "author", content: "Nina Zupčić" },
      { property: "og:title", content: "Nail Lab by Nina — Nokti u Puli" },
      { property: "og:description", content: "Gel, gel lak i manikura kod nail artistice Nine Zupčić." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@naillab_bynina" },
      { name: "twitter:title", content: "Nail Lab by Nina — Nokti u Puli" },
      { name: "twitter:description", content: "Gel, gel lak i manikura kod nail artistice Nine Zupčić." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1cd6c565-f961-4f6c-af2a-33eca9dfb2e6/id-preview-63ffb680--105b7bec-264a-4cac-a69e-075141a9bc50.lovable.app-1776636268553.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1cd6c565-f961-4f6c-af2a-33eca9dfb2e6/id-preview-63ffb680--105b7bec-264a-4cac-a69e-075141a9bc50.lovable.app-1776636268553.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import ZFileLogo from "./contents/ZFileLogo";
import { pageMeta } from "./lib/meta";

// The Font Awesome core stylesheet is imported above so it can be bundled
// with the rest of the CSS instead of injected at runtime.
fontAwesomeConfig.autoAddCss = false;

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" },
  { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "#284b63" },
  { rel: "manifest", href: "/icons/manifest.json" },
  {
    rel: "preload",
    as: "font",
    type: "font/woff2",
    href: "/webfonts/389018_0_0.woff2",
    crossOrigin: "anonymous"
  },
  {
    rel: "preload",
    as: "font",
    type: "font/woff2",
    href: "/webfonts/389018_1_0.woff2",
    crossOrigin: "anonymous"
  }
];

export const meta: Route.MetaFunction = () => pageMeta();

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ebf8ff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1a202c" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script
          defer
          src="https://analytics.zack.computer/script.js"
          data-website-id="7673694d-cf72-4c29-bea7-fcbbf9dd4e4a"
        />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let title = "Something went wrong";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "Page not found" : `Error ${error.status}`;
    details =
      error.status === 404
        ? "Hmmm - I didn’t find content to match the URL you went to. Try something else?"
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center px-4 py-12 sm:px-6">
      <div className="site-logo pt-12">
        <ZFileLogo />
      </div>
      <h1 className="mt-2">{title}</h1>
      <p>{details}</p>
      <p>
        <a href="/">Back to the start &rarr;</a>
      </p>
      {stack && (
        <pre className="w-full overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-900">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

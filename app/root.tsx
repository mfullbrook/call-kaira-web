import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { Route } from "./+types/root";
import { configureApiClient } from "./services/api-config";
import "./app.css";

export type SiteMode = "normal" | "waitlist";

export interface RootLoaderData {
  env: {
    site_mode: SiteMode;
    api_base_url: string;
  };
}

export function loader({ context }: Route.LoaderArgs): RootLoaderData {
  const siteMode = context.cloudflare.env.SITE_MODE;
  const apiBaseUrl = context.cloudflare.env.API_BASE_URL;

  // Validate the environment variables
  if (siteMode !== "normal" && siteMode !== "waitlist") {
    throw new Error(`Invalid SITE_MODE: ${siteMode}. Must be "normal" or "waitlist"`);
  }

  if (!apiBaseUrl) {
    throw new Error('API_BASE_URL environment variable is not set');
  }

  // Configure the API client with the environment-specific base URL
  configureApiClient(apiBaseUrl);

  return {
    env: {
      site_mode: siteMode,
      api_base_url: apiBaseUrl
    }
  };
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.bunny.net" },
  {
    rel: "stylesheet",
    href: "https://fonts.bunny.net/css?family=figtree:100,200,300,400,500,600,700,800,900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

import { createContext, createRequestHandler, RouterContextProvider } from "react-router";

/**
 * Cloudflare bindings and the execution context, available to loaders,
 * actions and middleware via `context.get(cloudflareContext)`.
 */
export const cloudflareContext = createContext<{ env: Env; ctx: ExecutionContext }>();

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  fetch(request, env, ctx) {
    const context = new RouterContextProvider();
    context.set(cloudflareContext, { env, ctx });
    return requestHandler(request, context);
  }
} satisfies ExportedHandler<Env>;

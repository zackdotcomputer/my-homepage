import { data } from "react-router";
import { pageMeta } from "~/lib/meta";
import type { Route } from "./+types/not-found";

// Unknown URLs still render inside the conversation (see app/conversation/pages.tsx),
// but the response itself is a proper 404.
export const loader = () => data(null, { status: 404 });

export const meta: Route.MetaFunction = () =>
  pageMeta({ pageTitle: "Page not found", disallowRobots: true });

export { default } from "~/conversation/ConversationRoute";

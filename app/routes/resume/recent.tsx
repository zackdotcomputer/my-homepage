import { pageMeta } from "~/lib/meta";
import type { Route } from "./+types/recent";

export const meta: Route.MetaFunction = () =>
  pageMeta({ pageTitle: "Recent Work", canonical: "/resume/recent" });

export { default } from "~/conversation/ConversationRoute";

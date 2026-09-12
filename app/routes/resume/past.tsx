import { pageMeta } from "~/lib/meta";
import type { Route } from "./+types/past";

export const meta: Route.MetaFunction = () =>
  pageMeta({ pageTitle: "Selected Earlier Work", canonical: "/resume/past" });

export { default } from "~/conversation/ConversationRoute";

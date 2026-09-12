import { pageMeta } from "~/lib/meta";
import type { Route } from "./+types/freelance";

export const meta: Route.MetaFunction = () =>
  pageMeta({ pageTitle: "Freelance Work", canonical: "/resume/freelance" });

export { default } from "~/conversation/ConversationRoute";

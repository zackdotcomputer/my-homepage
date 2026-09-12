import { pageMeta } from "~/lib/meta";
import type { Route } from "./+types/skills";

export const meta: Route.MetaFunction = () =>
  pageMeta({ pageTitle: "My Skills and Focus", canonical: "/resume/skills" });

export { default } from "~/conversation/ConversationRoute";

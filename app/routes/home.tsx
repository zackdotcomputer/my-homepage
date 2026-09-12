import { pageMeta } from "~/lib/meta";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () =>
  pageMeta({ pageTitle: "Conversational Homepage", canonical: "/" });

export { default } from "~/conversation/ConversationRoute";

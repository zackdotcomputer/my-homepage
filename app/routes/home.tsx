import { pageMeta, personJsonLd } from "~/lib/meta";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => [
  ...pageMeta({ pageTitle: "Conversational Homepage", canonical: "/", ogType: "profile" }),
  personJsonLd()
];

export { default } from "~/conversation/ConversationRoute";

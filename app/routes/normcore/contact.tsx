import ContactContents from "~/contents/ContactContents";
import { pageMeta } from "~/lib/meta";
import type { Route } from "./+types/contact";

export const meta: Route.MetaFunction = () =>
  pageMeta({ pageTitle: "Contact Me", canonical: "/contact" });

export default function NormcoreContact() {
  return <ContactContents />;
}

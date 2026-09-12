import { Link } from "react-router";
import { pageMeta } from "~/lib/meta";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () =>
  pageMeta({ pageTitle: "Normcore Homepage", canonical: "/normcore/" });

export default function NormcoreHomepage() {
  return (
    <div className="space-y-2 text-lg">
      <p>
        I&rsquo;m a freelance engineer with over{" "}
        <Link to="/normcore/resume">10 years of experience</Link> making server, web, and iOS
        products.
      </p>
      <p>(I&rsquo;ve also bartended, managed teams, and traveled around the world.)</p>
      <p>
        I&rsquo;m currently based in London. If you&rsquo;d like to work with me or just grab coffee
        and chat, <Link to="/normcore/contact">say hi</Link>.
      </p>
      <p>
        You&rsquo;re currently viewing the normcore version of my homepage - just plain HTML and
        CSS. If you want to go back to the appy, conversational version,{" "}
        <Link to="/">click here</Link>
      </p>
    </div>
  );
}

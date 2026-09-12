import Addition from "~/contents/resume/Addition";
import ExperienceSection from "~/contents/resume/Experience";
import FreelanceSection from "~/contents/resume/Freelance";
import PastSection from "~/contents/resume/Past";
import SectionBreak from "~/contents/SectionBreak";
import { pageMeta } from "~/lib/meta";
import type { Route } from "./+types/resume";

export const meta: Route.MetaFunction = () =>
  pageMeta({ pageTitle: "My Work Experience", canonical: "/resume" });

export default function NormcoreResume() {
  return (
    <div>
      <ExperienceSection />
      <SectionBreak />
      <Addition />
      <FreelanceSection />
      <SectionBreak />
      <PastSection />
    </div>
  );
}

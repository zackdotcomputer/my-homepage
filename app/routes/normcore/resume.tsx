import ExperienceSection from "~/contents/resume/Experience";
import FreelanceSection from "~/contents/resume/Freelance";
import PastSection from "~/contents/resume/Past";
import RecentSection from "~/contents/resume/Recent";
import SectionBreak from "~/contents/SectionBreak";
import { pageMeta } from "~/lib/meta";
import type { Route } from "./+types/resume";

export const meta: Route.MetaFunction = () =>
  pageMeta({ pageTitle: "My Work Experience", canonical: "/normcore/resume" });

export default function NormcoreResume() {
  return (
    <div>
      <ExperienceSection />
      <SectionBreak />
      <RecentSection />
      <SectionBreak />
      <FreelanceSection />
      <SectionBreak />
      <PastSection />
    </div>
  );
}

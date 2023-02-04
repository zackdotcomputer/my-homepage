// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import ExperienceSection from "../../contents/Resume/Experience";
import FreelanceSection from "../../contents/Resume/Freelance";
import PastSection from "../../contents/Resume/Past";
import SectionBreak from "../../contents/SectionBreak";
import ZackHeadTags from "../../layout/ZackHeadTags";

const Resume = () => (
  <>
    <ZackHeadTags pageTitle="My Work Experience" canonicalURL="https://zack.computer/resume" />
    <div>
      <ExperienceSection />
      <SectionBreak />
      <FreelanceSection />
      <SectionBreak />
      <PastSection />
    </div>
  </>
);

export default Resume;

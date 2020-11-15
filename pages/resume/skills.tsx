import React from "react";
import ExperienceSection from "../../src/contents/Resume/Experience";
import ZackHeadTags from "../../src/layout/ZackHeadTags";

const Skills = () => {
  return (
    <>
      <ZackHeadTags
        pageTitle="My Skills and Focus"
        canonicalURL="https://zack.computer/resume/skills"
      />
      <ExperienceSection />
    </>
  );
};

export default Skills;

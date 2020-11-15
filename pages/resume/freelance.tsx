import React from "react";
import FreelanceSection from "../../src/contents/Resume/Freelance";
import ZackHeadTags from "../../src/layout/ZackHeadTags";

const FreelancePage = () => {
  return (
    <>
      <ZackHeadTags
        pageTitle="Freelance Work"
        canonicalURL="https://zack.computer/resume/fFreelance"
      />
      <FreelanceSection />
    </>
  );
};

export default FreelancePage;

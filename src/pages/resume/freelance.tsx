import React from "react";
import FreelanceSection from "../../contents/Resume/Freelance";
import ZackHeadTags from "../../layout/ZackHeadTags";

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

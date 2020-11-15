import React from "react";
import PastSection from "../../src/contents/Resume/Past";
import ZackHeadTags from "../../src/layout/ZackHeadTags";

const Past = () => {
  return (
    <>
      <ZackHeadTags
        pageTitle="Selected Earlier Work"
        canonicalURL="https://zack.computer/resume/past"
      />
      <PastSection />
    </>
  );
};

export default Past;

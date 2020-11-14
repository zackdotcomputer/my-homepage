import React from "react";
import SectionBreak from "./SectionBreak";

const WelcomeIntro = () => {
  return (
    <>
      <h1>
        Hi! I&rsquo;m <span className="text-red-600">Zack Sheppard</span>.
      </h1>
      <p>I make apps for iOS and the web.</p>
      <SectionBreak />
    </>
  );
};

export default WelcomeIntro;

import React from "react";
import ExternalLink from "./ExternalLink";
import ResumeEntry from "./ResumeEntry";
import ResumeSection from "./ResumeSection";

const FreelanceSection = () => {
  return (
    <ResumeSection title="Freelance Work" timerange="2018 - Present">
      <p>
        I’m available for hire as a freelance engineer, manager, consultant, and
        mentor. Some of my featured clients include:
      </p>
      <ResumeEntry title="OrbitCME">
        <p>
          I was brought on by OrbitCME as their sole iOS app engineer. Their
          founder wanted to develop an app quickly to validate the market for
          it. Working closely with him and two other engineers on the server, we
          were able to complete the{" "}
          <ExternalLink href="https://apps.apple.com/us/app/orbit-cme-search-discover/id1524243733">
            OrbitCME iOS app
          </ExternalLink>{" "}
          in under 8 weeks of work.
        </p>
      </ResumeEntry>
      <ResumeEntry title="Cred.ai">
        <p>
          I&rsquo; worked as a supporting engineer for the{" "}
          <ExternalLink href="https://apps.apple.com/us/app/cred-ai/id1393703565">
            Cred iOS App
          </ExternalLink>{" "}
          team for over a year. As a senior engineer with experience building
          sensitive, secure, and stable apps for millions of users, I&rsquo;ve
          been able to help them build a stronger app with the kind of UI polish
          they aimed for.
        </p>
      </ResumeEntry>
      <ResumeEntry title="Candid™">
        <p>
          While in New York, I was embedded into the{" "}
          <ExternalLink href="https://www.candidco.com/">Candid</ExternalLink>{" "}
          mobile and web development team. There, I acted as a lead and mentor,
          helping train more junior engineers in managing a public app,
          consulting on design decisions, and implementing key features on tight
          deadlines.
        </p>
      </ResumeEntry>
    </ResumeSection>
  );
};

export default FreelanceSection;

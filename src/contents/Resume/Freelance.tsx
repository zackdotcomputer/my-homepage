import React from "react";
import ExternalLink from "./ExternalLink";
import ResumeEntry from "./ResumeEntry";
import ResumeSection from "./ResumeSection";

const FreelanceSection = () => {
  return (
    <ResumeSection title="Freelance Work" timerange="2018 - Present">
      <p>
        I’m available for hire as a freelance engineer, manager, consultant, and mentor. Some of my
        featured clients include:
      </p>
      <ResumeEntry title="Addition Wealth">
        <p>
          I was brought on to the{" "}
          <ExternalLink href="https://www.additionwealth.com">Addition Wealth</ExternalLink> team
          before they had a prototype product built. I helped craft their product process, shape the
          features they chose to develop, and lead a team of contractor engineers during the initial
          product build. Since then, I&rsquo;ve stayed on the team to help them grow the product and
          team into a stable company.
        </p>
      </ResumeEntry>
      <ResumeEntry title="OrbitCME">
        <p>
          I was brought on by OrbitCME as their sole iOS app engineer. Their founder wanted to
          develop an app quickly to validate the market for it. Working closely with him and two
          other engineers on the server, we were able to complete and launch the{" "}
          <ExternalLink href="https://apps.apple.com/us/app/orbit-cme-search-discover/id1524243733">
            OrbitCME iOS app
          </ExternalLink>{" "}
          on a very tight schedule.
        </p>
      </ResumeEntry>
      <ResumeEntry title="Cred.ai">
        <p>
          I worked as a supporting engineer for the{" "}
          <ExternalLink href="https://apps.apple.com/us/app/cred-ai/id1393703565">
            Cred iOS App
          </ExternalLink>{" "}
          team for over two years. As a senior engineer with experience building sensitive, secure,
          and stable apps for millions of users, I&rsquo;ve been able to help them build a stronger
          app with the kind of UI polish they aimed for.
        </p>
      </ResumeEntry>
      <ResumeEntry title="Candid™">
        <p>
          I was contracted to help the{" "}
          <ExternalLink href="https://www.candidco.com/">Candid</ExternalLink> mobile and web
          development team. There, I acted as a consultant and mentor, helping train more junior
          engineers in managing a public app, consulting on design decisions, and implementing key
          features on tight deadlines.
        </p>
      </ResumeEntry>
    </ResumeSection>
  );
};

export default FreelanceSection;

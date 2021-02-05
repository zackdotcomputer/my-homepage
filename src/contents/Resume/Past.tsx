import React from "react";
import ExternalLink from "./ExternalLink";
import ResumeSection from "./ResumeSection";

const PastSection = () => {
  return (
    <div>
      <h2>
        <span className="title-red">Past</span> Experience
      </h2>
      <p>
        This is just my highlight reel. For details, check out my{" "}
        <ExternalLink href="https://www.linkedin.com/in/zacksheppard/">LinkedIn</ExternalLink>.
      </p>
      <ResumeSection title="Foursquare" timerange="2011-2018">
        <p>
          I worked for 7 years at{" "}
          <ExternalLink href="https://www.foursquare.com">Foursquare</ExternalLink>. Starting as a
          new grad hire on the API/Server team, then moving to the web team, and finally landing on
          the iOS team, I would move wherever there was a need for someone to learn a stack and
          execute quickly.
        </p>
        <p>
          Once I landed on the iOS team, I worked hard to learn and grow. Eventually I became the
          iOS platform lead in the company, then the manager the{" "}
          <ExternalLink href="https://www.swarmapp.com">Swarm</ExternalLink> mobile app team, and
          finally the manager for all the engineers for our consumer apps.
        </p>
      </ResumeSection>
      <ResumeSection title="Google" timerange="2009-2011">
        <p>
          For two summers while in college, I interned at Google on their search infrastructure team
          and Google Sheets team. If you’ve ever Googled for a PDF or Office document, or used the
          “Paint Format” feature in Google Sheets, those were my projects.
        </p>
      </ResumeSection>
      <ResumeSection title="Williams College and Columbia University" timerange="2006-2011">
        <p>
          I&rsquo;ve been programming in BASIC, Java, and HTML since 1998, but I started learning
          formal computer science while in high school, taking classes at{" "}
          <ExternalLink href="http://www.williams.edu">Williams College</ExternalLink>.
        </p>
        <p>
          After high school, I attended{" "}
          <ExternalLink href="http://www.columbia.edu">Columbia University</ExternalLink> . There, I
          completed a BA in computer science (while also acting in a lot of theatre).
        </p>
      </ResumeSection>
    </div>
  );
};

export default PastSection;

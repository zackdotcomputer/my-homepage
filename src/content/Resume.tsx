// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React, { Fragment } from "react";
import ResumeItem from "../components/ResumeItem";

const ResumeSection = () => (
  <Fragment>
    <h1 id="resume">
      <strong>Past</strong> Work and Projects
    </h1>
    <p>
      (My highlights reel - for a complete list check my{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/zacksheppard/"
      >
        LinkedIn
      </a>
      .)
    </p>
    <ResumeItem title="Freelance Work" dates="2018 - Present">
      <p>
        I'm available for hire as a freelance engineer, manager, consultant, and
        mentor. Some of my featured clients include:
      </p>
      <h5>Candid&trade;</h5>
      <p>
        I have maintained a long-standing relationship as a contract senior
        mobile app engineer for{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.candidco.com"
        >
          Candid&trade;
        </a>
        . I've worked both in native code and React Native to mature their
        app&rsquo;s experience and development process.
      </p>
      <h5>Trialspark &amp; Fi Marketing Sites</h5>
      <p>
        I was separately contracted by both{" "}
        <a
          href="https://www.trialspark.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Trialspark
        </a>{" "}
        and{" "}
        <a href="https://tryfi.com/" rel="noopener noreferrer" target="_blank">
          Fi
        </a>{" "}
        to construct their new marketing homepages. Given the specific
        requirements these companies had, I worked with their teams to quickly
        build out beautiful and interactive sites based on modern frameworks.
      </p>
      <h5>Deer Meets Beer (for Foursquare and Jägermeister)</h5>
      <p>
        I was contracted by Foursquare and Jägermeister to complete the
        construction of their{" "}
        <a
          href="https://www.jagermeister.com/en-US/deer-and-beer"
          rel="noopener noreferrer"
          target="_blank"
        >
          Deer Meets Beer
        </a>{" "}
        experience. Working with stakeholders from their design, product, and
        business departments, I helped shape the requirements of the project and
        was ultimately solely responsible for constructing the front and back
        end of the experience.
      </p>
    </ResumeItem>
    <ResumeItem title="Foursquare" dates="2011 - 2018">
      <p>
        I worked for 7 years at{" "}
        <a
          href="https://www.foursquare.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Foursquare
        </a>
        . Starting as a new grad hire on the API/Server team, then moving to the
        web team, and finally landing on the iOS team, I would move wherever
        there was a need for someone to learn a stack and execute quickly.
      </p>
      <p>
        Once I landed on the iOS team, I rose to be the platform lead in the
        company, then to manage the{" "}
        <a
          href="https://www.swarmapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Swarm
        </a>{" "}
        mobile app team, and finally to manage the app engineers for all of our
        consumer apps.
      </p>
    </ResumeItem>
    <ResumeItem title="Internships" dates="2008 - 2011">
      <h5>Google and VoodooVox, Inc.</h5>
      <p>
        My first summer of college, I interned at a small startup called
        VoodooVox (now closed). Here I wrote an app for the iOS store ready for
        launch the very first day it existed.
      </p>
      <p>
        The next two summers, I interned at Google on their search
        infrastructure team and then on the Google Sheets team. If you've ever
        used "Paint Format" in Google Sheets, that was my project.
      </p>
    </ResumeItem>
    <ResumeItem title="Education" dates="2006 - 2011">
      <h5>Williams College and Columbia University</h5>
      <p>
        I've been programming in BASIC, Java, and HTML since 1998, but I started
        learning formal computer science while in high school, taking classes at{" "}
        <a
          href="http://www.williams.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Williams College
        </a>
        .
      </p>
      <p>
        After high school, I attended{" "}
        <a
          href="http://www.columbia.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Columbia University
        </a>{" "}
        . There, I completed a BA in computer science (while also acting in a
        lot of theatre).
      </p>
    </ResumeItem>
  </Fragment>
);

export default ResumeSection;

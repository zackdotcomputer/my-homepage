// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";

const ResumeSection = () => (
  <section id="resume">
    <section className="associated-image">
      <img
        src="/static/img/zack-foursquare.jpg"
        alt="Zack in a Foursquare shirt"
      />
    </section>
    <div className="content-pane">
      <h2>
        <strong>Past</strong> Work and Projects
      </h2>
      <p>
        (My highlights reel - for a complete list check my{" "}
        <a href="https://www.linkedin.com/in/zacksheppard/" target="_blank">
          LinkedIn
        </a>
        .)
      </p>
      <div className="resume-item">
        <div className="resume-content">
          <h3>Freelance Work</h3>
          <p>
            Since September 2018, I've been available for work as a freelance
            engineer, manager, consultant, and mentor. Some of my featured
            clients include:
          </p>
          <h5>Candid&trade;</h5>
          <p>
            I have maintained a long-standing relationship as a contract
            consultant for{" "}
            <a href="https://www.candidco.com" target="_blank">
              Candid&trade;
            </a>
            . I've worked both in native code and React Native to mature both
            their mobile app's UX as well as their internal processes for CI,
            testing, and release.
          </p>
          <h5>Trialspark</h5>
          <p>
            I built the new marketing site for{" "}
            <a href="https://www.trialspark.com/" target="_blank">
              Trialspark
            </a>
            . Given the specific requirements this company had, I worked with
            their team to build a custom tool that enabled us to build a site
            using React and SASS but, in the end, ship a fast and responsible
            HTML5 site with no dependencies to any frameworks.
          </p>
        </div>
        <div className="resume-date">
          <span className="text-secondary">2018 - Present</span>
        </div>
      </div>
      <div className="resume-item">
        <div className="resume-content">
          <h3>Foursquare</h3>
          <p>
            I worked for 7 years at{" "}
            <a href="https://www.foursquare.com" target="_blank">
              Foursquare
            </a>
            . Starting as a new grad hire on the API/Server team, then moving to
            the web team, and finally landing on the iOS team, I would move
            wherever there was a need for someone to learn a stack and execute
            quickly.
          </p>
          <p>
            Once I landed on the iOS team, I rose to be the platform lead in the
            company, then to manage the{" "}
            <a href="https://www.swarmapp.com" target="_blank">
              Swarm
            </a>{" "}
            mobile app team, and finally to manage the app engineers for all of
            our consumer apps.
          </p>
        </div>
        <div className="resume-date">
          <span className="text-secondary">2011 - 2018</span>
        </div>
      </div>
      <div className="resume-item">
        <div className="resume-content">
          <h3>Internships</h3>
          <h5>Google and VoodooVox, Inc.</h5>
          <p>
            My first summer of college, I interned at a small startup called
            VoodooVox (now closed). Here I wrote an app for the iOS store ready
            for launch the very first day it existed.
          </p>
          <p>
            The next two summers, I interned at Google on their search
            infrastructure team and then on the Google Sheets team. If you've
            ever used "Paint Format" in Google Sheets, that was my project.
          </p>
        </div>
        <div className="resume-date">
          <span className="text-secondary">2008 - 2011</span>
        </div>
      </div>
      <div className="resume-item">
        <div className="resume-content">
          <h3>School</h3>
          <h5>Williams College and Columbia University</h5>
          <p>
            I've been programming in BASIC, Java, and HTML since 1998, but I
            started learning formal computer science while in high school,
            taking classes at{" "}
            <a href="http://www.williams.edu" target="_blank">
              Williams College
            </a>
            .
          </p>
          <p>
            After high school, I attended{" "}
            <a href="http://www.columbia.edu" target="_blank">
              Columbia University
            </a>{" "}
            . There, I completed a BA in computer science (while also acting in
            a lot of theatre).
          </p>
        </div>
        <div className="resume-date">
          <span className="text-secondary">2006-2011</span>
        </div>
      </div>
    </div>
  </section>
);

export default ResumeSection;

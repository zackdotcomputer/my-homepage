// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppStoreIos,
  faJsSquare,
  faReact,
  faHtml5,
  faCss3Alt,
  faNode,
  faSass,
  faLess,
  faAws
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const PresentFocus = () => (
  <Fragment>
    <h1 id="present">
      My <strong>Present</strong> Focus
    </h1>
    <div>
      <p>
        I&rsquo;m a full-time freelance senior engineer, helping teams realize
        their potential and complete their projects. If you have need for
        someone with my experience,{" "}
        <a href="mailto:outreach@zacksheppard.com">send me an email</a>.
      </p>
      <p>
        Additionally, I'm working on building tool and code to improve the
        open-source community and the closed-source developer experience.
      </p>
    </div>
    <h2>Programming Languages &amp; Tools</h2>
    <p>
      I am a full-stack engineer with a focus on front-end web and iOS work. I
      am an expert in Swift, Objective-C, HTML, CSS/SASS, and Javascript. I also
      have extensive experience with most common server backend languages and
      frameworks (except Ruby, sorry).
    </p>
    <div className="dev-icons">
      <div>
        <div className="dev-icon">
          <FontAwesomeIcon icon={faAppStoreIos} />
        </div>
        <div className="dev-icon">
          <FontAwesomeIcon icon={faJsSquare} />
        </div>
        <div className="dev-icon">
          <FontAwesomeIcon icon={faReact} />
        </div>
      </div>
      <div>
        <div className="dev-icon">
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="dev-icon">
          <FontAwesomeIcon icon={faCss3Alt} />
        </div>
        <div className="dev-icon">
          <FontAwesomeIcon icon={faNode} />
        </div>
      </div>
      <div>
        <div className="dev-icon">
          <FontAwesomeIcon icon={faSass} />
        </div>
        <div className="dev-icon">
          <FontAwesomeIcon icon={faLess} />
        </div>
      </div>
      <div>
        <div className="dev-icon">
          <FontAwesomeIcon icon={faDatabase} />
        </div>
        <div className="dev-icon">
          <FontAwesomeIcon icon={faAws} />
        </div>
      </div>
    </div>
  </Fragment>
);

export default PresentFocus;

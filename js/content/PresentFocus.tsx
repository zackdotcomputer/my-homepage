// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";
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
  <section id="present">
    <div className="associated-image">
      <img src="/static/img/zack-museum.jpg" alt="Zack, thinking in a museum" />
    </div>
    <div className="content-pane">
      <h2>
        My <strong>Present</strong> Focus
      </h2>
      <div>
        <p>
          I'm currently available as a freelancer on an hourly or project basis.
          So, if you have need for someone with my experience,{" "}
          <a href="mailto:contact@zacksheppard.com">send me an email</a>! Let's
          talk about how I can help, whether you need a manager to help develop
          your team and company culture, or an engineer to build your apps and
          website, or even bartender to help you pick the right bottle of scotch
          or champagne.
        </p>
        <p>
          I am there to help build things and help your team celebrate, enjoy,
          and take pride in their achievements.
        </p>
      </div>
      <h3>Programming Languages &amp; Tools</h3>
      <p>
        I know Swift, Objective-C, HTML, CSS, and Javascript. I have experience
        building front-ends for web and mobile in both true native code and
        React/React Native. I have experience integrating front-ends with all
        common server backends (except Ruby, sorry), as well as experience
        deploying code with Docker, Firebase, and AWS.
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
    </div>
  </section>
);

export default PresentFocus;

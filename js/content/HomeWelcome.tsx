// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const HomeWelcome = () => (
  <div className="home-welcome">
    <h2>Hi! I&rsquo;m</h2>
    <h1>Zack Sheppard</h1>
    <div className="big">
      <p>
        <strong>
          I&rsquo;m an engineer with over 10 years experience making server,
          web, and iOS products.
        </strong>
      </p>

      <p>I&rsquo;ve also bartended, been a manager, and love to travel.</p>

      <p>
        I&rsquo;m currently available as a freelancer or consultant. If
        you&rsquo;d like to work with me or just grab coffee and chat, say hi.
      </p>
    </div>
    <div id="social">
      <a className="fa-link" href="mailto:contact@zacksheppard.com">
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
      </a>
      <a className="fa-link" href="#">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a className="fa-link" href="#">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className="fa-link" href="#">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a className="fa-link" href="#">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </div>
);

export default HomeWelcome;

// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const HomeWelcome = () => (
  <Fragment>
    <h3>Hi! I&rsquo;m</h3>
    <h1>
      <strong>Zack Sheppard</strong>
    </h1>
    <div className="big bio">
      <p>
        <strong>
          I&rsquo;m an engineer with over{" "}
          <a className="js-scroll-trigger" href="#resume">
            10 years experience
          </a>{" "}
          making server, web, and iOS products. These days I'm a{" "}
          <a className="js-scroll-trigger" href="#present">
            freelancer and consultant
          </a>
          .
        </strong>
      </p>

      <p>I&rsquo;ve also bartended, been a manager, and love to travel.</p>

      <p>
        I&rsquo;m currently based in New York City. If you&rsquo;d like to work
        with me or just grab coffee and chat, say hi:
      </p>
    </div>
    <div id="social">
      <div>
        <a className="fa-link" href="mailto:contact@zacksheppard.com">
          <span className="sr-only">Email Zack</span>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </a>
        <a className="fa-link" href="https://www.linkedin.com/in/zacksheppard/">
          <span className="sr-only">Zack's Linked In</span>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a className="fa-link" href="https://www.github.com/genuinezack">
          <span className="sr-only">Zack's Github</span>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div>
        <a className="fa-link" href="https://www.twitter.com/genuinezack">
          <span className="sr-only">Zack's Twitter</span>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="fa-link" href="https://www.instagram.com/genuinezack">
          <span className="sr-only">Zack's Instagram</span>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  </Fragment>
);

export default HomeWelcome;

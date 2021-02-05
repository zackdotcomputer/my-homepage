import {
  faGithub,
  faLinkedin,
  faTwitter,
  IconDefinition
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

const ContactOption = ({
  icon,
  href,
  children
}: PropsWithChildren<{ icon: IconDefinition; href: string }>) => {
  return (
    <li className="my-6 flex flex-row items-center">
      <div className="w-8 h-8 mr-2">
        <FontAwesomeIcon icon={icon} className="w-full h-full" />
      </div>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const ContactContents = () => {
  return (
    <div>
      <h2>Go ahead, send a message</h2>
      <p>
        <ul>
          <ContactOption href="mailto:webcontact@zacksheppard.com" icon={faEnvelope}>
            Contact via email
          </ContactOption>
          <ContactOption href="https://www.github.com/zackdotcomputer" icon={faGithub}>
            @zackdotcomputer on Github
          </ContactOption>
          <ContactOption href="https://www.twitter.com/zackdotcomputer" icon={faTwitter}>
            @zackdotcomputer on Twitter
          </ContactOption>
          <ContactOption href="https://www.linkedin.com/in/zacksheppard/" icon={faLinkedin}>
            @zacksheppard on LinkedIn
          </ContactOption>
        </ul>
      </p>
    </div>
  );
};

export default ContactContents;

import {
  faAppStoreIos,
  faAws,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faLess,
  faNode,
  faReact,
  faSass,
  IconDefinition
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DevIcon = ({ icon }: { icon: IconDefinition }) => {
  return (
    <div className="dev-icon text-5xl w-16 h-16 m-1">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

const DevIcons = () => {
  return (
    <div className="dev-icons flex flex-row flex-wrap justify-center mb-2">
      <div className="flex flex-row flex-no-wrap">
        <DevIcon icon={faAppStoreIos} />
        <DevIcon icon={faJsSquare} />
        <DevIcon icon={faReact} />
      </div>
      <div className="flex flex-row flex-no-wrap">
        <DevIcon icon={faHtml5} />
        <DevIcon icon={faCss3Alt} />
        <DevIcon icon={faNode} />
      </div>
      <div className="flex flex-row flex-no-wrap">
        <DevIcon icon={faSass} />
        <DevIcon icon={faLess} />
      </div>
      <div className="flex flex-row flex-no-wrap">
        <DevIcon icon={faDatabase} />
        <DevIcon icon={faAws} />
      </div>
    </div>
  );
};

export default DevIcons;

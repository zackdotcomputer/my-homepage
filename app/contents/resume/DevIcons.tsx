import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAppStoreIos,
  faAws,
  faCss3Alt,
  faHtml5,
  faLess,
  faNode,
  faReact,
  faSass,
  faSquareJs
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DevIcon({ icon, label }: { icon: IconDefinition; label: string }) {
  return (
    <div className="m-3 flex size-12 items-center justify-center text-5xl" title={label}>
      <FontAwesomeIcon icon={icon} aria-label={label} />
    </div>
  );
}

const groups: { icon: IconDefinition; label: string }[][] = [
  [
    { icon: faAppStoreIos, label: "iOS" },
    { icon: faSquareJs, label: "JavaScript" },
    { icon: faReact, label: "React" }
  ],
  [
    { icon: faHtml5, label: "HTML" },
    { icon: faCss3Alt, label: "CSS" },
    { icon: faNode, label: "Node.js" }
  ],
  [
    { icon: faSass, label: "Sass" },
    { icon: faLess, label: "Less" }
  ],
  [
    { icon: faDatabase, label: "Databases" },
    { icon: faAws, label: "AWS" }
  ]
];

export default function DevIcons() {
  return (
    <div className="mb-2 flex flex-row flex-wrap justify-center">
      {groups.map((group) => (
        <div key={group.map((item) => item.label).join("-")} className="flex flex-row flex-nowrap">
          {group.map((item) => (
            <DevIcon key={item.label} icon={item.icon} label={item.label} />
          ))}
        </div>
      ))}
    </div>
  );
}

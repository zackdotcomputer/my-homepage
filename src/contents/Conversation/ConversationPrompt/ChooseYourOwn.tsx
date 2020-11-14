import Link from "next/link";
import React from "react";
import ConversationDestination from "./ConversationDestination";

interface Props {
  options: ConversationDestination[];
  onSelection: (selected: ConversationDestination) => any;
}

const Choice = ({
  option,
  onSelection
}: {
  option: ConversationDestination;
  onSelection: () => unknown;
}) => {
  const classes = [
    "choice",
    "opacity-75",
    "transition-opacity",
    "duration-100",
    "ease-in-out",
    "my-1",
    "hover:opacity-100"
  ].join(" ");

  const buttonClasses = [
    "border-b",
    "border-dashed",
    "border-current",
    "text-current",
    "hover:border-solid"
  ].join(" ");

  if (option.href) {
    return (
      <li className={classes}>
        <Link href={option.href}>
          {/* eslint-disable-next-line */}
          <a onClick={onSelection} role="link" className={buttonClasses}>
            {option.prompt}
          </a>
        </Link>
      </li>
    );
  } else {
    return (
      <li className={classes}>
        <button type="button" onClick={onSelection} className={buttonClasses}>
          {option.prompt}
        </button>
      </li>
    );
  }
};

const ChooseYourOwn = ({ options, onSelection }: Props) => {
  return (
    <ul className="choose-your-own font-mono">
      {options.map((opt) => {
        return (
          <Choice
            key={opt.prompt}
            option={opt}
            onSelection={() => onSelection(opt)}
          />
        );
      })}
    </ul>
  );
};

export default ChooseYourOwn;

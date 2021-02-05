import Link from "next/link";
import React from "react";
import RenderedChoice from "../RenderedChoice";
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
  const buttonClasses = [
    "border-b",
    "border-dashed",
    "border-current",
    "text-current",
    "hover:border-solid"
  ].join(" ");

  const choiceClasses = [
    "transition-opacity",
    "duration-100",
    "ease-in-out",
    "hover:opacity-100"
  ].join(" ");

  if (option.href) {
    return (
      <RenderedChoice className={choiceClasses} id={option.id}>
        <Link href={option.href} scroll={false}>
          {/* eslint-disable-next-line */}
          <a onClick={onSelection} role="link" className={buttonClasses}>
            {option.prompt}
          </a>
        </Link>
      </RenderedChoice>
    );
  } else {
    return (
      <RenderedChoice className={choiceClasses} id={option.id}>
        <button type="button" onClick={onSelection} className={buttonClasses}>
          {option.prompt}
        </button>
      </RenderedChoice>
    );
  }
};

const ChooseYourOwn = ({ options, onSelection }: Props) => {
  return (
    <ul className="choose-your-own font-mono">
      {options.map((opt) => {
        return <Choice key={opt.id} option={opt} onSelection={() => onSelection(opt)} />;
      })}
    </ul>
  );
};

export default ChooseYourOwn;

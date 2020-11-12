import Link from "next/link";
import React from "react";
import { ConversationDestination } from "./ConversationStop";

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
  if (option.href) {
    return (
      <>
        <Link href={option.href}>
          {/* eslint-disable-next-line */}
          <a onClick={onSelection} role="link">
            {option.prompt}
          </a>
        </Link>
      </>
    );
  } else {
    return (
      <button type="button" onClick={onSelection}>
        {option.prompt}
      </button>
    );
  }
};

const ChooseYourOwn = ({ options, onSelection }: Props) => {
  return (
    <ul className="choose-your-own">
      {options.map((opt) => {
        return (
          <li key={opt.prompt} className="choice">
            <Choice option={opt} onSelection={() => onSelection(opt)} />
          </li>
        );
      })}
    </ul>
  );
};

export default ChooseYourOwn;

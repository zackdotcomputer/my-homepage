import React from "react";
import { ConversationDestination } from ".";
import ChooseYourOwn from "./ChooseYourOwn";
import LoadingCard from "./LoadingCard";

interface Props {
  options: ConversationDestination[];
  onSelection: (selected: ConversationDestination) => any;
  showLoading: boolean;
  className?: string;
}

const ConversationPrompt = ({
  className,
  options,
  onSelection,
  showLoading
}: Props) => {
  const promptClass = `${className ?? ""} conversation-prompt`;

  return (
    <LoadingCard showLoading={showLoading} className={promptClass}>
      <div className="prompt-options py-8 px-6">
        <ChooseYourOwn options={options} onSelection={onSelection} />
      </div>
    </LoadingCard>
  );
};

export default ConversationPrompt;

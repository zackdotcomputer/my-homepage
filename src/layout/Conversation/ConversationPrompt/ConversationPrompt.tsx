import React from "react";
import ChooseYourOwn from "./ChooseYourOwn";
import ConversationDestination from "./ConversationDestination";
import LoadingCard from "./LoadingCard";

interface Props {
  options: ConversationDestination[];
  onSelection: (selected: ConversationDestination) => any;
  showLoading: boolean;
  className?: string;
}

const ConversationPrompt = ({ className, options, onSelection, showLoading }: Props) => {
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

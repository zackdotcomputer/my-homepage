import React, { useEffect, useState } from "react";
import ChooseYourOwn from "./ChooseYourOwn";
import ConversationBlock from "./ConversationBlock";
import { ConversationDestination } from "./ConversationStop";

interface FlowProps {
  staticRenderUntilIndex: number;
  blockCount: number;
  getBlock: (index: number) => React.ReactNode;
  className?: string;
  choices: ConversationDestination[];
  onChoice: (picked: ConversationDestination) => unknown;
}

const ConversationFlow = ({
  staticRenderUntilIndex,
  blockCount,
  getBlock,
  className,
  choices,
  onChoice
}: FlowProps) => {
  // Keep track of how far in the conversation has already been brought on screen.
  // If we're doing a SSR (i.e. the window is undefined), then just render everything.
  const [lastRendered, setLastRendered] = useState(staticRenderUntilIndex);
  const [showingChoices, setShowingChoices] = useState(false);

  useEffect(() => {
    if (lastRendered < blockCount) {
      setShowingChoices(false);

      // If we're doing an initial render, don't wait at all until popping the next block.
      if (lastRendered === staticRenderUntilIndex) {
        setLastRendered(lastRendered + 1);
      } else {
        setTimeout(() => {
          setLastRendered(lastRendered + 1);
        }, 1500);
      }
    } else if (lastRendered === staticRenderUntilIndex) {
      setShowingChoices(true);
    } else {
      setTimeout(() => {
        setShowingChoices(true);
      }, 1500);
    }
  }, [blockCount, lastRendered]);

  const conversationBlocks = [];

  for (let i = 0; i < blockCount; i += 1) {
    conversationBlocks.push(
      <ConversationBlock
        animated={i > staticRenderUntilIndex}
        isVisible={i <= lastRendered}
        key={`block-${i}`}
      >
        {getBlock(i)}
      </ConversationBlock>
    );
  }

  return (
    <div className={className}>
      {conversationBlocks}
      <ConversationBlock
        animated
        isVisible={showingChoices}
        key="next-choices"
        className="choices-block"
      >
        <ChooseYourOwn options={choices} onSelection={onChoice} />
      </ConversationBlock>
    </div>
  );
};

export default ConversationFlow;

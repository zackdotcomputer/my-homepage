import React, { useCallback, useEffect, useState } from "react";
import { ConversationDestination, ConversationPrompt } from "./ConversationPrompt";
import { ConversationBlock } from "./ConversationStop";

interface FlowProps {
  staticRenderUntilIndex: number;
  blockCount: number;
  getBlock: (index: number) => React.ReactNode;
  className?: string;
  choices: ConversationDestination[];
  onChoice: (picked: ConversationDestination) => unknown;
}

const RenderedConversation = ({
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
  const [shouldShowLoading, setShouldShowLoading] = useState(true);

  const [choicesToRender, setChoicesToRender] = useState<ConversationDestination[]>([]);

  useEffect(() => {
    if (lastRendered < blockCount - 1) {
      // If we're doing an initial render, don't wait at all until popping the next block.
      if (lastRendered === staticRenderUntilIndex) {
        setLastRendered(lastRendered + 1);
      } else {
        setTimeout(() => {
          setLastRendered(lastRendered + 1);
        }, 500);
      }
    } else if (shouldShowLoading) {
      const promptDelay = setTimeout(() => setShouldShowLoading(false), 500);
      return () => {
        clearTimeout(promptDelay);
      };
    }

    return undefined;
  }, [blockCount, lastRendered, shouldShowLoading, staticRenderUntilIndex]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setChoicesToRender(choices);
    }
  }, [choices]);

  const handleSelection = useCallback(
    (picked: ConversationDestination) => {
      setShouldShowLoading(true);
      onChoice(picked);
    },
    [onChoice]
  );

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [lastRendered, shouldShowLoading]);

  return (
    <div className={className}>
      {conversationBlocks}
      <ConversationPrompt
        className="mt-3"
        options={choicesToRender}
        onSelection={handleSelection}
        showLoading={shouldShowLoading}
      />
    </div>
  );
};

export default RenderedConversation;

import { useCallback, useState } from "react";
import { ConversationDestination } from "./ConversationPrompt";
import { ConversationStop } from "./ConversationStop";

export interface ConversationMemory {
  stack: ConversationStop[];
  addToStack: (nextStop: ConversationDestination) => any;
  handleNavigation: (newPage: React.ReactChild) => any;
}

const useConversationMemory = (
  firstStop?: ConversationStop
): ConversationMemory => {
  const [pageStack, setPageStack] = useState<ConversationStop[]>(() =>
    firstStop ? [firstStop] : []
  );

  const handleNavigation = useCallback(
    (newPage: React.ReactChild) => {
      setPageStack(pageStack.concat([{ page: newPage }]));
    },
    [pageStack]
  );

  const addToStack = useCallback(
    (nextStop: ConversationDestination) => {
      if (nextStop.prompt) {
        setPageStack(pageStack.concat([{ prompt: nextStop.prompt }]));
      }
      if (nextStop.response) {
        setPageStack(pageStack.concat([{ prompt: nextStop.response }]));
      }
    },
    [pageStack]
  );

  return {
    stack: pageStack,
    addToStack,
    handleNavigation
  };
};

export default useConversationMemory;

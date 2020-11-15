import { useCallback, useState } from "react";
import { ConversationDestination } from "./ConversationPrompt";
import { ConversationStop } from "./ConversationStop";

export interface ConversationMemory {
  stack: ConversationStop[];
  madeChoiceIds: Record<string, boolean>;
  addToStack: (nextStop: ConversationDestination) => any;
  handleNavigation: (newPage: React.ReactChild) => any;
}

const useConversationMemory = (
  firstStop?: ConversationStop
): ConversationMemory => {
  const [pageStack, setPageStack] = useState<ConversationStop[]>(() =>
    firstStop ? [firstStop] : []
  );

  const [madeChoiceIds, setMadeChoiceIds] = useState<Record<string, boolean>>(
    {}
  );

  const handleNavigation = useCallback(
    (newPage: React.ReactChild) => {
      setPageStack(pageStack.concat([{ page: newPage }]));
    },
    [pageStack]
  );

  const addToStack = useCallback(
    (choice: ConversationDestination) => {
      if (choice.prompt) {
        setPageStack((stack) => [...stack, { choice, prompt: choice.prompt }]);
      }
      if (choice.response) {
        setPageStack((stack) => [
          ...stack,
          { choice, response: choice.response }
        ]);
      }

      setMadeChoiceIds(
        (oldIds): Record<string, boolean> => {
          return {
            ...oldIds,
            [choice.id]: true
          };
        }
      );
    },
    [pageStack]
  );

  return {
    stack: pageStack,
    madeChoiceIds,
    addToStack,
    handleNavigation
  };
};

export default useConversationMemory;

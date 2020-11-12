import { useCallback, useState } from "react";
import ConversationStop, { ConversationDestination } from "./ConversationStop";

export interface ConversationModel {
  count: number;
  getter: (i: number) => ConversationStop;
  addToStack: (nextStop: ConversationDestination) => any;
  handleNavigation: (newPage: React.ReactChild) => any;
}

const useConversationModel = (
  firstStop?: ConversationStop
): ConversationModel => {
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

  const getter = useCallback(
    (ind: number): ConversationStop => {
      return pageStack[ind];
    },
    [pageStack]
  );

  return {
    count: pageStack.length,
    getter,
    addToStack,
    handleNavigation
  };
};

export default useConversationModel;

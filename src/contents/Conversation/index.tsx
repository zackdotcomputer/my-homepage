import React, { useCallback, useEffect, useState } from "react";
import ConversationFlow from "./ConversationFlow";
import useConversationModel from "./ConversationModel";
import { ConversationDestination } from "./ConversationStop";
import ConversationStopContents from "./ConversationStopContents";
import ResponsiveLogo from "./ResponsiveLogo";
import WelcomeIntro from "./WelcomeIntro";

interface Props {
  path: string;
  contents: React.ReactChild;
}

const Conversation = ({ path, contents }: Props) => {
  const openingQuestion: ConversationDestination[] = [
    { prompt: "Show me your credentials.", href: "resume" },
    { prompt: "Cool. What are your hobbies?", href: "hobbies" },
    { prompt: "I want to work with you!", href: "contact" },
    { prompt: "What’re you thinking about?", href: "blog" },
    { prompt: "This is weird. Show me a normal homepage.", href: "normcore" }
  ];

  const [lastLoggedPath, setLastLoggedPath] = useState<string>(path);

  const convo = useConversationModel({ page: contents });
  const blockCount = convo.count + 2; // 2 for logo and welcome

  useEffect(() => {
    if (path !== lastLoggedPath) {
      setLastLoggedPath(path);
      convo.handleNavigation(contents);
    }
  }, [path, lastLoggedPath, contents, convo.addToStack]);

  const getBlock = useCallback(
    (ind: number): React.ReactChild => {
      const stackInd = ind - 2;

      if (ind === 0) {
        return <ResponsiveLogo />;
      } else if (ind === 1) {
        return <WelcomeIntro />;
      } else {
        return <ConversationStopContents stop={convo.getter(stackInd)} />;
      }
    },
    [convo]
  );

  return (
    <div className="container grid grid-cols-12 gap-4 min-h-screen mx-auto px-2 md:px-1">
      <ConversationFlow
        staticRenderUntilIndex={0}
        className="conversation-flow min-h-full col-span-12 md:col-span-8 md:col-start-2 lg:col-start-0 pb-5 md:pb-16 xl:pb-56"
        blockCount={blockCount}
        getBlock={getBlock}
        choices={openingQuestion}
        onChoice={convo.addToStack}
      />
    </div>
  );
};

export default Conversation;

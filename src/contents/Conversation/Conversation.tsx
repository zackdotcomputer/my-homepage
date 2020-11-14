import React, {
  ReactElement,
  ReactNodeArray,
  useCallback,
  useEffect,
  useState
} from "react";
import ZackHeadTags from "../../layout/ZackHeadTags";
import ResponsiveLogo from "../ResponsiveLogo";
import WelcomeIntro from "../WelcomeIntro";
import useConversationMemory from "./ConversationMemory";
import ConversationStopContents from "./ConversationStop/ConversationStopContents";
import usePromptCalculator from "./PromptCalculator";
import RenderedConversation from "./RenderedConversation";

interface Props {
  path: string;
  contents: React.ReactElement;
}

const Conversation = ({ path, contents: baseContents }: Props) => {
  const [lastLoggedPath, setLastLoggedPath] = useState<string | undefined>(
    undefined
  );

  const [headTags, setHeadTags] = useState<React.ReactElement>(
    <ZackHeadTags />
  );

  let foundHeadTags: React.ReactElement | undefined;
  let contents: React.ReactElement = baseContents;

  if (baseContents.type === React.Fragment) {
    const { children } = baseContents.props as React.PropsWithChildren<unknown>;
    if (Array.isArray(children)) {
      const childArray = children as ReactNodeArray;
      const headTagResult: ReactElement = childArray.find(
        (n) => React.isValidElement(n) && n.type === ZackHeadTags
      ) as ReactElement;
      if (headTagResult) {
        foundHeadTags = headTagResult;
        setHeadTags(headTagResult);
        contents = <>{childArray.filter((n) => n !== headTagResult)}</>;
      }
    }
  }

  const contentsAreEmptyFragment =
    contents.type === React.Fragment &&
    !(contents.props as React.PropsWithChildren<unknown>).children;

  const convo = useConversationMemory(
    contentsAreEmptyFragment ? { page: contents } : undefined
  );
  const blockCount = convo.stack.length + 2; // 2 for logo and welcome

  const nextQuestions = usePromptCalculator(convo.madeChoiceIds, convo.stack);

  useEffect(() => {
    if (path !== lastLoggedPath && !contentsAreEmptyFragment) {
      setLastLoggedPath(path);
      convo.handleNavigation(contents);
    }
  }, [
    path,
    lastLoggedPath,
    contents,
    contentsAreEmptyFragment,
    convo.addToStack
  ]);

  const getBlock = useCallback(
    (ind: number): React.ReactChild => {
      const stackInd = ind - 2;

      if (ind === 0) {
        return <ResponsiveLogo />;
      } else if (ind === 1) {
        return <WelcomeIntro />;
      } else {
        return <ConversationStopContents stop={convo.stack[stackInd]} />;
      }
    },
    [convo]
  );

  const conversationClasses = [
    "conversation-flow",
    "min-h-full",
    "col-span-12",
    "md:col-span-8",
    "md:col-start-2",
    "lg:col-start-0",
    "pb-20",
    "xl:pb-56",
    "flex",
    "flex-col",
    "justify-end",
    "content-start",
    "relative"
  ].join(" ");

  return (
    <>
      {foundHeadTags ?? headTags}
      <div className="container grid grid-cols-12 gap-4 min-h-screen mx-auto px-2 md:px-1">
        <RenderedConversation
          staticRenderUntilIndex={0}
          className={conversationClasses}
          blockCount={blockCount}
          getBlock={getBlock}
          choices={nextQuestions}
          onChoice={convo.addToStack}
        />
      </div>
    </>
  );
};

export default Conversation;

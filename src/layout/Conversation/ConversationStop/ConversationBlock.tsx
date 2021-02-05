import React, { useEffect, useMemo, useRef, useState } from "react";

interface BlockProps {
  isVisible: boolean;
  animated: boolean;
  className?: string;
}

const ConversationBlock = ({
  children,
  isVisible,
  animated,
  className
}: React.PropsWithChildren<BlockProps>) => {
  const classNames = ["conversation-block", "overflow-hidden", "default-transition", "my-3"];

  if (className) {
    classNames.push(className);
  }

  const renderedElement = useRef<HTMLDivElement>(null);

  const [hasRenderedVisible, setHasRenderedVisible] = useState(isVisible && !animated);

  if (!isVisible) {
    if (!hasRenderedVisible || !animated) {
      classNames.push("no-show");
    } else {
      classNames.push("animate-convoCard-hide");
    }
  } else if (animated && !hasRenderedVisible) {
    classNames.push("animate-convoCard");
  }

  const style: React.CSSProperties = useMemo(() => {
    if (hasRenderedVisible !== isVisible && animated) {
      const scrollHeight = isVisible ? renderedElement.current?.scrollHeight : 1;
      return {
        height: `${scrollHeight ?? 0}px`
      };
    } else {
      return {};
    }
  }, [isVisible, animated, hasRenderedVisible, renderedElement.current?.scrollHeight]);

  useEffect(() => {
    const element = renderedElement.current;
    if (element && animated) {
      if (isVisible !== hasRenderedVisible) {
        const transitionHandler = () => {
          setHasRenderedVisible(isVisible);
        };

        element.addEventListener("transitionend", transitionHandler);

        // emergency timeout in case the transition fails:
        const backup = setTimeout(transitionHandler, 2000);

        return () => {
          clearTimeout(backup);
          element.removeEventListener("transitionend", transitionHandler);
        };
      }
    } else {
      setHasRenderedVisible(isVisible);
    }

    return undefined;
  }, [hasRenderedVisible, isVisible, renderedElement.current, animated]);

  return (
    <div ref={renderedElement} style={style} className={classNames.join(" ")}>
      {children}
    </div>
  );
};

export default ConversationBlock;

import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { ConversationDestination } from ".";
import LoadingSpinner from "../../../assets/loading-spinner.svg";
import ChooseYourOwn from "./ChooseYourOwn";

interface Props {
  options: ConversationDestination[];
  onSelection: (selected: ConversationDestination) => any;
  showLoading: boolean;
}

const ConversationPrompt = ({ options, onSelection, showLoading }: Props) => {
  const [isCurrentlyShowingLoading, setIsCurrentlyShowingLoading] = useState(
    true
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const baseRef = useRef<HTMLDivElement>(null);
  const choicesRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  const height: string | undefined = useMemo(() => {
    if (!isCurrentlyShowingLoading) {
      return !isTransitioning
        ? undefined
        : `${choicesRef.current?.scrollHeight ?? 0}px`;
    } else {
      return `${spinnerRef.current?.scrollHeight ?? 0}px`;
    }
  }, [
    choicesRef.current,
    spinnerRef.current,
    isTransitioning,
    isCurrentlyShowingLoading
  ]);

  useEffect((): undefined | (() => void) => {
    if (!baseRef.current) {
      setIsCurrentlyShowingLoading(showLoading);
      return undefined;
    }

    // If we're transitioning, wait for it to finish
    if (isTransitioning) {
      const transitionHandler = () => {
        setIsTransitioning(false);
      };

      const element = baseRef.current;

      element.addEventListener("transitionend", transitionHandler);

      // emergency timeout in case the transition fails:
      const backup = setTimeout(transitionHandler, 2000);

      return () => {
        clearTimeout(backup);
        element.removeEventListener("transitionend", transitionHandler);
      };
    } else if (showLoading !== isCurrentlyShowingLoading) {
      // Then, only run if we're in the wrong state somehow and have a ref
      setIsTransitioning(true);
      setIsCurrentlyShowingLoading(showLoading);
    }

    return undefined;
  }, [
    isCurrentlyShowingLoading,
    isTransitioning,
    showLoading,
    baseRef.current
  ]);

  const visibleStyle: CSSProperties = { opacity: 1 };
  const invisibleStyle: CSSProperties = { opacity: 0, pointerEvents: "none" };

  const classes = [
    "conversation-prompt",
    "absolute",
    "overflow-hidden",
    "bg-white",
    "dark:bg-gray-900",
    "border-blue-200",
    "dark:border-gray-600",
    "border-solid",
    "border-2",
    "border-b-0",
    "max-w-lg",
    "rounded",
    "rounded-b-none",
    "inset-x-0",
    "bottom-0",
    "default-transition"
  ];

  return (
    <div ref={baseRef} className={classes.join(" ")} style={{ height }}>
      <div
        ref={spinnerRef}
        className="loading-spinner-container absolute top-0 left-0 py-6 right-0 flex items-center justify-center default-transition"
        style={isCurrentlyShowingLoading ? visibleStyle : invisibleStyle}
      >
        <LoadingSpinner className="animate-spin text-blue-700 loading-spinner w-12 h-12" />
      </div>
      <div
        ref={choicesRef}
        style={isCurrentlyShowingLoading ? invisibleStyle : visibleStyle}
        className="prompt-options py-8 px-6 default-transition"
      >
        <ChooseYourOwn options={options} onSelection={onSelection} />
      </div>
    </div>
  );
};

export default ConversationPrompt;

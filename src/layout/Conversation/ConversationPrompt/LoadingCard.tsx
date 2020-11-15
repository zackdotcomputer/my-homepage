import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import LoadingSpinner from "../../../assets/loading-spinner.svg";

enum LoadingCardState {
  showingLoading,
  showingContent,
  preparingTransitionToLoading,
  transitioningToLoading,
  preparingTransitionToContent,
  transitioningToContent
}

const LoadingCard = ({
  children,
  showLoading,
  className
}: PropsWithChildren<{ className?: string; showLoading: boolean }>) => {
  const [currentState, setCurrentState] = useState<LoadingCardState>(
    LoadingCardState.showingLoading
  );

  const [spinnerHeight, setSpinnerHeight] = useState<number>(150);

  const baseRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showLoading && currentState === LoadingCardState.showingContent) {
      setCurrentState(LoadingCardState.preparingTransitionToLoading);
      return undefined;
    }

    if (!showLoading && currentState === LoadingCardState.showingLoading) {
      setCurrentState(LoadingCardState.preparingTransitionToContent);
      return undefined;
    }

    if (!contentRef.current) {
      setCurrentState(
        showLoading
          ? LoadingCardState.showingLoading
          : LoadingCardState.showingContent
      );
      return undefined;
    }

    if (
      currentState === LoadingCardState.preparingTransitionToContent ||
      currentState === LoadingCardState.preparingTransitionToLoading
    ) {
      const nextState =
        currentState === LoadingCardState.preparingTransitionToContent
          ? LoadingCardState.transitioningToContent
          : LoadingCardState.transitioningToLoading;

      setCurrentState(nextState);
    }

    if (
      currentState === LoadingCardState.transitioningToContent ||
      currentState === LoadingCardState.transitioningToLoading
    ) {
      const endState =
        currentState === LoadingCardState.transitioningToContent
          ? LoadingCardState.showingContent
          : LoadingCardState.showingLoading;

      const transitionCompletionHandler = () => {
        setCurrentState(endState);
      };

      const element = contentRef.current;

      element.addEventListener("transitionend", transitionCompletionHandler);

      // emergency timeout in case the transition fails:
      const backup = setTimeout(transitionCompletionHandler, 500);

      return () => {
        clearTimeout(backup);
        element.removeEventListener(
          "transitionend",
          transitionCompletionHandler
        );
      };
    }

    return undefined;
  }, [contentRef.current, showLoading, currentState]);

  const height: string | undefined = useMemo(() => {
    if (
      currentState === LoadingCardState.preparingTransitionToLoading ||
      currentState === LoadingCardState.transitioningToContent
    ) {
      const contentHeight = contentRef.current?.scrollHeight ?? 150;
      setSpinnerHeight(contentHeight);
      return `${contentHeight}px`;
    }

    if (
      currentState === LoadingCardState.preparingTransitionToContent ||
      currentState === LoadingCardState.transitioningToLoading ||
      currentState === LoadingCardState.showingLoading
    ) {
      return `${spinnerHeight}px`;
    }

    return undefined;
  }, [contentRef.current, spinnerRef.current, currentState]);

  const visibleStyle: CSSProperties = { opacity: 1 };
  const invisibleStyle: CSSProperties = { opacity: 0, pointerEvents: "none" };

  const classes = [
    className,
    "relative",
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
    "default-transition"
  ];

  const renderLoading = currentState !== LoadingCardState.showingContent;
  const visibleLoading =
    currentState === LoadingCardState.transitioningToLoading ||
    currentState === LoadingCardState.showingLoading;
  const renderContent = currentState !== LoadingCardState.showingLoading;
  const visibleContent =
    currentState === LoadingCardState.transitioningToContent ||
    currentState === LoadingCardState.showingContent;

  return (
    <div ref={baseRef} className={classes.join(" ")} style={{ height }}>
      {renderLoading && (
        <div
          ref={spinnerRef}
          className="loading-spinner-container absolute inset-0 flex items-center justify-center default-transition p-6"
          style={visibleLoading ? visibleStyle : invisibleStyle}
        >
          <LoadingSpinner className="animate-spin text-blue-700 loading-spinner w-12 h-12" />
        </div>
      )}
      {renderContent && (
        <div
          ref={contentRef}
          className="default-transition"
          style={visibleContent ? visibleStyle : invisibleStyle}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default LoadingCard;

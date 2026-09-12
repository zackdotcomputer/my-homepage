import ChooseYourOwn from "./ChooseYourOwn";
import LoadingSpinner from "./LoadingSpinner";
import type { ConversationDestination } from "./types";

interface Props {
  options: ConversationDestination[];
  onSelection: (selected: ConversationDestination) => void;
  /** Show the spinner instead of the choices. */
  loading: boolean;
  /** Whether to render the choices at all (they're client-only). */
  showOptions: boolean;
  className?: string;
}

/** The card at the bottom of the conversation that offers the next choices. */
export default function ConversationPrompt({
  options,
  onSelection,
  loading,
  showOptions,
  className
}: Props) {
  const cardClasses = [
    "prompt-card overflow-hidden max-w-lg rounded-t-xl border-2 border-b-0",
    "border-blue-200 bg-white shadow-lg shadow-blue-900/5",
    "dark:border-gray-600 dark:bg-gray-900 dark:shadow-black/30",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses} data-loading={loading}>
      <div className="prompt-card-spinner p-6" aria-hidden={!loading}>
        <LoadingSpinner className="size-12 animate-spin text-blue-700 dark:text-blue-300" />
      </div>
      <div className="prompt-card-content" inert={loading || undefined}>
        <div className="px-6 py-8">
          {showOptions && <ChooseYourOwn options={options} onSelection={onSelection} />}
        </div>
      </div>
    </div>
  );
}

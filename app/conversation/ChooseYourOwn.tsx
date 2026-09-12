import { Link } from "react-router";
import RenderedChoice from "./RenderedChoice";
import type { ConversationDestination } from "./types";

interface Props {
  options: ConversationDestination[];
  onSelection: (selected: ConversationDestination) => void;
}

const linkClasses =
  "border-b border-dashed border-current text-current hover:border-solid rounded-xs";
const choiceClasses = "transition-opacity duration-100 ease-in-out hover:opacity-100";

function Choice({ option, onSelect }: { option: ConversationDestination; onSelect: () => void }) {
  const { href } = option;

  if (href && href.startsWith("/")) {
    return (
      <RenderedChoice className={choiceClasses} id={option.id}>
        <Link to={href} preventScrollReset onClick={onSelect} className={linkClasses}>
          {option.prompt}
        </Link>
      </RenderedChoice>
    );
  }

  if (href) {
    return (
      <RenderedChoice className={choiceClasses} id={option.id}>
        <a href={href} onClick={onSelect} className={linkClasses}>
          {option.prompt}
        </a>
      </RenderedChoice>
    );
  }

  return (
    <RenderedChoice className={choiceClasses} id={option.id}>
      <button type="button" onClick={onSelect} className={`${linkClasses} cursor-pointer`}>
        {option.prompt}
      </button>
    </RenderedChoice>
  );
}

export default function ChooseYourOwn({ options, onSelection }: Props) {
  return (
    <ul className="choose-your-own font-mono">
      {options.map((option) => (
        <Choice key={option.id} option={option} onSelect={() => onSelection(option)} />
      ))}
    </ul>
  );
}

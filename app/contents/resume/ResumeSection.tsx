import type { PropsWithChildren, ReactNode } from "react";

interface Props {
  title: ReactNode;
  timerange?: string;
}

export default function ResumeSection({ title, timerange, children }: PropsWithChildren<Props>) {
  return (
    <section>
      <div className="flex flex-row items-baseline justify-between gap-4">
        <h2>{title}</h2>
        {timerange && <h4 className="shrink-0 text-gray-600 dark:text-gray-400">{timerange}</h4>}
      </div>
      <div>{children}</div>
    </section>
  );
}

import { PropsWithChildren } from "react";

const RenderedChoice = ({
  children,
  className,
  id
}: PropsWithChildren<{ className?: string; id?: string }>) => {
  const classes = [className, "font-mono", "choice", "opacity-75", "my-1"].join(" ");

  return (
    <li className={classes} id={id}>
      {children}
    </li>
  );
};

export default RenderedChoice;

import React from "react";

interface Props {
  chose: string;
}

const DidChoseYourOwn = ({ chose }: Props) => {
  return (
    <ul className="choose-your-own">
      <li>{chose}</li>
    </ul>
  );
};

export default DidChoseYourOwn;

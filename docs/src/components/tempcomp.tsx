import React from "react";

interface Props {
  children: string;
  text: string;
}

const tempcomp = ({ children, text }: Props) => {
  return (
    <div>
      <h1>{children}</h1>
      <h1>{text}</h1>
    </div>
  );
};

export default tempcomp;

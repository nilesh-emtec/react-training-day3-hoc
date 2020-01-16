import React from "react";
import { withStyle } from "./hoc";

let Hello = ({ name }) => {
  return <h1>Hello {name}!</h1>;
};

//const Comp = withStyle("aqua")(Hello);

export { Comp: withStyle("aqua")(Hello) };

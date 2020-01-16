import React from "react";
import { withStyle } from "./hoc";

let Hello = ({ name }) => {
  return <h1>Hello {name}!</h1>;
};

export default withStyle("aqua")(Hello);


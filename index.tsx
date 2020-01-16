import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import {Comp} from "./Hello1";
import "./style.css";
interface AppProps {}
interface AppState {
  name: string;
  react: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "Javascript",
      react: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <br />
        <br />
        <Comp name={this.state.react} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

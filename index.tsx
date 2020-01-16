import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Hello1 from "./Hello1";
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
        <Hello1 name={this.state.react} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

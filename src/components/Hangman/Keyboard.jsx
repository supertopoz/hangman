import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "simple-keyboard/build/css/index.css";

const layout = {
  default: [
    "Q W E R T Y U I O P",
    "A S D F G H J K L ,",
    "Z X C V B N M {bksp}",
    "{space}"
  ]
};

const display = {
  "{bksp}": "DEL",
  "{space}": " "
};

class App extends Component {
  state = {};

  onChange = input => {
    this.setState({
      input: input
    });
    console.log("Input changed", input);
  };

  onKeyPress = button => {
    console.log("Button pressed", button);
  };

  inputStyle = {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: 20,
    border: 0
  };

  render() {
    return (
      <div>
        <textarea
          value={this.state.input}
          style={this.inputStyle}
          placeholder={"Tap on the virtual keyboard to start"}
        />
        <Keyboard
          layout={layout}
          display={display}
          onChange={input => this.onChange(input)}
          onKeyPress={button => this.onKeyPress(button)}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

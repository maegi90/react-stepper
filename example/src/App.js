import React, { Component } from "react";

import ColorHeadingOne from "react-stepper";

export default class App extends Component {
  render() {
    return (
      <div>
        <ColorHeadingOne text="Colored heading one is working" color={"red"} />
      </div>
    );
  }
}

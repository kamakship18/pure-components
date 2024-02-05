import React, { Component } from "react";
import SimpleComponent from "./components/SimpleCounterComponent";
import PureComponent from "./components/PureCounterComponent";

class App extends Component {
  render() {
    return (
      <>
        <SimpleComponent />
        <PureComponent />
      </>
    );
  }
}

export default App;
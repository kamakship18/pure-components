import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      toggle: false,
    };
  }

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }
  };

  handleSetToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.toggle !== this.state.toggle) {
      console.log("This is Simple Component");
    }
  }

  render() {
    return (
      <div>
        <h2>Simple Counter</h2>
        <p>Counter Value: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleSetToggle}>Set Toggle</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;

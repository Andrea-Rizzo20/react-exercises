import React from "react";

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + 1 };
      });
    }, 1000);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

// Yes, can be both, but if the value of the next state depends from the value of the current state we need to call setStates with the callback

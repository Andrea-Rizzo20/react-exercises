import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue ?? 0,
  };

  // constructor(props) {
  //   super(props);

  //   const countInterval = setInterval(() => {
  //     this.setState((state) => {
  //       if (state.count < this.props.initialValue * 10) {
  //         return { count: state.count + this.props.incrementAmount ?? 1 };
  //       } else {
  //         clearInterval(countInterval)
  //         return { count: this.props.initialValue };
  //       }
  //     });
  //   }, this.props.incrementInterval ?? 1000);
  // }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }

  componentDidMount() {
    const countInterval = setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementAmount ?? 1 };
      });
    }, this.props.incrementInterval ?? 1000);
  }
}

// Yes, can be both, but if the value of the next state depends from the value of the current state we need to call setStates with the callback

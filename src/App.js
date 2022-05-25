import React from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello />
        <Message />
      </div>
    );
  }
}

// Yes, we can use the Hello component more than once
// Yes, we can render the component Message directly to the App

import React from "react";
import { Hello } from "./Hello";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello />
      </div>
    );
  }
}

// Yes, we can use the Hello component more than once

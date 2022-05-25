import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {this.props.age < 65 && this.props.name === "Jhon" && <Age age = {this.props.age} />}
      </div>
    );
  }
}

// Yes!, we can pass default props value

Welcome.defaultProps = {
  name: "User",
};

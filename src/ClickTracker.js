import React from "react";
import logo from "./logo192.png";

export class ClickTracker extends React.Component {
  state = {
    button: "Nessun Bottone",
  };

  clickTrackerHandle = (event) => {
    let nameBtn = event.currentTarget.name;
    this.setState((state) => {
      return {
        button: nameBtn,
      };
    });
  };

  render() {
    return (
      <div>
        <button name="Primo" onClick={this.clickTrackerHandle}>
          <img src={logo} alt="logo"></img>
        </button>
        <button name="Secondo" onClick={this.clickTrackerHandle}>
          Secondo
        </button>
        <button name="Terzo" onClick={this.clickTrackerHandle}>
          Terzo
        </button>
        <h1>Ti ho visto premere il bottone : {this.state.button}</h1>
      </div>
    );
  }
}

ClickTracker.defaultProps = {
  button: "Nessun Bottone",
};

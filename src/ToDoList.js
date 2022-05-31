import React from "react";

export class ToDoList extends React.Component {
  state = {
    items: [],
    newToDo: "",
  };

  newToDoHandle = (event) => {
    const value = event.target.value;

    this.setState({ newToDo: value });
  };
  submitButtonHandle = (event) => {
    // this.setState((state) => {
    //   const newState = JSON.parse(JSON.stringify(state));
    //   newState.items.push(state.newToDo);
    //   newState.newToDo = "";
    //   return newState;
    // });

    this.setState(state =>{
        return {
            items:[...state.items,state.newToDo],
            newToDo: ''
        }
    })
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newToDo}
          name="newToDo"
          onChange={this.newToDoHandle}
        ></input>
        <button
          type="button"
          disabled={this.state.newToDo !== "" ? false : true}
          onClick={this.submitButtonHandle}
        >
          Add new ToDo
        </button>
      </div>
    );
  }
}

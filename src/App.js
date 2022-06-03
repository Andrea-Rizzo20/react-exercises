import React from "react";
import { Colors } from "./Colors";
import { ToDoList } from "./ToDoList";


export class App extends React.Component {
  render() {
    return (
      <div>
        <Colors
          items={[
            { id: 1, name: "Red" },
            { id: 2, name: "Blue" },
            { id: 3, name: "Black" },
            { id: 4, name: "Green" },
            { id: 5, name: "Yellow" },
            { id: 6, name: "Gray" },
          ]}
        />
        <ToDoList>
        {(items, removeListHandle) => {
            return(
              <ul>{items.map((name,index)=><li key={name+index}>{name} <button  onClick={removeListHandle}>Remove {name}</button></li>)}</ul>
            )}}
        </ToDoList>
      </div>
    );
  }
}

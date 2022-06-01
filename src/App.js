import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Welcome />
                <ClickCounter />
                <ClickTracker />
            </div>
        )
    }

}
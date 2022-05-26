import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";

export class App extends React.Component{
    render(){
        return (
            <div>
                <ClickCounter />
                <ClickTracker />
            </div>
        )
    }

}
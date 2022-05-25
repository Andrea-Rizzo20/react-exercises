import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Counter initialValue = {100} incrementAmount = {50} incrementInterval = {500}/>
            </div>
        )
    }
}
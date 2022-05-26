import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Counter initialValue = {1} incrementAmount = {1} incrementInterval = {500}/>
            </div>
        )
    }
}
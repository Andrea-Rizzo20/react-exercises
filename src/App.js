import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Welcome } from "./Welcome";
import { Login } from './Login.js'

export class App extends React.Component{
    onLoginHandle = (state) =>{
        console.log(state)
    }
    render(){
        return (
            <div>
                <Welcome />
                <ClickCounter />
                <ClickTracker />
                <Login form={this.onLoginHandle}/>
            </div>
        )
    }

}
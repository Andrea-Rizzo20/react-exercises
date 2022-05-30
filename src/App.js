import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

export class App extends React.Component{
    onLoginHandle = (state) =>{
        console.log(state)
    }
    render(){
        return(
            <div>
                <InteractiveWelcome />
                <Login form={this.onLoginHandle} />
            </div>
        )
    }
}
import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state ={
        name:'',
    }

    inputChangeHandle = event =>{
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div>
                <Welcome name={this.state.name} />
                <input type="text" name="name" value={this.state.name} onChange={this.inputChangeHandle}></input>
            </div>
        )
    }
}
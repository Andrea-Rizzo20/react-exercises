import React from "react";

export class CounterButton extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.onClick}>Click here!</button>
            </div>
        )
    }
}
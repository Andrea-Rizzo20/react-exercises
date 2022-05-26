import React from "react";

export class ClickTracker extends React.Component{
    state ={
        button : "Nessun Bottone"
    }

    clickTrackerHandle = (event) =>{
       this.setState((state) =>{
           return {
               button: event.target.name
           }
       })
    }

    render(){
        return(
            <div>
                <button name="Primo" onClick={this.clickTrackerHandle}>Primo</button>
                <button name="Secondo" onClick={this.clickTrackerHandle}>Secondo</button>
                <button name="Terzo" onClick={this.clickTrackerHandle}>Terzo</button>
                <h1>Ti ho visto premere il bottone : {this.state.button}</h1>
            </div>
        )
    }
}

ClickTracker.defaultProps ={
    button : "Nessun Bottone"
}
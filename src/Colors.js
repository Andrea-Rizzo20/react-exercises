import React from "react";

export class Colors extends React.Component{
    render(){
        return(
            <ul>{this.props.items.map((name, index) =><li key={name + index}>{name}</li>)}</ul>
        )
    }
}
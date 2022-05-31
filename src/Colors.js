import React from "react";

export class Colors extends React.Component{
    render(){
        return(
            <ul>{this.props.items.map((obj, index) =><li key={obj.id}>{obj.name}</li>)}</ul>
        )
    }
}
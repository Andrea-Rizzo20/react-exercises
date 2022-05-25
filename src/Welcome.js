import React from "react";

export class Welcome extends React.Component{
    render(){
        return <p>Welcome, {this.props.name}!</p>
    }
}

// Yes!, we can pass default props value

Welcome.defaultProps = {
    name: 'User',
}
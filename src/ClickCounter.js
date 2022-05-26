import React from "react";

export class ClickCounter extends React.Component{
    state = {
        counter: this.props.initialValue ?? 0
    }

    clickCounterHandle = () =>{
        this.setState((state) =>{
            return {
                counter: state.counter + this.props.incrementValue ?? 1
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.clickCounterHandle}>Click here!</button>
            </div>
        )
    }

}

  ClickCounter.defaultProps = {
      initialValue: 0,
      incrementValue: 1,
  }
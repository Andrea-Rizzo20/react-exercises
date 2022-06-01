import React from "react";
import { CounterButton } from "./CounterButton";

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

        const CounterDisplayStyle ={
            color: 'red',
            fontSize:'24px',
        }
        return (
            <div>
                <h1 style={CounterDisplayStyle}>Count: {this.state.counter}</h1>
                <CounterButton onClick = {this.clickCounterHandle} />
            </div>
        )
    }

}

  ClickCounter.defaultProps = {
      initialValue: 0,
      incrementValue: 1,
  }
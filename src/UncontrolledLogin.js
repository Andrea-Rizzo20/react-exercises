import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component{

    _formRef = createRef()

submitFormHandle = event =>{
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
        username,
        password,
        remember,
    })
    event.target.reset()
}

resetHandle = () =>{
    this._formRef.current.elements.username.value = ''
    this._formRef.current.elements.password.value = ''
    this._formRef.current.elements.remember.checked = false
}

    render(){
        return(
            <div>
                <form onSubmit={this.submitFormHandle} ref={this._formRef}>
                    <input type='text' name='username' required></input>
                    <input type='password' name='password' required></input>
                    <input type='checkbox' name='remember'></input>
                    <button type="submit">Login</button>
                    <button type='button' onClick={this.resetHandle}>Reset</button>
                </form>
            </div>
        )
    }
}
import React from "react";

export class Login extends React.Component{
    state={
        username:'',
        password:'',
        remember: false,
    }

    inputChangeHandle = event =>{
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    submitHandle = () => {
        this.props.form(this.state)
    }

    resetHandle = () => {
        this.setState({
            username: '',
            password: '',
            remember: false,
        })
    }

    render(){
        return(
            <div>
                <input type='text' name='username' value={this.state.username} onChange={this.inputChangeHandle}></input>
                <input type='password' name='password' value={this.state.password} onChange={this.inputChangeHandle}></input>
                <input type='checkbox' name='remember' checked={this.state.remember} onChange={this.inputChangeHandle}></input>
                <button type="button" disabled={this.state.username !== '' && this.state.password !== '' ? false : true} onClick={this.submitHandle} style={{
                    backgroundColor: this.state.password.length < 8 ? 'red' : 'green'
                }}>Login</button>
                <button type="button" disabled ={this.state.username !== '' || this.state.password !== '' ? false : true} onClick={this.resetHandle}>Reset</button>
            </div>
        )
    }

}
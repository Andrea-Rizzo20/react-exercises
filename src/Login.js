import { useState } from "react"

const Login = ({form}) =>{

    const [data,setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    const inputChangeHandle = event =>{
        const { name, type, value, checked } = event.target
        setData(data =>{
            return{
            ...data,
            [name]: type ==='checkbox' ? checked : value
            }
        })
    }

    const loginHandle =() =>{
        form(data)
    }
    return(
        <form>
            <input type='text' name='username' value={data.username} onChange={inputChangeHandle}></input>
            <input type='password' name='password' value={data.password} onChange={inputChangeHandle}></input>
            <input type='checkbox' name='remember' checked={data.remember} onChange={inputChangeHandle}></input>
            <button type="button" disabled={data.username !=='' && data.password !=='' ? false : true} onClick={loginHandle}>Login</button>
        </form>
    )
}

export default Login
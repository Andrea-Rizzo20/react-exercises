import useLogin from "./useLogin"

const Login = ({form}) =>{

    const {data, inputChange, onLogin} = useLogin(form)


    return(
        <form>
            <input type='text' name='username' value={data.username} onChange={inputChange}></input>
            <input type='password' name='password' value={data.password} onChange={inputChange}></input>
            <input type='checkbox' name='remember' checked={data.remember} onChange={inputChange}></input>
            <button type="button" disabled={data.username !=='' && data.password !=='' ? false : true} onClick={onLogin}>Login</button>
        </form>
    )
}

export default Login
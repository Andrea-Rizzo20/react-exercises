import { useState } from "react"

const useLogin = (form) =>{

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
    
    return{
        data: data,
        inputChange: inputChangeHandle,
        onLogin: loginHandle
    }
}

export default useLogin
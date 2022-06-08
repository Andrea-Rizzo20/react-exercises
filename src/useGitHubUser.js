import { useEffect, useState } from "react"

const useGitHubUser = (username) =>{
    const [data, setData] = useState('')
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchUser = async (username) =>{
        setLoading(true)
        try{
            const response = await fetch(`https://api.github.com/users/${username}`)
            setData(await response.json())
    }catch(e){
            setError(e)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        fetchUser(username);
    },[username])

    return{
        data: data,
        error:error,
        loading:loading
    }
}

export default useGitHubUser
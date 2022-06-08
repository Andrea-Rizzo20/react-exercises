import { useEffect, useState } from "react"

const useGitHubUser = (username) =>{
    const [data, setData] = useState('')
    
    const fetchUser = (username) =>{
        fetch(`https://api.github.com/users/${username}`)
        .then(data => data.json())
        .then(response => setData(response))
    }

    useEffect(() =>{
        fetchUser(username);
    },[username])

    return{
        data: data,
    }
}

export default useGitHubUser